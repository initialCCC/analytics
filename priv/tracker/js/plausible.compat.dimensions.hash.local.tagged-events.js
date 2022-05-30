!function(){"use strict";var e,t,a,o=window.location,u=window.document,l=u.getElementById("plausible"),s=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function n(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=o.href,a.d=l.getAttribute("data-domain"),a.r=u.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var n=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),i=a.p||{};n.forEach(function(e){var t=e.replace("event-",""),a=l.getAttribute(e);i[t]=i[t]||a}),a.p=i,a.h=1;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}function i(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,n="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.getAttribute("data-event-name")&&((a||n)&&r(t),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}function r(e){var t=e.getAttribute("data-event-name"),a=function(e){for(var t={},a=0;a<e.length;a++){var n,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(a.url=e.href),plausible(t,{props:a})}u.addEventListener("submit",function(e){e.target.getAttribute("data-event-name")&&(e.preventDefault(),r(e.target),setTimeout(function(){e.target.submit()},150))}),u.addEventListener("click",i),u.addEventListener("auxclick",i);var d=window.plausible&&window.plausible.q||[];window.plausible=n;for(var c,p=0;p<d.length;p++)n.apply(this,d[p]);function v(){c=o.pathname,n("pageview")}window.addEventListener("hashchange",v),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){c||"visible"!==u.visibilityState||v()}):v()}();