<script setup lang="ts">
  const route = useRoute();
  const props = defineProps({
    to: {
      required: false,
      type: String,
      default: "#",
    },
    icon: {
      required: false,
      type: String,
      default: "#",
    },
  });

  const active = computed(() => {
    return props.to.startsWith("http://") || props.to.startsWith("https://")
      ? false
      : route.path == props.to;
  });
  const itemClass = computed(() => {
    return {
      "bg-hover-none border border-transparent hover:bg-hover hover:border-alpha-5":
        !active.value,
      "bg-hover border border-alpha-5": active.value,
    };
  });

  const iconClass = computed(() => {
    return {
      "icon-primary group-hover:text-secondary": !active.value,
      "text-secondary": active.value,
    };
  });

  const textClass = computed(() => {
    return {
      "text-tertiary group-hover:text-primary": !active.value,
      "text-primary": active.value,
    };
  });

  const sidebarOpen = useState<boolean>("sidebarOpen");
</script>

<template>
  <NuxtLink
    :to="to"
    @click="sidebarOpen = false"
    class="relative flex flex-row items-center rounded group overflow-hidden transition-all"
    :class="itemClass"
  >
    <div
      class="relative w-full gap-2.5 px-3 py-2.5 flex flex-row items-center rounded"
    >
      <Icon :name="icon" size="20px" :class="iconClass" />
      <span class="body-2" :class="textClass"><slot /></span>
    </div>
    <div
      v-show="active"
      class="absolute h-full w-px left-0 opacity-100"
      style="
        background: linear-gradient(
          180deg,
          rgba(162, 228, 53, 0) 0%,
          rgb(255, 72, 0) 49.82638888888889%,
          rgba(162, 228, 53, 0) 100%
        );
      "
    ></div>
    <div
      v-show="active"
      class="absolute h-2 w-2 left-0 my-auto bg-brand-4 opacity-100"
      style="filter: blur(20px)"
    ></div>
    <div
      v-show="active"
      class="absolute h-2 w-6 left-0 my-auto bg-brand-4 blur-xl opacity-100"
    ></div>
  </NuxtLink>
</template>
