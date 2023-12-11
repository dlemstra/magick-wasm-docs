<script setup lang="ts">
import ChannelSelection from '@/components/ChannelSelection.vue';
import CodeSample from '@/components/CodeSample.vue'
import { Channels, type IMagickImage } from '@imagemagick/magick-wasm';
import { ref } from 'vue';

const radius = ref<number>(0)
const sigma = ref<number>(1)
const channels = ref<Channels>(Channels.Undefined)

const emit = defineEmits<{
    (e: 'showExample', func: (image: IMagickImage) => void): void
}>()

const showExample = (): void => {
    emit('showExample', (image: IMagickImage) => {
        image.blur(radius.value, sigma.value, channels.value)
    })
}
</script>

<template>
    <CodeSample code="import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'
import { Channels } from '@imagemagick/magick-wasm/channels'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const radius = 0
    const sigma = 1
    const channels = Channels.Undefined
    image.blur(radius, sigma, channels)
    image.writeToCanvas(canvas)
})" />

    <div class="arguments">
        <label>Radius:</label><input type="number" v-model="radius" /><br />
        <label>Sigma:</label><input type="number" v-model="sigma" /><br />
        <label>Channels:</label><ChannelSelection v-model="channels"/><br />
    </div>

    <button @click="showExample">Show example</button>
</template>
