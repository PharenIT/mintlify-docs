<script setup lang="ts">
import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from '@pharen/ui';
</script>

<template>
  <Empty class="w-full max-w-md border">
    <EmptyHeader>
      <EmptyTitle>No workflows yet</EmptyTitle>
      <EmptyDescription>Create a workflow to automate your first process.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent><Button size="sm">Create workflow</Button></EmptyContent>
  </Empty>
</template>
