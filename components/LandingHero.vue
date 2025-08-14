<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-brand-alpha-8 text-brand-6 border border-brand-alpha-24 mb-6">
          <Icon name="heroicons:sparkles" size="14px" />
          <span>Now in Beta</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Beautiful TUI Components for
          <span class="text-brand-4">BubbleTea</span>
        </h1>

        <!-- Description -->
        <p class="mt-6 text-lg leading-8 text-secondary">
          Build stunning terminal user interfaces with Unite UI. A modern component library for Charmbracelet BubbleTea with prebuilt, customizable components that make terminal apps beautiful.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink
            to="/docs"
            class="rounded-md bg-brand-4 px-4 py-2.5 text-sm font-semibold text-black-1 shadow-sm hover:bg-brand-5 transition-colors duration-200"
          >
            Get Started
          </NuxtLink>
          <a
            href="https://github.com/unite-ui/unite-ui"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-md border border-alpha-20 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-hover transition-colors duration-200 flex items-center gap-2"
          >
            <Icon name="mdi:github" size="16px" />
            View on GitHub
          </a>
        </div>

        <!-- Code Preview -->
        <div class="mt-16 rounded-lg border border-alpha-10 bg-black-1 p-4 text-left">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="ml-2 text-xs text-help">main.go</span>
          </div>
          <pre class="text-sm text-secondary overflow-x-auto"><code>import (
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