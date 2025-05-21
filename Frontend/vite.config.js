import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensures that the server is accessible externally
    port: 5173,      // Port for your local development server
    hmr: {
      host: 'd6c3-2409-40c1-3015-8611-5cd-abbc-eb93-aeff.ngrok-free.app',
      protocol: 'wss', // WebSocket Secure for HMR
    }
  }
})