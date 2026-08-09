<script setup lang="ts">
import { Badge, Button, Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@pharen/ui';
</script>

<template>
  <Item variant="outline" class="w-full max-w-md">
    <ItemContent>
      <ItemTitle>Customer onboarding</ItemTitle>
      <ItemDescription>Runs when a new account is created.</ItemDescription>
    </ItemContent>
    <ItemActions><Badge variant="success">Active</Badge><Button size="sm" variant="ghost">Open</Button></ItemActions>
  </Item>
</template>
