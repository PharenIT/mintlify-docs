<script setup lang="ts">
import { ChainOfThought, ChainOfThoughtContent, ChainOfThoughtHeader, ChainOfThoughtStep } from '@pharen/ui/components/ai';
</script>

<template>
  <ChainOfThought default-open class="w-full max-w-lg">
    <ChainOfThoughtHeader>How the answer was prepared</ChainOfThoughtHeader>
    <ChainOfThoughtContent>
      <ChainOfThoughtStep label="Searched the workspace" description="Found 12 related documents." icon="lucide:search" status="complete" />
      <ChainOfThoughtStep label="Compared the results" description="Checked dates and duplicate entries." icon="lucide:list-checks" status="active" :spin="false" last />
    </ChainOfThoughtContent>
  </ChainOfThought>
</template>
