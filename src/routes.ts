import { RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home  },
  { path: '/classes/Magick', component: () => import('./views/classes/Magick.vue') },
  { path: '/classes/MagickImage', component: () => import('./views/classes/MagickImage.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue') }
]

export default routes
