<script setup lang="ts">
  const props = defineProps({
    title: {
      required: false,
      type: String,
      default: null,
    },
  });
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2 class="heading-4 text-primary">{{ props.title }}</h2>
    <div
      class="flex flex-col items-start border-2 border-dashed border-alpha-40 rounded-lg p-4 gap-4 test-fill"
    >
      <slot />
    </div>
  </section>
</template>
