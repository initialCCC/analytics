!function(){"use strict";var t,e,a,o=window.location,l=window.document,c=l.getElementById("plausible"),p=c.getAttribute("data-api")||(t=c.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function s(t){console.warn("Ignoring Event: "+t)}function r(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:o.href,a.d=c.getAttribute("data-domain"),a.r=l.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var r=c.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),n=a.p||{};r.forEach(function(t){var e=t.replace("event-",""),a=c.getAttribute(t);n[e]=n[e]||a}),a.p=n,a.h=1;var i=new XMLHttpRequest;i.open("POST",p,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}function n(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,r="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==o.host&&((a||r)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}l.addEventListener("click",n),l.addEventListener("auxclick",n);var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],u=c.getAttribute("file-types"),f=c.getAttribute("add-file-types"),d=u&&u.split(",")||f&&f.split(",").concat(i)||i;function v(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,r="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var n,i=e&&e.href&&e.href.split("?")[0];i&&(n=i.split(".").pop(),d.some(function(t){return t===n}))&&((a||r)&&plausible("File Download",{props:{url:i}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function g(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,r="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||r)&&h(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function h(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var r,n=t[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(r=n.replace("data-event-",""),e[r]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}l.addEventListener("click",v),l.addEventListener("auxclick",v),l.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),h(t.target),setTimeout(function(){t.target.submit()},150))}),l.addEventListener("click",g),l.addEventListener("auxclick",g);var m=window.plausible&&window.plausible.q||[];window.plausible=r;for(var w=0;w<m.length;w++)r.apply(this,m[w])}();