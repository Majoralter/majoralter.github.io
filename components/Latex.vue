<script lang="ts" setup>
import katex from "katex";

const props = defineProps<{
  formula: string;
}>();

const html = katex.renderToString(props.formula, { throwOnError: false });

onMounted(() => console.log(props.formula, html))
</script>

<template>
  <div class="text-center w-full">
    <span v-html="html"></span>
  </div>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.css"
    integrity="sha384-WsHMgfkABRyG494OmuiNmkAOk8nhO1qE+Y6wns6v+EoNoTNxrWxYpl5ZYWFOLPCM"
    crossorigin="anonymous"
  />
</template>
