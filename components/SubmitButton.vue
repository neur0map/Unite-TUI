<script setup lang="ts">
  const config = useAppConfig();
  const props = defineProps({
    loading: {
      required: false,
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <button
    class="flex flex-row items-center justify-center transition-all rounded gap-2.5 px-5 py-2.5 heading-6 text-inverse submit-button-fill hover:submit-button-fill-hover"
    :disabled="loading"
  >
    <template v-if="loading">
      <Icon name="heroicons:ellipsis-horizontal-solid" size="16px" />
    </template>
    <template v-else>
      <slot />
      <Icon :name="config.submitDialog.form.submitButtonIcon" size="16px" />
    </template>
  </button>
</template>

<style scoped>
  .submit-button-fill {
    background-color: #faf9f7;
  }
  .submit-button-fill-hover {
    background-color: #d1cec7;
  }
</style>
