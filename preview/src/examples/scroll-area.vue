<script setup lang="ts">
import { ScrollArea } from '@pharen/ui';

const events = ['Workflow created', 'Trigger configured', 'Agent assigned', 'Test run completed', 'Workflow published', 'First run succeeded'];
</script>

<template>
  <ScrollArea class="h-40 w-full max-w-sm rounded-lg border">
    <div class="divide-y p-3">
      <div v-for="event in events" :key="event" class="py-2 text-sm">{{ event }}</div>
    </div>
  </ScrollArea>
</template>
