<script setup lang="ts">
  const config = useAppConfig();
</script>

<template>
  <NuxtLink
    v-if="config.buyButton.show"
    :to="config.buyButton.link"
    target="_blank"
    :external="true"
  >
    <Button type="button" :variant="config.buyButton.buttonVariant">
      <span>{{ config.buyButton.buttonText }}</span>
    </Button>
  </NuxtLink>
</template>
