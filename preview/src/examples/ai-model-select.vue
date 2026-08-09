<script setup lang="ts">
import { ref } from 'vue';
import { AiModelSelect } from '@pharen/ui';

const model = ref('gpt-5.4');
const models = [
  { id: 'gpt-5.4', name: 'GPT-5.4', provider: 'OpenAI', icon: 'simple-icons:openai', supportsThinking: true },
  { id: 'claude-opus', name: 'Claude Opus', provider: 'Anthropic', icon: 'simple-icons:anthropic', supportsThinking: true },
  { id: 'gemini-pro', name: 'Gemini Pro', provider: 'Google', icon: 'simple-icons:googlegemini' },
];
</script>

<template>
  <AiModelSelect v-model="model" :models="models" class="w-full max-w-sm" show-thinking-toggle />
</template>
