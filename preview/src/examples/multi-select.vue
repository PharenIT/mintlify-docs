<script setup lang="ts">
import { ref } from 'vue';
import { MultiSelect } from '@pharen/ui';

const selected = ref(['marketing', 'sales']);
const options = [
  { label: 'Marketing', value: 'marketing' },
  { label: 'Sales', value: 'sales' },
  { label: 'Support', value: 'support' },
];
</script>

<template><MultiSelect v-model="selected" :options="options" class="w-full max-w-sm" /></template>
