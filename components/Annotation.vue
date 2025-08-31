<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  text?: string;
}>();
</script>

<template>
  <div
    class="absolute h-fit flex items-center gap-2 w-max left-full top-1/2 flex-row max-md:hidden select-none"
  >
    <img
      class="w-14 h-auto max-w-none block"
      src="/underline_4.png"
      alt="Arrow doodle"
    />

    <p class="text-xl text-[#aaa] leading-none font-hand">{{ text }}</p>
  </div>
</template>
