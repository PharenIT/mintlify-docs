<script setup lang="ts">
import { Conversation, ConversationContent, ConversationEmptyState } from '@pharen/ui/components/ai';
</script>

<template>
  <Conversation>
    <ConversationContent>
      <ConversationEmptyState title="Start a conversation" />
    </ConversationContent>
  </Conversation>
</template>
