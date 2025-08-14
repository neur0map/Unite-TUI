<script setup lang="ts">
  const config = useAppConfig();
  const isOpen = defineModel();
  const submitFormLoading = ref(false);
  const submitFormSuccess = ref(false);

  function submit() {
    submitFormLoading.value = true;
    setTimeout(() => {
      submitFormLoading.value = false;
      submitFormSuccess.value = true;
    }, 2000);
  }

  function closeModal() {
    isOpen.value = false;
  }
</script>

<template>
  <HeadlessTransitionRoot appear :show="isOpen ? true : false" as="template">
    <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-backdrop" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              class="relative w-full max-w-80 transform overflow-hidden rounded-lg bg-hover p-8 text-left align-middle shadow-xl transition-all"
            >
              <IconButton
                @click="closeModal"
                variant="secondary"
                class="absolute top-4 right-4"
              >
                <Icon name="heroicons:x-mark-solid" size="20px" />
              </IconButton>
              <HeadlessDialogTitle as="h3" class="heading-4 text-primary">
                {{ config.submitDialog.dialogTitle }}
              </HeadlessDialogTitle>
              <div class="mt-2">
                <p class="body-2 text-help">
                  {{ config.submitDialog.dialogDescription }}
                </p>
              </div>

              <SubmitForm
                class="mt-6"
                @submit="submit"
                :loading="submitFormLoading"
                :success="submitFormSuccess"
              />
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
