<template>
    <main class="home__layout">
        <div class="home__layout--hero-section">
            <section class="hero-intro">
                <img :src="require(`@/assets/home/hero-image.jpg`)" alt="hero image">
                <div class="content">
                    <h1>Jenrola Jackson</h1>
                    <p>Unopinionated Tinkerer</p>

                    <div class="contact-links">
                        <a target="_blank" href="https://x.com/MajorAlter"><i class="pi pi-twitter"></i></a>
                        <a target="_blank" href=""><i class="pi pi-discord"></i></a>
                        <a target="_blank" href="https://github.com/Majoralter?tab=repositories"><i
                                class="pi pi-github"></i></a>
                    </div>

                    <p class="bio">
                        I'm a frontend developer with a generalist mindset (I think). <br>
                        I love trying my hand at stuff that challenge me. When I'm <br>
                        not working, you'll find me cheering Liverpool, oogling at <br>
                        beautifully designed components, or reading slower than a turtle. <br>
                        I also love playing chess, Apex legends & Fortnite. I  intend to write <br>
                        about stuff I'm learning or that I find interesting enough on this site.
                    </p>
                </div>
            </section>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store/themeStore'

const themeStore = useThemeStore()
</script>

<style lang="scss">
.home__layout {
    width: calc(100dvw - ($page-padding--left / 2) - ($page-padding--right / 2));
    max-width: 1024px;
    @include flex-layout(center, center, column, nowrap, 0);
    margin-block: var(--size-4);

    &--hero-section {
        width: 100%;

        .hero-intro {
            @include flex-layout(flex-start, flex-start, row, wrap, 1.5em);

            img {
                height: 200px;
                width: auto;
                border-radius: var(--radius-2);
            }

            .content {
                @include flex-layout(flex-start, flex-start, column, nowrap, .5em);

                h1 {
                    font-size: var(--font-size-5);
                }

                p {
                    font-size: var(--font-size-0);

                    &.bio {
                        font-size: var(--font-size-1);
                    }
                }

                .contact-links {
                    @include flex-layout(center, center, row, nowrap, 1em);

                    a {
                        i {
                            font-size: var(--font-size-2);
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .home__layout {
        .hero-intro {
            .content {
                p {
                    &.bio {
                        br {
                            display: none;
                        }
                    }
                }
            }
        }
    }
}
</style>
