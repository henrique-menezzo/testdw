import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// GitHub Pages (project site): https://<user>.github.io/<repo>/
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
function normalizeBase(path: string): string {
  const t = path.trim()
  return t.endsWith('/') ? t : `${t}/`
}
const base = process.env.VITE_BASE_PATH
  ? normalizeBase(process.env.VITE_BASE_PATH)
  : process.env.CI && repo
    ? `/${repo}/`
    : '/'

// https://vite.dev/config/
// DS icons use `import('*.svg?react')` + React.lazy — without SVGR those resolve to asset URLs and crash at runtime.
// Excluding the package from optimizeDeps so pre-bundling does not strip `?react` handling.
export default defineConfig({
  base,
  plugins: [react(), svgr()],
  optimizeDeps: {
    exclude: ['@henrique-menezzo/dailywire-ds'],
  },
})
