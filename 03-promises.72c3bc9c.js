function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var r=l("7Y9D8");const i={form:document.querySelector("form"),delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]')},{form:u,delayEl:a,stepEl:s,amountEl:d}=i;function f(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}u.addEventListener("submit",(t=>{t.preventDefault();let o=Number(a.value);const n=Number(s.value),l=Number(d.value),i=[];for(let t=0;t<l;t++){const l=f(t+1,o).then((({position:t,delay:o})=>{e(r).Notify.success(`Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`Rejected promise ${t} in ${o}ms`)}));i.push(l),o+=n}Promise.all(i).then((()=>{e(r).Notify.info("All promises have been fulfilled")})).catch((()=>{e(r).Notify.info("At least one promise has been rejected")}))}));
//# sourceMappingURL=03-promises.72c3bc9c.js.map