import{d as y,r as I,e as S,l as x,f as D,o as R,c as V,w as h,v as F,h as C,g as _,s as L,a as r,b as l,i as v,j as s,F as $,k as b,p as q,m as E}from"./assets/index-CBFnrEq0.js";import{_ as M}from"./magick-_plugin-vue_export-helper-DlAUqK2U.js";const N=y({__name:"ImageCanvas",setup(d,{expose:c}){const n=I(),p=()=>{const e=new F;return e.font="Hack",e.backgroundColor=new C("pink"),e.fillColor=new C("black"),e},i=function(){const e=p();e.fontPointsize=40;const a=S.create();return a.read("label:Drop file here",e),a.extent(400,400,x.Center),a}(),o=async e=>{var g;const a=(g=e.dataTransfer)==null?void 0:g.files;if(a===null)return;const m=a==null?void 0:a.item(0);if(m==null)return;const z=await m.arrayBuffer(),B=new Uint8Array(z);try{_.read(B,f=>{f.resize(new L("1920x1080>")),t(f)})}catch(f){const k=p();k.fontPointsize=20,_.read(`caption:${f}`,k,w=>{w.extent(w.width+50,400,x.Center),t(w)})}},t=e=>{n.value!==void 0&&e.writeToCanvas(n.value)};return c({read:e=>{n.value!==void 0&&_.readFromCanvas(n.value,a=>{e(a)},{willReadFrequently:!0})},write:t}),D(()=>{t(i)}),(e,a)=>(R(),V("canvas",{ref_key:"canvas",ref:n,onDrop:h(o,["prevent"]),onDragover:a[0]||(a[0]=h(()=>{},["prevent"]))},null,544))}}),T=d=>(q("data-v-02ea1ebd"),d=d(),E(),d),A=T(()=>r("h1",null,"MagickImage",-1)),P={class:"container"},j={class:"buttons"},H=y({__name:"IndexView",setup(d){const c=I(),n=i=>{_.read(i,o=>{var t;return(t=c.value)==null?void 0:t.write(o)})},p=i=>{var o;(o=c.value)==null||o.read(t=>{var u;i(t),(u=c.value)==null||u.write(t)})};return(i,o)=>{const t=b("RouterLink"),u=b("RouterView");return R(),V($,null,[A,r("div",P,[r("div",null,[l(t,{to:"/classes/magick-image/blur"},{default:v(()=>[s("blur")]),_:1}),s(" | "),l(t,{to:"/classes/magick-image/charcoal"},{default:v(()=>[s("charcoal")]),_:1}),s(" | "),l(t,{to:"/classes/magick-image/liquidRescale"},{default:v(()=>[s("liquidRescale")]),_:1}),s(" | "),l(t,{to:"/classes/magick-image/rotate"},{default:v(()=>[s("rotate")]),_:1}),l(u,{onShowExample:p})]),r("div",null,[r("div",j,[r("button",{onClick:o[0]||(o[0]=e=>n("logo:"))},"Load logo"),r("button",{onClick:o[1]||(o[1]=e=>n("wizard:"))},"Load wizard")]),l(N,{ref_key:"canvas",ref:c},null,512)])])],64)}}}),J=M(H,[["__scopeId","data-v-02ea1ebd"]]);export{J as default};
