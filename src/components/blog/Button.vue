<template>
    <button @click="incrementCount">This is a button</button>
    <p>
        This is {{ count }}
    </p>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const count = ref(0)

    const incrementCount = () => {
        count.value += 1
    }
</script>