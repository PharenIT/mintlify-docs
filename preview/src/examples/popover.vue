<script setup lang="ts">
import { Button, Popover, PopoverContent, PopoverTrigger } from '@pharen/ui';
</script>

<template>
  <Popover>
    <PopoverTrigger as-child><Button variant="outline">Open</Button></PopoverTrigger>
    <PopoverContent>Choose a workspace action.</PopoverContent>
  </Popover>
</template>
