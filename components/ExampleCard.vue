<script setup lang="ts">
interface Example {
  name: string
  title: string
  description: string
  category: string
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  hasVideo: boolean
  videoType: 'gif' | 'mp4'
}

const props = defineProps<{
  example: Example
}>()

const isHover = ref(false)

// Difficulty badge variants
const difficultyVariants = {
  beginner: 'brand',
  intermediate: 'secondary', 
  advanced: 'tertiary'
} as const

// Get thumbnail path
const thumbnailPath = computed(() => {
  return `/img/bubbletea/examples/${props.example.name}/thumbnail.webp`
})

// Handle click navigation
function handleClick() {
  navigateTo(`/bubbletea/examples/${props.example.name}`)
}
</script>

<template>
  <div
    class="flex flex-col bg-hover-none hover:bg-hover focus:bg-hover border border-alpha-5 rounded-lg transition-all duration-500 group cursor-pointer overflow-hidden"
    @click="handleClick"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- Thumbnail Image -->
    <div class="relative aspect-video bg-black-1 border-b border-alpha-5">
      <NuxtImg
        :src="thumbnailPath"
        :alt="`${example.title} example preview`"
        format="webp"
        loading="lazy"
        width="400"
        height="225"
        fit="cover"
        class="w-full h-full object-cover"
        placeholder
      />
      
      <!-- Play overlay for videos -->
      <div 
        v-if="example.hasVideo"
        class="absolute inset-0 flex items-center justify-center bg-black-alpha-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div class="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
          <Icon 
            name="heroicons:play-solid" 
            size="24px" 
            class="text-black ml-1" 
          />
        </div>
      </div>

      <!-- Difficulty badge -->
      <div class="absolute top-3 left-3">
        <Badge 
          :variant="difficultyVariants[example.difficulty]" 
          size="xs"
        >
          {{ example.difficulty }}
        </Badge>
      </div>

      <!-- Video type indicator -->
      <div 
        v-if="example.hasVideo"
        class="absolute top-3 right-3"
      >
        <Badge variant="alpha" size="xs">
          {{ example.videoType.toUpperCase() }}
        </Badge>
      </div>
    </div>

    <!-- Card Content -->
    <div class="flex flex-col gap-3 p-4 flex-1">
      <!-- Title and Arrow -->
      <div class="flex items-start justify-between gap-2">
        <h3 class="heading-6 text-tertiary leading-tight flex-1">
          {{ example.title }}
        </h3>
        
        <div class="relative w-5 h-5 flex-shrink-0">
          <HeadlessTransitionRoot
            :show="isHover"
            enter="absolute transition duration-200 ease-out"
            enter-from="transform scale-95 opacity-0 -translate-x-1 translate-y-1"
            enter-to="transform scale-100 opacity-100 translate-x-0 translate-y-0"
            leave="absolute transition duration-75 ease-in"
            leave-from="transform scale-100 opacity-100 translate-x-0 translate-y-0"
            leave-to="transform scale-95 opacity-0 -translate-x-1 translate-y-1"
          >
            <Icon
              name="heroicons:arrow-up-right-solid"
              size="20px"
              class="icon-hover"
            />
          </HeadlessTransitionRoot>
        </div>
      </div>

      <!-- Description -->
      <p class="body-2 text-help leading-relaxed flex-1">
        {{ example.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1.5 mt-auto">
        <Badge 
          v-for="tag in example.tags.slice(0, 3)" 
          :key="tag"
          variant="alpha" 
          size="xs"
        >
          {{ tag }}
        </Badge>
        <Badge 
          v-if="example.tags.length > 3"
          variant="alpha" 
          size="xs"
        >
          +{{ example.tags.length - 3 }}
        </Badge>
      </div>
    </div>
  </div>
</template>