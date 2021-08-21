<template>
  <canvas ref="canvas" @drop.prevent="onDrop" @dragover.prevent></canvas>
</template>

<script lang="ts">
import 'simple-syntax-highlighter/dist/sshpre.css'
import { Gravity } from '@imagemagick/magick-wasm/gravity';
import { ImageMagick } from '@imagemagick/magick-wasm'
import { IMagickImage, MagickImage } from '@imagemagick/magick-wasm/magick-image'
import { MagickColor } from '@imagemagick/magick-wasm/magick-color';
import { MagickReadSettings } from '@imagemagick/magick-wasm/settings/magick-read-settings';
import { Vue } from 'vue-class-component'

export default class Canvas extends Vue {
  static dropAreaImage = Canvas.createDropAreaImage();

  read(func: (image: IMagickImage) => void): void {
    ImageMagick.readFromCanvas(this.getCanvas(), (image) => {
      func(image)
    })
  }
  write(image: IMagickImage): void {
    image.writeToCanvas(this.getCanvas())
  }
  mounted(): void {
    this.write(Canvas.dropAreaImage)
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
      const settings = Canvas.createReadSettings()
      settings.fontPointsize = 20

      ImageMagick.read(`caption:${exception}`, settings, (image) => {
        image.extent(image.width + 50, 400, Gravity.Center)
        this.write(image)
      });
    }
  }
  private getCanvas() {
    return this.$refs.canvas as HTMLCanvasElement
  }
  private static createDropAreaImage() {
    const settings = Canvas.createReadSettings()
    settings.fontPointsize = 40

    const image = MagickImage.create()
    image.read('label:Drop file here', settings)
    image.extent(400, 400, Gravity.Center)
    return image
  }
  private static createReadSettings() {
    const settings = new MagickReadSettings()
    settings.font = 'Hack'
    settings.backgroundColor = new MagickColor('pink')
    settings.fillColor = new MagickColor('black')
    return settings
  }
 }
</script>
