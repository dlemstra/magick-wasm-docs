import { RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home  },
    { path: '/classes/magick', component: () => import('./views/classes/Magick/Index.vue') },
    { path: '/classes/magick-image', component: () => import('./views/classes/MagickImage/Index.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue') }
]

export default routes
