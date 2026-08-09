import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

const pharenRoot = process.env.PHAREN_REPO_ROOT;
const uiSource = pharenRoot
  ? path.resolve(pharenRoot, 'src/packages/ui/src')
  : undefined;
const tanstackVueTable = process.env.PHAREN_TANSTACK_VUE_TABLE;
const modelAssetsModule = path.resolve(import.meta.dirname, 'src/model-assets.ts');
const previewModelAssets = {
  name: 'pharen-preview-model-assets',
  enforce: 'pre' as const,
  resolveId(source: string, importer?: string) {
    if (!uiSource || !importer?.startsWith(uiSource)) return null;
    if (source === './constants/ai-models' || source === '../../constants/ai-models') {
      return modelAssetsModule;
    }
    return null;
  },
};

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  plugins: [previewModelAssets, vue(), tailwindcss()],
  resolve: {
    alias: uiSource
      ? [
          ...(tanstackVueTable
            ? [{ find: '@tanstack/vue-table', replacement: tanstackVueTable }]
            : []),
          { find: '@pharen/ui', replacement: uiSource },
          { find: '@', replacement: uiSource },
        ]
      : [],
    dedupe: ['vue'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    minify: 'esbuild',
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      name: 'PharenUiPreviewBundle',
      formats: ['iife'],
      fileName: () => 'pharen-ui-preview.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'pharen-ui-preview.[ext]',
      },
    },
  },
});
