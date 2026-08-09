<script setup lang="ts">
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger } from '@pharen/ui';
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>Pharen</SidebarHeader>
      <SidebarContent>Navigation</SidebarContent>
    </Sidebar>
    <SidebarInset>
      <SidebarTrigger />
      <main>Page content</main>
    </SidebarInset>
  </SidebarProvider>
</template>
