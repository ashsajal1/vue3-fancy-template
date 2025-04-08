<template>
  <nav
    class="flex items-center justify-between p-4 border-b dark:border-b-gray-700"
  >
    <RouterLink to="/" class="text-2xl font-bold select-none cursor-pointer"
      >Logo</RouterLink
    >

    <div class="flex items-center justify-between gap-2">
      <Button
        :icon="themeIcon"
        rounded
        variant="secondary"
        severity="secondary"
        @click="next()"
      >
      </Button>
      <RouterLink to="/settings">
        <Button icon="pi pi-cog" size="medium"></Button>
      </RouterLink>
      <RouterLink to="/about">
        <Button>About</Button>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";
import { Button } from "primevue";
import { watchEffect, computed } from "vue";

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: "dark contrast",
    cafe: "cafe",
  },
});

const { state, next } = useCycleList(["dark", "light"] as const, {
  initialValue: mode,
});

watchEffect(() => (mode.value = state.value));
const themeIcon = computed(() =>
  state.value === "dark" ? "pi pi-sun" : "pi pi-moon"
);
</script>
