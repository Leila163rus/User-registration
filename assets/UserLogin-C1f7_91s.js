import{_ as f,e as h,c as i,a as s,w as n,f as p,u as o,t as c,g as m,h as $,b as g,F as b,o as l,p as y,d as A,r as S}from"./index-BaqD4aqU.js";import{u as V}from"./store-BH4cAnYb.js";import{u as x,v as k}from"./index-CROIpsTU.js";const d=a=>(y("data-v-2acad868"),a=a(),A(),a),I={class:"input"},U=d(()=>s("span",{class:"title"},"Войти",-1)),B={class:"input"},E=d(()=>s("label",{for:"emailAddress"},"Email",-1)),L={key:0,class:"error"},N={class:"input"},z=d(()=>s("label",{for:"password"},"Пароль",-1)),C={key:0,class:"error"},D=d(()=>s("div",{class:"btn class"},[s("button",{class:"btn",type:"submit"},"Войти")],-1)),F={__name:"UserLogin",setup(a){const u=h({emailAddress:"",password:""}),e=x(k,u),_=V(),v=()=>{_.signLogin()};return(M,t)=>{const w=S("router-view");return l(),i(b,null,[s("form",{class:"forma",onSubmit:t[2]||(t[2]=$(r=>v(),["prevent"]))},[s("div",I,[U,s("div",B,[E,n(s("input",{id:"emailAddress",type:"text",placeholder:"Email",autocomplete:"on","onUpdate:modelValue":t[0]||(t[0]=r=>o(e).emailAddress.$model=r)},null,512),[[p,o(e).emailAddress.$model,void 0,{lazy:!0}]]),o(e).emailAddress.$error?(l(),i("p",L,c(o(e).emailAddress.$errors[0].$message),1)):m("",!0)]),s("div",N,[z,n(s("input",{id:"password",type:"password",placeholder:"Password",autocomplete:"on","onUpdate:modelValue":t[1]||(t[1]=r=>o(e).password.$model=r)},null,512),[[p,o(e).password.$model,void 0,{lazy:!0}]]),o(e).password.$error?(l(),i("p",C,c(o(e).password.$errors[0].$message),1)):m("",!0)])]),D],32),g(w)],64)}}},q=f(F,[["__scopeId","data-v-2acad868"]]);export{q as default};
