<script setup lang="ts">
  const props = defineProps({
    highlight: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    url: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
  });

  const isHover = ref(false);

  function handleClick() {
    if (props.url) {
      if (props.url.startsWith("http://") || props.url.startsWith("https://")) {
        navigateTo(props.url, { external: true, open: { target: "_blank" } });
      } else {
        navigateTo(props.url);
      }
    }
  }
</script>

<template>
  <div class="flex flex-col gap-3">
    <h2 class="heading-5 text-primary">{{ highlight }}</h2>
    <div
      class="flex flex-col gap-2.5 p-3 bg-hover-none hover:bg-hover focus:bg-hover border border-alpha-5 rounded-lg transition-all duration-500 group"
      :class="{
        'cursor-pointer': url != null && url != undefined,
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
        :loading="'eager'"
        alt="Image"
        width="720"
        height="480"
        fit="cover"
        class="border border-alpha-5 rounded"
      />
      <div class="flex flex-col gap-1">
        <div class="relative flex flex-row gap-1.5">
          <h3 class="heading-6 text-tertiary">{{ name }}</h3>
          <div class="absolute right-0 w-6 ml-auto">
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
      </div>
    </div>
  </div>
</template>
