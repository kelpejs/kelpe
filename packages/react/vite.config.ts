import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true, rollupTypes: true })],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: '@kelpe/api-reference-react',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } },
    },
  },
  define: { 'process.env.NODE_ENV': '"production"' },
})
