<script setup lang="ts">
const features = [
  {
    title: 'Prebuilt Components',
    description: 'Ready-to-use terminal UI components including buttons, forms, lists, tables, and more.',
    icon: 'heroicons:cube',
  },
  {
    title: 'BubbleTea Integration',
    description: 'Seamlessly integrates with Charmbracelet BubbleTea for reactive terminal applications.',
    icon: 'heroicons:beaker',
  },
  {
    title: 'Customizable Themes',
    description: 'Built-in themes and easy customization to match your terminal aesthetic.',
    icon: 'heroicons:paint-brush',
  },
  {
    title: 'Responsive Layouts',
    description: 'Components that adapt to different terminal sizes and configurations.',
    icon: 'heroicons:device-phone-mobile',
  },
  {
    title: 'Keyboard Navigation',
    description: 'Full keyboard support with intuitive shortcuts and navigation patterns.',
    icon: 'heroicons:command-line',
  },
  {
    title: 'Developer Friendly',
    description: 'Simple API, comprehensive docs, and examples to get you started quickly.',
    icon: 'heroicons:heart',
  },
];
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Everything you need for beautiful TUIs
        </h2>
        <p class="mt-4 text-lg text-secondary">
          Unite UI provides all the components and utilities you need to build professional terminal applications.
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-7xl">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="relative rounded-lg border border-alpha-10 p-8 hover:border-alpha-20 transition-colors duration-200"
          >
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-alpha-8">
                <Icon :name="feature.icon" size="20px" class="text-brand-4" />
              </div>
              <h3 class="text-lg font-semibold text-primary">{{ feature.title }}</h3>
            </div>
            <p class="text-secondary">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>