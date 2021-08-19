<template>
  <h1>MagickImage</h1>
  <h3>.blur()</h3>

  <CodeSample>
    <pre>import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')
ImageMagick.readFromCanvas(canvas, (image) =>
{
  image.blur()
  image.writeToCanvas(canvas)
});</pre>
  </CodeSample>

  <div>
    <br />
    <button v-on:click="load('logo:')">Load logo</button>
    <button v-on:click="load('wizard:')">Load wizard</button>
    <button v-on:click="blur()">Blur</button>
  </div>

  <Canvas ref="canvas" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'
import CodeSample from '@/components/CodeSample.vue'
import Canvas from '@/components/Canvas.vue'

@Options({
  components: {
    CodeSample,
    Canvas
  }
})
export default class MagickImageView extends Vue {
  load(image: string): void {
    ImageMagick.read(image, (image) => this.getCanvas().write(image) )
  }
  blur(): void {
    const canvas = this.getCanvas()
    canvas.read((image) => {
      image.blur()
      canvas.write(image)
    })
  }
  private getCanvas() {
    return this.$refs.canvas as Canvas
  }
}
</script>
