interface GoCodeFile {
  name: string
  combined_file: string
  combined_lines: number
  file_count: number
  code_url: string
  github_url: string
}

export const useGoCode = () => {
  const codeIndex = ref<GoCodeFile[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Load the code index
  const loadIndex = async () => {
    if (codeIndex.value.length > 0) return // Already loaded
    
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch('/code/bubbletea/index.json')
      if (!response.ok) {
        throw new Error(`Failed to load code index: ${response.status}`)
      }
      codeIndex.value = await response.json()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load code index'
      console.error('Error loading code index:', err)
    } finally {
      isLoading.value = false
    }
  }

  // Get code info for a specific example
  const getCodeInfo = (exampleName: string): GoCodeFile | undefined => {
    return codeIndex.value.find(item => item.name === exampleName)
  }

  // Load combined code (all files merged)
  const loadCombinedCode = async (exampleName: string): Promise<string> => {
    try {
      const response = await fetch(`/code/bubbletea/${exampleName}/combined.go`)
      if (!response.ok) {
        throw new Error(`Failed to load combined.go for ${exampleName}: ${response.status}`)
      }
      return await response.text()
    } catch (err) {
      console.error(`Error loading combined.go for ${exampleName}:`, err)
      throw err
    }
  }

  // Get statistics
  const getStats = () => {
    const totalExamples = codeIndex.value.length
    const totalLines = codeIndex.value.reduce((sum, item) => sum + item.combined_lines, 0)
    const avgLines = totalExamples > 0 ? Math.round(totalLines / totalExamples) : 0
    const multiFileExamples = codeIndex.value.filter(item => item.file_count > 1).length
    
    return {
      totalExamples,
      totalLines,
      avgLines,
      multiFileExamples
    }
  }

  // Get examples sorted by complexity (line count)
  const getByComplexity = (order: 'asc' | 'desc' = 'desc') => {
    return [...codeIndex.value].sort((a, b) => {
      const comparison = a.combined_lines - b.combined_lines
      return order === 'asc' ? comparison : -comparison
    })
  }

  // Get multi-file examples (more complex)
  const getMultiFileExamples = () => {
    return codeIndex.value.filter(item => item.file_count > 1)
  }

  return {
    // State
    codeIndex: readonly(codeIndex),
    isLoading: readonly(isLoading),
    error: readonly(error),
    
    // Methods
    loadIndex,
    getCodeInfo,
    loadCombinedCode,
    getStats,
    getByComplexity,
    getMultiFileExamples
  }
}