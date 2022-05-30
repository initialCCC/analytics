!function(){"use strict";var t,e,a,i=window.location,r=window.document,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(t=o.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function s(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||"file:"===i.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var a={};a.n=t,a.u=i.href,a.d=o.getAttribute("data-domain"),a.r=r.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var n=new XMLHttpRequest;n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback()}}}function u(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,n="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||n)&&d(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!n||(setTimeout(function(){i.href=e.href},150),t.preventDefault()))}function d(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var n,i=t[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),e[n]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}r.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),d(t.target),setTimeout(function(){t.target.submit()},150))}),r.addEventListener("click",u),r.addEventListener("auxclick",u);var p=window.plausible&&window.plausible.q||[];window.plausible=n;for(var c,f=0;f<p.length;f++)n.apply(this,p[f]);function v(){c!==i.pathname&&(c=i.pathname,n("pageview"))}var w,g=window.history;g.pushState&&(w=g.pushState,g.pushState=function(){w.apply(this,arguments),v()},window.addEventListener("popstate",v)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){c||"visible"!==r.visibilityState||v()}):v()}();