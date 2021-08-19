import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')