import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initializeImageMagick } from '@imagemagick/magick-wasm'
import App from './App.vue'
import routes from './routes'

initializeImageMagick().then(() => {

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  createApp(App)
    .use(router)
    .mount('#app')

}).catch(err => {
  console.error(err)
})
