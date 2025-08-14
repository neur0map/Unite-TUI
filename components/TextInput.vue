<script setup lang="ts">
  const model = defineModel();
  const props = defineProps({
    type: {
      required: false,
      type: String,
      default: "text",
    },
    placeholder: {
      required: false,
      type: String,
      default: "Placeholder",
    },
  });
</script>

<template>
  <input
    v-model="model"
    :type="props.type"
    :placeholder="props.placeholder"
    class="flex transition-all items-start justify-center px-3 py-2.5 rounded bg-primary border-2 outline-none border-alpha-10 text-primary heading-5 placeholder:text-placeholder focus:border-brand-4"
  />
</template>
