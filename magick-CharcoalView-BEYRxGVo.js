import{d as g,r as t,c as p,b as c,a as e,K as m,L as i,F as v,o as b}from"./assets/index-CoZb0VGs.js";import{_ as f}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-BY_AV53F.js";const k={class:"arguments"},E=g({__name:"CharcoalView",emits:["showExample"],setup(w,{emit:r}){const n=t(0),s=t(1),u=r,d=()=>{u("showExample",o=>{o.charcoal(n.value,s.value)})};return(o,a)=>(b(),p(v,null,[c(f,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const radius = 0
    const sigma = 1
    image.charcoal(radius, sigma)
    image.writeToCanvas(canvas)
})`}),e("div",k,[a[2]||(a[2]=e("label",null,"Radius:",-1)),m(e("input",{type:"number","onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l)},null,512),[[i,n.value]]),a[3]||(a[3]=e("br",null,null,-1)),a[4]||(a[4]=e("label",null,"Sigma:",-1)),m(e("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=l=>s.value=l)},null,512),[[i,s.value]]),a[5]||(a[5]=e("br",null,null,-1))]),e("button",{onClick:d},"Show example")],64))}});export{E as default};
