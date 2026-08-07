<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { PROJECTS, type Artwork } from "~/data/projects";

const route = useRoute();

// Extract active category slug from current route parameter
const selectedCategory = computed(() => route.params.id as string);

const isModalOpen = ref<boolean>(false);
const activeItem = ref<Artwork | null>(null);
const activeSubIndex = ref<number>(0);

// Filter projects directly based on the route category slug
const filteredProjects = computed(() => {
    return PROJECTS.filter(
        (project) => project.category === selectedCategory.value,
    );
});

const handleSelectArtwork = (
    item: Artwork,
    _index: number,
    subIndex: number,
) => {
    activeItem.value = item;
    activeSubIndex.value = subIndex;
    isModalOpen.value = true;
};

console.log(filteredProjects.value, PROJECTS, selectedCategory.value)
</script>

<template>
    <div
        class="min-h-screen bg-background text-neutral-100 flex flex-col font-sans"
    >
        <SiteHeader
            :active-category="selectedCategory"
        />

        <main class="grow">
            <PortfolioGrid
                :items="filteredProjects"
                @select="handleSelectArtwork"
            />
        </main>

        <ArtworkModal
            :is-open="isModalOpen"
            :active-item="activeItem"
            :initial-sub-index="activeSubIndex"
            @close="isModalOpen = false"
        />

        <footer
            class="px-8 py-16 text-center text-xs font-mono text-neutral-500"
        >
            <p>
                © {{ new Date().getFullYear() }} MAJORALTER. ALL IMAGES BELONG TO THEIR RESPECTIVE OWNERS.
            </p>
        </footer>
    </div>
</template>