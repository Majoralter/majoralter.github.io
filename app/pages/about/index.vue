<script setup lang="ts">
import { ref } from "vue";

const copied = ref(false);
const email = "jenrolajackson210@gmail.com";

const copyEmail = () => {
    navigator.clipboard.writeText(email);
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 2000);
};

// Client List Data
const clients = [
    "Ckay",
    "Mavo",
    "Kidd Carder",
    "z3ro collective",
    "Ehiz 'D' Greatest",
    "Tariq",
    "Vasa",
    "TML Vibez",
    "Worldcharming",
];

const capabilities = [
    "COVER ARTWORK",
    "MUSIC VIDEO TITLE CARDS",
    "CREDIT CARDS & TYPOGRAPHY",
    "TOUR POSTERS",
    "APPAREL & MERCH DESIGN",
    "PHYSICAL MUSIC PACKAGING (VINYL / CD / CASSETTE)",
    "ROLLOUT VISUAL ASSETS",
];
</script>

<template>
    <div
        class="min-h-screen bg-background text-neutral-100 flex flex-col font-sans"
    >
        <SiteHeader active-category="" />

        <main
            ref="infoContainer"
            class="grow max-w-7xl mx-auto w-full px-6 py-12 md:py-20 space-y-24"
        >
            <section
                class="gsap-fade grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
                <div
                    class="md:col-span-4 text-xs font-mono tracking-widest text-neutral-500 uppercase"
                >
                    ABOUT
                </div>
                <div class="md:col-span-8 space-y-6">
                    <p
                        class="text-neutral-400 text-sm leading-relaxed max-w-3xl uppercase"
                    >
                        hello, i'm Jenrola Jackson a graphics designer and
                        visual artist. <br />
                        formerly a software engineer, I recently made the switch
                        to design focused on the music & entertainment industry
                        — although i'm open to other opportunities. &nbsp;
                        <br />
                        I've been a freelancer since 2022 and I've worked with a
                        range of clients. <br />
                        my contact details are listed below.
                    </p>
                </div>
            </section>

            <section class="gsap-fade grid grid-cols-1 md:grid-cols-12 gap-8">
                <div
                    class="md:col-span-4 text-xs font-mono tracking-widest text-neutral-500 uppercase"
                >
                    SERVICES
                </div>
                <div class="md:col-span-8">
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        <li
                            v-for="(service, idx) in capabilities"
                            :key="idx"
                            class="text-xs sm:text-sm font-mono tracking-wider text-neutral-300 flex items-center gap-3 pb-2"
                        >
                            <span class="text-neutral-600"
                                >0{{ idx + 1 }}.</span
                            >
                            <span>{{ service }}</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="gsap-fade grid grid-cols-1 md:grid-cols-12 gap-8">
                <div
                    class="md:col-span-4 text-xs font-mono tracking-widest text-neutral-500 uppercase"
                >
                    SELECT CLIENTS
                </div>
                <div class="md:col-span-8">
                    <div
                        class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm font-mono text-neutral-400"
                    >
                        <div
                            v-for="(client, idx) in clients"
                            :key="idx"
                            class="hover:text-white transition-colors py-1 uppercase"
                        >
                            {{ client }}
                        </div>
                    </div>
                </div>
            </section>

            <section
                class="gsap-fade grid grid-cols-1 md:grid-cols-12 gap-8 pt-6"
            >
                <div
                    class="md:col-span-4 text-xs font-mono tracking-widest text-neutral-500 uppercase"
                >
                    INQUIRIES
                </div>
                <div class="md:col-span-8 space-y-8">
                    <div>
                        <h2
                            class="text-3xl sm:text-6xl font-black uppercase tracking-tight"
                        >
                            HAVE A PROJECT IN MIND?
                        </h2>
                    </div>

                    <div
                        class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                    >
                        <a
                            :href="`mailto:${email}`"
                            class="bg-white text-black hover:bg-neutral-200 font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 rounded-sm transition-colors text-center"
                        >
                            SEND AN EMAIL
                        </a>

                        <button
                            @click="copyEmail"
                            class="bg-surface hover:bg-neutral-800 text-neutral-300 font-mono text-xs tracking-widest uppercase px-6 py-4 rounded-sm transition-colors"
                        >
                            {{
                                copied
                                    ? "COPIED TO CLIPBOARD ✓"
                                    : "COPY EMAIL ADDRESS"
                            }}
                        </button>
                    </div>
                </div>
            </section>
        </main>

        <footer
            class="px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-neutral-500 gap-4"
        >
            <p>
                © {{ new Date().getFullYear() }} ALL IMAGES BELONG TO THEIR
                RESPECTIVE OWNERS.
            </p>
            <NuxtLink
                to="/"
                class="hover:text-white transition-colors uppercase tracking-widest"
            >
                BACK TO WORKS ↑
            </NuxtLink>
        </footer>
    </div>
</template>
