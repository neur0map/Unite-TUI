<script setup lang="ts">
  defineProps({
    title: {
      required: false,
      type: String,
    },
    to: {
      required: false,
      type: String,
    },
  });
</script>

<template>
  <section class="flex flex-col pt-4 gap-4">
    <SectionHeading v-if="title" :to="to">{{ title }}</SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <slot />
    </div>
  </section>
</template>
