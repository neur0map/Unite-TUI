<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createHighlighter } from 'shiki'

interface Props {
  code: string
  language?: string
  theme?: string
  showLineNumbers?: boolean
  filename?: string
  maxLines?: number
}

const props = withDefaults(defineProps<Props>(), {
  language: 'go',
  theme: 'github-dark',
  showLineNumbers: true,
  maxLines: 50
})

// State for highlighting
const highlightedCode = ref('')
const isLoading = ref(true)
const copied = ref(false)

// Create highlighter instance
onMounted(async () => {
  try {
    const highlighter = await createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['go', 'javascript', 'typescript', 'bash', 'json']
    })
    
    highlightedCode.value = highlighter.codeToHtml(props.code, {
      lang: props.language,
      theme: props.theme,
    })
    
    isLoading.value = false
  } catch (error) {
    console.error('Failed to initialize Shiki:', error)
    isLoading.value = false
  }
})

// Copy functionality
async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

// Line count available if needed for future features
</script>

<template>
  <div class="rounded-lg border border-alpha-10 bg-black-1 overflow-hidden shadow-lg">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black-2 to-black-1 border-b border-alpha-10">
      <div class="flex items-center gap-3">
        <Icon 
          :name="language === 'go' ? 'simple-icons:go' : language === 'javascript' ? 'simple-icons:javascript' : 'heroicons:code-bracket'" 
          size="20px" 
          :class="language === 'go' ? 'text-brand-4' : 'text-secondary'" 
        />
        <span v-if="filename" class="text-sm font-medium text-primary">{{ filename }}</span>
        <Badge variant="alpha" size="xs">{{ language.toUpperCase() }}</Badge>
      </div>
      
      <button
        @click="copyCode"
        class="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
        :class="{
          'bg-green-500/10 text-green-500 border border-green-500/20': copied,
          'bg-hover-none hover:bg-hover border border-alpha-5 text-secondary hover:text-primary': !copied
        }"
      >
        <Icon 
          :name="copied ? 'heroicons:check' : 'heroicons:clipboard-document'" 
          size="16px" 
        />
        <span>{{ copied ? 'Copied!' : 'Copy Code' }}</span>
      </button>
    </div>
    
    <!-- Code Content -->
    <div class="relative">
      <!-- Loading state -->
      <div v-if="isLoading" class="flex items-center justify-center p-8">
        <div class="flex items-center gap-3">
          <Icon name="heroicons:arrow-path" size="20px" class="text-brand-4 animate-spin" />
          <span class="text-sm text-secondary">Highlighting code...</span>
        </div>
      </div>
      
      <!-- Highlighted code -->
      <div v-else class="relative overflow-x-auto">
        <!-- Custom styled Shiki output -->
        <div 
          v-html="highlightedCode" 
          class="shiki-container"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for Shiki output */
:deep(.shiki) {
  background: transparent !important;
  padding: 1rem 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.875rem;
  line-height: 1.1;
  overflow-x: auto;
}

/* Line numbers styling */
:deep(.shiki .line) {
  min-height: 1.1rem;
  line-height: 1.1;
}

/* Ensure proper scrolling */
.shiki-container {
  max-height: 600px;
  overflow-y: auto;
}

/* Custom scrollbar */
.shiki-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.shiki-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.shiki-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.shiki-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>