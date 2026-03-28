import{d as g,c as p,b as c,a as e,H as t,J as m,F as v,r as i,o as b}from"./assets/index-DiNHbTJR.js";import{_ as f}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-anSXjnKN.js";const k={class:"arguments"},E=g({__name:"CharcoalView",emits:["showExample"],setup(w,{emit:r}){const n=i(0),s=i(1),u=r,d=()=>{u("showExample",o=>{o.charcoal(n.value,s.value)})};return(o,a)=>(b(),p(v,null,[c(f,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const radius = 0
    const sigma = 1
    image.charcoal(radius, sigma)
    image.writeToCanvas(canvas)
})`}),e("div",k,[a[2]||(a[2]=e("label",null,"Radius:",-1)),t(e("input",{type:"number","onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l)},null,512),[[m,n.value]]),a[3]||(a[3]=e("br",null,null,-1)),a[4]||(a[4]=e("label",null,"Sigma:",-1)),t(e("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=l=>s.value=l)},null,512),[[m,s.value]]),a[5]||(a[5]=e("br",null,null,-1))]),e("button",{onClick:d},"Show example")],64))}});export{E as default};
