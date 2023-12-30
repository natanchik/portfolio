(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(81),o=n.n(a),r=n(645),i=n.n(r),s=n(667),c=n.n(s),d=new URL(n(579),n.b),p=i()(o()),l=c()(d);p.push([e.id,`html{font-size:10px}body{padding:0;margin:0;box-sizing:border-box;color:#354e5b;font-size:2rem;font-family:"Josefin Sans",sans-serif;background-color:#fff}body h1{font-size:3.2rem;text-shadow:1px 1px 2px #354e5b,0 0 2em #354e5b,0 0 1em #354e5b}body a{color:#354e5b}@media(max-width: 400px){body{font-size:1.8rem}}.wrapper{position:relative;max-width:1000px;padding:60px 40px 0;margin:0 auto;background-color:#dfebf5;border-radius:30px}.wrapper>*{padding:35px 70px 20px}@media(max-width: 515px){.wrapper>*{padding:20px 10px}}.header{position:fixed;width:100%;top:0;left:0;z-index:10;padding:0}.header .header__wrapper{max-width:1000px;margin:0 auto;padding:0;display:flex;justify-content:space-between;align-items:center;background-color:#dfebf5}.header .header__wrapper .header__logo{text-align:center;font-size:24px;border:2px solid #354e5b;border-radius:7px;padding:7px}.header .header__wrapper .header__item{list-style:none;margin:0 7px;text-decoration:none}.header .header__wrapper .header__item:hover{text-decoration:underline}.intro{display:flex;justify-content:space-between;background-color:#fff}.intro>*{display:inline-block;height:fit-content}@media(max-width: 760px){.intro{flex-wrap:wrap;justify-content:space-around}}.intro__my-foto{width:250px;height:250px;background-image:url(${l});background-size:cover;background-repeat:no-repeat;border:10px solid #fff}@media(max-width: 760px){.intro__my-foto{order:-1}}@media(max-width: 360px){.intro__my-foto{width:200px;height:200px}}@media(max-width: 320px){.intro__my-foto{width:60vw;height:60vw}}.about-me{text-align:center;background-color:#dfebf5}.about-me p{text-align:left;margin-bottom:0;line-height:1.6}.stack{text-align:center;background-color:#fff}.stack .stack__item{display:inline-block;margin:12px;text-align:center}.stack .stack__item .stack__img{background-size:cover;background-repeat:no-repeat;width:70px;height:70px}.projects{text-align:center;background-color:#dfebf5}.projects a{color:#354e5b;text-decoration:none}.projects h4{margin-top:10px}.projects__items{display:flex;width:100%;flex-wrap:wrap;justify-content:space-around}.projects__items h4:hover,.projects__items h4:focus,.projects__items h4:active{text-decoration:underline;color:#101d96;opacity:60%}.projects__item{display:inline-block;width:300px;height:100px;background-size:cover;background-repeat:no-repeat;border:1px solid #354e5b;border-radius:20px;box-shadow:inset 2px 2px 2px #354e5b;margin-bottom:15px}.projects__item:hover,.projects__item:focus,.projects__item:active{opacity:70%}@media(max-width: 515px){.projects__item{width:250px}}@media(max-width: 375px){.projects__item{width:200px;height:80px}}@media(max-width: 320px){.projects__item{width:60vw;height:70px}}.intro:hover,.projects:hover{animation-duration:.5s;animation-name:scale-animation}@keyframes slide{25%{transform:translateX(-5px) translateY(-5px)}75%{transform:translateX(5px) translateY(5px)}}.intro__my-foto:hover,h1:hover,h2:hover,h4:hover{animation-duration:.5s;animation-name:scale-animation}.contacts{padding-bottom:20px;background-color:#fff}@keyframes scale-animation{50%{transform:scale(1.02)}}.modal{display:none;position:fixed;top:calc(50vh - 150px);left:calc(50vw - 150px);width:300px;height:300px;z-index:10;background-image:linear-gradient(135deg, rgb(255, 255, 255), rgb(223, 235, 245), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255));border:5px solid #354e5b;text-align:center;font-weight:400}.modal.active{display:block}.modal .close-button{position:absolute;top:0;right:0;padding-top:2px;width:25px;height:20px;border:1px solid #354e5b;text-align:center}.footer{padding:20px;text-align:center;height:fit-content;background-color:#dfebf5}`,""]);const h=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);a&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],p=r[d]||0,l="".concat(d," ").concat(p);r[d]=p+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var u=o(m,a);a.byIndex=s,t.splice(s,0,{identifier:l,updater:u,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=n(r[i]);t[s].references--}for(var c=a(e,o),d=0;d<r.length;d++){var p=n(r[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},579:(e,t,n)=>{e.exports=n.p+"assets/images/foto.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=document.createElement("div");e.classList.add("wrapper");const t=document.createElement("header");t.classList.add("header");const a=document.createElement("div");a.classList.add("header__wrapper"),t.append(a);const o=document.createElement("a");o.classList.add("header__logo"),o.href="#intro",o.innerHTML="<b><i>Coder</i></b>";const r=document.createElement("ul");r.classList.add("header__menu"),[["about","About"],["skills","Skills"],["projects","Projects"],["contacts","Contacts"]].map((e=>{const t=document.createElement("a");t.classList.add("header__item"),t.href=`#${e[0]}`,t.textContent=e[1],r.append(t)})),a.append(o,r);const i=document.createElement("div");i.id="intro",i.classList.add("intro");const s=document.createElement("div");s.classList.add("intro__my-foto");const c=document.createElement("div");c.classList.add("intro__greet"),c.innerHTML='<h2>Hello! I\'m Natalia</h2>\n<h1>Frontend Developer</h1>\n<p>My GitHub: <a href="https://github.com/natanchik">natanchik</a></p>\n<p>My <a href="https://www.linkedin.com/in/natalia-lebedeva-b0391b293/">LinkedIn</a></p>',i.append(c,s);const d=document.createElement("div");d.classList.add("about-me"),d.id="about",d.innerHTML="<h2>About me</h2><p>I have been interested in programming all my life.\nI started my path in IT with Python, got to know Deep Learning, and then got into web development.\nAnd I realized that I had found my direction.\nNow my main goal is to become a professional Frontend developer.</p>";const p=document.createElement("div");p.classList.add("stack"),p.id="skills",p.innerHTML="<h2>Skills</h2><h4>The skills, tools and technologies I am good at:</h4>",["React","JavaScript","TypeScript","HTML5","CSS3","SASS","Webpack","ESLint","Prettier","Jest","Docker","Python","Git"].map((e=>{p.innerHTML+=`<div class="stack__item" ><div class="stack__img" style="background-image: url('./assets/icons/${e}.svg');"></div><p>${e}</p></div>`}));const l=document.createElement("div");l.id="projects",l.classList.add("projects"),l.innerHTML="<h2>My projects</h2><h4>Some of the noteworthy projects I have built:</h4>";const h=document.createElement("div");h.classList.add("projects__items"),l.append(h);const m=[{title:"E-Commerce App Toys",stack:"TypeScript, Commercetools"},{title:"Shop Sneakers",stack:"Vue, Tailwind, Axios"},{title:"GraphQl Sandbox",stack:"Next.js, Firebase, GraphQL, shadecn/ui, Tailwind"}],u=["","https://shop-vue-chi.vercel.app/","https://graphi-ql-ten.vercel.app/"];["toys","sneakers","graphql"].forEach(((e,t)=>{const n=document.createElement("div");if(0===t){n.innerHTML+=`<h4>${m[t].title}</h4><h5><i>${m[t].stack}</i></h5><div class="projects__item ${e}" style="background-image: url('./assets/${e}.png');"></div>`;for(const e of n.children)e.addEventListener("click",(()=>{const e=document.querySelector(".modal");null==e||e.classList.add("active")}))}else n.innerHTML+=`<a href='${u[t]}'><h4>${m[t].title}</h4><h5><i>${m[t].stack}</i></h5><div class="projects__item ${e}" style="background-image: url('./assets/${e}.png');"></div></a>`;h.append(n)}));const f=document.createElement("div");f.id="contacts",f.classList.add("contacts"),f.innerHTML='<h2>You can connect with me:</h2>\n<p>Telegram: <a href="https://t.me/natanchik1">natanchik1</a></p>\n<p>E-mail: <a href="mailto:nataliadaveng@gmail.com">nataliadaveng@gmail.com</a></p>';const g=document.createElement("div");g.classList.add("modal"),g.innerHTML="<h2>Ooops...</h2>\n<p>'Toys' deploy failed because backend has expired</p>\n<p>But you can watch our <br><a href='https://youtu.be/MKixRdbsk58'>'Toys' video presentation</a></p>\n<p>or check out <a href='https://github.com/kris-vadi/eCommerce-Application/tree/development'>the site's repository on GitHub</a></p>\n<p>or visit <a href='https://rs-toys.netlify.app/'>the failed site</a></p>";const x=document.createElement("div");x.textContent="X",x.classList.add("close-button"),x.addEventListener("click",(()=>{g.classList.remove("active")})),g.append(x);const b=document.createElement("footer");b.textContent="2023",b.classList.add("footer");var v=n(379),y=n.n(v),_=n(795),w=n.n(_),k=n(569),L=n.n(k),j=n(565),T=n.n(j),E=n(216),S=n.n(E),M=n(589),C=n.n(M),$=n(192),H={};H.styleTagTransform=C(),H.setAttributes=T(),H.insert=L().bind(null,"head"),H.domAPI=w(),H.insertStyleElement=S(),y()($.Z,H),$.Z&&$.Z.locals&&$.Z.locals,document.body.append(e),e.append(t,i,d,p,l,f,g,b)})()})();