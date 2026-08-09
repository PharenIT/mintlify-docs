<script setup lang="ts">
import { AspectRatio } from '@pharen/ui';
</script>

<template>
  <AspectRatio :ratio="16 / 9" class="w-full max-w-md overflow-hidden rounded-xl bg-muted">
    <div class="grid size-full place-items-center bg-primary/10 text-sm font-medium text-primary">
      16:9 preview
    </div>
  </AspectRatio>
</template>
