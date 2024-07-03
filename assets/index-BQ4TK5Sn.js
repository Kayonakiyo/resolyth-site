(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ze=(e,t)=>e===t,ce=Symbol("solid-proxy"),Y={equals:ze};let Se=Me;const M=1,J=2,Ee={owned:null,cleanups:null,context:null,owner:null};var g=null;let ie=null,et=null,w=null,x=null,$=null,ne=0;function Pe(e,t){const n=w,r=g,o=e.length===0,s=t===void 0?r:t,l=o?Ee:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e(()=>L(()=>re(l)));g=l,w=null;try{return U(i,!0)}finally{w=n,g=r}}function F(e,t){t=t?Object.assign({},Y,t):Y;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),ke(n,o));return[Be.bind(n),r]}function C(e,t,n){const r=ge(e,t,!1,M);V(r)}function tt(e,t,n){Se=st;const r=ge(e,t,!1,M);r.user=!0,$?$.push(r):V(r)}function A(e,t,n){n=n?Object.assign({},Y,n):Y;const r=ge(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,V(r),Be.bind(r)}function L(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function Le(e,t,n){const r=Array.isArray(e);let o;return s=>{let l;if(r){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();const i=L(()=>t(l,o,s));return o=l,i}}function Re(e){tt(()=>L(e))}function Ce(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Te(){return g}function Oe(e,t){const n=g,r=w;g=e,w=null;try{return U(t,!0)}catch(o){me(o)}finally{g=n,w=r}}function nt(e){const t=w,n=g;return Promise.resolve().then(()=>{w=t,g=n;let r;return U(e,!1),w=g=null,r?r.done:void 0})}function Ie(e,t){const n=Symbol("context");return{id:n,Provider:lt(n),defaultValue:e}}function $e(e){return g&&g.context&&g.context[e.id]!==void 0?g.context[e.id]:e.defaultValue}function pe(e){const t=A(e),n=A(()=>fe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Be(){if(this.sources&&this.state)if(this.state===M)V(this);else{const e=x;x=null,U(()=>z(this),!1),x=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function ke(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&U(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=ie&&ie.running;l&&ie.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?x.push(s):$.push(s),s.observers&&Ne(s)),l||(s.state=M)}if(x.length>1e6)throw x=[],new Error},!1)),t}function V(e){if(!e.fn)return;re(e);const t=ne;rt(e,e.value,t)}function rt(e,t,n){let r;const o=g,s=w;w=g=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=M,e.owned&&e.owned.forEach(re),e.owned=null),e.updatedAt=n+1,me(l)}finally{w=s,g=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ke(e,r):e.value=r,e.updatedAt=n)}function ge(e,t,n,r=M,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==Ee&&(g.owned?g.owned.push(s):g.owned=[s]),s}function Z(e){if(e.state===0)return;if(e.state===J)return z(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ne);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===M)V(e);else if(e.state===J){const r=x;x=null,U(()=>z(e,t[0]),!1),x=r}}function U(e,t){if(x)return e();let n=!1;t||(x=[]),$?n=!0:$=[],ne++;try{const r=e();return ot(n),r}catch(r){n||($=null),x=null,me(r)}}function ot(e){if(x&&(Me(x),x=null),e)return;const t=$;$=null,t.length&&U(()=>Se(t),!1)}function Me(e){for(let t=0;t<e.length;t++)Z(e[t])}function st(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Z(r)}for(t=0;t<n;t++)Z(e[t])}function z(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===M?r!==t&&(!r.updatedAt||r.updatedAt<ne)&&Z(r):o===J&&z(r,t)}}}function Ne(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=J,n.pure?x.push(n):$.push(n),n.observers&&Ne(n))}}function re(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function it(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function me(e,t=g){throw it(e)}function fe(e){if(typeof e=="function"&&!e.length)return fe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=fe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function lt(e,t){return function(r){let o;return C(()=>o=L(()=>(g.context={...g.context,[e]:r.value},pe(()=>r.children))),void 0),o}}let at=!1;function E(e,t){return L(()=>e(t||{}))}function Q(){return!0}const ut={get(e,t,n){return t===ce?n:e.get(t)},has(e,t){return t===ce?!0:e.has(t)},set:Q,deleteProperty:Q,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Q,deleteProperty:Q}},ownKeys(e){return e.keys()}};function le(e){return(e=typeof e=="function"?e():e)?e:{}}function ct(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ft(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&ce in i,e[l]=typeof i=="function"?(t=!0,A(i)):i}if(t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=le(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in le(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(le(e[i])));return[...new Set(l)]}},ut);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let u=a.length-1;u>=0;u--){const c=a[u];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,c);if(!r[c])r[c]=f.get?{enumerable:!0,configurable:!0,get:ct.bind(n[c]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const p=n[c];p&&(f.get?p.push(f.get.bind(i)):f.value!==void 0&&p.push(()=>f.value))}}}const o={},s=Object.keys(r);for(let l=s.length-1;l>=0;l--){const i=s[l],a=r[i];a&&a.get?Object.defineProperty(o,i,a):o[i]=a?a.value:void 0}return o}const dt=e=>`Stale read from <${e}>.`;function ee(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return A(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?L(()=>o(t?r:()=>{if(!L(n))throw dt("Show");return e.when})):o}return e.fallback},void 0,void 0)}function ht(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,a=t[o-1].nextSibling,u=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const c=s<r?i?n[i-1].nextSibling:n[s-i]:a;for(;i<s;)e.insertBefore(n[i++],c)}else if(s===i)for(;l<o;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],c),t[o]=n[s]}else{if(!u){u=new Map;let f=i;for(;f<s;)u.set(n[f],f++)}const c=u.get(t[l]);if(c!=null)if(i<c&&c<s){let f=l,p=1,b;for(;++f<o&&f<s&&!((b=u.get(t[f]))==null||b!==c+p);)p++;if(p>c-i){const S=t[l];for(;i<c;)e.insertBefore(n[i++],S)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const be="_$DX_DELEGATE";function pt(e,t,n,r={}){let o;return Pe(s=>{o=s,t===document?e():Fe(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function W(e,t,n){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function gt(e,t=window.document){const n=t[be]||(t[be]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,yt))}}function mt(e,t,n){e.setAttribute(t,n)}function R(e,t){t==null?e.removeAttribute("class"):e.className=t}function Fe(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return te(e,t,r,n);C(o=>te(e,t(),o,n),r)}function yt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function te(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=D(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=D(e,n,r);else{if(s==="function")return C(()=>{let i=t();for(;typeof i=="function";)i=i();n=te(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(de(i,t,n,o))return C(()=>n=te(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=D(e,n,r),l)return n}else a?n.length===0?_e(e,i,r):ht(e,n,i):(n&&D(e),_e(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=D(e,n,r,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function de(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],a=n&&n[e.length],u;if(!(i==null||i===!0||i===!1))if((u=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=de(e,i,a)||o;else if(u==="function")if(r){for(;typeof i=="function";)i=i();o=de(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||o}else e.push(i),o=!0;else{const c=String(i);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return o}function _e(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function D(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const a=i.parentNode===e;!s&&!l?a?e.replaceChild(o,i):e.insertBefore(o,n):a&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const wt=!1;function Ue(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const l={to:o,options:s,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:a=>{a&&(n=!0),i.navigate(o,{...s,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let he;function ye(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),he=window.history.state._depth}ye();function vt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function bt(e,t){let n=!1;return()=>{const r=he;ye();const o=r==null?null:he-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const _t=/^(?:[a-z0-9]+:)?\/\//i,At=/^\/+|(\/)\/+$/g,je="http://sr";function H(e,t=!1){const n=e.replace(At,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function X(e,t,n){if(_t.test(t))return;const r=H(e),o=n&&H(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+H(t,!s)}function xt(e,t){if(e==null)throw new Error(t);return e}function St(e,t){return H(e).replace(/\/*(\*.*)?$/g,"")+H(t)}function De(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Et(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),l=s.length;return i=>{const a=i.split("/").filter(Boolean),u=a.length-l;if(u<0||u>0&&o===void 0&&!t)return null;const c={path:l?"":"/",params:{}},f=p=>n===void 0?void 0:n[p];for(let p=0;p<l;p++){const b=s[p],S=a[p],d=b[0]===":",h=d?b.slice(1):b;if(d&&ae(S,f(h)))c.params[h]=S;else if(d||!ae(S,b))return null;c.path+=`/${S}`}if(o){const p=u?a.slice(-u).join("/"):"";if(ae(p,f(o)))c.params[o]=p;else return null}return c}}function ae(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Pt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function We(e){const t=new Map,n=Te();return new Proxy({},{get(r,o){return t.has(o)||Oe(n,()=>t.set(o,A(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function qe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return qe(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const Lt=100,Ke=Ie(),He=Ie(),Rt=()=>xt($e(Ke),"<A> and 'use' router primitives can be only used inside a Route."),Ct=()=>Rt().navigatorFactory();function Tt(e,t=""){const{component:n,load:r,children:o,info:s}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,component:n,load:r,info:s};return Ve(e.path).reduce((a,u)=>{for(const c of qe(u)){const f=St(t,c);let p=l?f:f.split("/*",1)[0];p=p.split("/").map(b=>b.startsWith(":")||b.startsWith("*")?b:encodeURIComponent(b)).join("/"),a.push({...i,originalPath:u,pattern:p,matcher:Et(p,!l,e.matchFilters)})}return a},[])}function Ot(e,t=0){return{routes:e,score:Pt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(n);if(!l)return null;r.unshift({...l,route:s})}return r}}}function Ve(e){return Array.isArray(e)?e:[e]}function Ge(e,t="",n=[],r=[]){const o=Ve(e);for(let s=0,l=o.length;s<l;s++){const i=o[s];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const a=Tt(i,t);for(const u of a){n.push(u);const c=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!c)Ge(i.children,u.pattern,n,r);else{const f=Ot([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((s,l)=>l.score-s.score)}function ue(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function It(e,t){const n=new URL(je),r=A(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),o=A(()=>r().pathname),s=A(()=>r().search,!0),l=A(()=>r().hash),i=()=>"";return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:We(Le(s,()=>De(r())))}}let O;function $t(){return O}function Bt(e,t,n,r={}){const{signal:[o,s],utils:l={}}=e,i=l.parsePath||(y=>y),a=l.renderPath||(y=>y),u=l.beforeLeave||Ue(),c=X("",r.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!o().value&&s({value:c,replace:!0,scroll:!1});const[f,p]=F(!1),b=async y=>{p(!0);try{await nt(y)}finally{p(!1)}},[S,d]=F(o().value),[h,v]=F(o().state),m=It(S,h),B=[],T=F([]),N=A(()=>typeof r.transformUrl=="function"?ue(t(),r.transformUrl(m.pathname)):ue(t(),m.pathname)),G=We(()=>{const y=N(),_={};for(let P=0;P<y.length;P++)Object.assign(_,y[P].params);return _}),we={pattern:c,path:()=>c,outlet:()=>null,resolvePath(y){return X(c,y)}};return C(()=>{const{value:y,state:_}=o();L(()=>{b(()=>{O="native",y!==S()&&d(y),v(_),T[1]([])}).then(()=>{O=void 0})})}),{base:we,location:m,params:G,isRouting:f,renderPath:a,parsePath:i,navigatorFactory:Xe,matches:N,beforeLeave:u,preloadRoute:Je,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:T};function Qe(y,_,P){L(()=>{if(typeof _=="number"){_&&(l.go?l.go(_):console.warn("Router integration does not support relative routing"));return}const{replace:oe,resolve:se,scroll:j,state:q}={replace:!1,resolve:!0,scroll:!0,...P},k=se?y.resolvePath(_):X("",_);if(k===void 0)throw new Error(`Path '${_}' is not a routable path`);if(B.length>=Lt)throw new Error("Too many redirects");const ve=S();if((k!==ve||q!==h())&&!wt){if(u.confirm(k,P)){const Ze=B.push({value:ve,replace:oe,scroll:j,state:h()});b(()=>{O="navigate",d(k),v(q),T[1]([])}).then(()=>{B.length===Ze&&(O=void 0,Ye({value:k,state:q}))})}}})}function Xe(y){return y=y||$e(He)||we,(_,P)=>Qe(y,_,P)}function Ye(y){const _=B[0];_&&((y.value!==_.value||y.state!==_.state)&&s({...y,replace:_.replace,scroll:_.scroll}),B.length=0)}function Je(y,_){const P=ue(t(),y.pathname),oe=O;O="preload";for(let se in P){const{route:j,params:q}=P[se];j.component&&j.component.preload&&j.component.preload();const{load:k}=j;_&&k&&Oe(n(),()=>k({params:q,location:{pathname:y.pathname,search:y.search,hash:y.hash,query:De(y),state:null,key:""},intent:"preload"}))}O=oe}}function kt(e,t,n,r){const{base:o,location:s,params:l}=e,{pattern:i,component:a,load:u}=r().route,c=A(()=>r().path);a&&a.preload&&a.preload();const f=u?u({params:l,location:s,intent:O||"initial"}):void 0;return{parent:t,pattern:i,path:c,outlet:()=>a?E(a,{params:l,location:s,data:f,get children(){return n()}}):n(),resolvePath(b){return X(o.path(),b,c())}}}const Mt=e=>t=>{const{base:n}=t,r=pe(()=>t.children),o=A(()=>Ge(r(),t.base||""));let s;const l=Bt(e,o,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),E(Ke.Provider,{value:l,get children(){return E(Nt,{routerState:l,get root(){return t.root},get load(){return t.rootLoad},get children(){return[A(()=>(s=Te())&&null),E(Ft,{routerState:l,get branches(){return o()}})]}})}})};function Nt(e){const t=e.routerState.location,n=e.routerState.params,r=A(()=>e.load&&L(()=>{e.load({params:n,location:t,intent:$t()||"initial"})}));return E(ee,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>E(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Ft(e){const t=[];let n;const r=A(Le(e.routerState.matches,(o,s,l)=>{let i=s&&o.length===s.length;const a=[];for(let u=0,c=o.length;u<c;u++){const f=s&&s[u],p=o[u];l&&f&&p.route.key===f.route.key?a[u]=l[u]:(i=!1,t[u]&&t[u](),Pe(b=>{t[u]=b,a[u]=kt(e.routerState,a[u-1]||e.routerState.base,Ae(()=>r()[u+1]),()=>e.routerState.matches()[u])}))}return t.splice(o.length).forEach(u=>u()),l&&i?l:(n=a[0],a)}));return Ae(()=>r()&&n)()}const Ae=e=>()=>E(ee,{get when(){return e()},keyed:!0,children:t=>E(He.Provider,{value:t,get children(){return t.outlet()}})}),xe=e=>{const t=pe(()=>e.children);return ft(e,{get children(){return t()}})};function Ut([e,t],n,r){return[e,r?o=>t(r(o)):t]}function jt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Dt(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Ut(F(n(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!t&&e.set(o),o));return e.init&&Ce(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Mt({signal:r,create:e.create,utils:e.utils})}function Wt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function qt(e,t){const n=jt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Kt=new Map;function Ht(e=!0,t=!1,n="/_server",r){return o=>{const s=o.base.path(),l=o.navigatorFactory(o.base);let i={};function a(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function u(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const h=d.composedPath().find(G=>G instanceof Node&&G.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const v=a(h),m=v?h.href.baseVal:h.href;if((v?h.target.baseVal:h.target)||!m&&!h.hasAttribute("state"))return;const T=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||T&&T.includes("external"))return;const N=v?new URL(m,document.baseURI):new URL(m);if(!(N.origin!==window.location.origin||s&&N.pathname&&!N.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,N]}function c(d){const h=u(d);if(!h)return;const[v,m]=h,B=o.parsePath(m.pathname+m.search+m.hash),T=v.getAttribute("state");d.preventDefault(),l(B,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:T&&JSON.parse(T)})}function f(d){const h=u(d);if(!h)return;const[v,m]=h;typeof r=="function"&&(m.pathname=r(m.pathname)),i[m.pathname]||o.preloadRoute(m,v.getAttribute("preload")!=="false")}function p(d){const h=u(d);if(!h)return;const[v,m]=h;typeof r=="function"&&(m.pathname=r(m.pathname)),!i[m.pathname]&&(i[m.pathname]=setTimeout(()=>{o.preloadRoute(m,v.getAttribute("preload")!=="false"),delete i[m.pathname]},200))}function b(d){const h=u(d);if(!h)return;const[,v]=h;typeof r=="function"&&(v.pathname=r(v.pathname)),i[v.pathname]&&(clearTimeout(i[v.pathname]),delete i[v.pathname])}function S(d){if(d.defaultPrevented)return;let h=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const m=new URL(h,je);if(h=o.parsePath(m.pathname+m.search),!h.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const v=Kt.get(h);if(v){d.preventDefault();const m=new FormData(d.target);d.submitter&&d.submitter.name&&m.append(d.submitter.name,d.submitter.value),v.call({r:o,f:d.target},m)}}gt(["click","submit"]),document.addEventListener("click",c),e&&(document.addEventListener("mouseover",p),document.addEventListener("mouseout",b),document.addEventListener("focusin",f),document.addEventListener("touchstart",f)),document.addEventListener("submit",S),Ce(()=>{document.removeEventListener("click",c),e&&(document.removeEventListener("mouseover",p),document.removeEventListener("mouseout",b),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",S)})}}function Vt(e){const t=()=>{const r=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},n=Ue();return Dt({get:t,set({value:r,replace:o,scroll:s,state:l}){o?window.history.replaceState(vt(l),"",r):window.history.pushState(l,"",r),qt(window.location.hash.slice(1),s),ye()},init:r=>Wt(window,"popstate",bt(r,o=>{if(o&&o<0)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Ht(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const Gt="_App_1y3d7_6",Qt="_logo_1y3d7_10",Xt="_header_1y3d7_18",Yt="_link_1y3d7_29",Jt="_container_1y3d7_42",Zt="_animated_text_1y3d7_46",zt="_typing_1y3d7_1",en="_cursor_1y3d7_1",tn="_mainMenuTransition_1y3d7_62",nn="_fadeOut_1y3d7_1",I={App:Gt,logo:Qt,"logo-spin":"_logo-spin_1y3d7_1",header:Xt,link:Yt,container:Jt,animated_text:Zt,typing:zt,cursor:en,mainMenuTransition:tn,fadeOut:nn},rn=""+new URL("HG2HQ-DPm6rQTf.png",import.meta.url).href;var on=W("<div id=mainBox><header><img alt=logo><div id=textContainer><p id=textBlock></p></div>");const sn=()=>{F("Initializing RESOLYTH SITE... Please wait a moment...");const e=Ct();return Re(()=>{ln("Initializing RESOLYTH SITE... Please wait a moment..."),setTimeout(()=>{const n=document.getElementById("mainBox");n&&(n.classList.remove(I.App),n.offsetWidth,n.classList.add(I.mainMenuTransition))},3e3),setTimeout(()=>{e("/MainMenu")},5e3)}),(()=>{var n=on(),r=n.firstChild,o=r.firstChild,s=o.nextSibling,l=s.firstChild;return mt(o,"src",rn),C(i=>{var a=I.App,u=I.header,c=I.logo,f=I.container,p=I.animated_text;return a!==i.e&&R(n,i.e=a),u!==i.t&&R(r,i.t=u),c!==i.a&&R(o,i.a=c),f!==i.o&&R(s,i.o=f),p!==i.i&&R(l,i.i=p),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),n})()};function ln(e){const t=document.getElementById("textBlock");t&&(t.classList.remove(I.animated_text),t.innerHTML="",t.offsetWidth,t.innerHTML=e,t.classList.add(I.animated_text))}const an="_header_17sct_6",un="_fadeIn_17sct_1",cn="_screen_17sct_16",fn="_text_17sct_25",K={header:an,fadeIn:un,screen:cn,text:fn};var dn=W("<p id=loaded_text>loaded!"),hn=W("<div><ol>"),pn=W("<div id=main><p id=welcome_text>Welcome!"),gn=W("<p>peanis"),mn=W("<p>");const yn=()=>{const[e,t]=F(!1);return Re(()=>{setTimeout(()=>{t(!0);const r=document.getElementById("welcome_text");r&&r.remove()},1500)}),E(ee,{when:!0,get fallback(){return gn()},get children(){var r=pn(),o=r.firstChild;return Fe(r,E(ee,{get when(){return e()},get fallback(){return(()=>{var s=mn();return C(()=>R(s,K.text)),s})()},get children(){return[(()=>{var s=dn();return C(()=>R(s,K.text)),s})(),(()=>{var s=hn();return C(()=>R(s,K.screen)),s})()]}}),null),C(s=>{var l=K.header,i=K.text;return l!==s.e&&R(r,s.e=l),i!==s.t&&R(o,s.t=i),s},{e:void 0,t:void 0}),r}})},wn=document.getElementById("root");pt(()=>E(Vt,{get children(){return[E(xe,{path:"/",component:sn}),E(xe,{path:"MainMenu",component:yn})]}}),wn);
