<template>
  <h1>Magick</h1>
  <h3>.delegates</h3>
  <CodeSample :code=delegates />

  <h3>.features</h3>
  <CodeSample :code=features />

  <h3>.imageMagickVersion</h3>
  <CodeSample :code=imagemagickVersion />

  <h3>.supportedFormats</h3>
  <CodeSample :code=supportedFormats />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Magick } from '@imagemagick/magick-wasm/magick'
import CodeSample from '@/components/CodeSample.vue'

function getFormatsArray() {
  return Magick.supportedFormats
    .map(function(format) {
      const description = format.description.replace('\'', '\\\'')
      return `  { format: '${format.format}', description: '${description}', isReadable: ${format.isReadable}, isWritable: ${format.isWritable} }`
    }).join(",\n")
}

@Options({
  components: {
    CodeSample,
  },
  computed: {
    delegates() { return `> '${Magick.delegates}'` },
    features() { return `> '${Magick.features}'` },
    imagemagickVersion() { return `> '${Magick.imageMagickVersion}'` },
    supportedFormats() { return `[\n${getFormatsArray()}\n]` }
  }
})
export default class MagickView extends Vue {}
</script>
