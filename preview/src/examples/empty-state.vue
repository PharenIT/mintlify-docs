<script setup lang="ts">
import { EmptyState } from '@pharen/ui';
</script>

<template>
  <EmptyState
    title="No results found"
    description="Try another search term or clear the filters."
    :icons="['lucide:search', 'lucide:filter', 'lucide:files']"
  />
</template>
