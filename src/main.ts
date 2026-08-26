/*
  Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm-docs.
  Licensed under the Apache License, Version 2.0.
*/

import { createApp } from 'vue'
import { initializeImageMagickx64 } from '@imagemagick/magick-wasm'
import { Magick } from '@imagemagick/magick-wasm'
import App from './App.vue'
import router from './router'

const wasmLocation = new URL('@imagemagick/magick-wasm/x64/magick.wasm', import.meta.url);
initializeImageMagickx64(wasmLocation).then(() => {
    const fontLocation = new URL('./assets/fonts/Hack-Regular.ttf', import.meta.url).href;
    fetch(fontLocation).then((response) => {
        response.arrayBuffer().then((buffer) => {
            const font = new Uint8Array(buffer)
            Magick.addFont('Hack', font)

            createApp(App)
                .use(router)
                .mount('#app')
        });
    });
})
