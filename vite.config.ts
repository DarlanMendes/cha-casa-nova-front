import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/",
  plugins: [vue()],
  server:{
    proxy:{
      '/api': {
       // target: 'http://localhost:8080',
        target:'https://cha-casa-nova-back.onrender.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
