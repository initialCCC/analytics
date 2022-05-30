!function(){"use strict";var t,e,a,u=window.location,p=window.document,c=p.getElementById("plausible"),d=c.getAttribute("data-api")||(t=c.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function f(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var a=c&&c.getAttribute("data-include"),n=c&&c.getAttribute("data-exclude");if("pageview"===t){var i=!a||a&&a.split(",").some(s),r=n&&n.split(",").some(s);if(!i||r)return f("exclusion rule")}var o={};o.n=t,o.u=u.href,o.d=c.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function s(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function i(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,n="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||n)&&r(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!n||(setTimeout(function(){u.href=e.href},150),t.preventDefault()))}function r(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var n,i=t[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),e[n]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}p.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),r(t.target),setTimeout(function(){t.target.submit()},150))}),p.addEventListener("click",i),p.addEventListener("auxclick",i);var o=window.plausible&&window.plausible.q||[];window.plausible=n;for(var l,s=0;s<o.length;s++)n.apply(this,o[s]);function v(){l!==u.pathname&&(l=u.pathname,n("pageview"))}var g,w=window.history;w.pushState&&(g=w.pushState,w.pushState=function(){g.apply(this,arguments),v()},window.addEventListener("popstate",v)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){l||"visible"!==p.visibilityState||v()}):v()}();