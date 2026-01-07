import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kosa/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
