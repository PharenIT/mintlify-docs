export const PharenUiPreview = ({ name, title = 'Pharen UI component preview' }) => {
  const iframeRef = useRef(null)
  const previewId = `pharen-ui-${name}`
  const [height, setHeight] = useState(320)

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

  const source = useMemo(
    () => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/ui-preview/pharen-ui-preview.css" />
  </head>
  <body>
    <main id="pharen-ui-preview-root"></main>
    <script
      type="module"
      src="/ui-preview/pharen-ui-preview.js"
      data-pharen-ui-preview
      data-example="${name}"
      data-preview-id="${previewId}"
    ><\/script>
  </body>
</html>`,
    [name],
  )

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
      <iframe
        ref={iframeRef}
        srcDoc={source}
        title={title}
        loading="lazy"
        allow="clipboard-write"
        className="block w-full border-0 bg-transparent"
        style={{ height: `${height}px` }}
      />
    </div>
  )
}
