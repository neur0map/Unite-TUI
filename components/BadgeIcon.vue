<script setup lang="ts">
  const props = defineProps({
    variant: {
      required: false,
      type: String,
      default: "brand", // brand, gray, diamond
    },
    size: {
      required: false,
      type: String,
      default: "md", // md, lg
    },
  });

  const badgeClass = computed(() => {
    return {
      "py-2 px-2": props.size == "md",
      "py-2.5 px-2.5": props.size == "lg",
      "rounded-full border badge-brand-br badge-icon-brand-fill":
        props.variant == "brand",
      "rounded-full border border-alpha-10 badge-icon-gray-fill":
        props.variant == "gray",
      "rounded-full border border-black-1 badge-icon-diamond-fill":
        props.variant == "diamond",
    };
  });
</script>

<template>
  <div
    class="flex items-center justify-center transition-all duration-500"
    :class="badgeClass"
  >
    <slot />
  </div>
</template>
