<script setup lang="ts">
import { EventCalendar, EventCalendarContent, EventCalendarNav } from '@pharen/ui';
const events = [{
  id: 'kickoff',
  title: 'Project kickoff',
  start: new Date(2026, 7, 12, 10),
  end: new Date(2026, 7, 12, 11),
}];
</script>

<template>
  <EventCalendar :events="events" default-view="month">
    <EventCalendarNav />
    <EventCalendarContent />
  </EventCalendar>
</template>
