<template>
    <main class="home__layout">
        <div class="home__layout--hero-section">
            <img  :src="require(`@/assets/home/hero-image-${currentTheme}.jpg`)" alt="hero image">

            <h1>
                {{ isDark  ? "Hello Darkness" : "Hello Brightness" }}
            </h1>
            <button @click="toggleTheme">Toggle Theme</button>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { useTheme } from '@/composables/useTheme';
import { ref } from 'vue'

const { isDarkMode, toggleTheme, currentTheme } = useTheme()
const isDark  = ref(isDarkMode)
</script>

<style lang="scss">
.home__layout {
    &--hero-section {
        img {
            height: 300px;
            width: auto;

            // &.light {
            //     content: url('@/assets/home/hero-image-light.jpg');
            // }
        }
    }
}
</style>
