<script setup lang="ts">
import { Avatar, AvatarFallback, Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@pharen/ui';
</script>

<template>
  <HoverCard>
    <HoverCardTrigger as-child><Button variant="link">@pharen</Button></HoverCardTrigger>
    <HoverCardContent class="w-72">
      <div class="flex gap-3">
        <Avatar><AvatarFallback>PH</AvatarFallback></Avatar>
        <div class="space-y-1"><p class="text-sm font-semibold">Pharen</p><p class="text-sm text-muted-foreground">AI-native workspace for workflows and agents.</p></div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
