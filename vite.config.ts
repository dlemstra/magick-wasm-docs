import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const baseConfig = {
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
}

const buildConfig = {
    ...baseConfig,
    base: '/magick-wasm-docs/'
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => command === 'build' ? buildConfig : baseConfig)
