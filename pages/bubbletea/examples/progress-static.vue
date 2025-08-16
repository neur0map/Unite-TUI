<script setup lang="ts">
// Static page for progress-static example
// This demonstrates creating individual files instead of relying on dynamic routing

// SEO meta tags
useSeoMeta({
  title: 'Static Progress Bar - BubbleTea Examples - Unite UI',
  description: 'Learn how to build a static progress bar with BubbleTea and Unite UI. View live demo and copy the source code.',
  ogTitle: 'Static Progress Bar - BubbleTea Examples',
  ogDescription: 'Learn how to build a static progress bar with BubbleTea and Unite UI. View live demo and copy the source code.',
  ogImage: '/img/bubbletea/examples/progress-static/progress-static.gif',
})

// Define head for additional meta
useHead({
  title: 'Static Progress Bar - BubbleTea Examples - Unite UI',
  meta: [
    { name: 'keywords', content: 'bubbletea, tui, terminal, progress bar, unite ui, go' }
  ]
})

// Example data (could also come from composable)
const example = {
  name: 'progress-static',
  title: 'Static Progress Bar',
  description: 'Simple progress bar with percentage display',
  category: 'UI Components',
  tags: ['progress', 'bar', 'static', 'ui'],
  difficulty: 'beginner' as const,
  hasVideo: true,
  videoType: 'gif' as const
}

// Helper function to get related examples
function getRelatedExamples() {
  const { getAllExamples } = useExamples()
  const allExamples = getAllExamples()
  
  // Get examples from the same category
  const related = allExamples
    .filter(ex => ex.category === example.category && ex.name !== example.name)
    .slice(0, 3)
  
  // If not enough from same category, add some from other categories
  if (related.length < 3) {
    const additional = allExamples
      .filter(ex => ex.name !== example.name && !related.includes(ex))
      .slice(0, 3 - related.length)
    related.push(...additional)
  }
  
  return related
}

// Tab state
const activeTab = ref<'demo' | 'code'>('demo')

// Custom Go code for this specific example
const customGoCode = `package main

import (
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/charmbracelet/bubbles/progress"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

const (
	padding  = 2
	maxWidth = 80
)

var helpStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("#626262")).Render

func main() {
	prog := progress.New(progress.WithScaledGradient("#FF7CCB", "#FDFF8C"))

	if _, err := tea.NewProgram(model{progress: prog}).Run(); err != nil {
		fmt.Println("Oh no!", err)
		os.Exit(1)
	}
}

type tickMsg time.Time

type model struct {
	percent  float64
	progress progress.Model
}

func (m model) Init() tea.Cmd {
	return tickCmd()
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		return m, tea.Quit

	case tea.WindowSizeMsg:
		m.progress.Width = msg.Width - padding*2 - 4
		if m.progress.Width > maxWidth {
			m.progress.Width = maxWidth
		}
		return m, nil

	case tickMsg:
		m.percent += 0.25
		if m.percent > 1.0 {
			m.percent = 1.0
			return m, tea.Quit
		}
		return m, tickCmd()

	default:
		return m, nil
	}
}

func (m model) View() string {
	pad := strings.Repeat(" ", padding)
	return "\n" +
		pad + m.progress.ViewAs(m.percent) + "\n\n" +
		pad + helpStyle("Press any key to quit")
}

func tickCmd() tea.Cmd {
	return tea.Tick(time.Second, func(t time.Time) tea.Msg {
		return tickMsg(t)
	})
}`
</script>

