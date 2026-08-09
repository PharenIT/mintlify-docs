import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

test('the Mintlify preview bundle parses as a classic custom script', () => {
  const deployedBundle = new URL('../../ui-preview/pharen-ui-preview.json', import.meta.url);
  const { version, js, css } = JSON.parse(readFileSync(deployedBundle, 'utf8'));

  assert.equal(version, 1);
  assert.ok(css.length > 100_000);
  assert.doesNotThrow(() => new vm.Script(js, { filename: 'pharen-ui-preview.js' }));
});
