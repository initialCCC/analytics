!function(){"use strict";var p=window.location,s=window.document,u=s.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=u&&u.getAttribute("data-include"),i=u&&u.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(l),n=i&&i.split(",").some(l);if(!r||n)return f("exclusion rule")}var o={};o.n=e,o.u=p.href,o.d=u.getAttribute("data-domain"),o.r=s.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var c=new XMLHttpRequest;c.open("POST",d,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function l(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function t(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==p.host&&((a||i)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){p.href=t.href},150),e.preventDefault()))}s.addEventListener("click",t),s.addEventListener("auxclick",t);var a=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],i=u.getAttribute("file-types"),r=u.getAttribute("add-file-types"),o=i&&i.split(",")||r&&r.split(",").concat(a)||a;function n(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var r,n=t&&t.href&&t.href.split("?")[0];n&&(r=n.split(".").pop(),o.some(function(e){return e===r}))&&((a||i)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){p.href=t.href},150),e.preventDefault()))}function c(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||i)&&l(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){p.href=t.href},150),e.preventDefault()))}function l(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var i,r=e[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(i=r.replace("data-event-",""),t[i]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}s.addEventListener("click",n),s.addEventListener("auxclick",n),s.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),l(e.target),setTimeout(function(){e.target.submit()},150))}),s.addEventListener("click",c),s.addEventListener("auxclick",c);var v=window.plausible&&window.plausible.q||[];window.plausible=e;for(var g,h=0;h<v.length;h++)e.apply(this,v[h]);function m(){g=p.pathname,e("pageview")}window.addEventListener("hashchange",m),"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){g||"visible"!==s.visibilityState||m()}):m()}();