<template>
  <main class="min-h-screen">
    <!-- Compact Header -->
    <div class="border-b border-alpha-5 bg-black-5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <!-- Back Navigation -->
          <NuxtLink 
            to="/bubbletea/examples"
            class="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <Icon name="heroicons:arrow-left" size="18px" />
            <span class="text-sm font-medium">Examples</span>
          </NuxtLink>

          <!-- Breadcrumb -->
          <div class="hidden sm:flex items-center gap-2 text-sm text-help">
            <NuxtLink to="/" class="hover:text-secondary transition-colors">Home</NuxtLink>
            <Icon name="heroicons:chevron-right" size="14px" />
            <NuxtLink to="/bubbletea/examples" class="hover:text-secondary transition-colors">BubbleTea Examples</NuxtLink>
            <Icon name="heroicons:chevron-right" size="14px" />
            <span class="text-primary">{{ example.title }}</span>
          </div>

          <!-- Difficulty Badge -->
          <div class="flex items-center gap-2">
            <Badge variant="brand" size="sm">
              {{ example.difficulty }}
            </Badge>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content Area -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Title and Description -->
          <div>
            <h1 class="text-3xl font-bold text-primary mb-3">{{ example.title }}</h1>
            <p class="text-lg text-secondary leading-relaxed">
              {{ example.description }}
            </p>
          </div>

          <!-- Custom Example Display for Progress Bar -->
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
                      <span class="ml-3 text-xs text-help font-mono">~/examples/progress-static</span>
                    </div>
                    <Badge variant="alpha" size="xs">DEMO</Badge>
                  </div>
                  
                  <!-- Terminal Content -->
                  <div class="relative bg-gradient-to-b from-black-1 to-black-2 p-4">
                    <div class="relative aspect-video rounded-md overflow-hidden bg-black-1">
                      <!-- Progress Bar Demo GIF -->
                      <img
                        src="/img/bubbletea/examples/progress-static/progress-static.gif"
                        alt="Static Progress Bar Demo"
                        class="w-full h-full object-contain rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <!-- Demo Controls -->
                <div class="flex items-center justify-between p-4 bg-black-5 rounded-lg border border-alpha-5">
                  <div class="flex items-center gap-3">
                    <Icon name="heroicons:information-circle" size="20px" class="text-brand-4" />
                    <span class="text-sm text-secondary">
                      Enhanced progress bar with animations, styling, and interactive controls
                    </span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Badge variant="brand" size="sm">Interactive</Badge>
                    <Badge variant="alpha" size="sm">Animated</Badge>
                    <Badge variant="alpha" size="sm">Styled</Badge>
                  </div>
                </div>
              </div>

              <!-- Code Tab Content -->
              <div v-show="activeTab === 'code'" class="space-y-4">
                <!-- Enhanced Code Block with Shiki -->
                <CodeBlock
                  :code="customGoCode"
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
                      Enhanced Progress Bar Implementation
                    </p>
                    <p class="text-sm text-brand-4">
                      This example showcases advanced BubbleTea features including:
                      • Lipgloss styling with borders and colors
                      • Animation with tick commands
                      • Interactive controls (vim-style keys)
                      • Status messages and completion states
                      • Full-screen mode with tea.WithAltScreen()
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
              
              <a
                href="https://github.com/charmbracelet/bubbletea/tree/main/examples/progress"
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

          <!-- Additional Content Specific to Progress Bar -->
          <div class="bg-black-5 rounded-lg border border-alpha-5 p-6 space-y-4">
            <h3 class="text-lg font-semibold text-primary">About Progress Bars</h3>
            <div class="prose prose-sm">
              <p class="text-secondary">
                Progress bars are essential UI components for showing task completion status. 
                This static version displays a fixed percentage and is perfect for learning 
                the basics of BubbleTea rendering and styling.
              </p>
              <p class="text-secondary">
                Key features of this implementation:
              </p>
              <ul class="text-secondary space-y-1">
                <li>• Clean ASCII-based progress visualization</li>
                <li>• Configurable width and completion percentage</li>
                <li>• Responsive terminal rendering</li>
                <li>• Easy to customize colors and styles</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Example Info Card -->
          <div class="bg-black-5 rounded-lg border border-alpha-5 p-6 space-y-4">
            <h3 class="text-sm font-medium text-primary uppercase tracking-wide">Example Details</h3>
            
            <!-- Category -->
            <div>
              <p class="text-xs text-help mb-1">Category</p>
              <p class="text-sm text-secondary font-medium">{{ example.category }}</p>
            </div>

            <!-- Tags -->
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

            <!-- Requirements -->
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
                <li class="flex items-center gap-2 text-sm text-secondary">
                  <Icon name="heroicons:check-circle" size="16px" class="text-green-500" />
                  <span>Terminal with UTF-8 support</span>
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