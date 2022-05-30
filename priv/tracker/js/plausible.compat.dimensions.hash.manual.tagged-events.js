!function(){"use strict";var t,e,a,o=window.location,u=window.document,l=u.getElementById("plausible"),s=l.getAttribute("data-api")||(t=l.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function c(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:o.href,a.d=l.getAttribute("data-domain"),a.r=u.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var n=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=a.p||{};n.forEach(function(t){var e=t.replace("event-",""),a=l.getAttribute(t);r[e]=r[e]||a}),a.p=r,a.h=1;var i=new XMLHttpRequest;i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}function r(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,n="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||n)&&i(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!n||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function i(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var n,r=t[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(n=r.replace("data-event-",""),e[n]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}u.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),i(t.target),setTimeout(function(){t.target.submit()},150))}),u.addEventListener("click",r),u.addEventListener("auxclick",r);var d=window.plausible&&window.plausible.q||[];window.plausible=n;for(var f=0;f<d.length;f++)n.apply(this,d[f])}();