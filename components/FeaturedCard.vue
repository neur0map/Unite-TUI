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
    desc: {
      required: false,
      type: String,
      default: null,
    },
  });

  const isHover = ref(false);

  function handleClick() {
    if (props.to) {
      if (props.to.startsWith("http://") || props.to.startsWith("https://")) {
        navigateTo(props.to, { external: true });
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
      :preload="true"
      format="webp"
      width="720"
      height="320"
      fit="cover"
      alt="Image"
      class="rounded"
    />
    <div class="flex flex-row items-start gap-2">
      <div class="grow flex flex-col gap-1">
        <h4 class="heading-6 text-tertiary truncate">{{ title }}</h4>
        <p class="body-2 text-help">
          {{ desc }}
        </p>
      </div>
      <BadgeIcon :variant="isHover ? 'brand' : 'gray'" size="md">
        <SvgLogo :variant="isHover ? 'brand' : 'gray'" />
      </BadgeIcon>
    </div>
  </div>
</template>
