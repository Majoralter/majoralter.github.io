<script setup>
import { ref } from "vue";

const navLinks = ref([
  { text: "Home", to: "/" },
  { text: "Blog", to: "/blog" },
  { text: "Media", to: "/media" },
]);
</script>

<template>
  <nav class="fixed top-5 z-99">
    <ul
      class="flex items-center gap-4 px-2 py-2.5 rounded-sm backdrop-blur-lg w-fit"
    >
      <li v-for="l in navLinks">
        <NuxtLink
          id="nav_link"
          :to="l.to"
          :key="l.text"
          class="font-light text-gray-400"
        >
          {{ l.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.router-link-active {
  color: white;
}
</style>
