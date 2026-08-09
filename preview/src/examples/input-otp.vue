<script setup lang="ts">
import { ref } from 'vue';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@pharen/ui';

const code = ref(['4', '2']);
</script>

<template>
  <InputOTP v-model="code" :maxlength="6">
    <InputOTPGroup><InputOTPSlot v-for="index in 6" :key="index" :index="index - 1" /></InputOTPGroup>
  </InputOTP>
</template>
