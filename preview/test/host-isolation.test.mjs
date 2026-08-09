import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import test from 'node:test';

test('Mintlify receives the preview runtime as one inert bundle', () => {
  const deployedAssets = new URL('../../ui-preview/', import.meta.url);
  const assetNames = readdirSync(deployedAssets).sort();

  assert.deepEqual(assetNames, ['pharen-ui-preview.json']);
});
