import{d as r,r as i,o as g,c as p,b as h,a as e,L as l,M as m,F as v}from"./assets/index-CBFnrEq0.js";import{_}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-DjAVvZlC.js";const w={class:"arguments"},f=e("label",null,"Width:",-1),k=e("br",null,null,-1),b=e("label",null,"Height:",-1),B=r({__name:"LiquidRescaleView",emits:["showExample"],setup(x,{emit:c}){const t=i(300),n=i(300),u=c,d=()=>{u("showExample",o=>{o.liquidRescale(t.value,n.value)})};return(o,a)=>(g(),p(v,null,[h(_,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const width = 300
    const height = 300
    image.liquidRescale(width, height)
    image.writeToCanvas(canvas)
})`}),e("div",w,[f,l(e("input",{type:"number","onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s)},null,512),[[m,t.value]]),k,b,l(e("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=s=>n.value=s)},null,512),[[m,n.value]])]),e("button",{onClick:d},"Show example")],64))}});export{B as default};
