<script setup lang="ts">
import { LiveWaveform } from '@pharen/ui';
</script>

<template>
  <div class="w-full max-w-md rounded-lg border p-4">
    <div class="mb-3 flex items-center justify-between text-sm"><span class="font-medium">Microphone input</span><span class="text-muted-foreground">Waiting</span></div>
    <LiveWaveform label="Microphone input" class="text-primary" />
  </div>
</template>
