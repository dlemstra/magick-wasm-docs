import{M as e,a as t,c as n,d as r,f as i,k as a,t as o,x as s}from"./magick-runtime-core.esm-bundler-ClpiTnDU.js";import{n as c}from"./magick-runtime-dom.esm-bundler-DAw5gFGm.js";import{t as l}from"./magick-CodeSample-i2jzRyM0.js";var u={class:`arguments`},d=i({__name:`RotateView`,emits:[`showExample`],setup(i,{emit:d}){let f=e(90),p=d,m=()=>{p(`showExample`,e=>{e.rotate(f.value)})};return(e,i)=>(s(),n(o,null,[r(l,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const degrees = 90
    image.rotate(degrees)
    image.writeToCanvas(canvas)
})`}),t(`div`,u,[i[1]||=t(`label`,null,`Degrees:`,-1),a(t(`input`,{type:`number`,"onUpdate:modelValue":i[0]||=e=>f.value=e},null,512),[[c,f.value]]),i[2]||=t(`br`,null,null,-1)]),t(`button`,{onClick:m},`Show example`)],64))}});export{d as default};