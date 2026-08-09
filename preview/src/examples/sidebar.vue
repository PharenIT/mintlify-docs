<script setup lang="ts">
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@pharen/ui';
</script>

<template>
  <SidebarProvider class="h-80 min-h-0 overflow-hidden rounded-xl border bg-sidebar">
    <Sidebar collapsible="none" class="w-56 border-r border-sidebar-border">
      <SidebarHeader><span class="px-2 text-sm font-semibold">Pharen</span></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in ['Overview', 'Workflows', 'Agents']" :key="item">
                <SidebarMenuButton :is-active="item === 'Overview'">{{ item }}</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset class="min-w-0">
      <header class="flex h-12 items-center gap-2 border-b px-4"><SidebarTrigger /><span class="text-sm font-medium">Overview</span></header>
      <main class="grid flex-1 place-items-center p-6 text-sm text-muted-foreground">Workspace content</main>
    </SidebarInset>
  </SidebarProvider>
</template>
