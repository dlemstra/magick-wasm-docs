<template>
     <CodeSample code="import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')
ImageMagick.readFromCanvas(canvas, (image) => {
    const radius = 0
    const sigma = 1
    image.charcoal(radius, sigma)
    image.writeToCanvas(canvas)
})" />

    <h3>.charcoal()</h3>
    <h3>.charcoal(radius: number, sigma: number)</h3>

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
export default class Charcoal extends Vue implements MagickExample {
    showExample(): void { this.$emit('show-example', this) }

    changeImage(image: IMagickImage): void {
        image.charcoal();
    }
}
</script>
