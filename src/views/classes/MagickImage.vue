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

  <canvas ref="myDiv"></canvas>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'
import CodeSample from '@/components/CodeSample.vue'

@Options({
  components: {
    CodeSample,
  },
  methods: {
    load: function(image: string)
    {
      ImageMagick.read(image, (image) => image.writeToCanvas(this.$refs.myDiv as HTMLCanvasElement))
    },
    blur: function()
    {
      const canvas = this.$refs.myDiv as HTMLCanvasElement
      ImageMagick.readFromCanvas(canvas, (image) =>
      {
        image.blur()
        image.writeToCanvas(canvas)
      })
    }
  }
})
export default class MagickImageView extends Vue {}
</script>
