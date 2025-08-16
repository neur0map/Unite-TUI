<script setup lang="ts">
const route = useRoute()
const exampleName = route.params.example as string

// Get example data from composable
const { getExampleByName } = useExamples()
const example = getExampleByName(exampleName)

// Handle 404 if example doesn't exist
if (!example) {
  throw createError({
    statusCode: 404,
    statusMessage: `Example "${exampleName}" not found`
  })
}

// SEO meta tags
useSeoMeta({
  title: `${example.title} - BubbleTea Examples - Unite UI`,
  description: `Learn how to build ${example.title} with BubbleTea and Unite UI. View live demo and copy the source code.`,
  ogTitle: `${example.title} - BubbleTea Examples`,
  ogDescription: `Learn how to build ${example.title} with BubbleTea and Unite UI. View live demo and copy the source code.`,
  ogImage: `/img/bubbletea/examples/${exampleName}/thumbnail.webp`,
})

// Define head for additional meta
useHead({
  title: `${example.title} - BubbleTea Examples - Unite UI`,
  meta: [
    { name: 'keywords', content: `bubbletea, tui, terminal, ${example.title.toLowerCase()}, unite ui, go` }
  ]
})

// Helper function to get related examples
function getRelatedExamples(currentExample) {
  const { getAllExamples } = useExamples()
  const allExamples = getAllExamples()
  
  // Get examples from the same category
  const related = allExamples
    .filter(ex => ex.category === currentExample.category && ex.name !== currentExample.name)
    .slice(0, 3)
  
  // If not enough from same category, add some from other categories
  if (related.length < 3) {
    const additional = allExamples
      .filter(ex => ex.name !== currentExample.name && !related.includes(ex))
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
            <Badge 
              :variant="example.difficulty === 'beginner' ? 'brand' : example.difficulty === 'intermediate' ? 'secondary' : 'tertiary'"
              size="sm"
            >
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

          <!-- Example Display Component -->
          <ExampleDisplay 
            :example-name="exampleName"
            :title="example.title"
            :has-video="example.hasVideo"
            :video-type="example.videoType"
          />
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
                v-for="relatedExample in getRelatedExamples(example)"
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