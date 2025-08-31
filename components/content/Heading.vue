<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  level: number;
  id?: string;
}>();

const tag = computed(() => `h${props.level}`);

const headingClass = computed(() => {
  switch (props.level) {
    case 1:
      return "text-lg font-medium md-6";
    case 2:
      return "text-lg font-medium md-5";
    default:
      return "text-base font-medium md-4";
  }
});
</script>

<template>
  <a
    v-if="id"
    :href="`#${id}`"
    class="no-underline group text-white scroll-mt-24 block"
  >
    <component
      :is="tag"
      :id="id"
      :class="[headingClass, 'group-hover:underline transition-colors']"
    >
      <span
        class="hidden group-hover:inline-block text-white text-lg"
        aria-hidden="true"
      >
        #
      </span>
      <span><slot /></span>
    </component>
  </a>
  <component v-else :is="tag" :class="headingClass">
    <slot />
  </component>
</template>
