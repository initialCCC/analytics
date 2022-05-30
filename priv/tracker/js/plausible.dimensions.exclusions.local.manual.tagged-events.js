!function(){"use strict";var p=window.location,d=window.document,f=d.currentScript,g=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function v(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var a=f&&f.getAttribute("data-include"),n=f&&f.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(s),i=n&&n.split(",").some(s);if(!r||i)return v("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:p.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var u=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};u.forEach(function(e){var t=e.replace("event-",""),a=f.getAttribute(e);c[t]=c[t]||a}),o.p=c;var l=new XMLHttpRequest;l.open("POST",g,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function s(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function t(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,n="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||n)&&r(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){p.href=t.href},150),e.preventDefault()))}function r(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var n,r=e[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(n=r.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}d.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),r(e.target),setTimeout(function(){e.target.submit()},150))}),d.addEventListener("click",t),d.addEventListener("auxclick",t);var a=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n=0;n<a.length;n++)e.apply(this,a[n])}();