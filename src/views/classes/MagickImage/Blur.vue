<template>
     <CodeSample code="import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'
import { Channels } from '@imagemagick/magick-wasm/channels'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const radius = 0
    const sigma = 1
    const channels = Channels.Composite
    image.blur(radius, sigma, channels)
    image.writeToCanvas(canvas)
})" />

    <h3>.blur()</h3>
    <h3>.blur(channels: Channels)</h3>
    <h3>.blur(radius: number, sigma: number)</h3>
    <h3>.blur(radius: number, sigma: number, channels: Channels)</h3>

    <button :onclick="showExample">Execute</button>
</template>

<script lang="ts">
import { IMagickImage } from '@imagemagick/magick-wasm'
import { MagickExample } from '@/magick-example'
import { Options, Vue } from 'vue-class-component'
import CodeSample from '@/components/CodeSample.vue'

@Options({
    emits: ["show-example"],
    components: {
        CodeSample,
    }
})
export default class Blur extends Vue implements MagickExample {
    showExample(): void { this.$emit('show-example', this) }

    changeImage(image: IMagickImage): void {
        image.blur();

    }
}
</script>
