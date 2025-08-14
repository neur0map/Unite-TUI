<script setup lang="ts">
  defineProps({
    title: {
      required: true,
      type: String,
    },
  });
</script>

<template>
  <section class="flex flex-col pt-4 gap-4">
    <div class="flex flex-row gap-3 items-center">
      <SvgDiamond class="text-primary w-[20px] h-[20px]" />
      <h3 class="heading-4 text-primary">{{ title }}</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <slot />
    </div>
  </section>
</template>
