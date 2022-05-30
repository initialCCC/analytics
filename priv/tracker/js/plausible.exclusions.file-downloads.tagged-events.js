!function(){"use strict";var s=window.location,c=window.document,u=c.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var a=u&&u.getAttribute("data-include"),i=u&&u.getAttribute("data-exclude");if("pageview"===t){var n=!a||a&&a.split(",").some(l),r=i&&i.split(",").some(l);if(!n||r)return f("exclusion rule")}var o={};o.n=t,o.u=s.href,o.d=u.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var p=new XMLHttpRequest;p.open("POST",d,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&e&&e.callback&&e.callback()}}function l(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=u.getAttribute("file-types"),i=u.getAttribute("add-file-types"),o=a&&a.split(",")||i&&i.split(",").concat(e)||e;function n(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var n,r=e&&e.href&&e.href.split("?")[0];r&&(n=r.split(".").pop(),o.some(function(t){return t===n}))&&((a||i)&&plausible("File Download",{props:{url:r}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){s.href=e.href},150),t.preventDefault()))}function r(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||i)&&p(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){s.href=e.href},150),t.preventDefault()))}function p(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var i,n=t[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),e[i]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}c.addEventListener("click",n),c.addEventListener("auxclick",n),c.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),p(t.target),setTimeout(function(){t.target.submit()},150))}),c.addEventListener("click",r),c.addEventListener("auxclick",r);var l=window.plausible&&window.plausible.q||[];window.plausible=t;for(var v,g=0;g<l.length;g++)t.apply(this,l[g]);function w(){v!==s.pathname&&(v=s.pathname,t("pageview"))}var h,m=window.history;m.pushState&&(h=m.pushState,m.pushState=function(){h.apply(this,arguments),w()},window.addEventListener("popstate",w)),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){v||"visible"!==c.visibilityState||w()}):w()}();