!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;e.disabled=!0;var a=document.body,o=null;t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,n=setTimeout((function(){o=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)}),2e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearTimeout(n),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.995ec1a3.js.map