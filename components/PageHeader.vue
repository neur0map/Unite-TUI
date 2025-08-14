<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: "",
    },
    submitButton: {
      type: Boolean,
      default: false,
    },
    buyButton: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <header class="flex flex-row justify-between">
    <h1 class="heading-3 text-primary">{{ title }}</h1>
    <div class="flex flex-row gap-3">
      <SubmitTrigger v-if="submitButton" />
      <BuyButton v-if="buyButton" />
    </div>
  </header>
</template>
