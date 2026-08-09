import { createApp, defineComponent, h, nextTick, type App } from 'vue';
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
      examples: string[];
    };
  }
}

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

window.__pharenUiPreview = {
  mount,
  examples: Object.keys(examples).sort(),
};

const script = document.querySelector<HTMLScriptElement>(
  'script[data-pharen-ui-preview][data-example]'
);
const automaticName = script?.dataset.example;
const previewId = script?.dataset.previewId;
const root = document.getElementById('pharen-ui-preview-root');

if (root && automaticName) {
  const syncTheme = () => {
    document.documentElement.classList.toggle(
      'dark',
      window.parent !== window && window.parent.document.documentElement.classList.contains('dark')
    );
  };
  syncTheme();
  if (window.parent !== window) {
    new MutationObserver(syncTheme).observe(window.parent.document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    });
  }
  mount(root, automaticName);

  const sendHeight = () => {
    const height = Math.ceil(document.body.scrollHeight);
    window.parent.postMessage({ source: 'pharen-ui-preview', id: previewId, height }, '*');
  };
  nextTick(sendHeight);
  new ResizeObserver(sendHeight).observe(document.documentElement);
}
