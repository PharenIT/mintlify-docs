import { createApp, defineComponent, h, type App } from 'vue';
import './preview.css';

const exampleModules = import.meta.glob('./examples/*.vue', {
  eager: true,
  import: 'default',
}) as Record<string, object>;

const examples = Object.fromEntries(
  Object.entries(exampleModules).map(([file, component]) => [
    file.split('/').pop()?.replace(/\.vue$/, ''),
    component,
  ])
);

declare global {
  interface Window {
    __pharenUiPreview?: {
      mount: (element: HTMLElement, name: string) => App<Element> | null;
      scan: (root?: ParentNode) => void;
      examples: string[];
    };
  }
}

const previewSelector = '[data-pharen-ui-preview][data-example]';
const mountedApps = new WeakMap<HTMLElement, App<Element>>();

function renderError(element: HTMLElement, message: string) {
  element.innerHTML = '';
  const error = document.createElement('div');
  error.className = 'rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive';
  error.textContent = message;
  element.append(error);
}

function mount(element: HTMLElement, name: string) {
  const component = examples[name];
  if (!component) {
    renderError(element, `Unknown preview: ${name}`);
    return null;
  }

  const app = createApp(defineComponent({
    name: 'PharenUiPreviewRoot',
    setup: () => () => h(component),
  }));
  app.config.errorHandler = (error) => {
    console.error(error);
    renderError(element, 'This preview could not be rendered.');
  };
  app.mount(element);
  return app;
}

function previewElements(root: ParentNode) {
  const elements: HTMLElement[] = [];
  if (root instanceof HTMLElement && root.matches(previewSelector)) {
    elements.push(root);
  }
  elements.push(...root.querySelectorAll<HTMLElement>(previewSelector));
  return elements;
}

function mountPreview(element: HTMLElement) {
  const name = element.dataset.example;
  if (!name || element.dataset.pharenUiMounted === name) return;

  mountedApps.get(element)?.unmount();
  const app = mount(element, name);
  if (!app) return;

  mountedApps.set(element, app);
  element.dataset.pharenUiMounted = name;
}

function scan(root: ParentNode = document) {
  previewElements(root).forEach(mountPreview);
}

function unmountRemoved(root: ParentNode) {
  previewElements(root).forEach((element) => {
    mountedApps.get(element)?.unmount();
    mountedApps.delete(element);
    delete element.dataset.pharenUiMounted;
  });
}

window.__pharenUiPreview = {
  mount,
  scan,
  examples: Object.keys(examples).sort(),
};

function start() {
  scan();
  new MutationObserver((records) => {
    for (const record of records) {
      record.removedNodes.forEach((node) => {
        if (node instanceof HTMLElement) unmountRemoved(node);
      });
      record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) scan(node);
      });
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}
