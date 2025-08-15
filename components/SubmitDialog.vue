<script setup lang="ts">
  const config = useAppConfig();
  const isOpen = defineModel();

  function closeModal() {
    isOpen.value = false;
  }

  function goToGitHub() {
    window.open('https://github.com/unite-ui/unite-ui', '_blank');
    closeModal();
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
              
              <!-- Logo -->
              <div class="flex justify-center mb-4">
                <img src="/logo.png" alt="Unite UI Logo" class="w-12 h-12 object-contain" />
              </div>

              <HeadlessDialogTitle as="h3" class="heading-4 text-primary text-center">
                {{ config.submitDialog.dialogTitle }}
              </HeadlessDialogTitle>
              <div class="mt-2">
                <p class="body-2 text-help text-center">
                  {{ config.submitDialog.dialogDescription }}
                </p>
              </div>

              <!-- GitHub Button -->
              <div class="mt-6">
                <Button
                  @click="goToGitHub"
                  variant="primary"
                  size="lg"
                  class="w-full"
                >
                  <Icon name="simple-icons:github" size="16px" />
                  <span>View on GitHub</span>
                </Button>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
