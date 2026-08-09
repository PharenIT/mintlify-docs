<script setup lang="ts">
import { Suggestion, Suggestions } from '@pharen/ui/components/ai';

const prompts = ['Summarize this page', 'Create a workflow', 'Explain the errors'];
</script>

<template>
  <Suggestions><Suggestion v-for="prompt in prompts" :key="prompt" :suggestion="prompt" /></Suggestions>
</template>
