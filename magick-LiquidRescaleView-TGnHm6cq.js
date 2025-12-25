import{d as g,r as i,c as p,b as c,a,K as o,L as m,F as v,o as w}from"./assets/index-CoZb0VGs.js";import{_ as f}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-BY_AV53F.js";const h={class:"arguments"},E=g({__name:"LiquidRescaleView",emits:["showExample"],setup(k,{emit:u}){const n=i(300),t=i(300),r=u,d=()=>{r("showExample",s=>{s.liquidRescale(n.value,t.value)})};return(s,e)=>(w(),p(v,null,[c(f,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const width = 300
    const height = 300
    image.liquidRescale(width, height)
    image.writeToCanvas(canvas)
})`}),a("div",h,[e[2]||(e[2]=a("label",null,"Width:",-1)),o(a("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l)},null,512),[[m,n.value]]),e[3]||(e[3]=a("br",null,null,-1)),e[4]||(e[4]=a("label",null,"Height:",-1)),o(a("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l)},null,512),[[m,t.value]])]),a("button",{onClick:d},"Show example")],64))}});export{E as default};
