<script setup lang="ts">
import { onMounted } from 'vue';
import { Button, Sonner, toast } from '@pharen/ui';

const showToast = () => toast.success('Workflow published', { description: 'The automation is now active.', duration: Infinity });
onMounted(showToast);
</script>

<template>
  <div><Button variant="outline" @click="showToast">Show notification</Button><Sonner position="top-center" /></div>
</template>
