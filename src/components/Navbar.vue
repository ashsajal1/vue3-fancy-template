<template>
    <nav>
        <p>Logo</p>
        <Button @click="next()">{{ mode }}</Button>    
    </nav>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { Button } from 'primevue';
import { watchEffect } from 'vue'

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
})

const { state, next } = useCycleList(['dark', 'light', 'auto'] as const, { initialValue: mode })

watchEffect(() => mode.value = state.value)
</script>