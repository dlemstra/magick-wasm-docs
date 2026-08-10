import{D as e,I as t,P as n,b as r,f as i,h as a,l as o,v as s,x as c}from"./assets/index-CeO-Avv-.js";import{t as l}from"./magick-CodeSample-BIYv9khU.js";var u={class:`arguments`},d=c({__name:`CharcoalView`,emits:[`showExample`],setup(c,{emit:d}){let f=t(0),p=t(1),m=d,h=()=>{m(`showExample`,e=>{e.charcoal(f.value,p.value)})};return(t,c)=>(e(),s(i,null,[r(l,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const radius = 0
    const sigma = 1
    image.charcoal(radius, sigma)
    image.writeToCanvas(canvas)
})`}),a(`div`,u,[c[2]||=a(`label`,null,`Radius:`,-1),n(a(`input`,{type:`number`,"onUpdate:modelValue":c[0]||=e=>f.value=e},null,512),[[o,f.value]]),c[3]||=a(`br`,null,null,-1),c[4]||=a(`label`,null,`Sigma:`,-1),n(a(`input`,{type:`number`,"onUpdate:modelValue":c[1]||=e=>p.value=e},null,512),[[o,p.value]]),c[5]||=a(`br`,null,null,-1)]),a(`button`,{onClick:h},`Show example`)],64))}});export{d as default};