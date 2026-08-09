<script setup lang="ts">
import { Button, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@pharen/ui';
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child><Button variant="outline">Open run details</Button></DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-lg">
        <DrawerHeader>
          <DrawerTitle>Workflow run completed</DrawerTitle>
          <DrawerDescription>12 steps finished successfully in 42 seconds.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>View run</Button>
          <DrawerClose as-child><Button variant="outline">Close</Button></DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>
