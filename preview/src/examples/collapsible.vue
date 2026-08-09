<script setup lang="ts">
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@pharen/ui';
</script>

<template>
  <Collapsible :default-open="true" class="w-full max-w-md rounded-xl border bg-card p-4 shadow-sm">
    <CollapsibleTrigger class="flex w-full items-center justify-between text-left text-sm font-semibold">
      Advanced settings <span class="text-muted-foreground">⌄</span>
    </CollapsibleTrigger>
    <CollapsibleContent class="pt-3 text-sm text-muted-foreground">
      Configure retries, execution timeout, and failure notifications.
    </CollapsibleContent>
  </Collapsible>
</template>
