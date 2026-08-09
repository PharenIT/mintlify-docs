<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@pharen/ui';
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="billing">
      <AccordionTrigger>How does billing work?</AccordionTrigger>
      <AccordionContent>Plans are billed per workspace.</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
