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
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
        <span class="font-bold">Logo</span>
      </div>
    </template>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <template #footer>
      <div class="flex items-center gap-2">
        <Button
          label="Account"
          icon="pi pi-user"
          class="flex-auto"
          outlined
        ></Button>
        <Button
          label="Logout"
          icon="pi pi-sign-out"
          class="flex-auto"
          severity="danger"
          text
        ></Button>
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
