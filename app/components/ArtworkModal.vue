<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import type { Artwork } from "~/data/projects";

const props = defineProps<{
    isOpen: boolean;
    activeItem: Artwork | null;
    initialSubIndex?: number;
}>();

const emit = defineEmits<{
    (e: "close"): void;
}>();

const subIndex = ref(0);
const imageRef = ref<HTMLElement | null>(null);

watch(
    () => props.initialSubIndex,
    (newVal) => {
        subIndex.value = newVal || 0;
    },
    { immediate: true },
);

const currentImage = computed(() => {
    if (!props.activeItem || !props.activeItem.images.length) return "";
    return (
        props.activeItem.images[subIndex.value] || props.activeItem.images[0]
    );
});

const next = () => {
    if (!props.activeItem) return;
    subIndex.value = (subIndex.value + 1) % props.activeItem.images.length;
};

const prev = () => {
    if (!props.activeItem) return;
    subIndex.value =
        (subIndex.value - 1 + props.activeItem.images.length) %
        props.activeItem.images.length;
};

watch(subIndex, () => {
    if (imageRef.value) {
        gsap.fromTo(
            imageRef.value,
            { opacity: 0.3, scale: 0.98 },
            { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
        );
    }
});

const handleKeyDown = (e: KeyboardEvent) => {
    if (!props.isOpen) return;
    if (e.key === "Escape") emit("close");
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
};

onMounted(() => window.addEventListener("keydown", handleKeyDown));
onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div
                v-if="isOpen && activeItem"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-12"
                @click.self="emit('close')"
            >
                <div
                    class="absolute top-6 left-6 right-6 flex justify-between items-center z-10 pointer-events-none"
                >
                    <div
                        class="text-xs font-mono tracking-widest text-neutral-400 uppercase"
                    >
                        {{ activeItem.title }} — {{ subIndex + 1 }} /
                        {{ activeItem.images.length }}
                    </div>
                    <button
                        @click="emit('close')"
                        class="pointer-events-auto text-neutral-400 hover:text-white text-xs font-mono tracking-widest uppercase p-2"
                    >
                        [ CLOSE ]
                    </button>
                </div>

                <div
                    class="relative max-w-6xl w-full flex flex-col items-center pointer-events-none"
                >
                    <div
                        ref="imageRef"
                        class="relative max-h-[78vh] flex items-center justify-center"
                    >
                        <NuxtImg
                            :src="currentImage"
                            :alt="activeItem.title"
                            format="webp"
                            quality="80"
                            sizes="xs:100vw sm:90vw md:50vw lg:60vw"
                            placeholder
                            loading="lazy"
                            class="max-h-[60vh] max-w-full object-contain shadow-2xl"
                        />
                    </div>

                    <div class="mt-6 text-center pointer-events-auto">
                        <h2
                            class="text-xl font-bold tracking-tight text-white uppercase"
                        >
                            {{ activeItem.title }}
                        </h2>
                        <p
                            v-if="activeItem.artist"
                            class="text-sm font-mono text-neutral-400 mt-1"
                        >
                            {{ activeItem.artist }} ({{ activeItem.year }})
                        </p>
                    </div>
                </div>

                <template v-if="activeItem.images.length > 1">
                    <button
                        @click="prev"
                        class="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white font-mono text-2xl p-4 transition-colors"
                        aria-label="Previous image"
                    >
                        ←
                    </button>
                    <button
                        @click="next"
                        class="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white font-mono text-2xl p-4 transition-colors"
                        aria-label="Next image"
                    >
                        →
                    </button>
                </template>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
