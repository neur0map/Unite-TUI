<script setup lang="ts">
  const props = defineProps({
    variant: {
      required: false,
      type: String,
      default: "primary", // primary, secondary, ghost, inverse, link
    },
    size: {
      required: false,
      type: String,
      default: "md", // sm, md, lg
    },
    to: {
      required: false,
      type: String,
    },
  });

  const buttonClass = ref({
    "gap-1.5 px-3.5 py-1 body-2": props.size == "sm" && props.variant != "link",
    "gap-2 px-4 py-1.5 heading-6":
      props.size == "md" && props.variant != "link",
    "gap-2 px-5 py-2.5 heading-6":
      props.size == "lg" && props.variant != "link",

    "bg-brand-4 text-inverse button-primary-shadow rounded-full hover:bg-brand-5":
      props.variant == "primary",
    "bg-white/[.01] text-primary button-secondary-shadow rounded-full hover:bg-alpha-5":
      props.variant == "secondary",
    "bg-transparent text-primary rounded-full hover:bg-alpha-5":
      props.variant == "ghost",
    "bg-primary text-brand-5 button-inverse-shadow rounded-full hover:bg-hover":
      props.variant == "inverse",

    "text-primary hover:text-brand-4": props.variant == "link",
    "gap-1.5": props.size == "sm" && props.variant == "link",
    "gap-2":
      (props.size == "md" || props.size == "lg") && props.variant == "link",
  });

  const handleClick = () => {
    if (props.to) {
      navigateTo(props.to);
    }
  };
</script>

<template>
  <button
    type="button"
    @click="handleClick"
    class="flex flex-row items-center justify-center transition-all"
    :class="buttonClass"
  >
    <slot />
  </button>
</template>

<style scoped>
  .button-primary-shadow {
    box-shadow: inset 0 1px 0px 0px #ffffff20;
  }
  .button-secondary-shadow {
    box-shadow: 0 4px 4px 0px #00000005, 0 2px 5px 0 #00000005,
      0 0 0 1px #ffffff10, inset 0 -3px 4px -1px #ffffff05;
  }
  .button-inverse-shadow {
    box-shadow: inset 0 1px 0 0 #ffffff20;
  }
</style>
