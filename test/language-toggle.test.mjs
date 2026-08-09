import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const docs = JSON.parse(readFileSync(new URL('../docs.json', import.meta.url), 'utf8'))
const stylesheet = readFileSync(new URL('../style.css', import.meta.url), 'utf8')

test('the docs home and logo open Pharen Hub', () => {
  assert.equal(docs.logo.href, '/hub/overview')

  const rootRedirect = docs.redirects.find(({ source }) => source === '/')
  assert.equal(rootRedirect?.destination, '/hub/overview')
})

test('the desktop language control is a right-aligned EN and DE toggle', () => {
  assert.match(stylesheet, /#localization-select-trigger\s*\{[^}]*position:\s*absolute/s)
  assert.match(stylesheet, /#localization-select-trigger\s*\{[^}]*right:\s*[\d.]+rem/s)
  assert.match(stylesheet, /#localization-select-trigger\s*>\s*span[^}]*display:\s*none/s)
  assert.match(stylesheet, /#localization-select-trigger::before[^}]*content:\s*"EN"/s)
  assert.match(stylesheet, /#localization-select-trigger::after[^}]*content:\s*"DE"/s)
  assert.match(stylesheet, /html\[lang="en"\][^{]*#localization-select-trigger::before/s)
  assert.match(stylesheet, /html\[lang="de"\][^{]*#localization-select-trigger::after/s)
})
