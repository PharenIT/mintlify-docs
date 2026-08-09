<script setup lang="ts">
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@pharen/ui';
</script>

<template>
  <Form class="w-full max-w-sm">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email address</FormLabel>
        <FormControl><Input type="email" placeholder="you@company.com" v-bind="componentField" /></FormControl>
        <FormDescription>We use this address for account notifications.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
  </Form>
</template>
