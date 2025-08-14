<script setup lang="ts">
  const config = useAppConfig();
  defineProps({
    loading: {
      required: false,
      type: Boolean,
      default: false,
    },
    success: {
      required: false,
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(["submit"]);
  const url = ref(null);

  function onSubmit() {
    emit("submit", url);
  }
</script>

<template>
  <div class="flex flex-col gap-3">
    <template v-if="success == true && loading == false">
      <div
        class="w-full text-center heading-6 text-white flex items-center justify-center py-2.5"
      >
        {{ config.submitDialog.form.successMessage }}
      </div>
    </template>
    <template v-else>
      <TextInput v-model="url" placeholder="URL" :disabled="loading" />
      <SubmitButton type="button" :loading="loading" @click="onSubmit">{{
        config.submitDialog.form.submitButtonText
      }}</SubmitButton>
    </template>
  </div>
</template>
