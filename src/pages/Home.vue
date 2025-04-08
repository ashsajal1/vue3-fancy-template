<template>
  <h1>Count is {{ store.count }}</h1>

  <div class="flex gap-2">
    <Button label="Increment" @click="store.increment" />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { Button } from "primevue";

const store = useCounterStore();
</script>
