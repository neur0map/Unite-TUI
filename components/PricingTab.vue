<template>
  <HeadlessTab
    as="template"
    v-slot="{ selected }"
    class="outline-none rounded-full"
  >
    <button
      :class="[
        'flex flex-row items-center gap-1.5 py-1.5 px-4 rounded-full transition outline-none',
        selected ? 'bg-alpha-10' : 'bg-transparent',
      ]"
    >
      <slot />
    </button>
  </HeadlessTab>
</template>
