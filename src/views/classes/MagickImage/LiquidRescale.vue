<template>
     <CodeSample code="import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const width = 300
    const height = 300
    image.liquidRescale(width, height)
    image.writeToCanvas(canvas)
})" />

    <h3>.liquidRescale(geometry: MagickGeometry)</h3>
    <h3>.liquidRescale(width: number, height: number)</h3>

    <div class="argument">
        <label>Width:</label><input type="number" v-model="width" /><br/>
        <label>Height:</label><input type="number" v-model="height" />
    </div>
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
    },
})
export default class LiquidRescale extends Vue implements MagickExample {
    width = 200
    height = 200

    showExample(): void { this.$emit('show-example', this) }

    changeImage(image: IMagickImage): void {
        image.liquidRescale(this.width, this.height);
    }
}
</script>
