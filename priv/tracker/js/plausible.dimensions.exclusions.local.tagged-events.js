!function(){"use strict";var p=window.location,d=window.document,v=d.currentScript,f=v.getAttribute("data-api")||new URL(v.src).origin+"/api/event";function g(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var a=v&&v.getAttribute("data-include"),n=v&&v.getAttribute("data-exclude");if("pageview"===t){var i=!a||a&&a.split(",").some(l),r=n&&n.split(",").some(l);if(!i||r)return g("exclusion rule")}var o={};o.n=t,o.u=p.href,o.d=v.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var u=v.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),s=o.p||{};u.forEach(function(t){var e=t.replace("event-",""),a=v.getAttribute(t);s[e]=s[e]||a}),o.p=s;var c=new XMLHttpRequest;c.open("POST",f,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&e&&e.callback&&e.callback()}}function l(t){return p.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function e(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,n="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||n)&&i(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!n||(setTimeout(function(){p.href=e.href},150),t.preventDefault()))}function i(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var n,i=t[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),e[n]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}d.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),i(t.target),setTimeout(function(){t.target.submit()},150))}),d.addEventListener("click",e),d.addEventListener("auxclick",e);var a=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,r=0;r<a.length;r++)t.apply(this,a[r]);function o(){n!==p.pathname&&(n=p.pathname,t("pageview"))}var u,s=window.history;s.pushState&&(u=s.pushState,s.pushState=function(){u.apply(this,arguments),o()},window.addEventListener("popstate",o)),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){n||"visible"!==d.visibilityState||o()}):o()}();