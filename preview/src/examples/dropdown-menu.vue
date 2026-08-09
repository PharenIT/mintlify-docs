<script setup lang="ts">
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@pharen/ui';
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child><Button variant="outline">Workspace actions</Button></DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Open settings<DropdownMenuShortcut>⌘,</DropdownMenuShortcut></DropdownMenuItem>
      <DropdownMenuItem>Invite members<DropdownMenuShortcut>⌘I</DropdownMenuShortcut></DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="text-destructive">Leave workspace</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
