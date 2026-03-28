import{d as g,c as p,b as c,a,H as i,J as o,F as v,r as m,o as w}from"./assets/index-DiNHbTJR.js";import{_ as f}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-anSXjnKN.js";const h={class:"arguments"},E=g({__name:"LiquidRescaleView",emits:["showExample"],setup(k,{emit:u}){const n=m(300),t=m(300),r=u,d=()=>{r("showExample",s=>{s.liquidRescale(n.value,t.value)})};return(s,e)=>(w(),p(v,null,[c(f,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const width = 300
    const height = 300
    image.liquidRescale(width, height)
    image.writeToCanvas(canvas)
})`}),a("div",h,[e[2]||(e[2]=a("label",null,"Width:",-1)),i(a("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l)},null,512),[[o,n.value]]),e[3]||(e[3]=a("br",null,null,-1)),e[4]||(e[4]=a("label",null,"Height:",-1)),i(a("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l)},null,512),[[o,t.value]])]),a("button",{onClick:d},"Show example")],64))}});export{E as default};
