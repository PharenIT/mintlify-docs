<script setup lang="ts">
import { ref } from 'vue';
import { Sortable, SortableItem, SortableItemHandle } from '@pharen/ui';

const tasks = ref([
  { id: 'research', label: 'Research competitors' },
  { id: 'draft', label: 'Draft campaign' },
  { id: 'review', label: 'Review copy' },
]);
</script>

<template>
  <Sortable v-model="tasks" :get-item-value="item => item.id" class="grid w-full max-w-sm gap-2">
    <SortableItem v-for="task in tasks" :key="task.id" :value="task.id" class="flex items-center gap-2 rounded-lg border bg-card p-3">
      <SortableItemHandle :label="`Move ${task.label}`" />
      <span class="text-sm">{{ task.label }}</span>
    </SortableItem>
  </Sortable>
</template>
