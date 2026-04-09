import{M as e,a as t,c as n,d as r,f as i,k as a,t as o,x as s}from"./magick-runtime-core.esm-bundler-ClpiTnDU.js";import{n as c}from"./magick-runtime-dom.esm-bundler-DAw5gFGm.js";import{t as l}from"./magick-CodeSample-i2jzRyM0.js";var u={class:`arguments`},d=i({__name:`LiquidRescaleView`,emits:[`showExample`],setup(i,{emit:d}){let f=e(300),p=e(300),m=d,h=()=>{m(`showExample`,e=>{e.liquidRescale(f.value,p.value)})};return(e,i)=>(s(),n(o,null,[r(l,{code:`import { ImageMagick } from '@imagemagick/magick-wasm/image-magick'

const canvas = document.getElementById('canvasId')

ImageMagick.readFromCanvas(canvas, (image) => {
    const width = 300
    const height = 300
    image.liquidRescale(width, height)
    image.writeToCanvas(canvas)
})`}),t(`div`,u,[i[2]||=t(`label`,null,`Width:`,-1),a(t(`input`,{type:`number`,"onUpdate:modelValue":i[0]||=e=>f.value=e},null,512),[[c,f.value]]),i[3]||=t(`br`,null,null,-1),i[4]||=t(`label`,null,`Height:`,-1),a(t(`input`,{type:`number`,"onUpdate:modelValue":i[1]||=e=>p.value=e},null,512),[[c,p.value]])]),t(`button`,{onClick:h},`Show example`)],64))}});export{d as default};