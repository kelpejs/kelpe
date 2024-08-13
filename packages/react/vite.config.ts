import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import css from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    css(),
    dts({ insertTypesEntry: true, rollupTypes: true }),
    nodePolyfills({}),
  ],
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
  define: {},
})
