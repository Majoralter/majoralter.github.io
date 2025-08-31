<script lang="ts" setup>
defineProps<{
  title: string;
  date: string;
}>();
</script>

<template>
  <div
    class="w-full h-full rounded-2xl flex flex-col items-start justify-between p-4 bg-[#121212]"
  >
    <p class="text-base font-medium text-gray-200">Jenrola Jackson</p>

    <div class="flex flex-col items-start gap-0.5">
      <h1 class="text-3xl text-white">
        {{ title }}
      </h1>
      <p class="text-sm text-gray-300">{{ date }}</p>
    </div>
  </div>
</template>
