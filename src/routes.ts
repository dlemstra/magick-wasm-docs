import { RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home  },
  { path: '/classes/Magick', component: () => import('./views/classes/Magick.vue') },
]

export default routes
