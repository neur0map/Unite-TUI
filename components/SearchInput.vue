<script setup lang="ts">
  const model = defineModel();

  defineProps({
    placeholder: {
      required: false,
      type: String,
      default: "Search",
    },
    pointer: {
      required: false,
      type: Boolean,
      default: false,
    },
    readonly: {
      required: false,
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <div
    class="flex flex-row rounded gap-2.5 px-3 py-2.5 bg-hover-none group hover:bg-hover focus-within:bg-hover transition-all"
    :class="{ 'cursor-pointer': pointer }"
  >
    <Icon
      name="heroicons:magnifying-glass-solid"
      size="20px"
      class="text-placeholder group-hover:text-secondary group-focus:text-secondary transition-all"
    />
    <input
      :readonly="readonly"
      type="text"
      v-model="model"
      :placeholder="placeholder"
      class="placeholder:text-placeholder group-hover:placeholder:text-secondary text-secondary outline-none bg-transparent body-2 transition-all"
      :class="{ 'cursor-pointer': pointer }"
    />
  </div>
</template>
