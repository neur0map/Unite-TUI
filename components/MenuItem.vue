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
    children: {
      required: false,
      type: Array,
      default: () => [],
    },
  });

  const isExpanded = ref(false);
  const hasChildren = computed(() => props.children && props.children.length > 0);

  const active = computed(() => {
    if (hasChildren.value) {
      // Check if any child is active
      return props.children.some(child => route.path === child.link) || route.path === props.to;
    }
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

  function toggleExpanded() {
    if (hasChildren.value) {
      isExpanded.value = !isExpanded.value;
    }
  }

  function handleClick() {
    if (hasChildren.value) {
      toggleExpanded();
    } else {
      sidebarOpen.value = false;
    }
  }

  // Auto-expand if a child is active
  watch(active, (newActive) => {
    if (newActive && hasChildren.value) {
      isExpanded.value = true;
    }
  }, { immediate: true });
</script>

<template>
  <div class="w-full">
    <!-- Main menu item for dropdown -->
    <button
      v-if="hasChildren"
      @click="handleClick"
      class="relative flex flex-row items-center rounded group overflow-hidden transition-all w-full"
      :class="itemClass"
    >
      <div
        class="relative w-full gap-2.5 px-3 py-2.5 flex flex-row items-center rounded"
      >
        <Icon :name="icon" size="20px" :class="iconClass" />
        <span class="body-2 flex-1 text-left" :class="textClass"><slot /></span>
        <!-- Dropdown arrow -->
        <Icon 
          name="heroicons:chevron-down"
          size="16px"
          :class="[iconClass, 'transition-transform duration-200', isExpanded ? 'rotate-180' : '']"
        />
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
    </button>

    <!-- Main menu item for regular links -->
    <NuxtLink
      v-else
      :to="to"
      @click="handleClick"
      class="relative flex flex-row items-center rounded group overflow-hidden transition-all w-full"
      :class="itemClass"
    >
      <div
        class="relative w-full gap-2.5 px-3 py-2.5 flex flex-row items-center rounded"
      >
        <Icon :name="icon" size="20px" :class="iconClass" />
        <span class="body-2 flex-1 text-left" :class="textClass"><slot /></span>
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

    <!-- Dropdown children -->
    <div
      v-if="hasChildren"
      :class="['overflow-hidden transition-all duration-300 ease-in-out', isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']"
    >
      <div class="pl-6 pt-2 space-y-1">
        <NuxtLink
          v-for="child in children"
          :key="child.link"
          :to="child.link"
          @click="sidebarOpen = false"
          :class="[
            'flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors',
            route.path === child.link
              ? 'bg-hover border border-alpha-5 text-primary'
              : 'text-tertiary hover:text-primary hover:bg-hover hover:border-alpha-5 border border-transparent'
          ]"
        >
          <Icon :name="child.icon" size="16px" />
          <span>{{ child.label }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
