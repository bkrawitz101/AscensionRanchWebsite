import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM Vite config (use .mjs so Node loads ESM plugins correctly)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM Vite config (use .mjs to avoid CJS/ESM conflicts)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
