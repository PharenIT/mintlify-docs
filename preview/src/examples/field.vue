<script setup lang="ts">
import { Field, FieldDescription, FieldLabel, Input } from '@pharen/ui';
</script>

<template>
  <Field class="w-full max-w-sm">
    <FieldLabel for="workspace-name">Workspace name</FieldLabel>
    <Input id="workspace-name" value="Pharen" />
    <FieldDescription>This name is visible to every workspace member.</FieldDescription>
  </Field>
</template>
