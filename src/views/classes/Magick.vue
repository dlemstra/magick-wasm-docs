<template>
  <h1>Magick</h1>
  <h3>.delegates</h3>
  <CodeSample :code=delegates() />

  <h3>.features</h3>
  <CodeSample :code=features() />

  <h3>.imageMagickVersion</h3>
  <CodeSample :code=imagemagickVersion() />

  <h3>.supportedFormats</h3>
  <CodeSample :code=supportedFormats() />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Magick } from '@imagemagick/magick-wasm/magick'
import CodeSample from '@/components/CodeSample.vue'

@Options({
  components: {
    CodeSample,
  },
  computed: {
  }
})
export default class MagickView extends Vue {
    delegates(): string { return `> '${Magick.delegates}'` }
    features(): string { return `> '${Magick.features}'` }
    imagemagickVersion(): string { return `> '${Magick.imageMagickVersion}'` }
    supportedFormats(): string { return `[\n${this.getFormatsArray()}\n]` }

    private getFormatsArray() {
      return Magick.supportedFormats
        .map(function(format) {
          const description = format.description.replace('\'', '\\\'')
          return `  { format: '${format.format}', description: '${description}', isReadable: ${format.isReadable}, isWritable: ${format.isWritable} }`
        }).join(",\n")
    }
}
</script>
