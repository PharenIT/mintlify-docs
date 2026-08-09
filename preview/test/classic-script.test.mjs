import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

test('the Mintlify preview bundle parses as a classic custom script', () => {
  const deployedBundle = new URL('../../ui-preview/pharen-ui-preview.js', import.meta.url);
  const localBundle = new URL('../dist/pharen-ui-preview.js', import.meta.url);
  const source = readFileSync(existsSync(deployedBundle) ? deployedBundle : localBundle, 'utf8');

  assert.doesNotThrow(() => new vm.Script(source, { filename: 'pharen-ui-preview.js' }));
});
