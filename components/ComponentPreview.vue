<script setup lang="ts">
const selectedComponent = ref('button');

const components = [
  { id: 'button', name: 'Button', icon: 'heroicons:cursor-arrow-rays' },
  { id: 'input', name: 'Input', icon: 'heroicons:pencil-square' },
  { id: 'list', name: 'List', icon: 'heroicons:queue-list' },
  { id: 'table', name: 'Table', icon: 'heroicons:table-cells' },
  { id: 'dialog', name: 'Dialog', icon: 'heroicons:chat-bubble-bottom-center-text' },
  { id: 'progress', name: 'Progress', icon: 'heroicons:arrow-trending-up' },
];

const codeExamples = {
  button: `// Button Component
button := unite.Button(
    "Click me!",
    unite.WithVariant(unite.Primary),
    unite.WithSize(unite.Medium),
    unite.OnClick(handleClick),
)`,
  input: `// Input Component
input := unite.Input(
    "Enter your name...",
    unite.WithValidation(validateName),
    unite.WithIcon("user"),
    unite.OnChange(handleInput),
)`,
  list: `// List Component
list := unite.List(
    items,
    unite.WithSelectable(true),
    unite.WithFilter(true),
    unite.OnSelect(handleSelection),
)`,
  table: `// Table Component
table := unite.Table(
    data,
    unite.WithColumns(columns),
    unite.WithSortable(true),
    unite.WithPagination(10),
)`,
  dialog: `// Dialog Component
dialog := unite.Dialog(
    "Confirm Action",
    "Are you sure you want to proceed?",
    unite.WithButtons("Cancel", "Confirm"),
    unite.OnConfirm(handleConfirm),
)`,
  progress: `// Progress Component
progress := unite.Progress(
    75,
    unite.WithLabel("Processing..."),
    unite.WithColor(unite.Success),
    unite.WithAnimation(true),
)`,
};

const terminalPreviews = {
  button: `┌─────────────────────────────┐
│                             │
│    [ Primary Button ]       │
│    [ Secondary Button ]     │
│    [ Danger Button ]        │
│                             │
└─────────────────────────────┘`,
  input: `┌─────────────────────────────┐
│ Name:                       │
│ ┌─────────────────────────┐ │
│ │ John Doe               │ │
│ └─────────────────────────┘ │
│                             │
└─────────────────────────────┘`,
  list: `┌─────────────────────────────┐
│ Select an option:           │
│                             │
│ ▶ Option 1                  │
│   Option 2                  │
│   Option 3                  │
│   Option 4                  │
└─────────────────────────────┘`,
  table: `┌─────────────────────────────┐
│ Name      │ Age │ Status   │
│───────────┼─────┼──────────│
│ Alice     │ 28  │ Active   │
│ Bob       │ 32  │ Inactive │
│ Charlie   │ 25  │ Active   │
└─────────────────────────────┘`,
  dialog: `┌─────────────────────────────┐
│         Confirm Action      │
│                             │
│ Are you sure you want to    │
│ proceed with this action?   │
│                             │
│  [Cancel]    [Confirm]      │
└─────────────────────────────┘`,
  progress: `┌─────────────────────────────┐
│ Processing...               │
│                             │
│ ████████████████░░░░░ 75%  │
│                             │
└─────────────────────────────┘`,
};
</script>

<template>
  <section class="py-12 sm:py-16 lg:py-24 bg-black-5">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
        <h2 class="text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
          Component Showcase
        </h2>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-secondary">
          Explore our collection of terminal UI components
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- Component Selector -->
        <div class="lg:col-span-1 order-2 lg:order-1">
          <h3 class="text-sm font-medium text-tertiary mb-4 uppercase tracking-wide">Components</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:space-y-0">
            <button
              v-for="component in components"
              :key="component.id"
              @click="selectedComponent = component.id"
              :class="[
                'flex items-center gap-3 px-3 py-3 sm:px-4 rounded-lg text-left transition-colors duration-200 text-sm sm:text-base',
                selectedComponent === component.id
                  ? 'bg-brand-alpha-8 text-brand-4 border border-brand-alpha-24'
                  : 'text-secondary hover:bg-hover hover:text-primary border border-transparent'
              ]"
            >
              <Icon :name="component.icon" size="18px" class="sm:w-5 sm:h-5 flex-shrink-0" />
              <span class="truncate">{{ component.name }}</span>
            </button>
          </div>
        </div>

        <!-- Preview Area -->
        <div class="lg:col-span-2 space-y-6 order-1 lg:order-2">
          <!-- Terminal Preview -->
          <div>
            <h3 class="text-sm font-medium text-tertiary mb-4 uppercase tracking-wide">Terminal Output</h3>
            <div class="rounded-lg border border-alpha-10 bg-black-1 p-3 sm:p-4">
              <div class="flex items-center gap-2 mb-3 sm:mb-4">
                <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                <span class="ml-2 text-xs text-help">terminal</span>
              </div>
              <pre class="text-xs sm:text-sm text-green-400 font-mono overflow-x-auto">{{ terminalPreviews[selectedComponent] }}</pre>
            </div>
          </div>

          <!-- Code Example -->
          <div>
            <h3 class="text-sm font-medium text-tertiary mb-4 uppercase tracking-wide">Code Example</h3>
            <div class="rounded-lg border border-alpha-10 bg-black-1 p-3 sm:p-4">
              <pre class="text-xs sm:text-sm text-secondary overflow-x-auto"><code>{{ codeExamples[selectedComponent] }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>