/// <reference types="vitest" />
import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'
import {visualizer} from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

export default defineConfig(({mode}) => ({
  plugins: [
    svgr(),
    react({fastRefresh: false}),
    visualizer(),
    cssInjectedByJsPlugin()
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-react-js-typescript-template/',
  server: {port, cors: true},
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  test: {
    environment: 'happy-dom',
    mockReset: true
  },
}))
