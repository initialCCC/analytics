!function(){"use strict";var s=window.location,f=window.document,d=f.currentScript,v=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function g(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var a=d&&d.getAttribute("data-include"),r=d&&d.getAttribute("data-exclude");if("pageview"===e){var i=!a||a&&a.split(",").some(u),n=r&&r.split(",").some(u);if(!i||n)return g("exclusion rule")}var o={};o.n=e,o.u=s.href,o.d=d.getAttribute("data-domain"),o.r=f.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var c=d.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),l=o.p||{};c.forEach(function(e){var t=e.replace("event-",""),a=d.getAttribute(e);l[t]=l[t]||a}),o.p=l,o.h=1;var p=new XMLHttpRequest;p.open("POST",v,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}function u(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function t(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==s.host&&((a||r)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}f.addEventListener("click",t),f.addEventListener("auxclick",t);var a=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],r=d.getAttribute("file-types"),i=d.getAttribute("add-file-types"),o=r&&r.split(",")||i&&i.split(",").concat(a)||a;function n(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var i,n=t&&t.href&&t.href.split("?")[0];n&&(i=n.split(".").pop(),o.some(function(e){return e===i}))&&((a||r)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}function c(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||r)&&l(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}function l(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var r,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(r=i.replace("data-event-",""),t[r]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}f.addEventListener("click",n),f.addEventListener("auxclick",n),f.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),l(e.target),setTimeout(function(){e.target.submit()},150))}),f.addEventListener("click",c),f.addEventListener("auxclick",c);var p=window.plausible&&window.plausible.q||[];window.plausible=e;for(var u,h=0;h<p.length;h++)e.apply(this,p[h]);function m(){u=s.pathname,e("pageview")}window.addEventListener("hashchange",m),"prerender"===f.visibilityState?f.addEventListener("visibilitychange",function(){u||"visible"!==f.visibilityState||m()}):m()}();