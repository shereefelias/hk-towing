import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hk-towing/', // Updated to match your GitHub Pages repository subfolder
})
