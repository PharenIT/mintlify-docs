<script setup lang="ts">
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperNav, StepperSeparator, StepperTitle, StepperTrigger } from '@pharen/ui';

const steps = [
  { step: 1, title: 'Account', description: 'Your details' },
  { step: 2, title: 'Workspace', description: 'Team setup' },
  { step: 3, title: 'Finish', description: 'Review' },
];
</script>

<template>
  <Stepper :default-value="2" class="w-full max-w-2xl">
    <StepperNav>
      <StepperItem v-for="item in steps" :key="item.step" :step="item.step">
        <StepperTrigger>
          <StepperIndicator>{{ item.step }}</StepperIndicator>
          <span class="hidden text-left sm:block"><StepperTitle>{{ item.title }}</StepperTitle><StepperDescription>{{ item.description }}</StepperDescription></span>
        </StepperTrigger>
        <StepperSeparator v-if="item.step < steps.length" />
      </StepperItem>
    </StepperNav>
  </Stepper>
</template>
