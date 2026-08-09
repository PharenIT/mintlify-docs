<script setup lang="ts">
import { ref } from 'vue';
import { ToggleGroup, ToggleGroupItem } from '@pharen/ui';

const alignment = ref('left');
</script>

<template>
  <ToggleGroup v-model="alignment" type="single" variant="outline" :spacing="0">
    <ToggleGroupItem value="left" aria-label="Align left">Left</ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">Center</ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right">Right</ToggleGroupItem>
  </ToggleGroup>
</template>
