const escapePreviewAttribute = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])

export const PharenUiPreview = ({ name, title = 'Pharen UI component preview' }) => {
  const iframeRef = useRef(null)
  const previewId = `pharen-ui-${name}`
  const [height, setHeight] = useState(320)
  const [bundle, setBundle] = useState(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let active = true
    const bundlePromise = window.__pharenUiPreviewBundlePromise ??= fetch(
      '/ui-preview/pharen-ui-preview.json',
    ).then((response) => {
      if (!response.ok) throw new Error(`Preview bundle returned ${response.status}`)
      return response.json()
    })

    bundlePromise.then(
      (value) => active && setBundle(value),
      (error) => {
        console.error(error)
        if (active) setLoadError(true)
      },
    )

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.source !== iframeRef.current?.contentWindow) return
      if (event.data?.source !== 'pharen-ui-preview') return
      if (event.data?.id !== previewId) return

      const nextHeight = Math.min(900, Math.max(256, Number(event.data.height) || 320))
      setHeight((currentHeight) =>
        Math.abs(currentHeight - nextHeight) > 2 ? nextHeight : currentHeight,
      )
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [previewId])

  const source = useMemo(() => {
    if (!bundle) return null

    const safeCss = String(bundle.css).replace(/<\/style/gi, '<\\/style')
    const safeScript = String(bundle.js).replace(/<\/script/gi, '<\\/script')
    const safeName = escapePreviewAttribute(name)
    const serializedId = JSON.stringify(previewId).replace(/</g, '\\u003c')

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
        requestAnimationFrame(sendHeight);
        new ResizeObserver(sendHeight).observe(document.documentElement);
      })();
    <\/script>
  </body>
</html>`
  }, [bundle, name, previewId, title])

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
      {loadError ? (
        <div className="p-6 text-sm text-red-700 dark:text-red-300" role="alert">
          This component preview could not be loaded.
        </div>
      ) : source ? (
        <iframe
          ref={iframeRef}
          srcDoc={source}
          title={title}
          loading="lazy"
          allow="clipboard-write"
          className="block w-full border-0 bg-transparent"
          style={{ height: `${height}px` }}
        />
      ) : (
        <div className="flex h-64 items-center justify-center text-sm text-gray-500">
          Loading component preview…
        </div>
      )}
    </div>
  )
}
