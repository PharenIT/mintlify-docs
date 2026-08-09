<script setup lang="ts">
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@pharen/ui';
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child><Button variant="outline">Hover or focus</Button></TooltipTrigger>
      <TooltipContent>Open workspace settings</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
