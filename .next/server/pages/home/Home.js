(()=>{var e={};e.id=8972,e.ids=[8972,660],e.modules={8796:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,s){return s in t?t[s]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,s)):"function"==typeof t&&"default"===s?t:void 0}}})},5866:e=>{e.exports={button:"Button_button__z3MLN"}},6390:e=>{e.exports={container:"Home_container__xx88n",cachorro:"Home_cachorro__fEZPq",pets:"Home_pets__wv2y5",lista:"Home_lista__elvJH",lista_pets:"Home_lista_pets__18Aaq",quizAmizade:"Home_quizAmizade__3Vx1E",clientes:"Home_clientes__1FOd5",textoCliente:"Home_textoCliente__OyMMn",imgCliente:"Home_imgCliente__flwDu"}},4652:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>_,default:()=>u,getServerSideProps:()=>x,getStaticPaths:()=>p,getStaticProps:()=>m,reportWebVitals:()=>g,routeModule:()=>v,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>f,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>h});var a=s(8996),i=s(6586),o=s(8796),r=s(4058),n=s.n(r),c=s(3057),l=s.n(c),d=s(9942);let u=(0,o.l)(d,"default"),m=(0,o.l)(d,"getStaticProps"),p=(0,o.l)(d,"getStaticPaths"),x=(0,o.l)(d,"getServerSideProps"),_=(0,o.l)(d,"config"),g=(0,o.l)(d,"reportWebVitals"),h=(0,o.l)(d,"unstable_getStaticProps"),j=(0,o.l)(d,"unstable_getStaticPaths"),b=(0,o.l)(d,"unstable_getStaticParams"),P=(0,o.l)(d,"unstable_getServerProps"),f=(0,o.l)(d,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/home/Home",pathname:"/home/Home",bundlePath:"",filename:""},components:{App:l(),Document:n()},userland:d})},3057:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=s(3290),i=s(997),o=a._(s(6689)),r=s(1691);async function n(e){let{Component:t,ctx:s}=e;return{pageProps:await (0,r.loadGetInitialProps)(t,s)}}class c extends o.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,i.jsx)(e,{...t})}}c.origGetInitialProps=n,c.getInitialProps=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5727:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(997),i=s(5866),o=s.n(i),r=s(4661);let n=e=>a.jsx(r.Link,{to:e.link_to,children:a.jsx("button",{className:o().button,children:e.texto})})},9942:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Home:()=>c,default:()=>l});var a=s(997),i=s(5727),o=s(6390),r=s.n(o),n=s(4661);let c=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:r().container,children:[a.jsx("div",{children:(0,a.jsxs)("h1",{children:["Qual \xe9 a sua maior curiosidade",a.jsx("br",{}),"sobre o seu animal favorito?"]})}),(0,a.jsxs)("p",{children:["Explore exatamente o que voc\xea deseja saber!",a.jsx("br",{}),'Clique no bot\xe3o "Saiba Mais" para descobrir mais detalhes sobre a vida do seu pet.']}),a.jsx("div",{children:a.jsx(i.Z,{texto:"SAIBA MAIS",link_to:"/Animais"})}),a.jsx("img",{className:r().cachorro,src:"/images/dog_home.png",alt:"Cachorro da tela home","data-testid":"cachorro-home"})]}),a.jsx("section",{className:r().pets,children:(0,a.jsxs)("div",{children:[a.jsx("h2",{children:"E a\xed, qual o seu pet?"}),(0,a.jsxs)("ul",{className:r().lista,children:[a.jsx(n.Link,{to:"/Animais",children:a.jsx("img",{src:"/images/card_cachorro.png",alt:"\xcdcone pet cachorro","data-testid":"icone-cachorro",className:r().lista_pets})}),a.jsx(n.Link,{to:"/Animais",children:a.jsx("img",{src:"/images/card_gato.png",alt:"\xcdcone pet gato","data-testid":"icone-gato",className:r().lista_pets})}),a.jsx(n.Link,{to:"/Animais",children:a.jsx("img",{src:"/images/card_passaro.png",alt:"\xcdcone pet p\xe1ssaro","data-testid":"icone-passaro",className:r().lista_pets})}),a.jsx(n.Link,{to:"/Animais",children:a.jsx("img",{src:"/images/card_roedor.png",alt:"\xcdcone pet roedor","data-testid":"icone-roedor",className:r().lista_pets})}),a.jsx(n.Link,{to:"/Animais",children:a.jsx("img",{src:"/images/card_peixe.png",alt:"\xcdcone pet peixe","data-testid":"icone-peixe",className:r().lista_pets})}),a.jsx(n.Link,{to:"/Animais",children:a.jsx("img",{src:"/images/card_macaco.png",alt:"\xcdcone pet macaco","data-testid":"icone-macaco",className:r().lista_pets})}),a.jsx(n.Link,{to:"/Animais",children:a.jsx("img",{src:"/images/card_cobra.png",alt:"\xcdcone pet cobra","data-testid":"icone-cobra",className:r().lista_pets})})]})]})}),(0,a.jsxs)("section",{className:r().quizAmizade,children:[a.jsx("h3",{children:"Quiz da amizade"}),a.jsx("h1",{children:"Explore seus conhecimentos"}),(0,a.jsxs)("p",{children:["Descubra agora mesmo qu\xe3o bem voc\xea conhece o seu pet! ",a.jsx("br",{}),"Nosso quiz exclusivo \xe9 a oportunidade perfeita para testar seus conhecimentos sobre seu animalzinho. ",a.jsx("br",{})," De perguntas simples sobre suas prefer\xeancias alimentares a detalhes curiosos sobre seu comportamento, este desafio promete revelar o quanto voc\xea est\xe1 sintonizado com seu fiel amigo de quatro patas. ",a.jsx("br",{}),"  Prepare-se para se surpreender e se encantar com o que voc\xea aprender\xe1 sobre o seu pet!"]}),a.jsx(i.Z,{texto:"Vamos l\xe1?",link_to:"/quiz"})]}),(0,a.jsxs)("section",{className:r().clientes,children:[a.jsx("h1",{children:"DEPOIMENTO"}),(0,a.jsxs)("p",{className:r().textoCliente,children:["“Gostaria imensamente de expressar minha gratid\xe3o pelo valioso conte\xfado encontrado neste portal sobre cuidados com cachorros.",a.jsx("br",{}),"Desde que comecei a seguir as dicas e orienta\xe7\xf5es aqui compartilhadas, tenho visto uma  melhoria significativa na sa\xfade e felicidade do meu querido amigo de quatro patas.”"]}),a.jsx("h2",{children:"Ryan Mill"}),a.jsx("p",{className:r().textoCliente,children:"Engenheiro de dados"}),a.jsx("img",{src:"/images/cliente_cachorro.png",alt:"Homem segurando seu cachorro","data-testid":"Homem-e-cao",className:r().imgCliente})]})]}),l=c},6586:(e,t)=>{"use strict";var s;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(s||(s={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},4661:e=>{"use strict";e.exports=require("react-router-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[4058],()=>s(4652));module.exports=a})();