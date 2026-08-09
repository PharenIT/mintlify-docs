<script setup lang="ts">
import { BorderBeam } from '@pharen/ui';
</script>

<template>
  <div class="relative w-full max-w-sm overflow-hidden rounded-xl border bg-card p-6 shadow-sm">
    <BorderBeam :duration="7" />
    <p class="text-sm font-semibold">Live workflow</p>
    <p class="mt-1 text-sm text-muted-foreground">The animated beam follows the surface border.</p>
  </div>
</template>
