<script setup lang="ts">
  const props = defineProps({
    variant: {
      required: false,
      type: String,
      default: "brand", // brand, gray, diamond
    },
  });
</script>

<template>
  <template v-if="props.variant == 'diamond'">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10"
        y="14"
        text-anchor="middle"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="12"
        font-weight="600"
        fill="#FFD2A5"
      >
        U
      </text>
    </svg>
  </template>
  <template v-else-if="props.variant == 'gray'">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="8"
        y="11"
        text-anchor="middle"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="10"
        font-weight="600"
        fill="white"
        fill-opacity="0.3"
      >
        U
      </text>
    </svg>
  </template>
  <template v-else>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="8"
        y="11"
        text-anchor="middle"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="10"
        font-weight="600"
        fill="#FF4800"
      >
        U
      </text>
    </svg>
  </template>
</template>
