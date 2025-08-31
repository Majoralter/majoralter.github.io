<script setup lang="ts">
const props = defineProps<{
  href: string;
}>();
</script>

<template>
  <span class="inline-block text-center">
    <a :href="href" class="gap-0.5 text-blue-600 flex items-end text-center leading-none hover:underline">
      <slot />
      <Icon class="inline mb-0.5" name="uil:external-link-alt" />
    </a>
  </span>
</template>
