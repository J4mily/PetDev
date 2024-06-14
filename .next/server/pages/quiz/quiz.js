(()=>{var e={};e.id=5133,e.ids=[5133,660],e.modules={8796:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,s){return s in t?t[s]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,s)):"function"==typeof t&&"default"===s?t:void 0}}})},5866:e=>{e.exports={button:"Button_button__z3MLN"}},9985:e=>{e.exports={quizImg:"Quiz_quizImg__jygTo",text:"Quiz_text__kU3BV",nQuizContainer:"Quiz_nQuizContainer__L76BX"}},992:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>P,default:()=>c,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>b,routeModule:()=>h,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>x});var r=s(8996),a=s(6586),o=s(8796),i=s(4058),n=s.n(i),u=s(3057),d=s.n(u),l=s(4890);let c=(0,o.l)(l,"default"),p=(0,o.l)(l,"getStaticProps"),m=(0,o.l)(l,"getStaticPaths"),g=(0,o.l)(l,"getServerSideProps"),P=(0,o.l)(l,"config"),b=(0,o.l)(l,"reportWebVitals"),x=(0,o.l)(l,"unstable_getStaticProps"),f=(0,o.l)(l,"unstable_getStaticPaths"),v=(0,o.l)(l,"unstable_getStaticParams"),S=(0,o.l)(l,"unstable_getServerProps"),_=(0,o.l)(l,"unstable_getServerSideProps"),h=new r.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/quiz/quiz",pathname:"/quiz/quiz",bundlePath:"",filename:""},components:{App:d(),Document:n()},userland:l})},3057:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=s(3290),a=s(997),o=r._(s(6689)),i=s(1691);async function n(e){let{Component:t,ctx:s}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,s)}}class u extends o.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,a.jsx)(e,{...t})}}u.origGetInitialProps=n,u.getInitialProps=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5727:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(997),a=s(5866),o=s.n(a),i=s(4661);let n=e=>r.jsx(i.Link,{to:e.link_to,children:r.jsx("button",{className:o().button,children:e.texto})})},4890:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Quiz:()=>d,default:()=>l});var r=s(997),a=s(6689),o=s(9985),i=s.n(o),n=s(5727);let u=({imageUrl:e,text1:t,text2:s,text3:o})=>{let[u,d]=(0,a.useState)(!1),l=()=>{d(!0)},c=()=>{d(!1)},p=e=>{"Betta"===e?window.location.href="/Quiz/quizBetta":"Hamster"===e?window.location.href="/Quiz/quizHamster":"Sagui"===e&&(window.location.href="/Quiz/quizSagui")};return(0,r.jsxs)("div",{className:i().nQuizContainer,children:[r.jsx("div",{children:r.jsx("img",{className:`${i().quizImg} ${u?i().hovered:""}`,onClick:()=>p(o),onMouseEnter:l,onMouseLeave:c,src:e,alt:`Imagem quiz ${o}`})}),(0,r.jsxs)("div",{className:`${i().text} ${u?i().hovered:""}`,onClick:()=>p(o),onMouseEnter:l,onMouseLeave:c,children:[r.jsx("h1",{children:t}),r.jsx("p",{children:s}),r.jsx(n.Z,{texto:"COME\xc7AR"})]})]})},d=()=>(0,r.jsxs)("div",{children:[r.jsx(u,{imageUrl:"./images/ImgBetta.png",text1:"QUIZBETTA: SER\xc1 QUE ENTENDO DE PEIXE BETTA?",text2:"Bem-vindo ao divertido e educativo Quiz sobre os fascinantes peixes Betta! Prepare-se para mergulhar no mundo colorido e cheio de personalidade desses belos peixes de aqu\xe1rio. Este quiz vai testar seus conhecimentos sobre os Bettas, desde suas caracter\xedsticas f\xedsicas at\xe9 seus comportamentos \xfanicos. Ent\xe3o, ajuste suas barbatanas e prepare-se para descobrir o quanto voc\xea sabe sobre esses pequenos reis dos aqu\xe1rios!",text3:"Betta"}),r.jsx(u,{imageUrl:"./images/ImgHamster.png",text1:"HAMSTERMANIA: UM QUIZ PELUDO E DIVERTIDO!",text2:"Bem-vindo ao nosso Quiz R\xe1pido sobre Hamsters! Voc\xea est\xe1 pronto para testar seus conhecimentos sobre esses ador\xe1veis roedores de estima\xe7\xe3o? Responda \xe0s seis perguntas breves e descubra o quanto voc\xea sabe sobre os hamsters e suas peculiaridades. Vamos come\xe7ar!",text3:"Hamster"}),r.jsx(u,{imageUrl:"./images/ImgSagui.png",text1:"SAGUIS: UM QUIZ SOBRE OS PEQUENOS PRIMATAS.",text2:"Bem-vindo ao quiz divertido e educativo sobre saguis! Prepare-se para explorar o mundo encantador desses pequenos primatas e testar seus conhecimentos sobre sua biologia, comportamento e habitat. Os saguis s\xe3o criaturas fascinantes encontradas principalmente na Am\xe9rica do Sul, e este quiz vai desafiar voc\xea a aprender mais sobre eles. Ent\xe3o, vamos l\xe1 e divirta-se enquanto descobre fatos interessantes sobre esses ador\xe1veis primatas!",text3:"Sagui"})]}),l=d},6586:(e,t)=>{"use strict";var s;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(s||(s={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},4661:e=>{"use strict";e.exports=require("react-router-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[4058],()=>s(992));module.exports=r})();