<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@pharen/ui';
</script>

<template>
  <Avatar>
    <AvatarImage src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%23158065'/%3E%3Ctext x='32' y='39' text-anchor='middle' font-family='Arial' font-size='22' fill='white'%3EJK%3C/text%3E%3C/svg%3E" alt="Johannes Kanthak" />
    <AvatarFallback>JK</AvatarFallback>
  </Avatar>
</template>
