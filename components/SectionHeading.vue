<script setup lang="ts">
  const props = defineProps({
    to: {
      required: false,
      type: String,
      default: "#",
    },
    buttonText: {
      required: false,
      type: String,
      default: "Explore all",
    },
  });
  const isHover = ref(false);

  function handleClick() {
    navigateTo(props.to);
  }
</script>

<template>
  <div
    class="w-full flex flex-row gap-5 items-center group cursor-pointer"
    @click="handleClick"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <h4 class="heading-4 text-primary">
      <slot />
    </h4>

    <HeadlessTransitionRoot
      :show="isHover"
      enter="transition duration-200 ease-out"
      enter-from="transform scale-95 opacity-0 -translate-x-8"
      enter-to="transform scale-100 opacity-100 translate-x-0"
      leave="transition duration-75 ease-in"
      leave-from="transform scale-100 opacity-100 translate-x-0"
      leave-to="transform scale-95 opacity-0 -translate-x-8"
    >
      <button
        type="button"
        class="flex flex-row items-center justify-center gap-0.5 text-brand-4"
      >
        <span class="text-brand-5 body-1">{{ buttonText }}</span>
        <HeadlessTransitionChild
          enter="transition duration-200 ease-out delay-100"
          enter-from="transform scale-95 opacity-0 -translate-x-8"
          enter-to="transform scale-100 opacity-100 translate-x-0"
          leave="transition duration-75 ease-in"
          leave-from="transform scale-100 opacity-100 translate-x-0"
          leave-to="transform scale-95 opacity-0 -translate-x-8"
        >
          <Icon name="heroicons:chevron-right-solid" size="20px" />
        </HeadlessTransitionChild>
      </button>
    </HeadlessTransitionRoot>
  </div>
</template>
