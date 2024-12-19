<template>
    <header>
        <nav>
            <!-- <span class="name">
                Jenrola Jackson
            </span> -->
            <div class="nav__links">
                <ul>
                    <li><router-link to="/"><i class="pi pi-home"></i> Index</router-link></li>
                    <li><router-link to="/work"><i class="pi pi-briefcase"></i> Work</router-link></li>
                    <li><router-link to="/blog"><i class="pi pi-pencil"></i> Blog</router-link></li>
                    <li><router-link to="/components"><i class="pi pi-box"></i> Components</router-link></li>
                    <li><router-link to="/lists"><i class="pi pi-list"></i> Lists</router-link></li>
                </ul>
            </div>

            <button @click="toggleTheme" class="theme-toggle">
                <i class="pi" :class="{ 'pi-sun': isDarkMode, 'pi-moon': !isDarkMode }"></i>
            </button>
        </nav>

    </header>
</template>

<script lang="ts" setup>
import { useTheme } from '@/composables/useTheme';

const { isDarkMode, toggleTheme } = useTheme()
</script>

<style lang="scss">
header {
    width: calc(100dvw - ($page-padding--left / 2) - ($page-padding--right / 2));
    margin-inline: auto;

    nav {
        width: 100%;
        max-width: 1024px;
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
                        font-size: 14.4px;
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