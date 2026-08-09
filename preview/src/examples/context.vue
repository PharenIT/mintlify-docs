<script setup lang="ts">
import { Context, ContextContent, ContextContentBody, ContextContentFooter, ContextContentHeader, ContextInputUsage, ContextOutputUsage, ContextTrigger } from '@pharen/ui/components/ai';
</script>

<template>
  <Context
    :used-tokens="18420"
    :max-tokens="128000"
    :default-open="true"
    model-id="GPT-5.4"
    :usage="{ inputTokens: 14200, outputTokens: 4220, costEur: 0.084, currency: 'EUR' }"
  >
    <ContextTrigger />
    <ContextContent>
      <ContextContentHeader />
      <ContextContentBody class="space-y-2"><ContextInputUsage /><ContextOutputUsage /></ContextContentBody>
      <ContextContentFooter />
    </ContextContent>
  </Context>
</template>
