<script setup lang="ts">
import { Progress } from '@pharen/ui';
</script>

<template>
  <div class="w-full max-w-sm space-y-2">
    <div class="flex justify-between text-sm"><span>Workspace setup</span><span class="font-medium">64%</span></div>
    <Progress :model-value="64" />
  </div>
</template>
