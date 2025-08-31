<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  code: string;
  language?: string;
  filename?: string;
}>();

const copied = ref(false);

function copyCode() {
  navigator.clipboard.writeText(props.code).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  });
}
</script>

<template>
  <div
    class="relative group bg-[#0e0e0e] border border-zinc-800 rounded-lg overflow-hidden font-mono text-sm my-4"
  >
    <div
      class="flex justify-between items-center px-4 py-2 mb-4 border-b border-zinc-800"
    >
      <span class="uppercase text-xs font-bold tracking-wider">
        {{ language || "code" }}
      </span>
      <button
        @click="copyCode"
        class="text-xs text-cyan-400 hover:text-cyan-100 transition cursor-pointer"
      >
        {{ copied ? "Copied!" : "Copy" }}
      </button>
    </div>
    <pre v-bind="$attrs" class="px-4 overflow-auto">
      <slot />
    </pre>
  </div>
</template>

<style scoped lang="scss">
:slotted(code) {
  span {
    &.highlight {
      width: 100%;
      display: block;
      padding-block: 4px;
      border-radius: 6px;
      background-color: rgba(0, 66, 66, 0.4);
    }
  }
}
</style>
