<script setup lang="ts">
import { Scrollspy } from '@pharen/ui';
</script>

<template>
  <Scrollspy class="flex items-center gap-2 rounded-lg border p-1">
    <a href="#overview" data-scrollspy-anchor="overview" class="rounded-md px-3 py-1.5 text-sm data-[active]:bg-primary data-[active]:text-primary-foreground">Overview</a>
    <a href="#usage" data-scrollspy-anchor="usage" class="rounded-md px-3 py-1.5 text-sm data-[active]:bg-primary data-[active]:text-primary-foreground">Usage</a>
    <a href="#api" data-scrollspy-anchor="api" class="rounded-md px-3 py-1.5 text-sm data-[active]:bg-primary data-[active]:text-primary-foreground">API</a>
  </Scrollspy>
</template>
