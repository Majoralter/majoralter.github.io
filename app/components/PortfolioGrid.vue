<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import gsap from "gsap";
import type { Artwork } from "~/data/projects";

const props = defineProps<{
    items: Artwork[];
}>();

const emit = defineEmits<{
    (e: "select", item: Artwork, index: number, subImageIndex: number): void;
}>();

const gridRef = ref<HTMLElement | null>(null);

const activeSlideMap = ref<Record<string, number>>({});

const getActiveSlide = (id: string) => activeSlideMap.value[id] || 0;

const setSlide = (id: string, index: number, event?: Event) => {
    if (event) event.stopPropagation();
    activeSlideMap.value[id] = index;
};

const nextSlide = (item: Artwork, event: Event) => {
    event.stopPropagation();
    const current = getActiveSlide(item.id);
    const next = (current + 1) % item.images.length;
    activeSlideMap.value[item.id] = next;
};

const prevSlide = (item: Artwork, event: Event) => {
    event.stopPropagation();
    const current = getActiveSlide(item.id);
    const prev = (current - 1 + item.images.length) % item.images.length;
    activeSlideMap.value[item.id] = prev;
};

const getAspectRatioClass = (ratio?: "square" | "video" | "portrait") => {
    switch (ratio) {
        case "video":
            return "aspect-video";
        case "portrait":
            return "aspect-[3/4]";
        case "square":
        default:
            return "aspect-square";
    }
};

const animateGrid = () => {
    if (!gridRef.value) return;
    const cards = gridRef.value.querySelectorAll(".grid-card");
    gsap.killTweensOf(cards);
    gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power3.out" },
    );
};

watch(
    () => props.items,
    async () => {
        await nextTick();
        animateGrid();
    },
    { immediate: true },
);
</script>

<template>
    <div
        ref="gridRef"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-borderLine border-b border-surface items-center"
    >
        <div
            v-for="(item, index) in items"
            :key="item.id"
            @click="emit('select', item, index, getActiveSlide(item.id))"
            :class="[
                getAspectRatioClass(item.aspectRatio),
                'grid-card group relative overflow-hidden cursor-pointer select-none flex items-center justify-center p-1',
            ]"
        >
            <NuxtImg
                :src="item.images[getActiveSlide(item.id)]"
                :alt="`${item.title} - Slide ${getActiveSlide(item.id) + 1}`"
                format="webp"
                quality="80"
                sizes="xs:100vw sm:50vw md:33vw lg:25vw"
                loading="lazy"
                class="w-full h-auto group-hover:scale-105 transition-all duration-500 ease-out"
            />

            <div
                v-if="item.images.length > 1"
                class="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono tracking-widest text-neutral-300 rounded uppercase"
            >
                {{ getActiveSlide(item.id) + 1 }} / {{ item.images.length }}
            </div>

            <div
                v-if="item.images.length > 1"
                class="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"
            >
                <button
                    @click="prevSlide(item, $event)"
                    class="pointer-events-auto bg-black/80 hover:bg-white hover:text-black text-white text-xs font-mono p-2 transition-colors rounded"
                    aria-label="Previous slide"
                >
                    ←
                </button>
                <button
                    @click="nextSlide(item, $event)"
                    class="pointer-events-auto bg-black/80 hover:bg-white hover:text-black text-white text-xs font-mono p-2 transition-colors rounded"
                    aria-label="Next slide"
                >
                    →
                </button>
            </div>

            <div
                v-if="item.images.length > 1"
                class="absolute bottom-16 inset-x-0 flex justify-center items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
                <button
                    v-for="(_, imgIdx) in item.images"
                    :key="imgIdx"
                    @click="setSlide(item.id, imgIdx, $event)"
                    class="w-1.5 h-1.5 rounded-full transition-all"
                    :class="
                        getActiveSlide(item.id) === imgIdx
                            ? 'bg-white scale-125'
                            : 'bg-white/40 hover:bg-white/80'
                    "
                />
            </div>

            <div
                class="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end pointer-events-none"
            >
                <p
                    class="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1"
                >
                    {{ item.category.replace("-", " ") }}
                </p>
                <h3
                    class="text-lg font-bold text-white tracking-tight uppercase leading-tight"
                >
                    {{ item.title }}
                </h3>
                <p
                    v-if="item.artist"
                    class="text-xs text-neutral-300 font-mono mt-0.5"
                >
                    {{ item.artist }}
                </p>
            </div>
        </div>
    </div>
</template>
