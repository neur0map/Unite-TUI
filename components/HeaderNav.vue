<script setup lang="ts">
const config = useAppConfig();
const route = useRoute();

const mobileMenuOpen = ref(false);

// Header scroll animation state
const scrollY = ref(0);
const isScrolled = ref(false);
const headerRef = ref<HTMLElement>();
const navRef = ref<HTMLElement>();
const logoRef = ref<HTMLElement>();
const textRef = ref<HTMLElement>();
const isMounted = ref(false);

// Handle scroll event
const handleScroll = () => {
  scrollY.value = window.scrollY;
  isScrolled.value = scrollY.value > 50;
};

// Set up scroll listener
onMounted(() => {
  isMounted.value = true;
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Header motion variants (no height changes, just background blending)
const headerVariants = {
  normal: {
    backgroundColor: 'rgba(15, 12, 11, 0.8)',
    backdropFilter: 'blur(8px)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    }
  },
  compact: {
    backgroundColor: 'rgba(15, 12, 11, 0.95)',
    backdropFilter: 'blur(16px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
      bounce: 0.2,
    }
  }
};

// Navigation container motion variants (for horizontal compacting)
const navVariants = {
  normal: {
    maxWidth: '80rem', // max-w-7xl
    paddingLeft: '1rem',
    paddingRight: '1rem',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    }
  },
  compact: {
    maxWidth: '64rem', // max-w-5xl (more compact)
    paddingLeft: '2rem',
    paddingRight: '2rem',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
      bounce: 0.2,
    }
  }
};

// Logo motion variants
const logoVariants = {
  normal: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    }
  },
  compact: {
    scale: 0.85,
    transition: {
      type: 'spring', 
      stiffness: 400,
      damping: 25,
      bounce: 0.3,
    }
  }
};

// Initialize motion instances
const { apply: applyHeaderMotion } = useMotion(headerRef, headerVariants);
const { apply: applyNavMotion } = useMotion(navRef, navVariants);
const { apply: applyLogoMotion } = useMotion(logoRef, logoVariants);
const { apply: applyTextMotion } = useMotion(textRef, logoVariants);

// Watch scroll state and apply variants (only after mount)
watch(isScrolled, (newValue) => {
  if (!isMounted.value) return;
  
  // Apply animations
  applyHeaderMotion(newValue ? 'compact' : 'normal');
  applyNavMotion(newValue ? 'compact' : 'normal');
  applyLogoMotion(newValue ? 'compact' : 'normal');
  applyTextMotion(newValue ? 'compact' : 'normal');
});
</script>

<template>
  <header 
    ref="headerRef"
    v-motion
    :initial="headerVariants.normal"
    :variants="headerVariants"
    class="fixed top-0 w-full z-50 bg-primary backdrop-blur-lg bg-opacity-90"
  >
    <nav 
      ref="navRef"
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div 
              ref="logoRef"
              class="w-8 h-8 flex items-center justify-center"
            >
              <img src="/logo.png" alt="Unite UI Logo" class="w-8 h-8 object-contain" />
            </div>
            <span 
              ref="textRef"
              class="text-primary font-medium text-lg"
            >
              Unite UI
            </span>
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-6">
          <template v-for="item in config.navigation.header" :key="item.label">
            <NuxtLink
              v-if="!item.external"
              :to="item.link"
              :class="[
                'group relative flex items-center gap-0 group-hover:gap-2 px-3 py-2 rounded-lg overflow-hidden',
                'transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] transform hover:scale-105',
                'hover:bg-hover hover:shadow-lg hover:shadow-brand-alpha-8',
                route.path === item.link 
                  ? 'text-brand-4 bg-hover shadow-md' 
                  : 'text-secondary hover:text-primary'
              ]"
            >
              <Icon 
                :name="item.icon || 'heroicons:cube'" 
                size="20px" 
                class="transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-110 group-hover:rotate-3 flex-shrink-0 z-10" 
              />
              <span 
                class="text-sm font-medium whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] transform translate-x-[-10px] scale-[0.8] opacity-0 w-0 group-hover:w-[80px] group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100"
              >
                {{ item.label }}
              </span>
            </NuxtLink>
            <a
              v-else
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'group relative flex items-center gap-0 group-hover:gap-2 px-3 py-2 rounded-lg overflow-hidden',
                'transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] transform hover:scale-105',
                'hover:bg-hover hover:shadow-lg hover:shadow-brand-alpha-8 text-secondary hover:text-primary'
              ]"
            >
              <Icon 
                :name="item.icon || 'heroicons:arrow-top-right-on-square'" 
                size="20px" 
                class="transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-110 group-hover:rotate-3 flex-shrink-0 z-10" 
              />
              <span 
                class="text-sm font-medium whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] transform translate-x-[-10px] scale-[0.8] opacity-0 w-0 group-hover:w-[80px] group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100"
              >
                {{ item.label }}
              </span>
            </a>
          </template>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center rounded-md p-2 text-secondary hover:bg-hover hover:text-primary"
          >
            <span class="sr-only">Open main menu</span>
            <Icon v-if="!mobileMenuOpen" name="heroicons:bars-3" size="24px" />
            <Icon v-else name="heroicons:x-mark" size="24px" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <HeadlessTransitionRoot as="template" :show="mobileMenuOpen">
      <div class="md:hidden">
        <HeadlessTransitionChild
          as="template"
          enter="duration-200 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <div class="border-t border-alpha-5 bg-primary">
            <div class="space-y-2 px-4 pb-4 pt-3">
              <!-- Mobile navigation items (include all pages) -->
              <NuxtLink
                to="/library"
                @click="mobileMenuOpen = false"
                :class="[
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  route.path === '/library'
                    ? 'bg-hover text-brand-4'
                    : 'text-secondary hover:bg-hover hover:text-primary'
                ]"
              >
                <Icon name="heroicons:book-open" size="20px" />
                <span>Library</span>
              </NuxtLink>
              
              <NuxtLink
                to="/docs"
                @click="mobileMenuOpen = false"
                :class="[
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  route.path === '/docs'
                    ? 'bg-hover text-brand-4'
                    : 'text-secondary hover:bg-hover hover:text-primary'
                ]"
              >
                <Icon name="heroicons:document-text" size="20px" />
                <span>Documentation</span>
              </NuxtLink>
              
              <NuxtLink
                to="/examples"
                @click="mobileMenuOpen = false"
                :class="[
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  route.path === '/examples'
                    ? 'bg-hover text-brand-4'
                    : 'text-secondary hover:bg-hover hover:text-primary'
                ]"
              >
                <Icon name="heroicons:code-bracket" size="20px" />
                <span>Examples</span>
              </NuxtLink>
              
              <a
                href="https://github.com/unite-ui/unite-ui"
                target="_blank"
                rel="noopener noreferrer"
                @click="mobileMenuOpen = false"
                class="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-secondary hover:bg-hover hover:text-primary transition-colors"
              >
                <Icon name="simple-icons:github" size="20px" />
                <span>GitHub</span>
                <Icon name="heroicons:arrow-top-right-on-square" size="16px" class="ml-auto" />
              </a>
            </div>
          </div>
        </HeadlessTransitionChild>
      </div>
    </HeadlessTransitionRoot>
  </header>
</template>