import{_ as h,e as $,c as l,a as e,w as n,f as p,u as o,t as m,g as c,h as w,b,F as g,o as i,p as y,d as A,r as U}from"./index-BaqD4aqU.js";import{u as V}from"./store-BH4cAnYb.js";import{u as S,v as k}from"./index-CROIpsTU.js";const r=d=>(y("data-v-0ab26b83"),d=d(),A(),d),x={class:"input"},I=r(()=>e("span",{class:"title"},"Регистрация",-1)),N={class:"input"},B=r(()=>e("label",{class:"field",for:"emailAddress"},"Email",-1)),E={key:0,class:"error"},z={class:"input"},C=r(()=>e("label",{class:"field",for:"password"},"Пароль",-1)),D={key:0,class:"error"},F={class:"input"},M=r(()=>e("label",{class:"field",for:"name"},"Имя",-1)),R={key:0,class:"error"},P=r(()=>e("div",{class:"btn class"},[e("button",{class:"btn",type:"submit"},"Зарегистрироваться")],-1)),T={__name:"RegistrationUser",setup(d){const u=$({emailAddress:"",password:"",name:""}),s=S(k,u),_=V(),f=()=>{_.signUp()};return(j,t)=>{const v=U("router-view");return i(),l(g,null,[e("form",{class:"forma",onSubmit:w(f,["prevent"])},[e("div",x,[I,e("div",N,[B,n(e("input",{id:"emailAddress",type:"email",placeholder:"Email",autocomplete:"on","onUpdate:modelValue":t[0]||(t[0]=a=>o(s).emailAddress.$model=a)},null,512),[[p,o(s).emailAddress.$model,void 0,{lazy:!0}]]),o(s).emailAddress.$error?(i(),l("p",E,m(o(s).emailAddress.$errors[0].$message),1)):c("",!0)]),e("div",z,[C,n(e("input",{id:"password",type:"password",placeholder:"Password",autocomplete:"on","onUpdate:modelValue":t[1]||(t[1]=a=>o(s).password.$model=a)},null,512),[[p,o(s).password.$model,void 0,{lazy:!0}]]),o(s).password.$error?(i(),l("p",D,m(o(s).password.$errors[0].$message),1)):c("",!0)]),e("div",F,[M,n(e("input",{id:"name",type:"text",placeholder:"Name",autocomplete:"on","onUpdate:modelValue":t[2]||(t[2]=a=>o(s).name.$model=a)},null,512),[[p,o(s).name.$model]]),o(s).name.$error?(i(),l("p",R,m(o(s).name.$errors[0].$message),1)):c("",!0)])]),P],32),b(v)],64)}}},J=h(T,[["__scopeId","data-v-0ab26b83"]]);export{J as default};
