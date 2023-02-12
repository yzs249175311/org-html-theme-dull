(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();(function(){let r=document.querySelector("#table-of-contents");document.body.appendChild(r)})();(function(){function r(o,l){document.querySelector(o)&&(document.querySelector(o).className+=" "+l)}function e(o,l){document.querySelector(o)&&document.querySelectorAll(o).forEach(t=>{t.className+=" "+l})}r("#content","w-8/12 mr-auto ml-24 relative"),r("#content h1.title","mb-12 mt-12 shadow-none text-5xl font-bold"),e("#table-of-contents","fixed top-8 right-2 border rounded-lg p-4 shadow-lg center hidden xl:block"),e("#table-of-contents h2","text-xl shadow-none font-bold border-b-2 pb-2 mb-2"),e("#table-of-contents ul:not(:nth-child(1))","list-none list-inside m-0 pl-4"),e("#table-of-contents ol:not(:nth-child(1))","list-none list-inside m-0"),e("#content pre","rounded-lg shadow-lg border-solid m-4"),e("#content ul","list-disc list-inside m-2 pl-4"),e("#content ol","list-decimal list-inside m-2 pl-4"),e("p","inline"),e("#content h1:not(.title)","text-5xl my-4 h-12 z-10 shadow"),e("#content h2","text-4xl my-4 h-12 z-10 shadow"),e("#content h3","text-3xl my-4 h-12 z-10 shadow"),e("#content h4","text-2xl my-4 h-12 z-10 shadow"),e("#content h5","text-xl my-4 h-12 z-10 shadow "),e("#content h6","text-lg my-4 h-12 z-10 shadow "),e("h1[id^=org]","bg-slate-50  sticky top-0 border-solid"),e("h2[id^=org]","bg-slate-50  sticky top-0 border-solid"),e("h3[id^=org]","bg-slate-50  sticky top-0 border-solid"),e("h4[id^=org]","bg-slate-50  sticky top-0 border-solid"),e("h5[id^=org]","bg-slate-50  sticky top-0 border-solid"),e("h6[id^=org]","bg-slate-50  sticky top-0 border-solid"),e("table","p-4 m-4 table-auto"),e("thead","bg-slate-200 rounded "),e("td,thead","border shadow p-3"),e("tbody>tr:nth-of-type(2n)","bg-slate-100"),e("code:not(table code)","border shadow px-2 text-red-400 w-max h-max inline-block")})();(function(){document.querySelectorAll("pre").forEach(e=>{let o=document.createElement("span");o.classList.add("copy-block"),e.appendChild(o),o.addEventListener("click",l=>{navigator.clipboard.writeText(l.currentTarget.innerText),o.classList.add("copyed"),setTimeout(()=>{o.classList.remove("copyed")},3e3)})})})();