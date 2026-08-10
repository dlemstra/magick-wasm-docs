import{D as e,I as t,P as n,b as r,f as i,h as a,l as o,v as s,x as c}from"./assets/index-CeO-Avv-.js";import{t as l}from"./magick-CodeSample-BIYv9khU.js";var u={class:`arguments`},d=c({__name:`RotateView`,emits:[`showExample`],setup(c,{emit:d}){let f=t(90),p=d,m=()=>{p(`showExample`,e=>{e.rotate(f.value)})};return(t,c)=>(e(),s(i,null,[r(l,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const degrees = 90
    image.rotate(degrees)
    image.writeToCanvas(canvas)
})`}),a(`div`,u,[c[1]||=a(`label`,null,`Degrees:`,-1),n(a(`input`,{type:`number`,"onUpdate:modelValue":c[0]||=e=>f.value=e},null,512),[[o,f.value]]),c[2]||=a(`br`,null,null,-1)]),a(`button`,{onClick:m},`Show example`)],64))}});export{d as default};