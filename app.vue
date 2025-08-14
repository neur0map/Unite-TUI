<script setup lang="ts">
  const config = useAppConfig();

  useSeoMeta({
    title: config.site.title,
    ogTitle: config.site.title,
    description: config.site.description,
    ogDescription: config.site.description,
    ogImage: config.site.image,
    twitterCard: "summary_large_image",
  });

  useHead({
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    htmlAttrs: {
      lang: "en",
      class: "scroll-smooth focus:scroll-auto",
    },
    bodyAttrs: {
      class: "bg-primary",
    },
  });

  const searchDialogOpen = useState<boolean>("searchDialogOpen", () => false);
  const submitDialogOpen = useState<boolean>("submitDialogOpen", () => false);
  const sidebarOpen = useState<boolean>("sidebarOpen", () => false);
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full h-screen bg-primary">
    <HeadlessTransitionRoot as="template" :show="sidebarOpen">
      <HeadlessDialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <HeadlessTransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-backdrop" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 flex">
          <HeadlessTransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <HeadlessDialogPanel
              class="relative mr-16 flex w-full max-w-xs flex-1"
            >
              <HeadlessTransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 w-8 h-8 flex items-center justify-center p-1.5 text-primary hover:bg-hover rounded"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <Icon name="heroicons:x-mark-solid" size="20px" />
                  </button>
                </div>
              </HeadlessTransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col overflow-y-auto bg-primary border-r border-alpha-5"
              >
                <Sidebar />
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>

    <div class="hidden lg:block">
      <Sidebar />
    </div>

    <div
      class="fixed w-full top-0 z-40 flex flex-row items-center gap-4 bg-primary px-4 md:px-8 py-4 h-14 lg:hidden border-b border-alpha-5"
    >
      <NuxtLink to="/" class="h-6" aria-label="Home" aria-current="page">
        <LogoBrand />
      </NuxtLink>
      <button
        type="button"
        class="ml-auto w-8 h-8 flex items-center justify-center text-primary hover:bg-hover rounded"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Icon name="heroicons:bars-2-solid" size="20px" />
      </button>
    </div>

    <div class="grow lg:overflow-y-auto p-2 pl-2 lg:pl-0 pt-14 lg:pt-2">
      <div class="p-8 lg:border border-alpha-5 rounded-lg min-h-full">
        <NuxtPage />
      </div>
    </div>

    <SearchDialog v-if="config.search.show" v-model="searchDialogOpen" />
    <SubmitDialog v-if="config.submitDialog.show" v-model="submitDialogOpen" />
  </div>
</template>
