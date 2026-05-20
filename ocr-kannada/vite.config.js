import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  base: '/sok-ocr/',
  server: {
    port: 3000
  }
}