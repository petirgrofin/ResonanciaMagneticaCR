import{r as R,j as r,N as L,F as T,c as _,R as F}from"./index-dfcfbde6.js";const o={origin:"https://api.emailjs.com",blockHeadless:!1},h=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},H=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=h(e);o.publicKey=s.publicKey,o.blockHeadless=s.blockHeadless,o.blockList=s.blockList,o.limitRate=s.limitRate,o.origin=s.origin||t};class l{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const f=async(e,t,s={})=>{const i=await fetch(o.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),n=new l(i.status,a);if(i.ok)return n;throw n},j=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},E=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},g=e=>e.webdriver||!e.languages||e.languages.length===0,x=()=>new l(451,"Unavailable For Headless Browser"),N=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},S=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},V=(e,t)=>e instanceof FormData?e.get(t):e[t],y=(e,t)=>{if(S(e))return!1;N(e.list,e.watchVariable);const s=V(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},w=()=>new l(403,"Forbidden"),K=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},P=(e,t,s)=>{const i=Number(s.getItem(e)||0);return t-Date.now()+i},p=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},k=(e,t,s)=>{if(!s.throttle)return!1;K(s.throttle,s.id);const i=s.id||t,a=P(i,s.throttle,e);return a>0?(p(i,a,e),!0):(e.setItem(i,Date.now().toString()),p(i,s.throttle,e),!1)},v=()=>new l(429,"Too Many Requests"),A=(e,t,s,i)=>{const a=h(i),n=a.publicKey||o.publicKey,m=a.blockHeadless||o.blockHeadless,d={...o.blockList,...a.blockList},u={...o.limitRate,...a.limitRate};return m&&g(navigator)?Promise.reject(x()):(j(n,e,t),E(s),s&&y(d,s)?Promise.reject(w()):k(localStorage,location.pathname,u)?Promise.reject(v()):f("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},B=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},D=e=>typeof e=="string"?document.querySelector(e):e,q=(e,t,s,i)=>{const a=h(i),n=a.publicKey||o.publicKey,m=a.blockHeadless||o.blockHeadless,d={...o.blockList,...a.blockList},u={...o.limitRate,...a.limitRate};if(m&&g(navigator))return Promise.reject(x());const b=D(s);j(n,e,t),B(b);const c=new FormData(b);return y(d,c)?Promise.reject(w()):k(localStorage,location.pathname,u)?Promise.reject(v()):(c.append("lib_version","4.1.0"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n),f("/api/v1.0/email/send-form",c))},C={init:H,send:A,sendForm:q},M=()=>{const e=R.useRef(),t=s=>{s.preventDefault(),C.sendForm("service_boqjv06","template_3184d9e",e.current,{publicKey:"D-2WM6yi9tCA057lP"}).then(()=>{console.log("SUCCESS!")},i=>{console.log("FAILED...",i.text)})};return r.jsxs("div",{className:"bg-[#F7F7F7]",children:[r.jsx(L,{background_visible_always:!0}),r.jsxs("div",{className:"pt-64 pb-32 w-[50%] m-auto flex flex-col gap-6 rounded-2xl",children:[r.jsx("h2",{className:"font-jakarta text-[3.5em] m-auto font-bold",children:"Contáctenos"}),r.jsxs("form",{className:"text-[18px] font-jakarta flex flex-col w-[50%] gap-6 m-auto",ref:e,onSubmit:t,children:[r.jsx("input",{type:"hidden",name:"contact_number"}),r.jsx("label",{children:"Nombre completo"}),r.jsx("input",{type:"text",name:"user_name"}),r.jsx("label",{children:"Correo electrónico"}),r.jsx("input",{type:"email",name:"user_email"}),r.jsx("label",{children:"Razón de consulta"}),r.jsx("textarea",{name:"message"}),r.jsx("div",{className:"g-recaptcha","data-sitekey":"6Ldf3XwpAAAAAGxuUWg_lnR3tpa_VU9yBDaIY9pK"}),r.jsx("br",{}),r.jsx("input",{className:"active:bg-[#324a8b] hover:bg-[#4263bd] bg-[#527bec] text-white w-[100%] text-[16px] m-auto p-4 rounded-2xl",type:"submit",value:"Enviar"})]})]}),r.jsx(T,{})]})};_.createRoot(document.getElementById("root")).render(r.jsx(F.StrictMode,{children:r.jsx(M,{})}));