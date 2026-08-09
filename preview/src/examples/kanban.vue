<script setup lang="ts">
import { Kanban, KanbanBoard, KanbanCard, KanbanColumn, KanbanColumnContent, KanbanHeader, KanbanItem } from '@pharen/ui';

const columns = {
  todo: [{ id: 'brief', title: 'Write project brief' }, { id: 'research', title: 'Research competitors' }],
  done: [{ id: 'scope', title: 'Confirm scope' }],
};
</script>

<template>
  <Kanban :default-value="columns" :get-item-value="item => item.id" class="w-full">
    <KanbanBoard class="sm:grid-cols-2">
      <KanbanColumn v-for="(_, key) in columns" :key="key" :value="key">
        <KanbanHeader class="capitalize">{{ key }}</KanbanHeader>
        <KanbanColumnContent :value="key" class="rounded-lg bg-muted/50 p-2">
          <template #default="{ item }"><KanbanItem :value="item.id"><KanbanCard>{{ item.title }}</KanbanCard></KanbanItem></template>
        </KanbanColumnContent>
      </KanbanColumn>
    </KanbanBoard>
  </Kanban>
</template>
