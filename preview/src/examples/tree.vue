<script setup lang="ts">
import { Tree, TreeItem, TreeItemLabel } from '@pharen/ui';

type Node = { id: string; label: string; children?: Node[] };
const items: Node[] = [
  { id: 'workspace', label: 'Workspace', children: [
    { id: 'documents', label: 'Documents' },
    { id: 'workflows', label: 'Workflows', children: [{ id: 'published', label: 'Published' }] },
  ] },
];
</script>

<template>
  <Tree :items="items" :get-key="node => node.id" :get-children="node => node.children" :default-expanded="['workspace', 'workflows']" class="w-full max-w-sm">
    <template #default="{ flattenItems }">
      <TreeItem v-for="item in flattenItems" :key="item.value.id" v-bind="item.bind" :value="item.value" :level="item.level">
        <TreeItemLabel>{{ item.value.label }}</TreeItemLabel>
      </TreeItem>
    </template>
  </Tree>
</template>
