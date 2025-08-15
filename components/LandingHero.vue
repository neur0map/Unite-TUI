<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <section class="relative overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-brand-alpha-8 text-brand-6 border border-brand-alpha-24 mb-8 sm:mb-6">
          <Icon name="heroicons:sparkles" size="16px" class="sm:w-[14px] sm:h-[14px]" />
          <span class="text-xs sm:text-sm">Now in Beta</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-6xl leading-tight">
          Beautiful TUI Components for
          <span class="text-brand-4 block sm:inline mt-1 sm:mt-0">BubbleTea</span>
        </h1>

        <!-- Description -->
        <p class="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-secondary max-w-2xl mx-auto">
          Build stunning terminal user interfaces with Unite UI. A modern component library for Charmbracelet BubbleTea with prebuilt, customizable components that make terminal apps beautiful.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
          <NuxtLink
            to="/docs"
            class="w-full sm:w-auto rounded-lg bg-brand-4 px-6 py-3 sm:px-4 sm:py-2.5 text-base sm:text-sm font-semibold text-black-1 shadow-sm hover:bg-brand-5 transition-colors duration-200 text-center"
          >
            Get Started
          </NuxtLink>
          <a
            href="https://github.com/unite-ui/unite-ui"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto rounded-lg border border-alpha-20 px-6 py-3 sm:px-4 sm:py-2.5 text-base sm:text-sm font-semibold text-primary hover:bg-hover transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Icon name="mdi:github" size="18px" class="sm:w-4 sm:h-4" />
            <span>View on GitHub</span>
          </a>
        </div>

        <!-- Code Preview -->
        <div class="mt-12 sm:mt-16 rounded-lg border border-alpha-10 bg-black-1 p-3 sm:p-4 text-left">
          <div class="flex items-center gap-2 mb-3 sm:mb-4">
            <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            <span class="ml-2 text-xs text-help">main.go</span>
          </div>
          <pre class="text-xs sm:text-sm text-secondary overflow-x-auto"><code>import (
    "github.com/charmbracelet/bubbletea"
    "github.com/unite-ui/unite-ui"
)

func main() {
    // Create a new Unite UI app
    app := unite.New(
        unite.WithTheme(unite.DefaultTheme),
        unite.WithComponents(
            unite.Button("Click me!", handleClick),
            unite.Input("Enter text..."),
            unite.List(items),
        ),
    )
    
    // Run the app
    tea.NewProgram(app).Run()
}</code></pre>
        </div>
      </div>
    </div>

    <!-- Background decoration -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-3 to-brand-6 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>
  </section>
</template>