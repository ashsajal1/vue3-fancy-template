<template>
    <nav class="flex items-center justify-between p-4 bg-primary-200">
        <p>Logo</p>

        <div class="flex items-center justify-between">
            <Button @click="next()">
                <SunDim :size="20" v-if="mode === 'dark'" />
                <Moon :size="20" v-if="mode === 'light'" />
                <MonitorDot :size="20" v-if="mode === 'auto'" />{{ mode }}
            </Button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { Button } from 'primevue';
import { watchEffect } from 'vue'
import { SunDim, Moon, MonitorDot } from 'lucide-vue-next';

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