<template>
  <nav
    class="flex items-center justify-between p-4 border-b dark:border-b-gray-700"
  >
    <RouterLink to="/" class="text-2xl font-bold select-none cursor-pointer"
      >Logo</RouterLink
    >

    <div class="flex items-center justify-between gap-2">
      <Button :icon="themeIcon" rounded severity="secondary" @click="next()" />
      <Button class="sm:hidden" icon="pi pi-bars" @click="toggleDrawer" />
      <div class="hidden sm:flex items-center justify-between gap-2">
        <RouterLink to="/settings">
          <Button icon="pi pi-cog"></Button>
        </RouterLink>
        <RouterLink to="/about">
          <Button>About</Button>
        </RouterLink>
      </div>
    </div>
  </nav>

  <Drawer v-model:visible="isDrawerOpen">
    <template #header>
      <div class="flex items-center gap-2">
        <RouterLink to="/"><span class="font-bold">Logo</span></RouterLink>
      </div>
    </template>
    <div class="flex flex-col gap-2">
      <RouterLink to="/">
        <Button label="Home" icon="pi pi-home" class="w-full" />
      </RouterLink>

      <RouterLink to="/about">
        <Button label="About" class="w-full" />
      </RouterLink>
    </div>
    <template #footer>
      <div class="flex items-center mb-3 gap-2">
        <RouterLink to="/settings">
          <Button
            icon="pi pi-cog"
            label="Settings"
            class="w-full"
            outlined
            severity="danger"
          />
        </RouterLink>
        <Button
          label="Toggle Theme"
          :icon="themeIcon"
          class="w-full"
          severity="secondary"
          @click="next()"
          text
        />
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";
import { Button, Drawer } from "primevue";
import { watchEffect, computed, ref } from "vue";

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

const isDrawerOpen = ref(false);
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

watchEffect(() => (mode.value = state.value));
const themeIcon = computed(() =>
  state.value === "dark" ? "pi pi-sun" : "pi pi-moon"
);
</script>
