<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
  });

  const proseClasses = ref([
    "prose",
    "prose-h1:heading-1 prose-h1:text-primary",
    "prose-h2:heading-2 prose-h2:text-primary",
    "prose-h3:heading-3 prose-h3:text-primary",
    "prose-h4:heading-4 prose-h4:text-primary",
    "prose-h5:heading-5 prose-h5:text-primary",
    "prose-h6:heading-6 prose-h6:text-primary",
    "prose-p:body-2 prose-p:text-tertiary",
    "prose-a:text-secondary prose-a:no-underline hover:prose-a:underline",
    "prose-ul:list-disc prose-ul:text-tertiary",
    "prose-ol:list-decimal prose-ol:text-tertiary",
    "prose-li:text-tertiary prose-li:body-2",
    "prose-code:text-secondary prose-code:body-3",
    "prose-pre:bg-hover prose-pre:body-3",
    "prose-strong:text-secondary prose-strong:body-2 prose-strong:font-semibold",
  ]);
</script>

<template>
  <article class="flex flex-col gap-3">
    <h4 class="heading-4 text-primary">{{ title }}</h4>
    <div :class="proseClasses">
      <slot />
    </div>
  </article>
</template>
