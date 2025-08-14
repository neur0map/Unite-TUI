<script setup lang="ts">
  defineProps({
    label: {
      required: false,
      type: String,
      default: null,
    },
  });
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-alpha-5"></div>
    </div>
    <div v-if="label" class="relative flex justify-start">
      <div class="heading-7 text-placeholder bg-primary">
        {{ label }} &nbsp;
      </div>
    </div>
  </div>
</template>
