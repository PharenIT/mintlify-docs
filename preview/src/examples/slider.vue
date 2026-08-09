<script setup lang="ts">
import { Slider } from '@pharen/ui';
</script>

<template>
  <Slider :default-value="[40]" :max="100" :step="1" />
</template>
