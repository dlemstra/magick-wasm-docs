/*
  Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm-docs.
  Licensed under the Apache License, Version 2.0.
*/

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
    },
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: `magick-[name]-[hash].js`,
            },
        },
    },
}

const buildConfig = {
    ...baseConfig,
    base: '/magick-wasm-docs/'
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => command === 'build' ? buildConfig : baseConfig)
