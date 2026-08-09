<script setup lang="ts">
import { Tool, ToolInput, ToolOutput } from '@pharen/ui/components/ai';
</script>

<template>
  <Tool tool-name="Search workspace" state="output-available" class="w-full max-w-lg">
    <ToolInput :input="{ query: 'Q3 plan' }" />
    <ToolOutput output="3 matching documents" />
  </Tool>
</template>
