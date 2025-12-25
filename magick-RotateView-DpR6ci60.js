import{d as l,r as i,c,b as g,a,K as d,L as u,F as p,o as v}from"./assets/index-CoZb0VGs.js";import{_ as f}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-BY_AV53F.js";const k={class:"arguments"},b=l({__name:"RotateView",emits:["showExample"],setup(w,{emit:s}){const n=i(90),o=s,m=()=>{o("showExample",t=>{t.rotate(n.value)})};return(t,e)=>(v(),c(p,null,[g(f,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const degrees = 90
    image.rotate(degrees)
    image.writeToCanvas(canvas)
})`}),a("div",k,[e[1]||(e[1]=a("label",null,"Degrees:",-1)),d(a("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r)},null,512),[[u,n.value]]),e[2]||(e[2]=a("br",null,null,-1))]),a("button",{onClick:m},"Show example")],64))}});export{b as default};
