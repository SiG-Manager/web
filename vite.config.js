// vite.config.js

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  const allowedHosts = [
    env.HOST_URL,
    env.HOST_IP
  ].filter(host => host && host.trim() !== '')
  
  return {
    plugins: [react()],
    server: {
      port: 80,
      host: '0.0.0.0',
      allowedHosts: allowedHosts,
    },
  }
})