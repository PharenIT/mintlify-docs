<script setup lang="ts">
import { ChartDonutBreakdown, type ChartConfig } from '@pharen/ui';

const data = [
  { key: 'completed', label: 'Completed', value: 68, chartValue: 68, fill: 'var(--primary)', meta: '68 runs' },
  { key: 'running', label: 'Running', value: 21, chartValue: 21, fill: 'var(--info)', meta: '21 runs' },
  { key: 'failed', label: 'Failed', value: 11, chartValue: 11, fill: 'var(--destructive)', meta: '11 runs' },
];
const config: ChartConfig = {
  completed: { label: 'Completed', color: 'var(--primary)' },
  running: { label: 'Running', color: 'var(--info)' },
  failed: { label: 'Failed', color: 'var(--destructive)' },
};
</script>

<template>
  <ChartDonutBreakdown
    title="Workflow runs"
    description="Status distribution for the last 100 runs."
    :data="data"
    :config="config"
    center-eyebrow="Total"
    center-label="Runs"
    center-value="100"
    empty-text="No runs yet"
    :tooltip-template="item => `${item.label}: ${item.value}%`"
    class="w-full max-w-lg"
  />
</template>
