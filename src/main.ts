import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initializeImageMagick } from '@imagemagick/magick-wasm'
import { Magick } from '@imagemagick/magick-wasm/magick'
import App from './App.vue'
import routes from './routes'
import font from '!!url-loader!./assets/fonts/Hack-Regular.ttf'

initializeImageMagick().then(() => {
    const fontString = atob(font.substring(21))
    const data = new Uint8Array(fontString.length)
    for (let i = 0; i < data.length; i++)
        data[i] = fontString.charCodeAt(i)

    Magick.addFont('Hack', data)

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    createApp(App)
        .use(router)
        .mount('#app')
}).catch(err => {
    throw err
})
