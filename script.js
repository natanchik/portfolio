(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),p=new URL(n(579),n.b),d=new URL(n(195),n.b),l=new URL(n(239),n.b),m=new URL(n(1),n.b),u=i()(o()),f=c()(p),h=c()(d),g=c()(l),y=c()(m);u.push([e.id,`html{font-size:10px}body{padding:0;margin:0;box-sizing:border-box;background-image:linear-gradient(135deg, rgb(16, 29, 150), rgb(218, 225, 244));color:#dee5f7;font-size:2rem}body h1{text-shadow:1px 1px 2px #dee5f7,0 0 2em #dee5f7,0 0 1em #dee5f7;border-bottom:7px solid #6c81f7}body a{color:#fff}.wrapper{max-width:1000px;padding:40px;margin:0 auto}.wrapper>*{padding:20px 70px 30px}.intro{display:flex;justify-content:space-between;border:7px solid #6c81f7;box-shadow:15px 15px 10px #6c81f7}.intro>*{display:inline-block;height:250px}.intro__my-foto{width:250px;height:250px;background-image:url(${f});background-size:cover;background-repeat:no-repeat;border-radius:125px}.about-me{text-align:center}.about-me p{text-align:left}.my-works{text-align:center;border:7px solid #6c81f7;box-shadow:15px 15px 10px #6c81f7}.my-works a{color:#dee5f7;text-decoration:none}.my-works h4{margin-top:10px}.my-works__items{display:flex;width:100%;flex-wrap:wrap;justify-content:space-around}.my-works__items h4:hover,.my-works__items h4:focus,.my-works__items h4:active{text-decoration:underline;color:#101d96;opacity:60%}.my-works__item{display:inline-block;width:300px;height:100px;background-size:cover;background-repeat:no-repeat;border:1px solid #6c81f7;border-radius:20px;box-shadow:inset 2px 2px 2px #6c81f7}.my-works__item:hover,.my-works__item:focus,.my-works__item:active{opacity:70%}.my-works__item.toys{background-image:url(${h})}.my-works__item.monsters{background-image:url(${g})}.my-works__item.apps{background-image:url(${y})}.intro:hover,.my-works:hover{animation-duration:.5s;animation-name:scale-animation}@keyframes slide{25%{transform:translateX(-5px) translateY(-5px)}75%{transform:translateX(5px) translateY(5px)}}.intro__my-foto:hover,h1:hover,h2:hover,h4:hover{animation-duration:.5s;animation-name:scale-animation}.my-contacts{padding-bottom:20px;padding-bottom:0}@keyframes scale-animation{50%{transform:scale(1.02)}}`,""]);const v=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],p=r.base?c[0]+r.base:c[0],d=a[p]||0,l="".concat(p," ").concat(d);a[p]=d+1;var m=n(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=o(u,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),p=0;p<a.length;p++){var d=n(a[p]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},1:(e,t,n)=>{e.exports=n.p+"assets/images/apps.jpg"},579:(e,t,n)=>{e.exports=n.p+"assets/images/foto.png"},239:(e,t,n)=>{e.exports=n.p+"assets/images/monsters.png"},195:(e,t,n)=>{e.exports=n.p+"assets/images/toys.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),p=n(216),d=n.n(p),l=n(589),m=n.n(l),u=n(192),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h=document.createElement("div");h.classList.add("wrapper"),document.body.append(h);const g=document.createElement("div");g.classList.add("intro");const y=document.createElement("div");y.classList.add("intro__my-foto");const v=document.createElement("div");v.classList.add("intro__greet"),v.innerHTML='<h2>Hello! I\'m Natalia</h2><h1>Frontend Developer</h1><p>My <a href="https://github.com/natanchik">GitHub account</a></p><p>My <a href="https://www.linkedin.com/in/natalia-lebedeva-b0391b293/">LinkedIn</a></p>',g.append(v,y);const b=document.createElement("div");b.classList.add("about-me"),b.innerHTML="<h2>ABOUT ME</h2><p>Since my school years I have been interested in programming, the process of coding has always been interesting. When choosing a profession, I considered going in this direction, but it turned out differently. And a few years ago I realized that now is my second chance to become a developer. Now I am moving in the direction I dreamed of.</p>\n<p>I started my journey with Python, took a course on Deep Learning and then got to know web development. And I realized that I found my direction. Now my aspirations and desires are aimed at becoming a professional frontend developer.</p>";const x=document.createElement("div");x.classList.add("my-works"),x.innerHTML="<h2>MY WORKS</h2>";const w=document.createElement("div");w.classList.add("my-works__items"),x.append(w);const k=["toys","monsters","apps"],_=["https://rs-toys.netlify.app/","https://creature-hiring.netlify.app/","https://natanchik.github.io/RSS-APPs/"];["E-Commerce App Toys","Hiring monsters","My last apps"].forEach(((e,t)=>{const n=document.createElement("a");n.href=_[t],n.innerHTML=`<h4>${e}</h4><div class="my-works__item ${k[t]}">`,w.append(n)}));const L=document.createElement("div");L.classList.add("my-contacts"),L.innerHTML='<h2>You can connect with me:</h2><p>Telegram: @natanchik1</p><p>E-mail: <a href="mailto:nataliadaveng@gmail.com">nataliadaveng@gmail.com</a></p>',h.append(g,b,x,L)})()})();