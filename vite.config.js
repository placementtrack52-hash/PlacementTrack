import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined

          if (id.includes('recharts') || id.includes('victory-vendor') || id.includes('d3-')) {
            return 'charts-vendor'
          }

          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
            return 'motion-vendor'
          }

          if (id.includes('date-fns')) {
            return 'date-vendor'
          }

          if (id.includes('lucide-react')) {
            return 'icons-vendor'
          }

          if (id.includes('zustand')) {
            return 'state-vendor'
          }

          if (
            id.includes('/react/') ||
            id.includes('\\react\\') ||
            id.includes('/react-dom/') ||
            id.includes('\\react-dom\\') ||
            id.includes('/scheduler/') ||
            id.includes('\\scheduler\\') ||
            id.includes('react-router') ||
            id.includes('react-redux') ||
            id.includes('@reduxjs/toolkit') ||
            id.includes('redux')
          ) {
            return 'react-vendor'
          }

          if (
            id.includes('react-dom') ||
            id.includes('immer') ||
            id.includes('reselect')
          ) {
            return 'react-vendor'
          }

          return undefined
        },
      },
    },
  },
})
