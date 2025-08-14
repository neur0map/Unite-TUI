<script setup lang="ts">
  const enabled = defineModel({ type: Boolean, default: false });
  defineProps({
    label: {
      required: false,
      type: String,
      default: null,
    },
    labelEnabled: {
      required: false,
      type: String,
      default: null,
    },
    badgeLabel: {
      required: false,
      type: String,
      default: null,
    },
  });
</script>

<template>
  <div class="relative">
    <HeadlessSwitchGroup>
      <div class="flex items-center">
        <HeadlessSwitch
          v-model="enabled"
          class="relative inline-flex py-0.5 gap-0.5 w-auto items-center rounded-full transition-colors focus:outline-none bg-hover"
        >
          <span
            :class="{
              'translate-x-20':
                enabled && (label != null || labelEnabled != null),
              'translate-x-4': enabled && label == null && labelEnabled == null,
              'translate-x-0.5': !enabled,
              'w-4': label == null && labelEnabled == null,
              'w-20': label != null || labelEnabled != null,
              'w-40': badgeLabel != null && enabled,
              'h-8': label != null || labelEnabled != null,
              'h-4': label == null && labelEnabled == null,
              'bg-white': enabled && label == null && labelEnabled == null,
            }"
            class="absolute inline-block transform rounded-full bg-alpha-10 transition-all duration-300"
          />
          <HeadlessSwitchLabel
            class="cursor-pointer heading-6 text-primary py-1.5 truncate"
            :class="{
              'w-4': label == null && labelEnabled == null,
              'w-20': label != null || labelEnabled != null,
              'h-8': label != null || labelEnabled != null,
              'h-4': label == null && labelEnabled == null,
            }"
          >
            {{ label }}
          </HeadlessSwitchLabel>
          <HeadlessSwitchLabel
            class="cursor-pointer heading-6 text-primary py-1.5 truncate"
            :class="{
              'w-4': label == null && labelEnabled == null,
              'w-20': !badgeLabel && (label != null || labelEnabled != null),
              'w-40': badgeLabel,
              'h-8': label != null || labelEnabled != null,
              'h-4': label == null && labelEnabled == null,
            }"
          >
            {{ labelEnabled }}
            <span v-if="badgeLabel" class="text-brand-5 body-2">{{
              badgeLabel
            }}</span>
          </HeadlessSwitchLabel>
        </HeadlessSwitch>
      </div>
    </HeadlessSwitchGroup>
  </div>
</template>
