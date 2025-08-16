<script setup lang="ts">
interface Props {
  exampleName: string
}

const props = defineProps<Props>()

// Get example data from composable
const { getExampleByName } = useExamples()
const { loadCombinedCode, getCodeInfo, loadIndex } = useGoCode()

const example = getExampleByName(props.exampleName)

if (!example) {
  throw createError({
    statusCode: 404,
    statusMessage: `Example "${props.exampleName}" not found`
  })
}

// SEO meta tags
useSeoMeta({
  title: `${example.title} - BubbleTea Examples - Unite UI`,
  description: `Learn how to ${example.description.toLowerCase()} using BubbleTea and Go terminal UI.`,
  ogTitle: `${example.title} - BubbleTea Examples`,
  ogDescription: `Learn how to ${example.description.toLowerCase()} using BubbleTea and Go terminal UI.`,
  ogImage: `/img/bubbletea/examples/${example.name}/${example.name}.gif`,
})

useHead({
  title: `${example.title} - BubbleTea Examples - Unite UI`,
  meta: [
    { name: 'keywords', content: `bubbletea, tui, terminal, ${example.tags.join(', ')}, unite ui, go` }
  ]
})

// Tab state
const activeTab = ref<'demo' | 'code'>('demo')

// Load Go code dynamically
const goCode = ref<string>('')
const codeInfo = ref<any>(null)
const isLoadingCode = ref(false)
const codeError = ref<string | null>(null)

onMounted(async () => {
  try {
    isLoadingCode.value = true
    await loadIndex()
    codeInfo.value = getCodeInfo(props.exampleName)
    goCode.value = await loadCombinedCode(props.exampleName)
  } catch (error) {
    codeError.value = error instanceof Error ? error.message : 'Failed to load code'
    console.error('Failed to load Go code:', error)
  } finally {
    isLoadingCode.value = false
  }
})

// Check if GIF exists for this example
const hasGif = computed(() => {
  // For now, check against known examples with GIFs
  const examplesWithGifs = [
    'altscreen-toggle', 'chat', 'composable-views', 'credit-card-form', 'debounce', 'exec',
    'file-picker', 'fullscreen', 'glamour', 'help', 'http', 'list-default', 'list-fancy', 'list-simple',
    'package-manager', 'pager', 'paginator', 'pipe', 'progress-animated', 'progress-static',
    'realtime', 'result', 'send-msg', 'sequence', 'simple', 'spinner', 'spinners',
    'split-editors', 'stopwatch', 'table', 'tabs', 'textarea', 'textinput', 'textinputs',
    'timer', 'tui-daemon-combo', 'views'
  ]
  return examplesWithGifs.includes(props.exampleName)
})

// Helper function to get related examples
function getRelatedExamples() {
  const { getAllExamples } = useExamples()
  const allExamples = getAllExamples()
  
  const related = allExamples
    .filter(ex => ex.category === example.category && ex.name !== example.name)
    .slice(0, 3)
  
  if (related.length < 3) {
    const additional = allExamples
      .filter(ex => ex.name !== example.name && !related.includes(ex))
      .slice(0, 3 - related.length)
    related.push(...additional)
  }
  
  return related
}
</script>

