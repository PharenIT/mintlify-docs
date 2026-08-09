<script setup lang="ts">
import { ref } from 'vue';
import { NativeSelect, NativeSelectOption } from '@pharen/ui';

const role = ref('member');
</script>

<template>
  <NativeSelect v-model="role" aria-label="Role">
    <NativeSelectOption value="admin">Admin</NativeSelectOption>
    <NativeSelectOption value="member">Member</NativeSelectOption>
    <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
  </NativeSelect>
</template>
