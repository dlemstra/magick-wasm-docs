<script setup lang="ts">
import CodeSample from '@/components/CodeSample.vue'
import type { IMagickImage } from '@imagemagick/magick-wasm';
import { ref } from 'vue';

const radius = ref<number>(0)
const sigma = ref<number>(1)

const emit = defineEmits<{
    (e: 'showExample', func: (image: IMagickImage) => void): void
}>()

const showExample = (): void => {
    emit('showExample', (image: IMagickImage) => {
        image.charcoal(radius.value, sigma.value);
    })
}
</script>

<template>
    <CodeSample code="import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')
ImageMagick.readFromCanvas(canvas, (image) => {
    const radius = 0
    const sigma = 1
    image.charcoal(radius, sigma)
    image.writeToCanvas(canvas)
})" />

    <div class="arguments">
        <label>Radius:</label><input type="number" v-model="radius" /><br />
        <label>Sigma:</label><input type="number" v-model="sigma" /><br />
    </div>

    <button @click="showExample">Show example</button>
</template>
