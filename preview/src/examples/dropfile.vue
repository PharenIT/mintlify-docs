<script setup lang="ts">
import { DropFile } from '@pharen/ui';
</script>

<template>
  <DropFile
    accept="image/png,image/jpeg"
    :max-size="5 * 1024 * 1024"
    label="Drop screenshots here or choose files"
    description="PNG or JPG up to 5 MB"
  />
</template>
