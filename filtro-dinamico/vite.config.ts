// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  plugins: [
    vue(),
    vuetify({
      autoImport: true
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  }
})
