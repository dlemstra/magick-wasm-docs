<script setup lang="ts">
import ImageCanvas from '@/components/ImageCanvas.vue'
import { ImageMagick, type IMagickImage } from '@imagemagick/magick-wasm'
import { ref } from 'vue'

const canvas = ref<typeof ImageCanvas>();

const load = (image: string): void => {
    ImageMagick.read(image, (image) => canvas.value?.write(image))
}

const showExample = (func: (image: IMagickImage) => void) => {
    canvas.value?.read((image: IMagickImage) => {
        func(image)
        canvas.value?.write(image)
    })
}
</script>

<template>
    <h1>MagickImage</h1>

    <div class="container">
        <div>
            <RouterLink to="/classes/magick-image/blur">blur</RouterLink> |
            <RouterLink to="/classes/magick-image/charcoal">charcoal</RouterLink> |
            <RouterLink to="/classes/magick-image/liquidRescale">liquidRescale</RouterLink> |
            <RouterLink to="/classes/magick-image/rotate">rotate</RouterLink>
            <RouterView @showExample="showExample" />
        </div>
        <div>
            <div class="buttons">
                <button v-on:click="load('logo:')">Load logo</button>
                <button v-on:click="load('wizard:')">Load wizard</button>
            </div>
            <ImageCanvas ref="canvas" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
}

.container div {
    padding: 0 1em 0 1em;
    flex: 0 1 50%;
}

.container .buttons {
    padding: 1em 0 1em 0;
}
</style>
