import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const stylesheet = readFileSync(new URL('../style.css', import.meta.url), 'utf8')

test('the desktop navbar keeps a working sticky scroll container', () => {
  assert.match(stylesheet, /@media\s*\(min-width:\s*1024px\)/)
  assert.match(stylesheet, /body\s*\{[^}]*overflow-y:\s*visible\s*!important/s)
  assert.match(stylesheet, /:has\(>\s*#navbar\)\s*\{[^}]*overflow:\s*visible\s*!important/s)
  assert.match(stylesheet, /#navbar\s*\{[^}]*position:\s*sticky\s*!important/s)
})
