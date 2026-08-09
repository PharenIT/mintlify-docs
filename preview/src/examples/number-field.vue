<script setup lang="ts">
import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput, NumberFieldScrubArea } from '@pharen/ui';
</script>

<template>
  <NumberField :default-value="12" :min="0" :max="100" class="w-56">
    <NumberFieldScrubArea label="Retry limit" />
    <NumberFieldGroup>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldGroup>
  </NumberField>
</template>
