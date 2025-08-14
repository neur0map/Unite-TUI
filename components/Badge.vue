<script setup lang="ts">
  const props = defineProps({
    variant: {
      required: false,
      type: String,
      default: "brand", // brand, gray, square
    },
    size: {
      required: false,
      type: String,
      default: "sm", // xs, sm
    },
  });

  const badgeClass = ref({
    "py-0.5 px-2.5 rounded-full heading-6":
      props.size == "sm" && props.variant != "square",
    "py-1 px-2 rounded-full body-4":
      props.size == "xs" && props.variant != "square",
    "py-1 px-4 rounded-none body-2 bg-brand-4 text-primary":
      props.variant == "square",
    "badge-brand-fill border border-brand-5 text-brand-5":
      props.variant == "brand",
    "badge-gray-fill border badge-gray-br text-primary":
      props.variant == "gray",
  });
</script>

<template>
  <div class="flex items-center justify-center" :class="badgeClass">
    <slot />
  </div>
</template>
