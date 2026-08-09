export const PharenUiPreview = ({ name, title = 'Pharen UI component preview' }) => (
  <div className="not-prose my-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
    <div
      className="pharen-ui-preview-root"
      data-pharen-ui-preview
      data-example={name}
      role="region"
      aria-label={title}
    />
  </div>
)
