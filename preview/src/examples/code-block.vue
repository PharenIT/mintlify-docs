<script setup lang="ts">
import { CodeBlock } from '@pharen/ui/components/ai';

const code = `import { Button } from '@pharen/ui';\n\n<Button>Save changes</Button>`;
</script>

<template><CodeBlock :code="code" language="vue" show-line-numbers /></template>
