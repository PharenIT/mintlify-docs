import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repositoryRoot = fileURLToPath(new URL('../', import.meta.url))
const configPath = process.env.PHAREN_DOCS_CONFIG
  ? resolve(process.env.PHAREN_DOCS_CONFIG)
  : resolve(repositoryRoot, 'docs.json')
const rawDocs = JSON.parse(readFileSync(configPath, 'utf8'))

function resolveReferences(node) {
  if (Array.isArray(node)) return node.map(resolveReferences)
  if (!node || typeof node !== 'object') return node

  if (typeof node.$ref === 'string') {
    const referencedPath = resolve(repositoryRoot, node.$ref)
    const referencedValue = JSON.parse(readFileSync(referencedPath, 'utf8'))
    const siblings = Object.fromEntries(Object.entries(node).filter(([key]) => key !== '$ref'))
    return resolveReferences({ ...referencedValue, ...siblings })
  }

  return Object.fromEntries(
    Object.entries(node).map(([key, value]) => [key, resolveReferences(value)]),
  )
}

const docs = resolveReferences(rawDocs)

function collectPages(node, pages = []) {
  if (Array.isArray(node)) {
    for (const entry of node) collectPages(entry, pages)
    return pages
  }

  if (!node || typeof node !== 'object') return pages

  for (const [key, value] of Object.entries(node)) {
    if (key === 'pages' && Array.isArray(value)) {
      for (const page of value) {
        if (typeof page === 'string') pages.push(page)
        else collectPages(page, pages)
      }
      continue
    }

    collectPages(value, pages)
  }

  return pages
}

test('each language exposes Pharen UI before Pharen Hub in the product switcher', () => {
  const languages = docs.navigation.languages
  assert.deepEqual(languages.map(({ language }) => language), ['en', 'de'])

  for (const language of languages) {
    assert.deepEqual(
      language.products.map(({ product }) => product),
      ['Pharen UI', 'Pharen Hub'],
    )
  }
})

test('the product navigation is split into language-specific configuration files', () => {
  for (const language of rawDocs.navigation.languages) {
    assert.deepEqual(
      language.products.map((product) => product.$ref),
      [
        `navigation/${language.language}/pharen-ui.json`,
        `navigation/${language.language}/pharen-hub.json`,
      ],
    )
  }
})

test('all navigable pages belong to one product and exist on disk', () => {
  for (const language of docs.navigation.languages) {
    const pages = collectPages(language.products)
    assert.ok(pages.length > 0, `${language.language} navigation is empty`)

    assert.equal(new Set(pages).size, pages.length, `${language.language} navigation has duplicates`)

    for (const page of pages) {
      assert.ok(existsSync(`${repositoryRoot}/${page}.mdx`), `${page}.mdx does not exist`)
    }

    const [uiProduct, hubProduct] = language.products
    const uiPrefix = language.language === 'de' ? 'de/ui/' : 'ui/'
    assert.ok(collectPages(uiProduct).every((page) => page.startsWith(uiPrefix)))
    assert.ok(collectPages(hubProduct).every((page) => !page.startsWith(uiPrefix)))
  }
})
