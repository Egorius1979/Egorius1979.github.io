(this["webpackJsonppokemons-react-redux-app"]=this["webpackJsonppokemons-react-redux-app"]||[]).push([[0],{40:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),o=c(17),r=c.n(o),i=c(10),l=c(4),j=(c(40),c(13)),b=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],o=Object(s.useState)(""),r=Object(j.a)(o,2),i=r[0],b=r[1],p=Object(s.useState)(!1),d=Object(j.a)(p,2),u=d[0],m=d[1],O=Object(s.useState)(""),h=Object(j.a)(O,2),x=h[0],g=h[1];return u?(alert("\u0423\u0440\u0430, \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c! \u0432\u0432\u0435\u0434\u0438\u0442\u0435 '123456' \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"),Object(n.jsx)(l.a,{to:"/login/check"})):Object(n.jsx)("body",{id:"bg",children:Object(n.jsxs)("form",{action:"#",className:"form",onSubmit:function(e){e.preventDefault(),"kode@kode.ru"===c&&"Enk0deng"===i&&m(!0),a(""),b(""),g("\u0412\u043f\u0435\u0440\u0432\u044b\u0435 \u0441\u043b\u044b\u0448\u0443! \u041f\u043e\u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u0435\u0439, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430!")},children:[Object(n.jsxs)("div",{class:"form__field",children:[Object(n.jsx)("input",{type:"email",name:"name",placeholder:"Login",required:!0,value:c,onChange:function(e){a(e.target.value),g("")}}),Object(n.jsx)("span",{class:"form__error",children:"\u043f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c E-Mail \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 vasya@site.com"})]}),Object(n.jsx)("div",{class:"form__field",children:Object(n.jsx)("input",{type:"password",name:"name",placeholder:"Password",required:!0,value:i,onChange:function(e){b(e.target.value),g("")}})}),Object(n.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),Object(n.jsx)("p",{className:"log-pass-error",children:x})]})})},p=c(3),d=c(9),u=c(16),m=c.n(u),O="SET_IS_LOGGED_IN",h="GET_CARDS",x="GET_TYPES",g="GET_SUBTYPES",f="GET_POKEMON_CARD",k="SET_PAGES_AMOUNT",v={isLoggedIn:!1,cards:[],types:[],subtypes:[],pokemonCard:{},itemsPerPage:12,pagesAmount:0};function y(e){return{type:O,isloggedIn:e}}var N=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],o=Object(s.useState)(""),r=Object(j.a)(o,2),i=r[0],b=r[1],d=Object(p.c)((function(e){return e.poke})).isLoggedIn,u=Object(p.b)();return d?(localStorage.setItem("poke-token","Good job, guys!"),Object(n.jsx)(l.a,{to:"/cards/1"})):Object(n.jsxs)("form",{action:"#",className:"form",onSubmit:function(e){e.preventDefault(),123456===+c&&u(y(!0)),a(""),b("\u0421\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u044c\u0442\u0435\u0441\u044c!")},children:[Object(n.jsx)("label",{htmlFor:"login-check"}),Object(n.jsxs)("div",{className:"form__field",children:[Object(n.jsx)("input",{id:"login-check",type:"name",name:"login-check",placeholder:"6-digit number",required:!0,value:c,pattern:"\\d{6}",minLength:"6",maxLength:"6",onChange:function(e){a(e.target.value),b("")}}),Object(n.jsx)("span",{className:"form__error",children:"\u043f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c 6 \u0446\u0438\u0444\u0440"})]}),Object(n.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),Object(n.jsx)("p",{className:"log-pass-error",children:i})]})},_=function(){var e=Object(l.h)().pokemonId,t=Object(p.b)(),c=Object(l.g)();return Object(n.jsxs)("header",{children:[Object(n.jsx)("div",{className:e?"":"back-invisible",children:Object(n.jsx)("button",{type:"button",onClick:function(){return c.goBack()},children:"BACK"})}),Object(n.jsx)("button",{type:"button",onClick:function(){t(y(!1)),c.push("/login")},children:"LOGOUT"})]})},S=function(){var e=Object(l.h)(),t=e.typeSelected,c=e.subtypeSelected,a=Object(p.c)((function(e){return e.poke})),o=a.types,r=a.subtypes,i=Object(p.b)(),j=Object(l.g)();return Object(s.useEffect)((function(){i((function(e){m()("https://api.pokemontcg.io/v1/types").then((function(t){return e({type:x,types:t.data.types.map((function(e){return e.toLowerCase()})).sort()})})),m()("https://api.pokemontcg.io/v1/subtypes").then((function(t){return e({type:g,subtypes:t.data.subtypes.map((function(e){return e.toLowerCase()})).sort()})}))}))}),[]),Object(n.jsxs)("div",{className:"left-sidebar",children:[Object(n.jsxs)("select",{name:"card-type",id:"card-type",value:t?t.toLowerCase():"",onChange:function(e){c?j.push("/cards/".concat(e.target.value,"/").concat(c,"/1")):j.push("/cards/".concat(e.target.value,"/1"))},children:[Object(n.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Choose type"}),o.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))]}),Object(n.jsxs)("select",{name:"card-subtype",id:"card-subtype",value:c?c.toLowerCase():"",onChange:function(e){j.push("/cards/".concat(t||"","/").concat(e.target.value,"/1"))},children:[Object(n.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Choose subtype"}),r.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))]})]})},C=function(){var e=Object(l.h)(),t=e.typeSelected,c=e.subtypeSelected,a=e.currentPage,o=Object(p.c)((function(e){return e.poke})),r=o.cards,j=o.itemsPerPage,b=o.pagesAmount,d=Object(p.b)();return Object(s.useEffect)((function(){d(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(c){m()("https://api.pokemontcg.io/v1/cards?types=".concat(e,"&subtype=").concat(t)).then((function(e){return c({type:h,cards:e.data.cards})}))}}(t,c))}),[t,c]),window.scroll(0,0),Object(n.jsx)("main",{className:b===+a?"main-section align-items":"main-section",children:r.filter((function(e,t){return t>=(+a-1)*j&&t<=+a*j-1})).map((function(e){return Object(n.jsxs)("div",{className:"pokemon-card",children:[Object(n.jsx)(i.b,{to:"/pokemon/".concat(e.id),children:Object(n.jsx)("img",{src:e.imageUrl,alt:e.name,className:"cards-img"})}),Object(n.jsx)("h3",{className:"names",children:e.name}),Object(n.jsx)("p",{className:"names",children:e.artist})]},e.id)}))})},E=function(){var e=Object(l.h)(),t=e.typeSelected,c=e.subtypeSelected,a=e.currentPage,o=Object(p.c)((function(e){return e.poke})).itemsPerPage,r=Object(p.c)((function(e){return e.poke.cards.length})),i=Math.ceil(r/o),j=o?Array(i).fill(null).map((function(e,t){return t+1})):[],b=Object(l.g)(),d=Object(p.b)();return Object(s.useEffect)((function(){d({type:k,value:i})}),[i]),1!==j.length&&Object(n.jsx)("div",{className:"pagination",children:j.map((function(e,s){return Object(n.jsx)("button",{type:"button",disabled:+a===e,className:"pagination-btn",onClick:function(){t||c||b.push("/cards/".concat(e)),t&&c&&b.push("/cards/".concat(t,"/").concat(c,"/").concat(e)),t&&!c&&b.push("/cards/".concat(t,"/").concat(e)),!t&&c&&b.push("/cards//".concat(c,"/").concat(e))},children:e},s)}))})},P=function(){return Object(p.c)((function(e){return e.poke})).isLoggedIn||localStorage.getItem("poke-token")?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(_,{}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"main-content",children:[Object(n.jsx)(S,{}),Object(n.jsx)(C,{})]}),Object(n.jsx)(E,{})]})]}):Object(n.jsx)(l.a,{to:"/login"})},I=function(){var e=Object(l.h)().pokemonId,t=Object(p.c)((function(e){return e.poke})),c=t.pokemonCard,a=t.isLoggedIn,o=Object(p.b)();return Object(s.useEffect)((function(){o(function(e){return function(t){m()("https://api.pokemontcg.io/v1/cards?id=".concat(e)).then((function(e){return t({type:f,card:e.data.cards[0]})}))}}(e))}),[e]),a||localStorage.getItem("poke-token")?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(_,{}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("img",{src:c.imageUrlHiRes,alt:c.name,className:"pokemon-img"}),Object(n.jsxs)("div",{className:"pokemon-properties",children:[Object(n.jsxs)("p",{className:c.name?"":"none",children:["Name: ",Object(n.jsxs)("span",{className:"poke-name",children:['"',c.name,'"']})]}),Object(n.jsxs)("p",{className:c.types?"":"none",children:["Type:",Object(n.jsxs)("span",{className:"poke-type",children:['"',c.types,'"']})]}),Object(n.jsxs)("p",{className:c.subtype?"":"none",children:["SubType:",Object(n.jsxs)("span",{className:"poke-subtype",children:['"',c.subtype,'"']})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:(c.attacks||[]).length?"prop-block":"none",children:[Object(n.jsx)("p",{className:"prop-block__title",children:"Damage:"}),Object(n.jsx)("p",{className:"prop-block__col",children:(c.attacks||[]).map((function(e){return Object(n.jsxs)("span",{className:"prop-block__col-block",children:['"',e.name,'"'," ",Object(n.jsxs)("span",{className:"damage-color",children:[" ",e.damage?"(".concat(e.damage,")"):""]})]},e.name)}))})]}),Object(n.jsxs)("div",{className:(c.attacks||[]).length?"prop-block":"none",children:[Object(n.jsx)("p",{className:"cost-title",children:"Attack cost:"}),Object(n.jsx)("p",{className:"prop-block__col",children:(c.attacks||[]).map((function(e){return Object(n.jsxs)("span",{className:"prop-block__col-block",children:['"',e.name,'"'," ",Object(n.jsx)("span",{className:"cost-color",children:e.convertedEnergyCost?"(".concat(e.convertedEnergyCost,")"):""})]},e.name)}))})]}),Object(n.jsxs)("div",{className:(c.resistances||[]).length?"prop-block":"none",children:[Object(n.jsx)("p",{className:"res-title",children:"Resistance:"}),Object(n.jsx)("p",{className:"prop-block__col",children:(c.resistances||[]).map((function(e){return Object(n.jsxs)("span",{className:"prop-block__col-block",children:['"',e.type,'"'," ",Object(n.jsx)("span",{className:"res-color",children:e.value?"(".concat(e.value,")"):""})]},e.type)}))})]}),Object(n.jsxs)("p",{className:c.evolvesFrom?"":"none",children:["EvolvesFrom:",Object(n.jsxs)("span",{className:"poke-evolvesFrom",children:['"',c.evolvesFrom,'"']})]}),Object(n.jsx)("div",{children:(c.attacks||[]).map((function(e,t){return Object(n.jsxs)("p",{className:"attacks",children:[Object(n.jsx)("span",{className:"attack-num",children:e.text?"Attack ".concat(t+1,":"):""})," ",e.text]},t)}))})]})]})]}):Object(n.jsx)(l.a,{to:"/login"})},L=function(){var e=Object(l.g)();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"404"}),Object(n.jsx)("p",{children:"Page Not Found"}),Object(n.jsx)("p",{children:"It looks like you found a glitch in the matrix..."}),Object(n.jsx)("br",{}),Object(n.jsxs)("button",{type:"button",tabIndex:"0",onClick:function(){e.push("/")},children:[" ","Go to the Main Page"]})]})})};L.defaultProps={};var T=L,w=c(34),A=Object(w.a)({reducer:{poke:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:t.isloggedIn});case h:return Object(d.a)(Object(d.a)({},e),{},{cards:t.cards});case x:return Object(d.a)(Object(d.a)({},e),{},{types:t.types});case g:return Object(d.a)(Object(d.a)({},e),{},{subtypes:t.subtypes});case f:return Object(d.a)(Object(d.a)({},e),{},{pokemonCard:t.card});case k:return Object(d.a)(Object(d.a)({},e),{},{pagesAmount:t.value});default:return e}}}});r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(p.a,{store:A,children:Object(n.jsx)(i.a,{basename:"/pokemons-react-redux-app",children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/login",component:b}),Object(n.jsx)(l.b,{exact:!0,path:"/login/check",component:N}),Object(n.jsx)(l.b,{exact:!0,path:"/cards/:currentPage",component:P}),Object(n.jsx)(l.b,{exact:!0,path:"/cards/:typeSelected/:currentPage",component:P}),Object(n.jsx)(l.b,{expact:!0,path:"/cards//:subtypeSelected/:currentPage",component:P}),Object(n.jsx)(l.b,{exact:!0,path:"/cards/:typeSelected/:subtypeSelected/:currentPage",component:P}),Object(n.jsx)(l.b,{exact:!0,path:"/pokemon/:pokemonId",component:I}),Object(n.jsx)(l.a,{from:"/",to:"/cards/1"}),Object(n.jsx)(l.b,{component:function(){return Object(n.jsx)(T,{})}})]})})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.2152a424.chunk.js.map