<script setup lang="ts">
  const config = useAppConfig();
  const submitDialogOpen = useState<boolean>("submitDialogOpen", () => false);
</script>

<template>
  <Button
    v-if="config.submitDialog.show"
    @click="submitDialogOpen = true"
    :variant="config.submitDialog.triggerVariant"
  >
    <Icon :name="config.submitDialog.triggerIcon" size="16px" />
    <span>{{ config.submitDialog.triggerText }}</span>
  </Button>
</template>
