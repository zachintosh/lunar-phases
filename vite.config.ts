import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from 'vite-plugin-linaria-styled'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      sourceMap: true,
      cacheDirectory: '.linaria-cache',
      extension: '.linaria.css',
    }),
  ],
})
