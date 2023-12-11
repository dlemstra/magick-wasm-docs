<script setup lang="ts">
import { Gravity, ImageMagick, type IMagickImage, MagickColor, MagickGeometry, MagickImage, MagickReadSettings } from '@imagemagick/magick-wasm';
import { ref, onMounted } from 'vue'

const canvas = ref<HTMLCanvasElement>();

const createReadSettings = (): MagickReadSettings => {
    const settings = new MagickReadSettings()
    settings.font = 'Hack'
    settings.backgroundColor = new MagickColor('pink')
    settings.fillColor = new MagickColor('black')
    return settings
}

const dropAreaImage = function (): IMagickImage {
    const settings = createReadSettings()
    settings.fontPointsize = 40

    const image = MagickImage.create()
    image.read('label:Drop file here', settings)
    image.extent(400, 400, Gravity.Center)
    return image
}()

const onDrop = async (event: DragEvent): Promise<void> => {
    const files = event.dataTransfer?.files
    if (files === null)
        return;

    const file = files?.item(0)
    if (file === null || file === undefined)
        return

    const arrayBuffer = await file.arrayBuffer()
    const array = new Uint8Array(arrayBuffer)
    try {
        ImageMagick.read(array, (image) => {
            image.resize(new MagickGeometry('1920x1080>'))
            write(image)
        })
    } catch (exception) {
        const settings = createReadSettings()
        settings.fontPointsize = 20

        ImageMagick.read(`caption:${exception}`, settings, (image) => {
            image.extent(image.width + 50, 400, Gravity.Center)
            write(image)
        });
    }
}

const write = (image: IMagickImage): void => {
    if (canvas.value === undefined)
        return

    image.writeToCanvas(canvas.value)
}

const read = (func: (image: IMagickImage) => void): void => {
    if (canvas.value === undefined)
        return

    ImageMagick.readFromCanvas(canvas.value, (image) => {
        func(image)
    })
}

defineExpose({
    read,
    write
});

onMounted(() => {
    write(dropAreaImage);
})
</script>

<template>
    <canvas ref="canvas" @drop.prevent="onDrop" @dragover.prevent></canvas>
</template>
