<script setup lang="ts">
import { ref } from 'vue';
import { SegmentedControl } from '@pharen/ui';

const period = ref('month');
const options = [
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
  { label: 'Year', value: 'year' },
];
</script>

<template><SegmentedControl v-model="period" :options="options" size="md" /></template>
