<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@pharen/ui';
</script>

<template>
  <Carousel class="w-full max-w-md px-10">
    <CarouselContent>
      <CarouselItem v-for="item in ['Workflows', 'Agents', 'Knowledge']" :key="item">
        <div class="grid h-32 place-items-center rounded-xl border bg-card text-lg font-semibold shadow-sm">{{ item }}</div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="left-0" />
    <CarouselNext class="right-0" />
  </Carousel>
</template>
