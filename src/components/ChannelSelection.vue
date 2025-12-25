<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { Channels } from '@imagemagick/magick-wasm';
import { ref } from 'vue';

const props = defineProps<{
    modelValue: Channels
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', channels: Channels): void
}>()

interface ChannelOption {
    value: Channels;
    label: string;
    disabled: boolean;
}

const channels = ref<Channels[]>([props.modelValue])
const options: ChannelOption[] = [
    { value: Channels.Undefined, label: 'Undefined', disabled: false },
    { value: Channels.Composite, label: 'Composite', disabled: true },
    { value: Channels.Red, label: 'Red', disabled: true },
    { value: Channels.Green, label: 'Green', disabled: true },
    { value: Channels.Blue, label: 'Blue', disabled: true },
    { value: Channels.Black, label: 'Black', disabled: true },
    { value: Channels.Alpha, label: 'Alpha', disabled: true },
]

const valueChanged = (value: Channels[]): void => {
    if (value.length == 0) {
        for (let i = 0; i < options.length; i++) {
            options[i]!.disabled = false;
        }
    }

    let channels = Channels.Undefined;
    for (let i = 0; i < value.length; i++) {
        channels |= value[i]!;
    }
    emit('update:modelValue', channels)
}

const optionSelected = (_value: Channels[], option: ChannelOption): void => {
    if (option.value == Channels.Undefined) {
        for (let i = 1; i < options.length; i++) {
            options[i]!.disabled = true;
        }
    } else if (option.value == Channels.Composite) {
        options[0]!.disabled = true;
        for (let i = 2; i < options.length; i++) {
            options[i]!.disabled = true;
        }
    } else {
        options[0]!.disabled = true;
        options[1]!.disabled = true;
    }
}
</script>

<template>
    <Multiselect mode="tags" v-model="channels" :options="options" @change="valueChanged" @select="optionSelected">
    </Multiselect>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
