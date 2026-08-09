<script setup lang="ts">
import { ref } from 'vue';
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxViewport } from '@pharen/ui';

const frameworks = ['Vue', 'Nuxt', 'React', 'Svelte'];
const framework = ref('');
</script>

<template>
  <Combobox v-model="framework" :default-open="true">
    <ComboboxAnchor class="w-full rounded-lg border bg-background">
      <ComboboxInput placeholder="Select framework…" />
    </ComboboxAnchor>
    <ComboboxList class="w-[var(--reka-combobox-trigger-width)]">
      <ComboboxViewport class="p-1">
        <ComboboxEmpty class="p-3 text-center text-sm text-muted-foreground">No framework found.</ComboboxEmpty>
        <ComboboxItem v-for="item in frameworks" :key="item" :value="item">{{ item }}</ComboboxItem>
      </ComboboxViewport>
    </ComboboxList>
  </Combobox>
</template>
