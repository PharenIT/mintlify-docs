<script setup lang="ts">
import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@pharen/ui';
</script>

<template>
  <Dialog>
    <DialogTrigger as-child><Button variant="outline">Open dialog</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit workspace</DialogTitle>
        <DialogDescription>Update the workspace name and details.</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>
