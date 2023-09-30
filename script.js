(()=>{"use strict";var e={192:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(81),o=r.n(n),a=r(645),i=r.n(a),s=r(667),c=r.n(s),d=new URL(r(579),r.b),p=new URL(r(195),r.b),l=new URL(r(1),r.b),u=i()(o()),m=c()(d),f=c()(p),h=c()(l);u.push([e.id,`html{font-size:10px}body{padding:0;margin:0;box-sizing:border-box;background-image:linear-gradient(135deg, rgb(16, 29, 150), rgb(218, 225, 244));color:#dee5f7;font-size:2rem}body h1{text-shadow:1px 1px 2px #dee5f7,0 0 2em #dee5f7,0 0 1em #dee5f7;border-bottom:7px solid #6c81f7}.wrapper{max-width:1000px;padding:40px;margin:0 auto}.wrapper>*{padding:50px 70px}.intro{display:flex;justify-content:space-between;border:7px solid #6c81f7;box-shadow:15px 15px 10px #6c81f7}.intro>*{display:inline-block;height:250px}.intro__my-foto{width:250px;height:250px;background-image:url(${m});background-size:cover;background-repeat:no-repeat;border-radius:125px}.about-me{text-align:center}.about-me p{text-align:left}.my-works{text-align:center;border:7px solid #6c81f7;box-shadow:15px 15px 10px #6c81f7}.my-works a{color:#dee5f7;text-decoration:none}.my-works__items{display:flex;width:100%;flex-wrap:wrap;justify-content:space-between}.my-works__items h4:hover,.my-works__items h4:focus,.my-works__items h4:active{text-decoration:underline;color:#101d96;opacity:60%}.my-works__item{display:inline-block;width:300px;height:100px;background-size:cover;background-repeat:no-repeat;border:1px solid #6c81f7;border-radius:20px;box-shadow:inset 2px 2px 2px #6c81f7}.my-works__item:hover,.my-works__item:focus,.my-works__item:active{opacity:70%}.my-works__item.toys{background-image:url(${f})}.my-works__item.apps{background-image:url(${h})}.intro:hover,.my-works:hover{animation-duration:.5s;animation-name:slide}@keyframes slide{25%{transform:translateX(-5px) translateY(-5px)}75%{transform:translateX(5px) translateY(5px)}}.intro__my-foto:hover,h1:hover,h2:hover,h4:hover{animation-duration:.5s;animation-name:rotation-foto}@keyframes rotation-foto{25%{transform:rotate(1deg)}75%{transform:rotate(-1deg)}}`,""]);const y=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);n&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=r(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,n);n.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),d=0;d<a.length;d++){var p=r(a[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},1:(e,t,r)=>{e.exports=r.p+"assets/images/apps.jpg"},579:(e,t,r)=>{e.exports=r.p+"assets/images/foto.png"},195:(e,t,r)=>{e.exports=r.p+"assets/images/toys.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),s=r(565),c=r.n(s),d=r(216),p=r.n(d),l=r(589),u=r.n(l),m=r(192),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.createElement("div");h.classList.add("wrapper"),document.body.append(h);const y=document.createElement("div");y.classList.add("intro");const g=document.createElement("div");g.classList.add("intro__my-foto");const v=document.createElement("div");v.classList.add("intro__greet"),v.innerHTML="<h2>Hello! I'm Natalia</h2><h1>Frontend Developer</h1>",y.append(v,g);const b=document.createElement("div");b.classList.add("about-me"),b.innerHTML="<h2>ABOUT ME</h2><p>Since my school years I have been interested in programming, the process of coding has always been interesting. When choosing a profession, I considered going in this direction, but it turned out differently. And a few years ago I realized that now is my second chance to become a developer. Now I am moving in the direction I dreamed of.</p>\n<p>I started my journey with Python, took a course on Deep Learning and then got to know web development. And I realized that I found my direction. Now my aspirations and desires are aimed at becoming a professional frontend developer.</p>";const x=document.createElement("div");x.classList.add("my-works"),x.innerHTML="<h2>MY WORKS</h2>";const w=document.createElement("div");w.classList.add("my-works__items"),x.append(w);const _=["toys","apps"],k=["https://rs-toys.netlify.app/","https://natanchik.github.io/RSS-APPs/"];["E-Commerce App Toys","My last apps"].forEach(((e,t)=>{const r=document.createElement("a");r.href=k[t],r.innerHTML=`<h4>${e}</h4><div class="my-works__item ${_[t]}">`,w.append(r)})),h.append(y,b,x)})()})();