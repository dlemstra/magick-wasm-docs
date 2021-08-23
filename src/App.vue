<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/classes/magick">Magick</router-link> |
        <router-link to="/classes/magick-image">MagickImage</router-link>
    </div>
    <router-view/>
</template>

<style>
@font-face {
    font-family: 'Hack';
    src: url('./assets/fonts/Hack-Regular.ttf') format('truetype')
}
</style>
