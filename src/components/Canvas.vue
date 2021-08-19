<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import 'simple-syntax-highlighter/dist/sshpre.css'
import { ImageMagick } from '@imagemagick/magick-wasm'
import { IMagickImage } from '@imagemagick/magick-wasm/magick-image'
import { Vue } from 'vue-class-component'

export default class Canvas extends Vue {
  read(func: (image: IMagickImage) => void): void {
    ImageMagick.readFromCanvas(this.getCanvas(), (image) => {
      func(image)
    })
  }
  write(image: IMagickImage): void {
    image.writeToCanvas(this.getCanvas())
  }
  getCanvas(): HTMLCanvasElement {
    return this.$refs.canvas as HTMLCanvasElement
  }
 }
</script>
