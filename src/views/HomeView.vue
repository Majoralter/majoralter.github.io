<template>
    <main class="home__layout">
        <div class="home__layout--hero-section">
            <img :src="require(`@/assets/home/hero-image-${themeStore.currentTheme}.jpg`)" alt="hero image">
        </div>
    </main>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store/themeStore'

const themeStore = useThemeStore()
</script>

<style lang="scss">
.home__layout {
    &--hero-section {
        img {
            height: 300px;
            width: auto;
        }
    }
}
</style>
