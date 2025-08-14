<script setup lang="ts">
  const props = defineProps({
    image: {
      required: false,
      type: String,
      default: null,
    },
    to: {
      required: false,
      type: String,
      default: null,
    },
    title: {
      required: false,
      type: String,
      default: "Untitled",
    },
    subtitle: {
      required: false,
      type: String,
      default: null,
    },
    desc: {
      required: false,
      type: String,
      default: null,
    },
    badge: {
      required: false,
      type: String,
      default: null,
    },
    badgeVariant: {
      required: false,
      type: String,
      default: "brand",
    },
    preload: {
      required: false,
      type: Boolean,
      default: false,
    },
    lazyLoading: {
      required: false,
      type: Boolean,
      default: true,
    },
  });

  const isHover = ref(false);

  function handleClick() {
    if (props.to) {
      if (props.to.startsWith("http://") || props.to.startsWith("https://")) {
        navigateTo(props.to, { external: true, open: { target: "_blank" } });
      } else {
        navigateTo(props.to);
      }
    }
  }
</script>

<template>
  <div
    class="flex flex-col gap-2.5 p-3 bg-hover-none hover:bg-hover focus:bg-hover border border-alpha-5 rounded-lg transition-all duration-500 group"
    :class="{
      'cursor-pointer': to != null && to != undefined,
    }"
    @click="handleClick"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <NuxtImg
      v-if="image"
      :src="image"
      :preload="preload"
      format="webp"
      :loading="lazyLoading ? 'lazy' : 'eager'"
      alt="Image"
      width="720"
      height="480"
      fit="cover"
      class="border border-alpha-5 rounded"
    />
    <div class="flex flex-col gap-1">
      <div
        class="relative flex flex-row gap-1.5"
        :class="{ 'pr-6': subtitle == null || subtitle == undefined }"
      >
        <h5 class="heading-6 text-tertiary">{{ title }}</h5>
        <Badge v-if="badge" :variant="badgeVariant" size="xs">{{
          badge
        }}</Badge>

        <div v-if="subtitle" class="ml-auto heading-6 text-tertiary">
          {{ subtitle }}
        </div>
        <div v-else class="absolute right-0 w-6 ml-auto">
          <HeadlessTransitionRoot
            :show="isHover"
            enter="absolute transition duration-200 ease-out"
            enter-from="transform scale-95 opacity-0 -translate-x-4 translate-y-4"
            enter-to="transform scale-100 opacity-100 translate-x-0 translate-y-0"
            leave="absolute transition duration-75 ease-in"
            leave-from="transform scale-100 opacity-100 translate-x-0 translate-y-0"
            leave-to="transform scale-95 opacity-0 -translate-x-4 translate-y-4"
          >
            <Icon
              name="heroicons:arrow-up-right-solid"
              size="20px"
              class="icon-hover"
            />
          </HeadlessTransitionRoot>
        </div>
      </div>
      <div class="flex body-2 text-help">
        {{ desc }}
      </div>
    </div>
  </div>
</template>
