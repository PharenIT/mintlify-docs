import { readFile, rm, writeFile } from 'node:fs/promises';

const distDirectory = new URL('../dist/', import.meta.url);
const scriptFile = new URL('pharen-ui-preview.js', distDirectory);
const styleFile = new URL('pharen-ui-preview.css', distDirectory);
const bundleFile = new URL('pharen-ui-preview.json', distDirectory);

const [js, css] = await Promise.all([
  readFile(scriptFile, 'utf8'),
  readFile(styleFile, 'utf8'),
]);

await writeFile(bundleFile, JSON.stringify({ version: 1, js, css }));
await Promise.all([rm(scriptFile), rm(styleFile)]);
