const PHAREN_UI_PREVIEW_BUNDLE_REVISION = '2026-08-09-compact-modals'

export const PharenUiPreview = ({ name, title = 'Pharen UI component preview' }) => {
  const escapePreviewAttribute = (value) =>
    String(value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[character])

  const iframeRef = useRef(null)
  const previewId = `pharen-ui-${name}`
  const [height, setHeight] = useState(224)
  const [bundle, setBundle] = useState(null)
  const [loadError, setLoadError] = useState(false)
  const [loadAttempt, setLoadAttempt] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    let active = true
    setLoadError(false)
    let bundlePromise =
      window.__pharenUiPreviewBundleRevision === PHAREN_UI_PREVIEW_BUNDLE_REVISION
        ? window.__pharenUiPreviewBundlePromise
        : null
    if (!bundlePromise) {
      bundlePromise = fetch(
        `/ui-preview/pharen-ui-preview.json?v=${PHAREN_UI_PREVIEW_BUNDLE_REVISION}`,
      ).then((response) => {
        if (!response.ok) throw new Error(`Preview bundle returned ${response.status}`)
        return response.json()
      })
      window.__pharenUiPreviewBundlePromise = bundlePromise
      window.__pharenUiPreviewBundleRevision = PHAREN_UI_PREVIEW_BUNDLE_REVISION
    }

    bundlePromise.then(
      (value) => active && setBundle(value),
      (error) => {
        if (window.__pharenUiPreviewBundlePromise === bundlePromise) {
          window.__pharenUiPreviewBundlePromise = null
          window.__pharenUiPreviewBundleRevision = null
        }
        console.error(error)
        if (active) setLoadError(true)
      },
    )

    return () => {
      active = false
    }
  }, [loadAttempt])

  useEffect(() => {
    setHeight(224)
    setModalOpen(false)
  }, [previewId, loadAttempt])

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.source !== iframeRef.current?.contentWindow) return
      if (event.data?.source !== 'pharen-ui-preview') return
      if (event.data?.id !== previewId) return

      if (event.data?.type === 'modal-state') {
        setModalOpen(Boolean(event.data.open))
        return
      }

      const nextHeight = Math.min(900, Math.max(160, Number(event.data.height) || 224))
      setHeight((currentHeight) =>
        Math.abs(currentHeight - nextHeight) > 2 ? nextHeight : currentHeight,
      )
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [previewId])

  useEffect(() => {
    if (!modalOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [modalOpen])

  const source = useMemo(() => {
    if (!bundle) return null

    const safeCss = String(bundle.css).replace(/<\/style/gi, '<\\/style')
    const safeScript = String(bundle.js).replace(/<\/script/gi, '<\\/script')
    const safeName = escapePreviewAttribute(name)
    const serializedId = JSON.stringify(previewId).replace(/</g, '\\u003c')
    const serializedName = JSON.stringify(String(name)).replace(/</g, '\\u003c')

    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${safeCss}</style>
  </head>
  <body>
    <main
      class="pharen-ui-preview-root"
      data-pharen-ui-preview
      data-example="${safeName}"
      role="region"
      aria-label="${escapePreviewAttribute(title)}"
    ></main>
    <script>${safeScript}<\/script>
    <script>
      (() => {
        const previewId = ${serializedId};
        const exampleName = ${serializedName};
        const viewportModalExamples = new Set(['alert-dialog', 'dialog', 'drawer', 'sheet']);
        const modalSelector = [
          '[role="alertdialog"][data-state="open"]',
          '[role="dialog"][data-state="open"]',
          '[data-slot="alert-dialog-overlay"][data-state="open"]',
          '[data-slot="dialog-overlay"][data-state="open"]',
          '[data-slot="drawer-overlay"][data-state="open"]',
        ].join(',');
        let lastModalOpen = null;
        const syncTheme = () => document.documentElement.classList.toggle(
          'dark',
          window.parent !== window && window.parent.document.documentElement.classList.contains('dark'),
        );
        syncTheme();
        if (window.parent !== window) {
          new MutationObserver(syncTheme).observe(window.parent.document.documentElement, {
            attributeFilter: ['class'],
            attributes: true,
          });
        }
        const sendHeight = () => window.parent.postMessage({
          source: 'pharen-ui-preview',
          id: previewId,
          height: Math.ceil(document.body.scrollHeight),
        }, '*');
        const syncModalState = () => {
          if (!viewportModalExamples.has(exampleName)) return;
          const modalOpen = Boolean(document.querySelector(modalSelector));
          document.documentElement.toggleAttribute('data-pharen-preview-modal-open', modalOpen);
          if (modalOpen === lastModalOpen) return;
          lastModalOpen = modalOpen;
          window.parent.postMessage({
            source: 'pharen-ui-preview',
            id: previewId,
            type: 'modal-state',
            open: modalOpen,
          }, '*');
        };
        requestAnimationFrame(() => {
          sendHeight();
          syncModalState();
        });
        new ResizeObserver(sendHeight).observe(document.documentElement);
        new MutationObserver(() => requestAnimationFrame(syncModalState)).observe(document.body, {
          attributeFilter: ['data-state'],
          attributes: true,
          childList: true,
          subtree: true,
        });
      })();
    <\/script>
  </body>
</html>`
  }, [bundle, name, previewId, title])

  const previewFrameStyle = modalOpen
    ? {
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: 2147483000,
      }
    : { height: `${height}px` }
  const previewShellClassName = `not-prose my-6 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950 ${
    modalOpen ? 'overflow-visible' : 'overflow-hidden'
  }`

  return (
    <div className={previewShellClassName}>
      {loadError ? (
        <div className="flex min-h-72 flex-col items-center justify-center gap-3 p-6 text-center" role="alert">
          <p className="m-0 text-sm font-medium text-red-700 dark:text-red-300">
            This component preview could not be loaded.
          </p>
          <button
            type="button"
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-50 dark:border-white/15 dark:hover:bg-white/5"
            onClick={() => setLoadAttempt((attempt) => attempt + 1)}
          >
            Try again
          </button>
        </div>
      ) : source ? (
        <iframe
          key={`${previewId}-${loadAttempt}`}
          ref={iframeRef}
          srcDoc={source}
          title={title}
          allow="clipboard-write"
          className="block w-full border-0 bg-transparent"
          style={previewFrameStyle}
        />
      ) : (
        <div className="flex h-64 items-center justify-center text-sm text-gray-500">
          Loading component preview…
        </div>
      )}
    </div>
  )
}
