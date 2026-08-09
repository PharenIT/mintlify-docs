<script setup lang="ts">
import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from '@pharen/ui';

const events = [
  { title: 'Workflow created', date: '09:30', text: 'Johannes created the workflow.' },
  { title: 'Test completed', date: '10:05', text: 'All five steps finished successfully.' },
];
</script>

<template>
  <Timeline class="w-full max-w-md">
    <TimelineItem v-for="event in events" :key="event.title">
      <TimelineIndicator /><TimelineSeparator />
      <TimelineHeader><TimelineTitle>{{ event.title }}</TimelineTitle><TimelineDate>{{ event.date }}</TimelineDate></TimelineHeader>
      <TimelineContent>{{ event.text }}</TimelineContent>
    </TimelineItem>
  </Timeline>
</template>
