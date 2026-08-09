import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const snippetUrl = new URL('../../snippets/pharen-ui-preview.jsx', import.meta.url);
const snippetSource = readFileSync(snippetUrl, 'utf8');
const returnBoundary = snippetSource.indexOf('\n  return (');

function executeComponentPrefix({ modalOpen = false } = {}) {
  assert.ok(returnBoundary > 0, 'preview component return boundary is available');

  const effects = [];
  const listeners = new Map();
  const stateChanges = [];
  const contentWindow = {};
  const stateValues = [
    360,
    { version: 1, css: '', js: '' },
    false,
    0,
    modalOpen,
  ];
  let stateIndex = 0;

  const componentPrefix = snippetSource
    .slice(0, returnBoundary)
    .replace('export const PharenUiPreview', 'const PharenUiPreview');
  const executable = `${componentPrefix}
    return {
      frameStyle: typeof previewFrameStyle === 'undefined' ? null : previewFrameStyle,
      shellClassName: typeof previewShellClassName === 'undefined' ? null : previewShellClassName,
    }
  }
  result = PharenUiPreview({ name: 'alert-dialog', title: 'Alert dialog preview' })`;

  const context = {
    console,
    document: { body: { style: { overflow: '' } } },
    result: null,
    setTimeout,
    clearTimeout,
    useEffect(effect) {
      effects.push(effect);
    },
    useMemo(factory) {
      return factory();
    },
    useRef() {
      return { current: { contentWindow } };
    },
    useState() {
      const index = stateIndex++;
      return [stateValues[index], (value) => stateChanges.push({ index, value })];
    },
    window: {
      __pharenUiPreviewBundlePromise: Promise.resolve(stateValues[1]),
      addEventListener(type, listener) {
        listeners.set(type, listener);
      },
      removeEventListener(type) {
        listeners.delete(type);
      },
    },
  };

  vm.runInNewContext(executable, context, { filename: 'pharen-ui-preview.jsx' });
  const cleanups = effects.map((effect) => effect()).filter(Boolean);

  return {
    ...context.result,
    cleanups,
    contentWindow,
    listeners,
    stateChanges,
  };
}

test('a modal-state message expands the matching preview iframe', () => {
  const preview = executeComponentPrefix();

  preview.listeners.get('message')?.({
    source: preview.contentWindow,
    data: {
      source: 'pharen-ui-preview',
      id: 'pharen-ui-alert-dialog',
      type: 'modal-state',
      open: true,
    },
  });

  assert.ok(
    preview.stateChanges.some(({ index, value }) => index === 4 && value === true),
    'the modal state setter receives the open state',
  );
  preview.cleanups.forEach((cleanup) => cleanup());
});

test('a compact preview can shrink the iframe to its measured height', () => {
  const preview = executeComponentPrefix();

  preview.listeners.get('message')?.({
    source: preview.contentWindow,
    data: {
      source: 'pharen-ui-preview',
      id: 'pharen-ui-alert-dialog',
      height: 160,
    },
  });

  const heightChange = preview.stateChanges.findLast(
    ({ index, value }) => index === 0 && typeof value === 'function',
  );
  assert.equal(heightChange?.value(288), 160);
  preview.cleanups.forEach((cleanup) => cleanup());
});

test('an open modal makes the preview iframe cover the browser viewport', () => {
  const preview = executeComponentPrefix({ modalOpen: true });

  assert.deepEqual({ ...preview.frameStyle }, {
    position: 'fixed',
    inset: 0,
    width: '100vw',
    height: '100dvh',
    zIndex: 2147483000,
  });
  assert.match(preview.shellClassName, /overflow-visible/);
  preview.cleanups.forEach((cleanup) => cleanup());
});
