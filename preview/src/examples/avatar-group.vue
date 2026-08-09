<script setup lang="ts">
import { AvatarGroup } from '@pharen/ui';

const people = [
  { fallback: 'JK', alt: 'Johannes Kanthak' },
  { fallback: 'AM', alt: 'Alex Morgan' },
  { fallback: 'SL', alt: 'Sam Lee' },
  { fallback: 'RK', alt: 'Robin Kim' },
  { fallback: 'TN', alt: 'Taylor Nguyen' },
];
</script>

<template>
  <AvatarGroup :items="people" :max="4" size="base" />
</template>
