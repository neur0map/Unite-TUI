<script setup lang="ts">
interface Props {
  exampleName: string
  title: string
  hasVideo: boolean
  videoType: 'gif' | 'mp4'
}

const props = defineProps<Props>()

// Refs for copy functionality
const codeRef = ref<HTMLElement>()
const copied = ref(false)

// Media paths
const videoPath = computed(() => {
  const extension = props.videoType === 'gif' ? 'gif' : 'mp4'
  return `/img/bubbletea/examples/${props.exampleName}/demo.${extension}`
})

// Placeholder code - will be replaced with actual code later
const placeholderCode = computed(() => {
  return `package main

import (
    "fmt"
    "os"
    
    tea "github.com/charmbracelet/bubbletea"
    "github.com/unite-ui/unite"
)

// ${props.title} Example
// This is a placeholder for the actual implementation
// TODO: Add the real implementation code here

type model struct {
    // Add your model fields here
}

func (m model) Init() tea.Cmd {
    // Initialize your model
    return nil
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
    switch msg := msg.(type) {
    case tea.KeyMsg:
        switch msg.String() {
        case "q", "ctrl+c":
            return m, tea.Quit
        }
    }
    return m, nil
}

func (m model) View() string {
    // Render your UI here
    return fmt.Sprintf("${props.title} Example\\n\\nPress 'q' to quit.")
}

func main() {
    p := tea.NewProgram(model{})
    if _, err := p.Run(); err != nil {
        fmt.Printf("Error: %v", err)
        os.Exit(1)
    }
}`
})

