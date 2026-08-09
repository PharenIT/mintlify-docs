<script setup lang="ts">
import { Plan, PlanTask } from '@pharen/ui/components/ai';
</script>

<template>
  <Plan class="w-full max-w-lg">
    <template #description><p class="mt-1 text-sm text-muted-foreground">Three steps to publish the workflow.</p></template>
    <PlanTask title="Validate inputs" status="done" />
    <PlanTask title="Run automation" status="in_progress" />
    <PlanTask title="Publish results" status="todo" />
  </Plan>
</template>
