<script setup lang="ts">
import { DataGrid, DataGridContainer, DataGridTable } from '@pharen/ui';
import { getCoreRowModel, useVueTable, type ColumnDef } from '@tanstack/vue-table';

type Member = { name: string; role: string };
const data: Member[] = [{ name: 'Johannes', role: 'Owner' }];
const columns: ColumnDef<Member>[] = [
  { accessorKey: 'name', header: 'Member' },
  { accessorKey: 'role', header: 'Role' },
];
const table = useVueTable({ data, columns, getCoreRowModel: getCoreRowModel() });
</script>

<template>
  <DataGrid :table="table" :record-count="data.length">
    <DataGridContainer>
      <DataGridTable />
    </DataGridContainer>
  </DataGrid>
</template>
