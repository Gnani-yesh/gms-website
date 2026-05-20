import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Inline (empty) PostCSS config so this nested project does not inherit
  // the parent repo's postcss.config.mjs (Tailwind v3).
  css: {
    postcss: {},
  },
})
