<script setup lang="ts">
  defineProps({
    title: {
      required: true,
      type: String,
    },
    description: {
      required: false,
      type: String,
    },
    yearlyDiscount: {
      required: false,
      type: Number,
    },
  });
  const yearlyToggle = ref(false);
</script>

<template>
  <section class="flex flex-col pt-4 gap-4">
    <div class="flex flex-col gap-4 max-w-md mx-auto">
      <h2 class="heading-2 text-primary text-center">{{ title }}</h2>
      <p class="body-1 text-tertiary text-center">
        {{ description }}
      </p>
    </div>
    <div class="flex flex-col gap-12">
      <!-- Pricing Tabs -->
      <div class="mx-auto">
        <PricingSwitch
          v-model="yearlyToggle"
          label="Monthly"
          labelEnabled="Yearly"
          :badgeLabel="`(Save ${yearlyDiscount}%)`"
        />
      </div>

      <!-- Pricing Panels -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <slot :yearly-toggled="yearlyToggle" />
      </div>
    </div>
  </section>
</template>
