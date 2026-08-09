<script setup lang="ts">
import { ref } from 'vue';
import { DetailIconNav } from '@pharen/ui';

const active = ref('overview');
const items = [
  { id: 'overview', label: 'Overview', icon: 'lucide:layout-dashboard' },
  { id: 'activity', label: 'Activity', icon: 'lucide:activity', badge: '3' },
  { id: 'settings', label: 'Settings', icon: 'lucide:settings' },
];
</script>

<template>
  <DetailIconNav :items="items" :active-id="active" @select="active = $event" />
</template>