// Copy to clipboard functionality
async function copyCode() {
  try {
    await navigator.clipboard.writeText(placeholderCode.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

// Video loading state
const videoLoaded = ref(false)
const videoError = ref(false)

function onVideoLoad() {
  videoLoaded.value = true
}

function onVideoError() {
  videoError.value = true
}

// Tab state for switching between Demo and Code
const activeTab = ref<'demo' | 'code'>('demo')
</script>

<template>
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
      <!-- Demo Tab Content -->
      <div v-show="activeTab === 'demo'" class="space-y-4">
        <!-- Terminal Window -->
        <div class="rounded-lg border border-alpha-10 bg-black-1 overflow-hidden shadow-lg">
          <!-- Terminal Header -->
          <div class="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black-2 to-black-1 border-b border-alpha-10">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
              <div class="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
              <span class="ml-3 text-xs text-help font-mono">~/examples/{{ exampleName }}</span>
            </div>
            <Badge variant="alpha" size="xs">
              {{ hasVideo ? videoType.toUpperCase() : 'DEMO' }}
            </Badge>
          </div>
          
          <!-- Terminal Content -->
          <div class="relative bg-gradient-to-b from-black-1 to-black-2 p-4">
            <div class="relative aspect-video rounded-md overflow-hidden bg-black-1">
              <div 
                v-if="hasVideo"
                class="relative w-full h-full"
              >
                <!-- Loading state -->
                <div 
                  v-if="!videoLoaded && !videoError"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div class="flex flex-col items-center gap-3">
                    <Icon name="heroicons:arrow-path" size="24px" class="text-brand-4 animate-spin" />
                    <span class="text-sm text-help">Loading demo...</span>
                  </div>
                </div>
                
                <!-- Error state -->
                <div 
                  v-if="videoError"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div class="text-center space-y-3">
                    <div class="w-16 h-16 mx-auto rounded-full bg-yellow-500/10 flex items-center justify-center">
                      <Icon name="heroicons:exclamation-triangle" size="32px" class="text-yellow-500" />
                    </div>
                    <div>
                      <p class="text-sm font-medium text-primary">Demo Coming Soon</p>
                      <p class="text-xs text-help mt-1">The demo for this example will be added shortly</p>
                    </div>
                  </div>
                </div>
                
                <!-- Video for MP4 -->
                <video
                  v-if="videoType === 'mp4'"
                  :src="videoPath"
                  class="w-full h-full object-contain rounded"
                  controls
                  loop
                  muted
                  preload="metadata"
                  @loadeddata="onVideoLoad"
                  @error="onVideoError"
                >
                  Your browser does not support the video tag.
                </video>
                
                <!-- Image for GIF -->
                <img
                  v-else
                  :src="videoPath"
                  :alt="`${title} demo`"
                  class="w-full h-full object-contain rounded"
                  @load="onVideoLoad"
                  @error="onVideoError"
                />
              </div>
              
              <!-- No video fallback -->
              <div 
                v-else
                class="flex items-center justify-center h-full"
              >
                <div class="text-center space-y-3">
                  <div class="w-16 h-16 mx-auto rounded-full bg-brand-alpha-8 flex items-center justify-center">
                    <Icon name="heroicons:play" size="32px" class="text-brand-4" />
                  </div>
                  <div>
                    <p class="text-sm font-medium text-primary">Demo Preview</p>
                    <p class="text-xs text-help mt-1">Interactive demo coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Demo Controls (if applicable) -->
        <div class="flex items-center justify-between p-4 bg-black-5 rounded-lg border border-alpha-5">
          <div class="flex items-center gap-3">
            <Icon name="heroicons:information-circle" size="20px" class="text-brand-4" />
            <span class="text-sm text-secondary">
              This demo shows the {{ title }} component in action
            </span>
          </div>
          <div class="flex items-center gap-2">
            <Badge variant="brand" size="sm">Interactive</Badge>
            <Badge variant="alpha" size="sm">Terminal UI</Badge>
          </div>
        </div>
      </div>

      <!-- Code Tab Content -->
      <div v-show="activeTab === 'code'" class="space-y-4">
        <!-- Code Editor -->
        <div class="rounded-lg border border-alpha-10 bg-black-1 overflow-hidden shadow-lg">
          <!-- Editor Header -->
          <div class="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black-2 to-black-1 border-b border-alpha-10">
            <div class="flex items-center gap-3">
              <Icon name="simple-icons:go" size="20px" class="text-brand-4" />
              <span class="text-sm font-medium text-primary">main.go</span>
              <Badge variant="alpha" size="xs">Go</Badge>
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
          
          <!-- Code Content with Line Numbers -->
          <div class="relative">
            <div class="absolute left-0 top-0 bottom-0 w-12 bg-black-2 border-r border-alpha-5">
              <div class="py-4 text-right pr-3">
                <div v-for="i in 30" :key="i" class="text-xs text-help leading-relaxed">
                  {{ i }}
                </div>
              </div>
            </div>
            <div class="pl-14 pr-4 py-4 overflow-x-auto">
              <pre class="text-sm text-secondary font-mono leading-relaxed"><code>{{ placeholderCode }}</code></pre>
            </div>
          </div>
        </div>

        <!-- Implementation Note -->
        <div class="flex items-start gap-3 p-4 bg-brand-alpha-8 border border-brand-alpha-24 rounded-lg">
          <Icon name="heroicons:light-bulb" size="20px" class="text-brand-4 flex-shrink-0 mt-0.5" />
          <div class="space-y-1">
            <p class="text-sm font-medium text-brand-5">
              Implementation Guide
            </p>
            <p class="text-sm text-brand-4">
              This example demonstrates how to build a {{ title }} component with BubbleTea. 
              The code above provides a starting template that you can customize for your needs.
            </p>
          </div>
        </div>
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
      
      <NuxtLink
        :to="`https://github.com/charmbracelet/bubbletea/tree/main/examples/${exampleName}`"
        external
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 px-4 py-3 bg-hover-none hover:bg-hover border border-alpha-5 rounded-lg transition-all duration-200 group"
      >
        <Icon name="simple-icons:github" size="18px" class="text-secondary group-hover:text-primary" />
        <span class="text-sm font-medium text-secondary group-hover:text-primary">View on GitHub</span>
      </NuxtLink>
      
      <NuxtLink
        to="/bubbletea/examples"
        class="flex items-center justify-center gap-2 px-4 py-3 bg-hover-none hover:bg-hover border border-alpha-5 rounded-lg transition-all duration-200 group"
      >
        <Icon name="heroicons:squares-2x2" size="18px" class="text-secondary group-hover:text-primary" />
        <span class="text-sm font-medium text-secondary group-hover:text-primary">More Examples</span>
      </NuxtLink>
    </div>
  </div>
</template>