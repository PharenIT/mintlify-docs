<script setup lang="ts">
import { ref } from 'vue';
import { Autocomplete, AutocompleteContent, AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteList } from '@pharen/ui';

const people = ['Ada Lovelace', 'Grace Hopper', 'Linus Torvalds', 'Margaret Hamilton'];
const person = ref('');
</script>

<template>
  <Autocomplete v-model="person" :default-open="true">
    <AutocompleteInput placeholder="Search people…" show-clear show-trigger />
    <AutocompleteContent :portal="false">
      <AutocompleteList>
        <AutocompleteEmpty>No people found.</AutocompleteEmpty>
        <AutocompleteItem v-for="item in people" :key="item" :value="item">{{ item }}</AutocompleteItem>
      </AutocompleteList>
    </AutocompleteContent>
  </Autocomplete>
</template>
