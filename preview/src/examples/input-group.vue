<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from '@pharen/ui';
</script>

<template>
  <InputGroup class="w-full max-w-md">
    <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
    <InputGroupInput value="pharen.app/workflows" aria-label="Workspace URL" />
    <InputGroupAddon align="inline-end"><InputGroupButton>Copy</InputGroupButton></InputGroupAddon>
  </InputGroup>
</template>
