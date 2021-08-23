<template>
    <h1>MagickImage</h1>

    <div class="container">
        <div>
            <router-link to="/classes/magick-image/blur">blur</router-link>
            <router-view @showExample="showExample" />
        </div>
        <div>
            <div class="buttons">
                <button v-on:click="load('logo:')">Load logo</button>
                <button v-on:click="load('wizard:')">Load wizard</button>
            </div>
            <Canvas ref="canvas" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'
import { MagickExample } from '@/magick-example'
import Canvas from '@/components/Canvas.vue'

@Options({
    components: {
        Canvas
    }
})
export default class MagickImageView extends Vue {
    load(image: string): void {
        ImageMagick.read(image, (image) => this.getCanvas().write(image) )
    }

    showExample(example: MagickExample): void {
        const canvas = this.getCanvas()
        canvas.read((image) => {
            example.changeImage(image)
            canvas.write(image)
        })
    }

    private getCanvas() {
        return this.$refs.canvas as Canvas
    }
}
</script>

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
