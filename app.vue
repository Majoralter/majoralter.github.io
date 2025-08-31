<script lang="ts" setup>
  useSeoMeta({
    title: 'Jenrola Jackson\'s Website',
    ogTitle: 'Hi, it\'s Jenrola Jackson | Majoralter',
    description: 'Home of my writings, projects, and media collection',
    ogDescription: 'Home of my writings, projects, and media collection',
  })
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage
      />
    </NuxtLayout>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.5rem);
}
</style>
