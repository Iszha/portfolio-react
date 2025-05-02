import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: true,       // allow access via local IP (e.g. 192.168.x.x)
    port: 5173,       // or change this if you want a custom port
  }
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> origin/main
})
