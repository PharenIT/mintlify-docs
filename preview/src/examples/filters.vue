<script setup lang="ts">
import { Filters } from '@pharen/ui';
import { ref } from 'vue';
import type { Filter, FilterFieldConfig } from '@pharen/ui';

const filters = ref<Filter[]>([]);
const fields: FilterFieldConfig[] = [
  { id: 'status', label: 'Status', type: 'select', options: [
    { label: 'Active', value: 'active' },
    { label: 'Paused', value: 'paused' },
  ] },
];
</script>

<template>
  <Filters v-model="filters" :fields="fields" />
</template>
