<script setup lang="ts">
  import {
    PageWrapper,
    PageHeader,
    PageDivider,
    HighlightSection,
    HighlightCard,
    FeaturedSection,
    FeaturedCard,
    Section,
    Card,
  } from "#components";

  const components = {
    "page-wrapper": PageWrapper,
    "page-header": PageHeader,
    "page-divider": PageDivider,
    "highlight-section": HighlightSection,
    "highlight-card": HighlightCard,
    "featured-section": FeaturedSection,
    "featured-card": FeaturedCard,
    section: Section,
    card: Card,
  };

  const { data: page, error } = await useAsyncData("home", () =>
    queryContent("/").findOne()
  );

  if (error.value) {
    throw createError({
      statusCode: 404,
      message: "Page not found",
      fatal: true,
    });
  }

  useSeoMeta({
    title: page.value?.seo.title,
    description: page.value?.seo.description,
    ogTitle: page.value?.seo.title,
    ogDescription: page.value?.seo.description,
    ogImage: page.value?.seo.image,
  });
</script>

<template>
  <main>
    <ContentRenderer :value="page">
      <ContentRendererMarkdown :value="page" :components="components" />
    </ContentRenderer>
  </main>
</template>
