<script setup lang="ts">
import CodeSample from '@/components/CodeSample.vue'
import type { IMagickImage } from '@imagemagick/magick-wasm';
import { ref } from 'vue';

const degrees = ref<number>(90)

const emit = defineEmits<{
    (e: 'showExample', func: (image: IMagickImage) => void): void
}>()

const showExample = (): void => {
    emit('showExample', (image: IMagickImage) => {
        image.rotate(degrees.value);
    })
}
</script>

<template>
    <CodeSample code="import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const degrees = 90
    image.rotate(degrees)
    image.writeToCanvas(canvas)
})" />

    <div class="arguments">
        <label>Degrees:</label><input type="number" v-model="degrees" /><br />
    </div>
    <button @click="showExample">Show example</button>
</template>
