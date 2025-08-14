<script setup lang="ts">
  const props = defineProps({
    variant: {
      required: false,
      type: String,
      default: "primary", // primary, secondary
    },
  });
  const buttonClass = ref({
    "bg-white/[.01] text-primary hover:bg-alpha-5 icon-button-primary-shadow":
      props.variant == "primary",
    "bg-white/[.01] icon-primary hover:bg-alpha-10 hover:text-secondary":
      props.variant == "secondary",
  });
</script>

<style scoped>
  .icon-button-primary-shadow {
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.05),
      0 2px 5px 0px rgba(255, 255, 255, 0),
      0 0px 0px 1px rgba(255, 255, 255, 0.2),
      inset 0 -3px 4px -1px rgba(255, 255, 255, 0.05);
  }
</style>

<template>
  <button
    class="flex items-center justify-center p-1.5 rounded-full transition-all"
    :class="buttonClass"
  >
    <slot />
  </button>
</template>
