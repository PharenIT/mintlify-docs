# Pharen UI live previews

This small Vite library bundles the real Vue examples used by the Mintlify component pages. Mintlify loads every JavaScript and CSS file in the content repository globally, so the bundle is emitted as a classic IIFE and mounts matching preview placeholders after initial load and client-side navigation.

Run `npm install`, `npm test`, and `npm run build` in this directory after updating `@pharen/ui`, then copy `dist/pharen-ui-preview.js` and `dist/pharen-ui-preview.css` to `/ui-preview/`.
