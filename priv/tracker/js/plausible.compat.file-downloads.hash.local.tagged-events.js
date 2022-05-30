!function(){"use strict";var e,t,a,o=window.location,n=window.document,r=n.getElementById("plausible"),l=r.getAttribute("data-api")||(e=r.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function i(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=o.href,a.d=r.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),a.h=1;var i=new XMLHttpRequest;i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback()}}}var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],s=r.getAttribute("file-types"),c=r.getAttribute("add-file-types"),d=s&&s.split(",")||c&&c.split(",").concat(p)||p;function u(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var n,r=t&&t.href&&t.href.split("?")[0];r&&(n=r.split(".").pop(),d.some(function(e){return e===n}))&&((a||i)&&plausible("File Download",{props:{url:r}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}function f(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||i)&&v(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}function v(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var i,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),t[i]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}n.addEventListener("click",u),n.addEventListener("auxclick",u),n.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),v(e.target),setTimeout(function(){e.target.submit()},150))}),n.addEventListener("click",f),n.addEventListener("auxclick",f);var g=window.plausible&&window.plausible.q||[];window.plausible=i;for(var w,m=0;m<g.length;m++)i.apply(this,g[m]);function h(){w=o.pathname,i("pageview")}window.addEventListener("hashchange",h),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){w||"visible"!==n.visibilityState||h()}):h()}();