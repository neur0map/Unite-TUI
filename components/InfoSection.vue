<script setup lang="ts">
  defineProps({
    title: {
      required: true,
      type: String,
    },
  });
</script>

<template>
  <div class="space-y-3">
    <h4 class="heading-4 text-primary">{{ title }}</h4>
    <div
      class="flex flex-col items-start gap-3 prose prose-p:text-tertiary prose-p:body-2 prose-p:m-0"
    >
      <slot />
    </div>
  </div>
</template>
