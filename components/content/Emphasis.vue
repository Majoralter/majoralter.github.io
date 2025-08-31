<script setup lang="ts">
const props = defineProps<{
  italicize?: boolean;
  bolden?: boolean;
  outline?: boolean;
}>();
</script>

<template>
  <span
    :class="[outline && 'px-1 pt-1 outline-1 outline-cyan-800 bg-gray-900 rounded-sm m-1 text-sm w-fit', 'text-cyan-400 text-base text-center', italicize && 'italic', bolden && 'font-bold']"
  >
    <slot />
  </span>
</template>
