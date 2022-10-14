import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initializeImageMagick } from '@imagemagick/magick-wasm'
import { Magick } from '@imagemagick/magick-wasm'
import App from './App.vue'
import axios from 'axios'
import routes from './routes'

initializeImageMagick().then(() => {
    axios({
        url: new URL('./assets/fonts/Hack-Regular.ttf', import.meta.url).href,
        method: 'GET',
        responseType: 'blob',
    }).then(async (response) => {
        const data = await response.data.arrayBuffer()
        Magick.addFont('Hack', new Uint8Array(data))

        const router = createRouter({
            history: createWebHistory(process.env.BASE_URL),
            routes
        })

        createApp(App)
            .use(router)
            .mount('#app')
    });
}).catch(err => {
    throw err
})
