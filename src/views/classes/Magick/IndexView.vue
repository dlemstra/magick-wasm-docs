<script setup lang="ts">
import { Magick } from '@imagemagick/magick-wasm'
import CodeSample from '@/components/CodeSample.vue'

const delegates = `> '${Magick.delegates}'`;
const features = `> '${Magick.features}'`;
const imageMagickVersion = `> '${Magick.imageMagickVersion}'`;
const supportedFormats = Magick.supportedFormats
    .map(function (format) {
        const description = format.description.replace('\'', '\\\'')
        return `  { format: '${format.format}', description: '${description}', supportsReading: ${format.supportsReading}, supportsWriting: ${format.supportsWriting} }`
    }).join(",\n");
</script>

<template>
    <h1>Magick</h1>
    <h3>.delegates</h3>
    <CodeSample :code=delegates />

    <h3>.features</h3>
    <CodeSample :code=features />

    <h3>.imageMagickVersion</h3>
    <CodeSample :code=imageMagickVersion />

    <h3>.supportedFormats</h3>
    <CodeSample :code=supportedFormats />
</template>
