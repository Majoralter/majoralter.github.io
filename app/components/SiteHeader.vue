<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { CATEGORIES } from "~/data/projects";

withDefaults(
    defineProps<{
        activeCategory?: string;
    }>(),
    {
        activeCategory: "",
    }
);

const route = useRoute();
const isMenuOpen = ref(false);

const categories = computed(() =>
    CATEGORIES.filter((cat) => cat.value !== "all")
);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

watch(() => route.path, () => {
    isMenuOpen.value = false;
});
</script>

<template>
    <header
        class="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-surface px-6 py-4 flex items-center justify-between"
    >
        <NuxtLink
            to="/"
            @click="closeMenu"
            class="text-xl font-black tracking-tighter text-white hover:text-neutral-400 transition-colors z-50"
        >
            MA.
        </NuxtLink>

        <div
            class="hidden md:flex items-center space-x-6 text-xs font-mono tracking-widest uppercase"
        >
            <NuxtLink
                v-for="cat in categories"
                :key="cat.value"
                :to="`/${cat.value}`"
                class="transition-colors py-1 relative"
                :class="
                    activeCategory === cat.value
                        ? 'text-white font-bold'
                        : 'text-neutral-500 hover:text-neutral-300'
                "
            >
                {{ cat.label }}
            </NuxtLink>
        </div>

        <div class="flex items-center gap-6">
            <NuxtLink
                to="/about"
                class="hidden md:block text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
            >
                INFO
            </NuxtLink>

            <button
                @click="toggleMenu"
                class="md:hidden text-xs font-mono uppercase text-neutral-300 hover:text-white transition-colors py-1 px-2 border border-neutral-800 rounded z-50"
                :aria-expanded="isMenuOpen"
                aria-label="Toggle navigation menu"
            >
                {{ isMenuOpen ? "CLOSE [X]" : "MENU [=]" }}
            </button>
        </div>

        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <div
                v-if="isMenuOpen"
                class="fixed inset-0 top-0 left-0 w-full h-[80vh] bg-background/98 backdrop-blur-xl z-40 flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
            >
                <nav class="flex flex-col space-y-6">
                    <p class="text-[10px] font-mono uppercase text-neutral-500 tracking-widest border-b border-neutral-800 pb-2">
                        WORK
                    </p>
                    
                    <NuxtLink
                        v-for="cat in categories"
                        :key="cat.value"
                        :to="`/${cat.value}`"
                        @click="closeMenu"
                        class="text-2xl font-mono uppercase tracking-tight transition-colors flex items-center justify-between"
                        :class="
                            activeCategory === cat.value
                                ? 'text-white font-bold'
                                : 'text-neutral-500 hover:text-neutral-200'
                        "
                    >
                        <span>{{ cat.label }}</span>
                        <span v-if="activeCategory === cat.value" class="text-xs text-white">●</span>
                    </NuxtLink>
                </nav>

                <div class="border-t border-neutral-800 pt-6 flex justify-between items-center">
                    <NuxtLink
                        to="/about"
                        @click="closeMenu"
                        class="text-sm font-mono tracking-widest uppercase text-neutral-300 hover:text-white transition-colors"
                    >
                        INFO / ABOUT →
                    </NuxtLink>
                </div>
            </div>
        </Transition>
    </header>
</template>