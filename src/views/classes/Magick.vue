<template>
  <h1>Magick</h1>
  <h3>.delegates</h3>
  <CodeSample>{{delegates}}</CodeSample>

  <h3>.features</h3>
  <CodeSample>{{features}}</CodeSample>

  <h3>.imageMagickVersion</h3>
  <CodeSample>{{imagemagickVersion}}</CodeSample>

  <h3>.supportedFormats</h3>
  <CodeSample>{{supportedFormats}}</CodeSample>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Magick } from '@imagemagick/magick-wasm/magick'
import CodeSample from '@/components/CodeSample.vue'

function getFormatsArray() {
  return Magick.supportedFormats
    .map(function(format){
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
