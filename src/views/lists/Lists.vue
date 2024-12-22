<template>
    <main class="list-main">
        <ListHeader />
        <router-view></router-view>
    </main>
</template>

<script lang="ts" setup>
import ListHeader from '@/components/ListHeader.vue';
</script>

<style lang="scss">
.list-main {
    @include flex-layout(flex-start, flex-start, column, nowrap, .25em);
}
</style>