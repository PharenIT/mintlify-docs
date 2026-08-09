<script setup lang="ts">
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@pharen/ui';
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New workflow<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
        <MenubarItem>Duplicate<MenubarShortcut>⇧⌘D</MenubarShortcut></MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Archive</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu><MenubarTrigger>Edit</MenubarTrigger><MenubarContent><MenubarItem>Undo</MenubarItem><MenubarItem>Redo</MenubarItem></MenubarContent></MenubarMenu>
  </Menubar>
</template>
