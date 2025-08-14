<script setup lang="ts">
  const props = defineProps({
    title: {
      required: true,
      type: String,
      default: null,
    },
    desc: {
      required: false,
      type: String,
      default: null,
    },
    to: {
      required: true,
      type: String,
      default: null,
    },
  });

  function handleClick() {
    if (props.to) {
      if (props.to.startsWith("http://") || props.to.startsWith("https://")) {
        navigateTo(props.to, { external: true, open: { target: "_blank" } });
      } else {
        navigateTo(props.to);
      }
    }
  }
</script>

<template>
  <button
    type="button"
    @click="handleClick"
    class="relative flex flex-col gap-1 py-4 px-5 group bg-hover"
  >
    <div
      class="absolute w-full h-full inset-0 opacity-0 group-hover:opacity-5 bg-search-result-item"
    ></div>
    <h3 class="relative heading-6 text-primary">{{ title }}</h3>
    <p class="relative body-2 text-help">{{ desc }}</p>
  </button>
</template>

<style scoped lang="css">
  .bg-search-result-item {
    background-color: rgba(250, 249, 247);
  }
</style>
