<template>
  <HeadlessTabGroup :defaultIndex="0">
    <HeadlessTabList
      class="relative flex flex-row gap-0.5 p-0.5 bg-hover rounded-full heading-6 text-primary"
    >
      <slot />
    </HeadlessTabList>
  </HeadlessTabGroup>
</template>
