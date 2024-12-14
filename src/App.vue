<template id="template">
  <Nav />
  <router-view/>
  <Footer />
</template>

<script lang="ts" setup>
  import Nav from '@/components/shared/Nav.vue'
  import Footer from '@/components/shared/Footer.vue'
</script>
