<script setup lang="ts">
import { ref } from 'vue';
import { RemoteSelect } from '@pharen/ui';

const value = ref('berlin');
const fetchOptions = async () => [
  { label: 'Berlin', value: 'berlin' },
  { label: 'Hamburg', value: 'hamburg' },
  { label: 'Munich', value: 'munich' },
];
</script>

<template><RemoteSelect v-model="value" :fetch-fn="fetchOptions" class="w-full max-w-sm" /></template>
