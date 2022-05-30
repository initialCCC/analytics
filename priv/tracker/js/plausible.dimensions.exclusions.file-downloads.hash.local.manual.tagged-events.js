!function(){"use strict";var s=window.location,f=window.document,d=f.currentScript,g=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function v(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var a=d&&d.getAttribute("data-include"),r=d&&d.getAttribute("data-exclude");if("pageview"===e){var n=!a||a&&a.split(",").some(l),i=r&&r.split(",").some(l);if(!n||i)return v("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:s.href,o.d=d.getAttribute("data-domain"),o.r=f.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var u=d.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),p=o.p||{};u.forEach(function(e){var t=e.replace("event-",""),a=d.getAttribute(e);p[t]=p[t]||a}),o.p=p,o.h=1;var c=new XMLHttpRequest;c.open("POST",g,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function l(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=d.getAttribute("file-types"),r=d.getAttribute("add-file-types"),o=a&&a.split(",")||r&&r.split(",").concat(t)||t;function n(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var n,i=t&&t.href&&t.href.split("?")[0];i&&(n=i.split(".").pop(),o.some(function(e){return e===n}))&&((a||r)&&plausible("File Download",{props:{url:i}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}function i(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||r)&&u(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}function u(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var r,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(r=n.replace("data-event-",""),t[r]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}f.addEventListener("click",n),f.addEventListener("auxclick",n),f.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),u(e.target),setTimeout(function(){e.target.submit()},150))}),f.addEventListener("click",i),f.addEventListener("auxclick",i);var p=window.plausible&&window.plausible.q||[];window.plausible=e;for(var c=0;c<p.length;c++)e.apply(this,p[c])}();