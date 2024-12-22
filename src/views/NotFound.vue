<template>
    <main class="notfound-main">
        <h1>404 📎</h1>
        <p>Page broken or doesn't exist.</p>
    </main>
</template>

<style lang="scss">
    .notfound-main {
        @include flex-layout(center, center, column, nowrap, 0);

        h1 {
            font-size: var(--font-size-fluid-3);
        }
    }
</style>