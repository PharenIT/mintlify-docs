<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@pharen/ui';
</script>

<template>
  <Avatar>
    <AvatarImage src="/people/johannes.jpg" alt="Johannes Kanthak" />
    <AvatarFallback>JK</AvatarFallback>
  </Avatar>
</template>
