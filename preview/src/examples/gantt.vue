<script setup lang="ts">
import { GanttFeatureItem, GanttFeatureList, GanttFeatureListGroup, GanttHeader, GanttProvider, GanttSidebar, GanttSidebarGroup, GanttSidebarItem, GanttTimeline, GanttToday } from '@pharen/ui';

const group = { id: 'launch', name: 'Product launch' };
const status = { id: 'active', name: 'Active', color: 'var(--primary)' };
const features = [
  { id: 'research', name: 'Research', startAt: new Date(2026, 7, 4), endAt: new Date(2026, 7, 11), status, group, progress: 100 },
  { id: 'design', name: 'Design', startAt: new Date(2026, 7, 9), endAt: new Date(2026, 7, 19), status: { ...status, id: 'design', color: 'var(--info)' }, group, progress: 62 },
  { id: 'release', name: 'Release', startAt: new Date(2026, 7, 20), endAt: new Date(2026, 7, 25), status: { ...status, id: 'release', color: 'var(--warning)' }, group, progress: 15 },
];
</script>

<template>
  <div class="h-72 w-full overflow-hidden rounded-xl border">
    <GanttProvider range="daily" :zoom="80">
      <GanttSidebar>
        <GanttSidebarGroup name="Product launch">
          <GanttSidebarItem v-for="feature in features" :key="feature.id" :feature="feature" />
        </GanttSidebarGroup>
      </GanttSidebar>
      <GanttTimeline>
        <GanttHeader />
        <GanttFeatureList>
          <GanttFeatureListGroup>
            <GanttFeatureItem v-for="feature in features" :key="feature.id" :feature="feature" />
          </GanttFeatureListGroup>
        </GanttFeatureList>
        <GanttToday />
      </GanttTimeline>
    </GanttProvider>
  </div>
</template>
