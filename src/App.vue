<template>
  <div class="dark:bg-surface-900 dark:text-surface-200">
    <Navbar />
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
</script>