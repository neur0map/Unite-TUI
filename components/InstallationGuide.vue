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
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Quick Start
          </h2>
          <p class="mt-4 text-lg text-secondary">
            Get up and running with Unite UI in minutes
          </p>
        </div>

        <!-- Installation Steps -->
        <div class="space-y-8">
          <!-- Step 1: Install -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-alpha-8 text-brand-4 font-semibold">
                1
              </div>
              <h3 class="text-lg font-semibold text-primary">Install Unite UI</h3>
            </div>

            <!-- Tab selector -->
            <div class="flex gap-2 mb-4">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="selectedTab = tab.id"
                :class="[
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                  selectedTab === tab.id
                    ? 'bg-brand-alpha-8 text-brand-4'
                    : 'text-secondary hover:text-primary hover:bg-hover'
                ]"
              >
                {{ tab.name }}
              </button>
            </div>

            <div class="rounded-lg border border-alpha-10 bg-black-1 p-4">
              <pre class="text-sm text-secondary"><code>$ {{ installCommands[selectedTab] }}</code></pre>
            </div>
          </div>

          <!-- Step 2: Import -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-alpha-8 text-brand-4 font-semibold">
                2
              </div>
              <h3 class="text-lg font-semibold text-primary">Import and Initialize</h3>
            </div>

            <div class="rounded-lg border border-alpha-10 bg-black-1 p-4">
              <pre class="text-sm text-secondary"><code>package main

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
            <div class="flex items-center gap-3 mb-4">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-alpha-8 text-brand-4 font-semibold">
                3
              </div>
              <h3 class="text-lg font-semibold text-primary">Add Components</h3>
            </div>

            <div class="rounded-lg border border-alpha-10 bg-black-1 p-4">
              <pre class="text-sm text-secondary"><code>func (m Model) View() string {
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
        <div class="mt-12 flex items-center justify-center gap-6">
          <NuxtLink
            to="/docs"
            class="text-sm font-medium text-brand-4 hover:text-brand-5 transition-colors duration-200 flex items-center gap-2"
          >
            View Documentation
            <Icon name="heroicons:arrow-right" size="16px" />
          </NuxtLink>
          <NuxtLink
            to="/examples"
            class="text-sm font-medium text-brand-4 hover:text-brand-5 transition-colors duration-200 flex items-center gap-2"
          >
            Browse Examples
            <Icon name="heroicons:arrow-right" size="16px" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>