<template>
  <Navbar />
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
</script>