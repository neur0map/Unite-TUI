<script setup lang="ts">
  import {
    PageWrapper,
    PageHeader,
    PageDivider,
    InfoWrapper,
    InfoSection,
    SubmitTrigger,
    SponsorButton,
    Button,
    Icon,
    Pricing,
    Section,
    Card,
    DocWrapper,
    DocArticle,
  } from "#components";

  const components = {
    "page-wrapper": PageWrapper,
    "page-header": PageHeader,
    "page-divider": PageDivider,
    "info-wrapper": InfoWrapper,
    "info-section": InfoSection,
    "submit-trigger": SubmitTrigger,
    "sponsor-button": SponsorButton,
    button: Button,
    icon: Icon,
    pricing: Pricing,
    section: Section,
    card: Card,
    DocWrapper,
    DocArticle,
  };

  const route = useRoute();
  const routePath = computed(() => route.path);
  const { data: page, error } = await useAsyncData(
    route.path,
    () => queryContent(route.path).findOne(),
    {
      watch: [routePath],
    }
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
