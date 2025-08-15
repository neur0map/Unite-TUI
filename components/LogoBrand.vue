<script setup lang="ts">
  const props = defineProps({
    onlySymbol: {
      required: false,
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <div class="flex flex-row items-center gap-x-2.5">
    <img src="/logo.png" alt="Unite UI Logo" class="w-6 h-6 object-contain" />
    <template v-if="!props.onlySymbol">
      <svg
        width="60"
        height="20"
        viewBox="0 0 60 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="14"
          font-family="system-ui, -apple-system, sans-serif"
          font-size="15"
          font-weight="600"
          fill="#FAF9F7"
        >
          Unite UI
        </text>
      </svg>
    </template>
  </div>
</template>
