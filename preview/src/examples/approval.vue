<script setup lang="ts">
import { ApprovalPresentation } from '@pharen/ui/components/ai';

const presentation = {
  kind: 'browser_batch' as const,
  toolName: 'browser',
  riskClass: 'mutation' as const,
  executionTarget: 'local' as const,
  approvalScope: 'single_call' as const,
  steps: [
    { position: 1, action: 'open_page', target: 'pharen.app', riskClass: 'read' as const },
    { position: 2, action: 'submit_form', target: 'Create workflow', riskClass: 'mutation' as const },
  ],
};
</script>

<template><ApprovalPresentation :presentation="presentation" label="Planned browser actions" /></template>
