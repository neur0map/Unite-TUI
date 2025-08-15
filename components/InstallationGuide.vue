<script setup lang="ts">
const selectedTab = ref('go');

const tabs = [
  { id: 'go', name: 'Go Module' },
  { id: 'manual', name: 'Manual' },
];

const installCommands = {
  go: 'go get github.com/unite-ui/unite-ui',
  manual: 'git clone https://github.com/unite-ui/unite-ui.git',
};
</script>

<template>
  <section class="py-12 sm:py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
            Quick Start
          </h2>
          <p class="mt-4 sm:mt-6 text-base sm:text-lg text-secondary">
            Get up and running with Unite UI in minutes
          </p>
        </div>

        <!-- Installation Steps -->
        <div class="space-y-6 sm:space-y-8">
          <!-- Step 1: Install -->
          <div>
            <div class="flex items-center gap-3 mb-4 sm:mb-6">
              <div class="flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-alpha-8 text-brand-4 font-semibold text-lg sm:text-base">
                1
              </div>
              <h3 class="text-lg sm:text-lg font-semibold text-primary">Install Unite UI</h3>
            </div>

            <!-- Tab selector -->
            <div class="flex gap-2 mb-4 overflow-x-auto">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="selectedTab = tab.id"
                :class="[
                  'px-4 py-2.5 sm:py-2 text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap',
                  selectedTab === tab.id
                    ? 'bg-brand-alpha-8 text-brand-4 border border-brand-alpha-24'
                    : 'text-secondary hover:text-primary hover:bg-hover border border-transparent'
                ]"
              >
                {{ tab.name }}
              </button>
            </div>

            <div class="rounded-lg border border-alpha-10 bg-black-1 p-3 sm:p-4">
              <pre class="text-xs sm:text-sm text-secondary overflow-x-auto"><code>$ {{ installCommands[selectedTab] }}</code></pre>
            </div>
          </div>

          <!-- Step 2: Import -->
          <div>
            <div class="flex items-center gap-3 mb-4 sm:mb-6">
              <div class="flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-alpha-8 text-brand-4 font-semibold text-lg sm:text-base">
                2
              </div>
              <h3 class="text-lg sm:text-lg font-semibold text-primary">Import and Initialize</h3>
            </div>

            <div class="rounded-lg border border-alpha-10 bg-black-1 p-3 sm:p-4">
              <pre class="text-xs sm:text-sm text-secondary overflow-x-auto"><code>package main

import (
    tea "github.com/charmbracelet/bubbletea"
    "github.com/unite-ui/unite-ui"
)

func main() {
    app := unite.New()
    
    if _, err := tea.NewProgram(app).Run(); err != nil {
        log.Fatal(err)
    }
}</code></pre>
            </div>
          </div>

          <!-- Step 3: Add Components -->
          <div>
            <div class="flex items-center gap-3 mb-4 sm:mb-6">
              <div class="flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-alpha-8 text-brand-4 font-semibold text-lg sm:text-base">
                3
              </div>
              <h3 class="text-lg sm:text-lg font-semibold text-primary">Add Components</h3>
            </div>

            <div class="rounded-lg border border-alpha-10 bg-black-1 p-3 sm:p-4">
              <pre class="text-xs sm:text-sm text-secondary overflow-x-auto"><code>func (m Model) View() string {
    return unite.Container(
        unite.Title("Welcome to Unite UI"),
        unite.Button("Get Started", m.handleStart),
        unite.Input("Enter your name...", m.handleInput),
    ).Render()
}</code></pre>
            </div>
          </div>
        </div>

        <!-- Links -->
        <div class="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <NuxtLink
            to="/docs"
            class="w-full sm:w-auto text-center text-base sm:text-sm font-medium text-brand-4 hover:text-brand-5 transition-colors duration-200 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-brand-alpha-24 hover:bg-brand-alpha-8"
          >
            <span>View Documentation</span>
            <Icon name="heroicons:arrow-right" size="16px" />
          </NuxtLink>
          <NuxtLink
            to="/examples"
            class="w-full sm:w-auto text-center text-base sm:text-sm font-medium text-brand-4 hover:text-brand-5 transition-colors duration-200 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-brand-alpha-24 hover:bg-brand-alpha-8"
          >
            <span>Browse Examples</span>
            <Icon name="heroicons:arrow-right" size="16px" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>