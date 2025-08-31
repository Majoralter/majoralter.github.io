<script setup lang="ts">
import { computed } from "vue";
import { Info, AlertTriangle, XCircle, CheckCircle } from "lucide-vue-next";

const props = defineProps<{
  type?: "info" | "warning" | "error" | "success";
}>();

const type = computed(() => props.type || "info");

const icons = {
  info: Info,
  warning: AlertTriangle,
  error: XCircle,
  success: CheckCircle,
};

const typeClasses = {
  info: "border-blue-500 text-blue-500 bg-blue-950",
  warning: "border-yellow-500 text-yellow-500 bg-yellow-950",
  error: "border-red-500 text-red-500 bg-red-950",
  success: "border-green-500 text-green-500 bg-green-950",
};
</script>

<template>
  <div
    class="flex items-center gap-3 p-4 rounded-lg border-l-4 relative my-8 w-full"
    :class="typeClasses[type]"
  >
    <div class="text-sm absolute p-2 -top-4 -right-4 rounded-full bg-[#0f0f0f]">
      <component :is="icons[type]" :size="20" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:slotted(p) {
  margin-bottom: 0;
  color: white;
}
</style>
