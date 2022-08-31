/// <reference types="vitest" />
import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'
import {visualizer} from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

export default defineConfig(({mode}) => ({
  plugins: [
    svgr(),
    react({fastRefresh: false}),
    qiankun('orchy-react-js-typescript-template', {useDevMode: true}),
    visualizer(),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-react-js-typescript-template/',
  server: {port},
  test: {
    environment: 'happy-dom',
    mockReset: true
  },
}))
