<script setup lang="ts">
  defineProps({
    open: {
      required: false,
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <button
    type="button"
    class="flex items-center justify-center rounded bg-transparent text-primary p-1.5 hover:bg-hover"
  >
    <Icon v-show="!open" name="heroicons:bars-2-solid" size="20px" />
    <Icon v-show="open" name="heroicons:x-mark-solid" size="20px" />
  </button>
</template>
