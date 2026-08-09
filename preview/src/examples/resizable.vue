<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@pharen/ui';
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="h-56 w-full max-w-lg overflow-hidden rounded-xl border">
    <ResizablePanel :default-size="35"><div class="grid size-full place-items-center bg-muted/40 text-sm font-medium">Sidebar</div></ResizablePanel>
    <ResizableHandle with-handle />
    <ResizablePanel :default-size="65"><div class="grid size-full place-items-center text-sm font-medium">Content</div></ResizablePanel>
  </ResizablePanelGroup>
</template>
