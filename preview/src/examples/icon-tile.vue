<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { IconTile } from '@pharen/ui';
</script>

<template>
  <div class="flex items-center gap-3">
    <IconTile variant="primary" size="lg"><Icon icon="lucide:sparkles" /></IconTile>
    <div><p class="text-sm font-medium">AI automation</p><p class="text-xs text-muted-foreground">Ready to run</p></div>
  </div>
</template>
