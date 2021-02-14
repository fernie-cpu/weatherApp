(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.search {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.container {\n  display: flex;\n  /* flex-direction: column; */\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0.5rem;\n  height: 90vh;\n}\n\n.box {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.5;\n}\n\n.name {\n  font-size: 1.6rem;\n}\n\n.temp {\n  font-size: 3.2rem;\n}\n\n/* toggle  */\n.toggle {\n  margin: 10px;\n}\n\n.checkbox {\n  opacity: 0;\n  position: absolute;\n}\n\n.label {\n  background: rgb(156, 156, 156);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem;\n  height: 28px;\n  width: 51px;\n  position: relative;\n  border-radius: 50px;\n  border: 1px solid rgb(90, 90, 90);\n}\n\n.ball {\n  background: #fff;\n  position: absolute;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n  width: 22px;\n  height: 22px;\n  transition: transform 0.2s linear;\n}\n\n.checkbox:checked + .label .ball {\n  transform: translateX(24px);\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],l=n.base?c[0]+n.base:c[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:h(f,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=l(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=c(e,n),s=0;s<t.length;s++){var u=a(t[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=l}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=document.querySelector(".name"),i=document.querySelector(".temp"),a=document.querySelector(".main"),c=document.querySelector(".desc"),l=document.querySelector(".feel"),s=document.querySelector(".min"),u=document.querySelector(".max"),d=document.querySelector(".humidity"),f=document.querySelector(".search-btn"),p=document.querySelector("#search-city"),m=async()=>{const e=document.querySelector(".checkbox").value;let n=p.value;n||(n="Detroit");let t="http://api.openweathermap.org/data/2.5/weather?q="+n+"&units="+`${e}&appid=78f46276c074c96c7cc3e739da828101`;const r=await fetch(t,{mode:"cors"}),o=await r.json();h(o)};f.addEventListener("click",(e=>{e.preventDefault(),m()}));const h=async e=>{o.textContent=e.name,i.textContent=parseInt(e.main.temp)+"°",a.textContent=e.weather[0].main,c.textContent="Description: "+e.weather[0].description,l.textContent="Feels like: "+parseInt(e.main.feels_like)+"°",s.textContent="Min: "+parseInt(e.main.temp_min)+"°",u.textContent="Max: "+parseInt(e.main.temp_max)+"°",d.textContent="Humidity: "+e.main.humidity+"%"};document.querySelector(".checkbox").addEventListener("click",(e=>{"imperial"===e.target.value?(e.target.value="metric",m()):(e.target.value="imperial",m())})),m()})()})();