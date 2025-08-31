<script lang="ts" setup>
defineProps<{
    value: number
}>()
</script>

<template>
    <!-- Rating Stars -->
<div class="flex items-center gap-1 text-yellow-500 text-sm">
  <!-- Full stars -->
  <span
    v-for="n in Math.floor(value)"
    :key="`full-${value}-${n}`"
  >
    ★
  </span>

  <!-- Optional half star -->
  <span v-if="value % 1 >= 0.25 && value % 1 < 0.75">½</span>

  <!-- Empty stars -->
  <span
    v-for="n in 5 - Math.ceil(value)"
    :key="`empty-${value}-${n}`"
    class="text-gray-600"
  >
    ★
  </span>
</div>
</template>
