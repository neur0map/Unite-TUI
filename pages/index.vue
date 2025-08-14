<script setup lang="ts">
import {
  LandingHero,
  LandingFeatures,
  ComponentPreview,
  InstallationGuide,
} from "#components";

useSeoMeta({
  title: 'Unite UI - TUI Components for BubbleTea',
  description: 'A modern Terminal User Interface component library for Charmbracelet BubbleTea. Build beautiful terminal applications with prebuilt, customizable components.',
  ogTitle: 'Unite UI - TUI Components for BubbleTea',
  ogDescription: 'Build stunning terminal user interfaces with Unite UI. A modern component library for Charmbracelet BubbleTea.',
  ogImage: '/og-image.jpeg',
});
</script>

<template>
  <main>
    <!-- Hero Section -->
    <LandingHero />

    <!-- Features Section -->
    <LandingFeatures />

    <!-- Component Preview -->
    <ComponentPreview />

    <!-- Installation Guide -->
    <InstallationGuide />

    <!-- Footer -->
    <footer class="border-t border-alpha-10 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 bg-brand-4 rounded flex items-center justify-center">
              <span class="text-black-1 font-bold text-xs">U</span>
            </div>
            <span class="text-secondary text-sm">Unite UI © 2024</span>
          </div>
          <div class="flex items-center gap-6">
            <NuxtLink to="/docs" class="text-sm text-secondary hover:text-primary transition-colors duration-200">
              Documentation
            </NuxtLink>
            <a
              href="https://github.com/unite-ui/unite-ui"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-secondary hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/uniteui"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-secondary hover:text-primary transition-colors duration-200"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>