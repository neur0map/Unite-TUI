<script setup lang="ts">
  defineProps({
    image: {
      required: false,
      type: String,
    },
  });
</script>

<template>
  <section class="flex flex-col-reverse md:flex-row justify-between pt-4 gap-4">
    <div class="flex flex-col gap-12 max-w-md">
      <slot />
    </div>
    <div class="flex items-start justify-center max-w-md pt-4 pb-2.5">
      <NuxtImg
        v-if="image"
        :src="image"
        :preload="true"
        format="webp"
        alt="Info Image"
        class="w-full object-cover"
      />
    </div>
  </section>
</template>
