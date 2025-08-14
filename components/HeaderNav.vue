<script setup lang="ts">
const config = useAppConfig();
const route = useRoute();

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-primary border-b border-alpha-5 backdrop-blur-lg bg-opacity-90">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-brand-4 rounded flex items-center justify-center">
              <span class="text-black-1 font-bold text-lg">U</span>
            </div>
            <span class="text-primary font-medium text-lg">Unite UI</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <template v-for="item in config.navigation.header" :key="item.label">
            <NuxtLink
              v-if="!item.external"
              :to="item.link"
              :class="[
                'text-sm font-medium transition-colors duration-200',
                route.path === item.link 
                  ? 'text-brand-4' 
                  : 'text-secondary hover:text-primary'
              ]"
            >
              {{ item.label }}
            </NuxtLink>
            <a
              v-else
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200 flex items-center gap-1"
            >
              {{ item.label }}
              <Icon name="heroicons:arrow-top-right-on-square" size="14px" />
            </a>
          </template>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center rounded-md p-2 text-secondary hover:bg-hover hover:text-primary"
          >
            <span class="sr-only">Open main menu</span>
            <Icon v-if="!mobileMenuOpen" name="heroicons:bars-3" size="24px" />
            <Icon v-else name="heroicons:x-mark" size="24px" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <HeadlessTransitionRoot as="template" :show="mobileMenuOpen">
      <div class="md:hidden">
        <HeadlessTransitionChild
          as="template"
          enter="duration-200 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <div class="border-t border-alpha-5 bg-primary">
            <div class="space-y-1 px-4 pb-3 pt-2">
              <template v-for="item in config.navigation.header" :key="item.label">
                <NuxtLink
                  v-if="!item.external"
                  :to="item.link"
                  @click="mobileMenuOpen = false"
                  :class="[
                    'block rounded-md px-3 py-2 text-base font-medium',
                    route.path === item.link
                      ? 'bg-hover text-brand-4'
                      : 'text-secondary hover:bg-hover hover:text-primary'
                  ]"
                >
                  {{ item.label }}
                </NuxtLink>
                <a
                  v-else
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click="mobileMenuOpen = false"
                  class="block rounded-md px-3 py-2 text-base font-medium text-secondary hover:bg-hover hover:text-primary flex items-center gap-1"
                >
                  {{ item.label }}
                  <Icon name="heroicons:arrow-top-right-on-square" size="14px" />
                </a>
              </template>
            </div>
          </div>
        </HeadlessTransitionChild>
      </div>
    </HeadlessTransitionRoot>
  </header>
</template>