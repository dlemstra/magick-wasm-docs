import { RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home  },
  { path: '/about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue') }
]

export default routes
