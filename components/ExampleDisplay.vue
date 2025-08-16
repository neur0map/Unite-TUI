<script setup lang="ts">
interface Props {
  exampleName: string
  title: string
  hasVideo: boolean
  videoType: 'gif' | 'mp4'
}

const props = defineProps<Props>()

// Refs (codeRef removed as CodeBlock handles copying)

// Media paths
const videoPath = computed(() => {
  const extension = props.videoType === 'gif' ? 'gif' : 'mp4'
  return `/img/bubbletea/examples/${props.exampleName}/demo.${extension}`
})

// Generate example-specific code based on the example name
const placeholderCode = computed(() => {
  // Progress bar specific implementation
  if (props.exampleName === 'progress-static') {
    return `package main

import (
    "fmt"
    "os"
    "strings"
    
    tea "github.com/charmbracelet/bubbletea"
    "github.com/charmbracelet/lipgloss"
)

// ${props.title} Example
// Demonstrates a static progress bar with customizable styling

type model struct {
    progress float64
    width    int
}

func initialModel() model {
    return model{
        progress: 0.65, // 65% completion
        width:    40,   // Progress bar width
    }
}

func (m model) Init() tea.Cmd {
    return nil
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
    switch msg := msg.(type) {
    case tea.KeyMsg:
        switch msg.String() {
        case "q", "ctrl+c", "esc":
            return m, tea.Quit
        case "up":
            // Increase progress
            if m.progress < 1.0 {
                m.progress += 0.05
            }
        case "down":
            // Decrease progress
            if m.progress > 0.0 {
                m.progress -= 0.05
            }
        }
    }
    return m, nil
}

func (m model) View() string {
    // Calculate filled and empty segments
    filled := int(m.progress * float64(m.width))
    empty := m.width - filled
    
    // Create progress bar string
    bar := strings.Repeat("█", filled) + strings.Repeat("░", empty)
    
    // Style the progress bar
    progressStyle := lipgloss.NewStyle().
        Foreground(lipgloss.Color("#FF6B35")).
        Bold(true)
    
    labelStyle := lipgloss.NewStyle().
        Foreground(lipgloss.Color("#FFFFFF")).
        Bold(true)
    
    percentStyle := lipgloss.NewStyle().
        Foreground(lipgloss.Color("#00FF87")).
        Bold(true)
    
    // Format percentage
    percentage := fmt.Sprintf("%.0f%%", m.progress*100)
    
    // Build the UI
    title := labelStyle.Render("Static Progress Bar Demo")
    progressBar := progressStyle.Render(fmt.Sprintf("[%s]", bar))
    percent := percentStyle.Render(percentage)
    
    instructions := "↑/↓ to adjust • q to quit"
    
    return fmt.Sprintf("%s\\n\\n%s %s\\n\\n%s\\n", 
        title, progressBar, percent, instructions)
}

func main() {
    p := tea.NewProgram(initialModel())
    if _, err := p.Run(); err != nil {
        fmt.Printf("Error: %v", err)
        os.Exit(1)
    }
}`
  }
  
  // Default placeholder for other examples
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

// Copy functionality now handled by CodeBlock component

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
        <!-- Enhanced Code Block with Shiki -->
        <CodeBlock
          :code="placeholderCode"
          language="go"
          theme="github-dark"
          filename="main.go"
          :show-line-numbers="true"
        />

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