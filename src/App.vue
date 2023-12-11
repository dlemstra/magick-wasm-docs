<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <a href="https://github.com/dlemstra/magick-wasm-docs"><img alt="Github logo" src="./assets/github.svg" /></a> |
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/classes/magick">Magick</RouterLink> |
        <RouterLink to="/classes/magick-image">MagickImage</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
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
.arguments {
    margin-top: 10px;
}
.arguments label {
    display: inline-block;
    width: 80px;
}
.arguments input {
    width: 50px;
    margin-bottom: 10px;
}
.arguments .multiselect {
    display: inline-block;
    width: 400px;
    margin-bottom: 10px;
}
</style>
