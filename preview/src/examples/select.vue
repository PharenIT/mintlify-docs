<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@pharen/ui';
</script>

<template>
  <Select>
    <SelectTrigger><SelectValue placeholder="Choose a role" /></SelectTrigger>
    <SelectContent>
      <SelectItem value="admin">Admin</SelectItem>
      <SelectItem value="member">Member</SelectItem>
    </SelectContent>
  </Select>
</template>
