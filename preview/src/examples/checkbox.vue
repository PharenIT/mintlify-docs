<script setup lang="ts">
import { Checkbox, Label } from '@pharen/ui';
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="updates" />
    <Label for="updates">Email me product updates</Label>
  </div>
</template>
