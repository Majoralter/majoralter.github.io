<script setup lang="ts">
import { CATEGORIES } from "~/data/projects";

defineProps<{
    modelValue: string;
}>();

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
    <div class="relative inline-block w-64">
        <label for="category-select" class="sr-only">Filter by Category</label>
        <select
            id="category-select"
            :value="modelValue"
            @change="
                emit(
                    'update:modelValue',
                    ($event.target as HTMLSelectElement).value,
                )
            "
            class="w-full bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-lg px-4 py-3 text-sm tracking-wide uppercase font-medium focus:outline-none focus:border-neutral-500 transition-colors cursor-pointer appearance-none"
        >
            <option
                v-for="cat in CATEGORIES"
                :key="cat.value"
                :value="cat.value"
            >
                {{ cat.label }}
            </option>
        </select>
        <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400"
        >
            ▼
        </div>
    </div>
</template>
