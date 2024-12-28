<template>
    <header>
        <nav>
            <div class="nav__links">
                <ul>
                    <li><router-link to="/"><i class="pi pi-home"></i> Index</router-link></li>
                    <li><router-link to="/blog" :class="{ 'router-link-active': $route.path.startsWith('/blog') }"><i
                                class="pi pi-pencil"></i> Blog</router-link></li>
                    <li><router-link to="/lists"><i class="pi pi-list"></i> Lists</router-link></li>
                </ul>
            </div>

            <button @click="themeStore.toggleTheme" class="theme-toggle">
                <i class="pi" :class="{ 'pi-moon': !themeStore.isDarkMode, 'pi-sun': themeStore.isDarkMode }"></i>
            </button>
        </nav>

    </header>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store/themeStore';
import { onMounted } from 'vue'

const themeStore = useThemeStore()

onMounted(() => {
    themeStore.initializeTheme()
})
</script>

<style lang="scss">
header {
    nav {
        width: 100%;
        @include flex-layout(space-between, center, row, nowrap, 0);
        padding-block: var(--size-3);

        .name {
            font-weight: 500;
            font-size: 14.4px;
        }

        .theme-toggle {
            border: none;
            padding: 6px;
            border-radius: var(--radius-round);
            box-shadow: var(--shadow-1);
            cursor: pointer;
            @include flex-layout(center, center, row, nowrap, 0);

            i {
                font-size: 14.4px;
            }
        }

        .nav__links {
            ul {
                @include flex-layout(center, center, row, nowrap, .75em);

                li {
                    a {
                        font-size: 18px;
                        display: flex;
                        align-items: center;
                        gap: 3px;

                        i {
                            display: none;
                        }

                        &.router-link-active {
                            i {
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>