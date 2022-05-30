!function(){"use strict";var o=window.location,p=window.document,s=p.currentScript,u=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function t(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var a={};a.n=t,a.u=o.href,a.d=s.getAttribute("data-domain"),a.r=p.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var i=s.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),n=a.p||{};i.forEach(function(t){var e=t.replace("event-",""),a=s.getAttribute(t);n[e]=n[e]||a}),a.p=n;var r=new XMLHttpRequest;r.open("POST",u,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var e=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=s.getAttribute("file-types"),i=s.getAttribute("add-file-types"),l=a&&a.split(",")||i&&i.split(",").concat(e)||e;function n(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var n,r=e&&e.href&&e.href.split("?")[0];r&&(n=r.split(".").pop(),l.some(function(t){return t===n}))&&((a||i)&&plausible("File Download",{props:{url:r}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function r(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||i)&&c(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function c(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var i,n=t[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),e[i]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}p.addEventListener("click",n),p.addEventListener("auxclick",n),p.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),c(t.target),setTimeout(function(){t.target.submit()},150))}),p.addEventListener("click",r),p.addEventListener("auxclick",r);var d=window.plausible&&window.plausible.q||[];window.plausible=t;for(var f,v=0;v<d.length;v++)t.apply(this,d[v]);function g(){f!==o.pathname&&(f=o.pathname,t("pageview"))}var w,h=window.history;h.pushState&&(w=h.pushState,h.pushState=function(){w.apply(this,arguments),g()},window.addEventListener("popstate",g)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){f||"visible"!==p.visibilityState||g()}):g()}();