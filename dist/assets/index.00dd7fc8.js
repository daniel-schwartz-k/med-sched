var p=Object.defineProperty,g=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var l=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))h.call(e,n)&&l(t,n,e[n]);if(s)for(var n of s(e))v.call(e,n)&&l(t,n,e[n]);return t},m=(t,e)=>g(t,y(e));const A=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(u){if(u.ep)return;u.ep=!0;const i=n(u);fetch(u.href,i)}};A();const C=Object.freeze({Capsules:"\u05E7\u05E4'",Drops:"\u05D8\u05D9\u05E4'",Milliliters:'\u05DE"\u05DC'}),{medications:w,fromDate:b,numOfDays:O}=I();T();D();function D(){const t=f(),e=document.getElementById("title");e.innerText=t.toLocaleDateString("en-GB",{weekday:"long",month:"numeric",day:"numeric"}),a("morning"),a("noon"),a("afterNoon"),a("evening")}function f(){const t=document.getElementById("sidenav"),e=Array.from(t.children).find(o=>o.classList.contains("selected"));return new Date(e.getAttribute("value"))}function a(t){var o;const e=document.getElementById(t);if(!e)return;e.innerHTML="";const n=w.filter(u=>!!u[`${t}Amount`]);for(const u of n){const i=L(m(d({},u),{amount:u[`${t}Amount`]}));e.appendChild(i),i.children[1].dispatchEvent(new Event("attached"))}n.length||((o=e.previousElementSibling)==null||o.remove(),e.remove())}function L({name:t,description:e,amount:n,unit:o}){const u=document.createElement("div");u.innerText=`${t} `,e&&u.setAttribute("alt",e);const i=document.createElement("span");i.innerText=`${n} ${C[o]}`,i.className="amount",i.setAttribute("dir","rtl");const r=document.createElement("div"),c=B();return r.appendChild(u),r.appendChild(c),r.appendChild(i),r}function M(t){window.setTimeout(()=>{const{currentValue:e,checkboxKey:n}=E(t);window.localStorage.setItem(n,e?"1":"0")},0)}function S(t){const{currentValue:e,checkboxKey:n}=E(t),o=window.localStorage.getItem(n)==="1";o!==e&&(t.firstElementChild.checked=o)}function E(t){var r,c;const e=t.firstElementChild.checked,n=(r=t.previousElementSibling.textContent)==null?void 0:r.replace(/\s+/g,""),o=((c=t.parentElement)==null?void 0:c.parentElement).id,i=`${f().getTime()}:${o}:${n}`;return{currentValue:e,checkboxKey:i}}function B(){const t=document.createElement("div"),e=`<label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>`;t.innerHTML=e.trim();const n=t.lastChild;return n.addEventListener("mouseup",()=>{M(n)}),n.addEventListener("attached",()=>{S(n)}),n}function T(){const t=document.getElementById("sidenav"),e=new Date;for(let n=1;n<=O;++n){const o=new Date(b);o.setDate(o.getDate()+n);const u=document.createElement("a");u.href=`#${o.getTime()}`,u.innerHTML=o.toLocaleDateString("en-GB",{weekday:"long",month:"numeric",day:"numeric"}),t==null||t.appendChild(u),u.onclick=k,u.setAttribute("value",o.toISOString()),o.getFullYear()<=e.getFullYear()&&o.getMonth()<=e.getMonth()&&o.getDate()<=e.getDate()&&(u.className="past",o.getDate()===e.getDate()&&u.classList.add("selected"))}}function k(t){const e=document.getElementById("sidenav");Array.from(e.children).find(o=>o.classList.contains("selected")).classList.remove("selected"),t.target.classList.add("selected"),D()}function I(){return{fromDate:new Date("2022-03-21T00:00:00.000Z"),numOfDays:40,medications:[{name:"\u05D0\u05D5\u05E8\u05D2\u05E0\u05D5",morningAmount:15,noonAmount:15,eveningAmount:15,type:"Other",unit:"Drops"},{name:"\u05D1\u05E8\u05D9\u05D0 \u05DC\u05D9 - DS",morningAmount:4,noonAmount:4,eveningAmount:4,type:"Other",unit:"Milliliters"},{name:"Allium Sativa",morningAmount:2,noonAmount:2,eveningAmount:2,type:"Other",unit:"Milliliters"},{name:"\u05E7\u05E0\u05D3\u05D9\u05D3\u05DF",morningAmount:2,noonAmount:2,eveningAmount:2,type:"Other",unit:"Capsules"},{name:"\u05E4\u05E8\u05D5\u05D1\u05D9\u05D5\u05D8\u05D9\u05E7\u05D4 \u05D1\u05D9\u05D5-\u05E7\u05D0\u05DF",noonAmount:2,type:"ProBiotics",unit:"Capsules",description:"\u05E9\u05E2\u05D4 \u05DE\u05E6\u05DE\u05D7\u05D9 \u05D4\u05DE\u05E8\u05E4\u05D0, \u05E2\u05DD \u05D7\u05E6\u05D9 \u05DB\u05D5\u05E1 \u05DE\u05D9\u05DD"},{name:"Galphimia",morningAmount:10,type:"Homeopathy",unit:"Drops",description:"\u05DC\u05D0\u05DB\u05D5\u05DC \u05E8\u05E7 \u05D0\u05D7\u05E8\u05D9 \u05D7\u05E6\u05D9 \u05E9\u05E2\u05D4"},{name:"Nacl",eveningAmount:10,type:"Homeopathy",unit:"Drops",description:"\u05DC\u05D0\u05DB\u05D5\u05DC \u05E8\u05E7 \u05D0\u05D7\u05E8\u05D9 \u05D7\u05E6\u05D9 \u05E9\u05E2\u05D4"}]}}
