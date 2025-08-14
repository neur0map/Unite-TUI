<script setup lang="ts">
  const config = useAppConfig();
  const isOpen = defineModel();
  const keyword = ref("");
  const results = ref([]);

  const handleSearch = async () => {
    results.value = (await searchContent(keyword)).value;
  };

  watch(keyword, handleSearch);

  function closeModal() {
    keyword.value = "";
    results.value = [];
    isOpen.value = false;
  }
</script>

<template>
  <HeadlessTransitionRoot appear :show="isOpen ? true : false" as="template">
    <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-backdrop" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              class="relative w-full max-w-96 transform overflow-hidden bg-transparent text-left align-middle shadow-xl transition-all flex flex-col justify-start h-auto"
            >
              <div
                class="w-full h-auto px-2 py-1 bg-hover rounded-t-lg"
                :class="{ 'rounded-b-lg': !keyword }"
              >
                <SearchInput
                  v-model="keyword"
                  :placeholder="config.search.placeholder"
                />
              </div>
              <SearchResult v-if="results.length > 0">
                <SearchResultItem
                  v-for="result in results.sort((a, b) => a.score - b.score)"
                  :key="result.id"
                  :title="result.title"
                  :desc="result.id"
                  :to="result.id"
                  @click="closeModal"
                />
              </SearchResult>
              <div v-else class="h-96 w-full"></div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
