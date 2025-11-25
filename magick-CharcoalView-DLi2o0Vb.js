import{d,r as l,o as g,c as p,b as _,a,N as m,O as i,F as v}from"./assets/index-D7wTFhf5.js";import{_ as h}from"./magick-CodeSample.vue_vue_type_style_index_0_lang-DQm8ip3e.js";const b={class:"arguments"},f=a("label",null,"Radius:",-1),k=a("br",null,null,-1),w=a("label",null,"Sigma:",-1),x=a("br",null,null,-1),B=d({__name:"CharcoalView",emits:["showExample"],setup(C,{emit:c}){const n=l(0),s=l(1),r=c,u=()=>{r("showExample",t=>{t.charcoal(n.value,s.value)})};return(t,e)=>(g(),p(v,null,[_(h,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const radius = 0
    const sigma = 1
    image.charcoal(radius, sigma)
    image.writeToCanvas(canvas)
})`}),a("div",b,[f,m(a("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o)},null,512),[[i,n.value]]),k,w,m(a("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=o=>s.value=o)},null,512),[[i,s.value]]),x]),a("button",{onClick:u},"Show example")],64))}});export{B as default};
