<script setup lang="ts">
import { ref } from 'vue';
import { Rating } from '@pharen/ui';

const value = ref(4);
</script>

<template><Rating v-model="value" size="lg" /></template>
