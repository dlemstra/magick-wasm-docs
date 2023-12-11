<script setup lang="ts">
import CodeSample from '@/components/CodeSample.vue'
import type { IMagickImage } from '@imagemagick/magick-wasm';
import { ref } from 'vue';

const width = ref<number>(300)
const height = ref<number>(300)

const emit = defineEmits<{
    (e: 'showExample', func: (image: IMagickImage) => void): void
}>()

const showExample = (): void => {
    emit('showExample', (image: IMagickImage) => {
        image.liquidRescale(width.value, height.value);
    })
}
</script>

<template>
    <CodeSample code="import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const width = 300
    const height = 300
    image.liquidRescale(width, height)
    image.writeToCanvas(canvas)
})" />

    <div class="arguments">
        <label>Width:</label><input type="number" v-model="width" /><br />
        <label>Height:</label><input type="number" v-model="height" />
    </div>
    <button @click="showExample">Show example</button>
</template>
