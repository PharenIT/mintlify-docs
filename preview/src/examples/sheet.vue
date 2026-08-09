<script setup lang="ts">
import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@pharen/ui';
</script>

<template>
  <Sheet>
    <SheetTrigger as-child><Button variant="outline">Open workspace settings</Button></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Workspace settings</SheetTitle>
        <SheetDescription>Manage the name, visibility, and default permissions.</SheetDescription>
      </SheetHeader>
      <div class="mt-6 rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">Settings form content</div>
    </SheetContent>
  </Sheet>
</template>