<template>
  <main class="min-h-screen">
    <!-- Compact Header -->
    <div class="border-b border-alpha-5 bg-black-5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink 
            to="/bubbletea/examples"
            class="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <Icon name="heroicons:arrow-left" size="18px" />
            <span class="text-sm font-medium">Examples</span>
          </NuxtLink>

          <div class="hidden sm:flex items-center gap-2 text-sm text-help">
            <NuxtLink to="/" class="hover:text-secondary transition-colors">Home</NuxtLink>
            <Icon name="heroicons:chevron-right" size="14px" />
            <NuxtLink to="/bubbletea/examples" class="hover:text-secondary transition-colors">BubbleTea Examples</NuxtLink>
            <Icon name="heroicons:chevron-right" size="14px" />
            <span class="text-primary">{{ example.title }}</span>
          </div>

          <Badge variant="brand" size="sm">{{ example.difficulty }}</Badge>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content Area -->
        <div class="lg:col-span-2 space-y-6">
          <div>
            <h1 class="text-3xl font-bold text-primary mb-3">{{ example.title }}</h1>
            <p class="text-lg text-secondary leading-relaxed">{{ example.description }}</p>
          </div>

          <!-- Example Display -->
          <div class="w-full">
            <!-- Tab Navigation -->
            <div class="flex items-center gap-1 p-1 bg-black-5 rounded-lg border border-alpha-5 mb-6">
              <button
                @click="activeTab = 'demo'"
                :class="[
                  'flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  activeTab === 'demo' 
                    ? 'bg-black-1 text-primary border border-alpha-10 shadow-sm' 
                    : 'text-secondary hover:text-primary'
                ]"
              >
                <Icon name="heroicons:play-circle" size="16px" class="inline-block mr-2" />
                Live Demo
              </button>
              <button
                @click="activeTab = 'code'"
                :class="[
                  'flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  activeTab === 'code' 
                    ? 'bg-black-1 text-primary border border-alpha-10 shadow-sm' 
                    : 'text-secondary hover:text-primary'
                ]"
              >
                <Icon name="heroicons:code-bracket" size="16px" class="inline-block mr-2" />
                Source Code
              </button>
            </div>

            <!-- Content Area -->
            <div class="relative">
              <!-- Demo Tab -->
              <div v-show="activeTab === 'demo'" class="space-y-4">
                <div class="rounded-lg border border-alpha-10 bg-black-1 overflow-hidden shadow-lg">
                  <div class="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black-2 to-black-1 border-b border-alpha-10">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
                      <div class="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
                      <span class="ml-3 text-xs text-help font-mono">~/examples/{{ example.name }}</span>
                    </div>
                    <Badge variant="alpha" size="xs">{{ hasGif ? 'GIF' : 'NO DEMO' }}</Badge>
                  </div>
                  
                  <div class="relative bg-gradient-to-b from-black-1 to-black-2 p-4">
                    <!-- Show GIF if available -->
                    <div v-if="hasGif" class="relative aspect-video rounded-md overflow-hidden bg-black-1">
                      <img
                        :src="`/img/bubbletea/examples/${example.name}/${example.name}.gif`"
                        :alt="`${example.title} Demo`"
                        class="w-full h-full object-contain rounded"
                        loading="lazy"
                      />
                    </div>
                    
                    <!-- Show message for examples without GIF -->
                    <div v-else class="relative aspect-video rounded-md overflow-hidden bg-black-1 flex items-center justify-center">
                      <div class="text-center space-y-3">
                        <Icon name="heroicons:terminal" size="48px" class="text-alpha-20 mx-auto" />
                        <div class="space-y-1">
                          <p class="text-sm font-medium text-secondary">Demo Not Available</p>
                          <p class="text-xs text-help">This example doesn't have a visual demo, but you can view the source code.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-between p-4 bg-black-5 rounded-lg border border-alpha-5">
                  <div class="flex items-center gap-3">
                    <Icon name="heroicons:information-circle" size="20px" class="text-brand-4" />
                    <span class="text-sm text-secondary">
                      {{ example.description }}
                    </span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Badge variant="brand" size="sm">{{ example.difficulty }}</Badge>
                    <Badge 
                      v-for="tag in example.tags.slice(0, 2)" 
                      :key="tag"
                      variant="alpha" 
                      size="sm"
                    >
                      {{ tag }}
                    </Badge>
                  </div>
                </div>
              </div>

              <!-- Code Tab -->
              <div v-show="activeTab === 'code'" class="space-y-4">
                <!-- Loading State -->
                <div v-if="isLoadingCode" class="flex items-center justify-center p-8">
                  <div class="flex items-center gap-3">
                    <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-4"></div>
                    <span class="text-sm text-secondary">Loading Go code...</span>
                  </div>
                </div>

                <!-- Error State -->
                <div v-else-if="codeError" class="p-4 bg-red-alpha-8 border border-red-alpha-24 rounded-lg">
                  <div class="flex items-center gap-3">
                    <Icon name="heroicons:exclamation-triangle" size="20px" class="text-red-5" />
                    <span class="text-sm text-red-5">Failed to load code: {{ codeError }}</span>
                  </div>
                </div>

                <!-- Code Display -->
                <template v-else-if="goCode">
                  <CodeBlock
                    :code="goCode"
                    language="go"
                    theme="github-dark"
                    filename="combined.go"
                    :show-line-numbers="true"
                  />

                  <!-- Code Info -->
                  <div class="flex items-start gap-3 p-4 bg-brand-alpha-8 border border-brand-alpha-24 rounded-lg">
                    <Icon name="heroicons:light-bulb" size="20px" class="text-brand-4 flex-shrink-0 mt-0.5" />
                    <div class="space-y-1">
                      <p class="text-sm font-medium text-brand-5">
                        {{ codeInfo?.file_count === 1 ? 'Single File Example' : `Multi-File Example (${codeInfo?.file_count} files)` }}
                      </p>
                      <p class="text-sm text-brand-4">
                        {{ codeInfo?.combined_lines }} lines of Go code demonstrating {{ example.description.toLowerCase() }}.
                        <span v-if="codeInfo?.file_count > 1">
                          This example includes multiple files: {{ codeInfo?.go_files.join(', ') }}.
                        </span>
                      </p>
                    </div>
                  </div>
                </template>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <NuxtLink
                to="/bubbletea/getting-started"
                class="flex items-center justify-center gap-2 px-4 py-3 bg-hover-none hover:bg-hover border border-alpha-5 rounded-lg transition-all duration-200 group"
              >
                <Icon name="heroicons:academic-cap" size="18px" class="text-brand-4 group-hover:text-brand-5" />
                <span class="text-sm font-medium text-secondary group-hover:text-primary">Getting Started</span>
              </NuxtLink>
              
              <a
                :href="`https://github.com/charmbracelet/bubbletea/tree/main/examples/${example.name}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 px-4 py-3 bg-hover-none hover:bg-hover border border-alpha-5 rounded-lg transition-all duration-200 group"
              >
                <Icon name="simple-icons:github" size="18px" class="text-secondary group-hover:text-primary" />
                <span class="text-sm font-medium text-secondary group-hover:text-primary">View on GitHub</span>
              </a>
              
              <NuxtLink
                to="/bubbletea/examples"
                class="flex items-center justify-center gap-2 px-4 py-3 bg-hover-none hover:bg-hover border border-alpha-5 rounded-lg transition-all duration-200 group"
              >
                <Icon name="heroicons:squares-2x2" size="18px" class="text-secondary group-hover:text-primary" />
                <span class="text-sm font-medium text-secondary group-hover:text-primary">More Examples</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Example Info Card -->
          <div class="bg-black-5 rounded-lg border border-alpha-5 p-6 space-y-4">
            <h3 class="text-sm font-medium text-primary uppercase tracking-wide">Example Details</h3>
            
            <div>
              <p class="text-xs text-help mb-1">Category</p>
              <p class="text-sm text-secondary font-medium">{{ example.category }}</p>
            </div>

            <div>
              <p class="text-xs text-help mb-2">Tags</p>
              <div class="flex flex-wrap gap-1.5">
                <Badge 
                  v-for="tag in example.tags" 
                  :key="tag"
                  variant="alpha" 
                  size="xs"
                >
                  {{ tag }}
                </Badge>
              </div>
            </div>

            <div v-if="codeInfo">
              <p class="text-xs text-help mb-2">Code Stats</p>
              <ul class="space-y-1">
                <li class="flex items-center gap-2 text-sm text-secondary">
                  <Icon name="heroicons:document-text" size="16px" class="text-brand-4" />
                  <span>{{ codeInfo.combined_lines }} lines</span>
                </li>
                <li class="flex items-center gap-2 text-sm text-secondary">
                  <Icon name="heroicons:folder" size="16px" class="text-brand-4" />
                  <span>{{ codeInfo.file_count }} file{{ codeInfo.file_count > 1 ? 's' : '' }}</span>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-help mb-2">Requirements</p>
              <ul class="space-y-1">
                <li class="flex items-center gap-2 text-sm text-secondary">
                  <Icon name="heroicons:check-circle" size="16px" class="text-green-500" />
                  <span>Go 1.18+</span>
                </li>
                <li class="flex items-center gap-2 text-sm text-secondary">
                  <Icon name="heroicons:check-circle" size="16px" class="text-green-500" />
                  <span>BubbleTea v0.24+</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Related Examples -->
          <div class="bg-black-5 rounded-lg border border-alpha-5 p-6 space-y-4">
            <h3 class="text-sm font-medium text-primary uppercase tracking-wide">Related Examples</h3>
            <div class="space-y-2">
              <NuxtLink
                v-for="relatedExample in getRelatedExamples()"
                :key="relatedExample.name"
                :to="`/bubbletea/examples/${relatedExample.name}`"
                class="flex items-center justify-between p-3 bg-hover-none hover:bg-hover rounded-md transition-colors duration-200 group"
              >
                <span class="text-sm text-secondary group-hover:text-primary">{{ relatedExample.title }}</span>
                <Icon name="heroicons:arrow-right" size="16px" class="text-help group-hover:text-primary" />
              </NuxtLink>
            </div>
          </div>

          <!-- Resources -->
          <div class="bg-black-5 rounded-lg border border-alpha-5 p-6 space-y-4">
            <h3 class="text-sm font-medium text-primary uppercase tracking-wide">Resources</h3>
            <div class="space-y-3">
              <a
                href="https://github.com/charmbracelet/bubbletea"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors"
              >
                <Icon name="simple-icons:github" size="16px" />
                <span>BubbleTea Repository</span>
              </a>
              <a
                href="https://pkg.go.dev/github.com/charmbracelet/bubbletea"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors"
              >
                <Icon name="simple-icons:go" size="16px" />
                <span>Go Documentation</span>
              </a>
              <NuxtLink
                to="/bubbletea/getting-started"
                class="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors"
              >
                <Icon name="heroicons:academic-cap" size="16px" />
                <span>Getting Started Guide</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>