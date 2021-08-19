<template>
  <canvas ref="canvas" @drop.prevent="onDrop" @dragover.prevent></canvas>
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
  mounted(): void {
    const canvas = this.getCanvas()
    canvas.width = 400
    canvas.height = 400

    const ctx = canvas.getContext("2d")
    if (ctx === null)
      return

    ctx.fillStyle = 'rgb(219, 97, 162)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
  private async onDrop(event: DragEvent) {
    const files = event.dataTransfer?.files
    if (files === null)
      return;

    const file = files?.item(0)
    if (file === null || file === undefined)
      return

    const arrayBuffer = await file.arrayBuffer()
    const array = new Uint8Array(arrayBuffer)
    try {
      ImageMagick.read(array , (image) => {
        this.write(image)
      })
    } catch (exception) {
      // unable to read file
    }
  }
  private getCanvas() {
    return this.$refs.canvas as HTMLCanvasElement
  }
 }
</script>
