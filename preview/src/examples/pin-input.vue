<script setup lang="ts">
import { ref } from 'vue';
import { PinInput, PinInputGroup, PinInputSeparator, PinInputSlot } from '@pharen/ui';

const pin = ref(['1', '5', '8']);
</script>

<template>
  <PinInput v-model="pin" :maxlength="6">
    <PinInputGroup><PinInputSlot v-for="index in 3" :key="index" :index="index - 1" /></PinInputGroup>
    <PinInputSeparator />
    <PinInputGroup><PinInputSlot v-for="index in [3, 4, 5]" :key="index" :index="index" /></PinInputGroup>
  </PinInput>
</template>
