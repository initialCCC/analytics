!function(){"use strict";var t,e,a,o=window.location,s=window.document,l=s.getElementById("plausible"),u=l.getAttribute("data-api")||(t=l.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function c(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var a={};a.n=t,a.u=o.href,a.d=l.getAttribute("data-domain"),a.r=s.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var n=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),i=a.p||{};n.forEach(function(t){var e=t.replace("event-",""),a=l.getAttribute(t);i[e]=i[e]||a}),a.p=i;var r=new XMLHttpRequest;r.open("POST",u,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}function i(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,n="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||n)&&r(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!n||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function r(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var n,i=t[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),e[n]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}s.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),r(t.target),setTimeout(function(){t.target.submit()},150))}),s.addEventListener("click",i),s.addEventListener("auxclick",i);var p=window.plausible&&window.plausible.q||[];window.plausible=n;for(var d,f=0;f<p.length;f++)n.apply(this,p[f]);function v(){d!==o.pathname&&(d=o.pathname,n("pageview"))}var g,w=window.history;w.pushState&&(g=w.pushState,w.pushState=function(){g.apply(this,arguments),v()},window.addEventListener("popstate",v)),"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){d||"visible"!==s.visibilityState||v()}):v()}();