import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from 'vite-plugin-linaria-styled'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lunar-phases/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    react(),
    linaria({
      sourceMap: true,
      cacheDirectory: '.linaria-cache',
      extension: '.linaria.css',
    }),
  ],
})
