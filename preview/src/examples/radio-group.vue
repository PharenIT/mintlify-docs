<script setup lang="ts">
import { ref } from 'vue';
import { Label, RadioGroup, RadioGroupItem } from '@pharen/ui';

const plan = ref('pro');
</script>

<template>
  <RadioGroup v-model="plan" class="grid gap-3">
    <div class="flex items-center gap-2"><RadioGroupItem id="starter" value="starter" /><Label for="starter">Starter</Label></div>
    <div class="flex items-center gap-2"><RadioGroupItem id="pro" value="pro" /><Label for="pro">Pro</Label></div>
  </RadioGroup>
</template>
