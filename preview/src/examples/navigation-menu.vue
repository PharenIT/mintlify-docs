<script setup lang="ts">
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@pharen/ui';
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent class="p-3">
          <div class="grid w-72 gap-2">
            <NavigationMenuLink href="#hub" class="rounded-md p-2 hover:bg-accent"><strong class="block text-sm">Pharen Hub</strong><span class="text-xs text-muted-foreground">Workflows and agents in one place.</span></NavigationMenuLink>
            <NavigationMenuLink href="#ui" class="rounded-md p-2 hover:bg-accent"><strong class="block text-sm">Pharen UI</strong><span class="text-xs text-muted-foreground">Reusable Vue components.</span></NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem><NavigationMenuLink href="#docs" class="px-4 py-2 text-sm">Docs</NavigationMenuLink></NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
