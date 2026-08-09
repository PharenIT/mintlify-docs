<script setup lang="ts">
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from '@pharen/ui';
</script>

<template>
  <Command class="w-full max-w-md rounded-xl border shadow-sm">
    <CommandInput placeholder="Search actions..." />
    <CommandList>
      <CommandEmpty>No actions found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="workflow">Create workflow<CommandShortcut>⌘N</CommandShortcut></CommandItem>
        <CommandItem value="agent">Open agents<CommandShortcut>⌘A</CommandShortcut></CommandItem>
        <CommandItem value="settings">Workspace settings<CommandShortcut>⌘,</CommandShortcut></CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
