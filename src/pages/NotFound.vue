<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-extrabold">404</h1>
        <h1>Page not found</h1>

        <RouterLink to="/">
            <Button class='mt-2'>Go Home</Button>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
</script>