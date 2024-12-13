(function(){if(typeof window!="object")return;if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});return}function o(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch{return null}}var u=function(t){for(var e=t,n=o(e);n;)e=n.ownerDocument,n=o(e);return e}(window.document),d=[],l=null,g=null;function b(t){this.time=t.time,this.target=t.target,this.rootBounds=y(t.rootBounds),this.boundingClientRect=y(t.boundingClientRect),this.intersectionRect=y(t.intersectionRect||p()),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect,r=i.width*i.height;n?this.intersectionRatio=Number((r/n).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0}function s(t,e){var n=e||{};if(typeof t!="function")throw new Error("callback must be a function");if(n.root&&n.root.nodeType!=1&&n.root.nodeType!=9)throw new Error("root must be a Document or Element");this._checkForIntersections=U(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(i){return i.value+i.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return l||(l=function(t,e){!t||!e?g=p():g=R(t,e),d.forEach(function(n){n._checkForIntersections()})}),l},s._resetCrossOriginUpdater=function(){l=null,g=null},s.prototype.observe=function(t){var e=this._observationTargets.some(function(n){return n.element==t});if(!e){if(!(t&&t.nodeType==1))throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._unmonitorIntersections(t.ownerDocument),this._observationTargets.length==0&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(n,i,r){if(typeof n!="number"||isNaN(n)||n<0||n>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return n!==r[i-1]})},s.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(i){var r=/^(-?\d*\.?\d+)(px|%)$/.exec(i);if(!r)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(r[1]),unit:r[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},s.prototype._monitorIntersections=function(t){var e=t.defaultView;if(e&&this._monitoringDocuments.indexOf(t)==-1){var n=this._checkForIntersections,i=null,r=null;this.POLL_INTERVAL?i=e.setInterval(n,this.POLL_INTERVAL):(I(e,"resize",n,!0),I(t,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in e&&(r=new e.MutationObserver(n),r.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))),this._monitoringDocuments.push(t),this._monitoringUnsubscribes.push(function(){var h=t.defaultView;h&&(i&&h.clearInterval(i),T(h,"resize",n,!0)),T(t,"scroll",n,!0),r&&r.disconnect()});var c=this.root&&(this.root.ownerDocument||this.root)||u;if(t!=c){var a=o(t);a&&this._monitorIntersections(a.ownerDocument)}}},s.prototype._unmonitorIntersections=function(t){var e=this._monitoringDocuments.indexOf(t);if(e!=-1){var n=this.root&&(this.root.ownerDocument||this.root)||u,i=this._observationTargets.some(function(a){var h=a.element.ownerDocument;if(h==t)return!0;for(;h&&h!=n;){var f=o(h);if(h=f&&f.ownerDocument,h==t)return!0}return!1});if(!i){var r=this._monitoringUnsubscribes[e];if(this._monitoringDocuments.splice(e,1),this._monitoringUnsubscribes.splice(e,1),r(),t!=n){var c=o(t);c&&this._unmonitorIntersections(c.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(!(!this.root&&l&&!g)){var t=this._rootIsInDom(),e=t?this._getRootRect():p();this._observationTargets.forEach(function(n){var i=n.element,r=w(i),c=this._rootContainsTarget(i),a=n.entry,h=t&&c&&this._computeTargetAndRootIntersection(i,r,e),f=null;this._rootContainsTarget(i)?(!l||this.root)&&(f=e):f=p();var v=n.entry=new b({time:k(),target:i,boundingClientRect:r,rootBounds:f,intersectionRect:h});a?t&&c?this._hasCrossedThreshold(a,v)&&this._queuedEntries.push(v):a&&a.isIntersecting&&this._queuedEntries.push(v):this._queuedEntries.push(v)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(t,e,n){if(window.getComputedStyle(t).display!="none"){for(var i=e,r=_(t),c=!1;!c&&r;){var a=null,h=r.nodeType==1?window.getComputedStyle(r):{};if(h.display=="none")return null;if(r==this.root||r.nodeType==9)if(c=!0,r==this.root||r==u)l&&!this.root?!g||g.width==0&&g.height==0?(r=null,a=null,i=null):a=g:a=n;else{var f=_(r),v=f&&w(f),M=f&&this._computeTargetAndRootIntersection(f,v,n);v&&M?(r=f,a=R(v,M)):(r=null,i=null)}else{var x=r.ownerDocument;r!=x.body&&r!=x.documentElement&&h.overflow!="visible"&&(a=w(r))}if(a&&(i=B(a,i)),!i)break;r=r&&_(r)}return i}},s.prototype._getRootRect=function(){var t;if(this.root&&!D(this.root))t=w(this.root);else{var e=D(this.root)?this.root:u,n=e.documentElement,i=e.body;t={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(i,r){return i.unit=="px"?i.value:i.value*(r%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},s.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var r=0;r<this.thresholds.length;r++){var c=this.thresholds[r];if(c==n||c==i||c<n!=c<i)return!0}},s.prototype._rootIsInDom=function(){return!this.root||O(u,this.root)},s.prototype._rootContainsTarget=function(t){var e=this.root&&(this.root.ownerDocument||this.root)||u;return O(e,t)&&(!this.root||e==t.ownerDocument)},s.prototype._registerInstance=function(){d.indexOf(this)<0&&d.push(this)},s.prototype._unregisterInstance=function(){var t=d.indexOf(this);t!=-1&&d.splice(t,1)};function k(){return window.performance&&performance.now&&performance.now()}function U(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function I(t,e,n,i){typeof t.addEventListener=="function"?t.addEventListener(e,n,i):typeof t.attachEvent=="function"&&t.attachEvent("on"+e,n)}function T(t,e,n,i){typeof t.removeEventListener=="function"?t.removeEventListener(e,n,i):typeof t.detachEvent=="function"&&t.detachEvent("on"+e,n)}function B(t,e){var n=Math.max(t.top,e.top),i=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),c=Math.min(t.right,e.right),a=c-r,h=i-n;return a>=0&&h>=0&&{top:n,bottom:i,left:r,right:c,width:a,height:h}||null}function w(t){var e;try{e=t.getBoundingClientRect()}catch{}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):p()}function p(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function y(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function R(t,e){var n=e.top-t.top,i=e.left-t.left;return{top:n,left:i,height:e.height,width:e.width,bottom:n+e.height,right:i+e.width}}function O(t,e){for(var n=e;n;){if(n==t)return!0;n=_(n)}return!1}function _(t){var e=t.parentNode;return t.nodeType==9&&t!=u?o(t):(e&&e.assignedSlot&&(e=e.assignedSlot.parentNode),e&&e.nodeType==11&&e.host?e.host:e)}function D(t){return t&&t.nodeType===9}window.IntersectionObserver=s,window.IntersectionObserverEntry=b})();let L=1,E=!1;const A=document.getElementById("articles-container"),m=document.querySelector(".loading-spinner"),C=new IntersectionObserver(o=>{o.forEach(u=>{u.isIntersecting&&!E&&N()})},{rootMargin:"100px"});m&&C.observe(m);async function N(){try{E=!0,m?.classList.remove("hidden");const u=await(await fetch(`/api/articles?page=${L}`)).json();if(u.length===0){C.disconnect(),m?.classList.add("hidden");return}u.forEach((d,l)=>{const g=V(d);if(A?.appendChild(g),(l+1)%6===0){const b=S();A?.appendChild(b)}}),L++}catch(o){console.error("Error loading more articles:",o)}finally{E=!1,m?.classList.add("hidden")}}function V(o){const u=document.createElement("div");return u.className="article-card",u}function S(){const o=document.createElement("div");return o.className="md:col-span-2",o.innerHTML=`<div class="min-h-[280px] w-full bg-gray-100 flex items-center justify-center">
    <div class="text-center p-4">
      <div class="text-sm text-gray-500">Advertisement</div>
      <div class="ad-container"></div>
    </div>
  </div>`,o}function F(){try{const o=document.getElementById("menu-toggle"),u=document.getElementById("mobile-menu");if(!o||!u)throw new Error("Menu elements not found");const d=()=>{const l=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",(!l).toString()),u.classList.toggle("hidden")};o.addEventListener("click",d),document.addEventListener("keydown",l=>{l.key==="Escape"&&o.getAttribute("aria-expanded")==="true"&&d()}),document.addEventListener("click",l=>{o.getAttribute("aria-expanded")==="true"&&!u.contains(l.target)&&!o.contains(l.target)&&d()})}catch(o){console.error("Error initializing mobile menu:",o)}}document.addEventListener("DOMContentLoaded",()=>{F()});