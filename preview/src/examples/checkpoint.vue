<script setup lang="ts">
import { Checkpoint, CheckpointIcon, CheckpointTrigger } from '@pharen/ui/components/ai';
</script>

<template>
  <Checkpoint class="w-full max-w-lg">
    <CheckpointTrigger tooltip="Restore this checkpoint" class="flex items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-muted">
      <CheckpointIcon /> Saved before publishing
    </CheckpointTrigger>
  </Checkpoint>
</template>
