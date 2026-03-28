import{d as l,c as i,b as c,a,H as g,J as d,F as u,r as p,o as v}from"./assets/index-DiNHbTJR.js";import{_ as f}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-anSXjnKN.js";const k={class:"arguments"},b=l({__name:"RotateView",emits:["showExample"],setup(w,{emit:s}){const n=p(90),o=s,m=()=>{o("showExample",t=>{t.rotate(n.value)})};return(t,e)=>(v(),i(u,null,[c(f,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const degrees = 90
    image.rotate(degrees)
    image.writeToCanvas(canvas)
})`}),a("div",k,[e[1]||(e[1]=a("label",null,"Degrees:",-1)),g(a("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r)},null,512),[[d,n.value]]),e[2]||(e[2]=a("br",null,null,-1))]),a("button",{onClick:m},"Show example")],64))}});export{b as default};
