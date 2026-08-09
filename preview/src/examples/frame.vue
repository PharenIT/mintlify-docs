<script setup lang="ts">
import { Frame, FrameDescription, FrameFooter, FrameHeader, FramePanel, FrameTitle } from '@pharen/ui';
</script>

<template>
  <Frame class="w-full max-w-md">
    <FrameHeader>
      <FrameTitle>Agent activity</FrameTitle>
      <FrameDescription>Latest run for the research agent.</FrameDescription>
    </FrameHeader>
    <FramePanel>
      <div class="flex items-center justify-between text-sm">
        <span>Processed documents</span><strong>24</strong>
      </div>
    </FramePanel>
    <FrameFooter><span class="text-xs text-muted-foreground">Updated just now</span></FrameFooter>
  </Frame>
</template>
