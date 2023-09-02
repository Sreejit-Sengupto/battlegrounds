import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import ViteAliases from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@news': '/src/components/pages/News',
      '@homepage': '/src/components/pages/Homepage',
      '@tac': '/src/components/pages/TermsConditions',
      '@gameResponsibly': '/src/components/pages/Game Responsibly',
      '@redeem': '/src/components/pages/Redeem',
    }
  }
})
