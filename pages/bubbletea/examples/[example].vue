<script setup lang="ts">
const route = useRoute()
const exampleName = route.params.example as string
</script>

<template>
  <ExamplePageTemplate :example-name="exampleName" />
</template>
