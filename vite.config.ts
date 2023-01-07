import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/cookie/dist/',
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      transformOn:true,
      mergeProps:true
    }),
  ],
  server:{
    host:'192.168.1.103'
  }
})
