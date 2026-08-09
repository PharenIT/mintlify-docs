<script setup lang="ts">
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from '@pharen/ui';
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="grid h-36 w-72 place-items-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
      Right-click this workspace
    </ContextMenuTrigger>
    <ContextMenuContent class="w-52">
      <ContextMenuLabel>Workspace</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>Rename<ContextMenuShortcut>F2</ContextMenuShortcut></ContextMenuItem>
      <ContextMenuItem>Duplicate<ContextMenuShortcut>⌘D</ContextMenuShortcut></ContextMenuItem>
      <ContextMenuItem class="text-destructive">Delete</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
