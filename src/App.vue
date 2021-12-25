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
button {
    cursor: pointer;
    font-family: 'Hack';
    font-weight: bold;
    border-radius: 2em;
    border-color: black;
    color: pink;
    background-color: black;
    text-align: center;
    display: inline-block;
    padding: 0.5em 1em;
    margin: 0 1em 1em 0;
}
button:hover {
    color: pink;
    background-color: black;
}
.argument label {
    display: inline-block;
    width: 80px;
}
.argument input {
    width: 50px;
    margin-bottom: 10px;
}
</style>
