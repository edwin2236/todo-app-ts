import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const { pathname: root } = new URL('.', import.meta.url)
console.log({ root })

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'Components',
        replacement: path.resolve(root, 'src/app/ui/components'),
      },
      { find: 'app', replacement: path.resolve(root, 'src/app') },
    ],
  },
  plugins: [react()],
})
