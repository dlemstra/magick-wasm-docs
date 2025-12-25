/*
  Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm-docs.
  Licensed under the Apache License, Version 2.0.
*/

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/classes/magick',
            component: () => import('@/views/classes/Magick/IndexView.vue'),
        },
        {
            path: '/classes/magick-image',
            component: () => import('@/views/classes/MagickImage/IndexView.vue'),
            children: [
                { path: 'blur', component: () => import('@/views/classes/MagickImage/BlurView.vue') },
                { path: 'charcoal', component: () => import('@/views/classes/MagickImage/CharcoalView.vue') },
                { path: 'liquidRescale', component: () => import('@/views/classes/MagickImage/LiquidRescaleView.vue') },
                { path: 'rotate', component: () => import('@/views/classes/MagickImage/RotateView.vue') }
            ]
        },
        { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFoundView.vue') }
    ]
})

export default router
