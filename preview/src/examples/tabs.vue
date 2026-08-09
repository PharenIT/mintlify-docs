<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@pharen/ui';
</script>

<template>
  <Tabs default-value="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="activity">Activity</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">Workspace overview</TabsContent>
    <TabsContent value="activity">Recent activity</TabsContent>
  </Tabs>
</template>
