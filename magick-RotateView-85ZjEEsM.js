import{d as c,r as i,o as l,c as d,b as g,a as e,L as u,M as p,F as _}from"./assets/index-0QUy77Fg.js";import{_ as v}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-IAeoYUIw.js";const f={class:"arguments"},k=e("label",null,"Degrees:",-1),w=e("br",null,null,-1),E=c({__name:"RotateView",emits:["showExample"],setup(h,{emit:s}){const a=i(90),o=s,m=()=>{o("showExample",t=>{t.rotate(a.value)})};return(t,n)=>(l(),d(_,null,[g(v,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const degrees = 90
    image.rotate(degrees)
    image.writeToCanvas(canvas)
})`}),e("div",f,[k,u(e("input",{type:"number","onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r)},null,512),[[p,a.value]]),w]),e("button",{onClick:m},"Show example")],64))}});export{E as default};
