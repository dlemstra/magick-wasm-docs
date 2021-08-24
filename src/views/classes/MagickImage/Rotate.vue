<template>
     <CodeSample code="import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const degrees = 90
    image.rotate(degrees)
    image.writeToCanvas(canvas)
})" />

    <h3>.rotate(degrees: number)</h3>

    <button :onclick="showExample">Execute</button>
</template>

<script lang="ts">
import { IMagickImage } from '@imagemagick/magick-wasm/magick-image'
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
        image.rotate(90);
    }
}
</script>
