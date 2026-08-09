<script setup lang="ts">
import { Badge, Plan, PlanAction, PlanContent, PlanDescription, PlanFooter, PlanHeader, PlanTitle, PlanTrigger } from '@pharen/ui';
</script>

<template>
  <Plan default-open class="w-full max-w-lg">
    <PlanHeader>
      <div><PlanTitle>Launch workflow</PlanTitle><PlanDescription>Review the execution plan before starting.</PlanDescription></div>
      <PlanAction><Badge variant="secondary">3 steps</Badge><PlanTrigger /></PlanAction>
    </PlanHeader>
    <PlanContent>
      <ol class="grid gap-2 text-sm"><li>1. Load workspace records</li><li>2. Generate the weekly summary</li><li>3. Send the result to Slack</li></ol>
    </PlanContent>
    <PlanFooter>Estimated duration: 45 seconds</PlanFooter>
  </Plan>
</template>
