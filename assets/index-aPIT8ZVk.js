(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const Ye=(e,t)=>e===t,le=Symbol("solid-proxy"),Q={equals:Ye};let Ae=ke;const I=1,X=2,xe={owned:null,cleanups:null,context:null,owner:null};var g=null;let re=null,Je=null,w=null,S=null,T=null,z=0;function Se(e,t){const n=w,r=g,o=e.length===0,i=t===void 0?r:t,l=o?xe:{owned:null,cleanups:null,context:i?i.context:null,owner:i},s=o?e:()=>e(()=>L(()=>ee(l)));g=l,w=null;try{return N(s,!0)}finally{w=n,g=r}}function U(e,t){t=t?Object.assign({},Q,t):Q;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Te(n,o));return[Oe.bind(n),r]}function j(e,t,n){const r=he(e,t,!1,I);K(r)}function Ze(e,t,n){Ae=rt;const r=he(e,t,!1,I);r.user=!0,T?T.push(r):K(r)}function x(e,t,n){n=n?Object.assign({},Q,n):Q;const r=he(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,K(r),Oe.bind(r)}function L(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function Ee(e,t,n){const r=Array.isArray(e);let o;return i=>{let l;if(r){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();const s=L(()=>t(l,o,i));return o=l,s}}function ze(e){Ze(()=>L(e))}function Pe(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function _e(){return g}function Le(e,t){const n=g,r=w;g=e,w=null;try{return N(t,!0)}catch(o){de(o)}finally{g=n,w=r}}function et(e){const t=w,n=g;return Promise.resolve().then(()=>{w=t,g=n;let r;return N(e,!1),w=g=null,r?r.done:void 0})}function Re(e,t){const n=Symbol("context");return{id:n,Provider:st(n),defaultValue:e}}function Ce(e){return g&&g.context&&g.context[e.id]!==void 0?g.context[e.id]:e.defaultValue}function fe(e){const t=x(e),n=x(()=>ae(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Oe(){if(this.sources&&this.state)if(this.state===I)K(this);else{const e=S;S=null,N(()=>J(this),!1),S=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Te(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],l=re&&re.running;l&&re.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?S.push(i):T.push(i),i.observers&&Be(i)),l||(i.state=I)}if(S.length>1e6)throw S=[],new Error},!1)),t}function K(e){if(!e.fn)return;ee(e);const t=z;tt(e,e.value,t)}function tt(e,t,n){let r;const o=g,i=w;w=g=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(ee),e.owned=null),e.updatedAt=n+1,de(l)}finally{w=i,g=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Te(e,r):e.value=r,e.updatedAt=n)}function he(e,t,n,r=I,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==xe&&(g.owned?g.owned.push(i):g.owned=[i]),i}function Y(e){if(e.state===0)return;if(e.state===X)return J(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===I)K(e);else if(e.state===X){const r=S;S=null,N(()=>J(e,t[0]),!1),S=r}}function N(e,t){if(S)return e();let n=!1;t||(S=[]),T?n=!0:T=[],z++;try{const r=e();return nt(n),r}catch(r){n||(T=null),S=null,de(r)}}function nt(e){if(S&&(ke(S),S=null),e)return;const t=T;T=null,t.length&&N(()=>Ae(t),!1)}function ke(e){for(let t=0;t<e.length;t++)Y(e[t])}function rt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Y(r)}for(t=0;t<n;t++)Y(e[t])}function J(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===I?r!==t&&(!r.updatedAt||r.updatedAt<z)&&Y(r):o===X&&J(r,t)}}}function Be(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=X,n.pure?S.push(n):T.push(n),n.observers&&Be(n))}}function ee(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),l=n.observerSlots.pop();r<o.length&&(i.sourceSlots[l]=r,o[r]=i,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ee(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ot(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function de(e,t=g){throw ot(e)}function ae(e){if(typeof e=="function"&&!e.length)return ae(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ae(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function st(e,t){return function(r){let o;return j(()=>o=L(()=>(g.context={...g.context,[e]:r.value},fe(()=>r.children))),void 0),o}}let it=!1;function _(e,t){return L(()=>e(t||{}))}function V(){return!0}const lt={get(e,t,n){return t===le?n:e.get(t)},has(e,t){return t===le?!0:e.has(t)},set:V,deleteProperty:V,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:V,deleteProperty:V}},ownKeys(e){return e.keys()}};function oe(e){return(e=typeof e=="function"?e():e)?e:{}}function at(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ut(...e){let t=!1;for(let l=0;l<e.length;l++){const s=e[l];t=t||!!s&&le in s,e[l]=typeof s=="function"?(t=!0,x(s)):s}if(t)return new Proxy({get(l){for(let s=e.length-1;s>=0;s--){const a=oe(e[s])[l];if(a!==void 0)return a}},has(l){for(let s=e.length-1;s>=0;s--)if(l in oe(e[s]))return!0;return!1},keys(){const l=[];for(let s=0;s<e.length;s++)l.push(...Object.keys(oe(e[s])));return[...new Set(l)]}},lt);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const s=e[l];if(!s)continue;const a=Object.getOwnPropertyNames(s);for(let u=a.length-1;u>=0;u--){const c=a[u];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(s,c);if(!r[c])r[c]=f.get?{enumerable:!0,configurable:!0,get:at.bind(n[c]=[f.get.bind(s)])}:f.value!==void 0?f:void 0;else{const p=n[c];p&&(f.get?p.push(f.get.bind(s)):f.value!==void 0&&p.push(()=>f.value))}}}const o={},i=Object.keys(r);for(let l=i.length-1;l>=0;l--){const s=i[l],a=r[s];a&&a.get?Object.defineProperty(o,s,a):o[s]=a?a.value:void 0}return o}const ct=e=>`Stale read from <${e}>.`;function Ie(e){const t=e.keyed,n=x(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return x(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?L(()=>o(t?r:()=>{if(!L(n))throw ct("Show");return e.when})):o}return e.fallback},void 0,void 0)}function ft(e,t,n){let r=n.length,o=t.length,i=r,l=0,s=0,a=t[o-1].nextSibling,u=null;for(;l<o||s<i;){if(t[l]===n[s]){l++,s++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===l){const c=i<r?s?n[s-1].nextSibling:n[i-s]:a;for(;s<i;)e.insertBefore(n[s++],c)}else if(i===s)for(;l<o;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[s]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--i],c),t[o]=n[i]}else{if(!u){u=new Map;let f=s;for(;f<i;)u.set(n[f],f++)}const c=u.get(t[l]);if(c!=null)if(s<c&&c<i){let f=l,p=1,b;for(;++f<o&&f<i&&!((b=u.get(t[f]))==null||b!==c+p);)p++;if(p>c-s){const E=t[l];for(;s<c;)e.insertBefore(n[s++],E)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const ye="_$DX_DELEGATE";function ht(e,t,n,r={}){let o;return Se(i=>{o=i,t===document?e():gt(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function Me(e,t,n){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},i=()=>(r||(r=o())).cloneNode(!0);return i.cloneNode=i,i}function dt(e,t=window.document){const n=t[ye]||(t[ye]=new Set);for(let r=0,o=e.length;r<o;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,mt))}}function pt(e,t,n){e.setAttribute(t,n)}function q(e,t){t==null?e.removeAttribute("class"):e.className=t}function gt(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Z(e,t,r,n);j(o=>Z(e,t(),o,n),r)}function mt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Z(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=F(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=F(e,n,r);else{if(i==="function")return j(()=>{let s=t();for(;typeof s=="function";)s=s();n=Z(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],a=n&&Array.isArray(n);if(ue(s,t,n,o))return j(()=>n=Z(e,s,n,r,!0)),()=>n;if(s.length===0){if(n=F(e,n,r),l)return n}else a?n.length===0?we(e,s,r):ft(e,n,s):(n&&F(e),we(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=F(e,n,r,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ue(e,t,n,r){let o=!1;for(let i=0,l=t.length;i<l;i++){let s=t[i],a=n&&n[e.length],u;if(!(s==null||s===!0||s===!1))if((u=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))o=ue(e,s,a)||o;else if(u==="function")if(r){for(;typeof s=="function";)s=s();o=ue(e,Array.isArray(s)?s:[s],Array.isArray(a)?a:[a])||o}else e.push(s),o=!0;else{const c=String(s);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return o}function we(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function F(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const a=s.parentNode===e;!i&&!l?a?e.replaceChild(o,s):e.insertBefore(o,n):a&&s.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}const yt=!1;function Ne(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,i){if(n)return!(n=!1);const l={to:o,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const s of e)s.listener({...l,from:s.location,retry:a=>{a&&(n=!0),s.navigate(o,{...i,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let ce;function pe(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ce=window.history.state._depth}pe();function wt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function vt(e,t){let n=!1;return()=>{const r=ce;pe();const o=r==null?null:ce-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const bt=/^(?:[a-z0-9]+:)?\/\//i,At=/^\/+|(\/)\/+$/g,$e="http://sr";function W(e,t=!1){const n=e.replace(At,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function G(e,t,n){if(bt.test(t))return;const r=W(e),o=n&&W(n);let i="";return!o||t.startsWith("/")?i=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+o:i=o,(i||"/")+W(t,!i)}function xt(e,t){if(e==null)throw new Error(t);return e}function St(e,t){return W(e).replace(/\/*(\*.*)?$/g,"")+W(t)}function Fe(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Et(e,t,n){const[r,o]=e.split("/*",2),i=r.split("/").filter(Boolean),l=i.length;return s=>{const a=s.split("/").filter(Boolean),u=a.length-l;if(u<0||u>0&&o===void 0&&!t)return null;const c={path:l?"":"/",params:{}},f=p=>n===void 0?void 0:n[p];for(let p=0;p<l;p++){const b=i[p],E=a[p],h=b[0]===":",d=h?b.slice(1):b;if(h&&se(E,f(d)))c.params[d]=E;else if(h||!se(E,b))return null;c.path+=`/${E}`}if(o){const p=u?a.slice(-u).join("/"):"";if(se(p,f(o)))c.params[o]=p;else return null}return c}}function se(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Pt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,i)=>o+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ue(e){const t=new Map,n=_e();return new Proxy({},{get(r,o){return t.has(o)||Le(n,()=>t.set(o,x(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function je(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return je(r).reduce((i,l)=>[...i,...o.map(s=>s+l)],[])}const _t=100,De=Re(),qe=Re(),Lt=()=>xt(Ce(De),"<A> and 'use' router primitives can be only used inside a Route."),Rt=()=>Lt().navigatorFactory();function Ct(e,t=""){const{component:n,load:r,children:o,info:i}=e,l=!o||Array.isArray(o)&&!o.length,s={key:e,component:n,load:r,info:i};return We(e.path).reduce((a,u)=>{for(const c of je(u)){const f=St(t,c);let p=l?f:f.split("/*",1)[0];p=p.split("/").map(b=>b.startsWith(":")||b.startsWith("*")?b:encodeURIComponent(b)).join("/"),a.push({...s,originalPath:u,pattern:p,matcher:Et(p,!l,e.matchFilters)})}return a},[])}function Ot(e,t=0){return{routes:e,score:Pt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const i=e[o],l=i.matcher(n);if(!l)return null;r.unshift({...l,route:i})}return r}}}function We(e){return Array.isArray(e)?e:[e]}function Ke(e,t="",n=[],r=[]){const o=We(e);for(let i=0,l=o.length;i<l;i++){const s=o[i];if(s&&typeof s=="object"){s.hasOwnProperty("path")||(s.path="");const a=Ct(s,t);for(const u of a){n.push(u);const c=Array.isArray(s.children)&&s.children.length===0;if(s.children&&!c)Ke(s.children,u.pattern,n,r);else{const f=Ot([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((i,l)=>l.score-i.score)}function ie(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Tt(e,t){const n=new URL($e),r=x(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),o=x(()=>r().pathname),i=x(()=>r().search,!0),l=x(()=>r().hash),s=()=>"";return{get pathname(){return o()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return s()},query:Ue(Ee(i,()=>Fe(r())))}}let C;function kt(){return C}function Bt(e,t,n,r={}){const{signal:[o,i],utils:l={}}=e,s=l.parsePath||(y=>y),a=l.renderPath||(y=>y),u=l.beforeLeave||Ne(),c=G("",r.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!o().value&&i({value:c,replace:!0,scroll:!1});const[f,p]=U(!1),b=async y=>{p(!0);try{await et(y)}finally{p(!1)}},[E,h]=U(o().value),[d,v]=U(o().state),m=Tt(E,d),k=[],R=U([]),M=x(()=>typeof r.transformUrl=="function"?ie(t(),r.transformUrl(m.pathname)):ie(t(),m.pathname)),H=Ue(()=>{const y=M(),A={};for(let P=0;P<y.length;P++)Object.assign(A,y[P].params);return A}),ge={pattern:c,path:()=>c,outlet:()=>null,resolvePath(y){return G(c,y)}};return j(()=>{const{value:y,state:A}=o();L(()=>{b(()=>{C="native",y!==E()&&h(y),v(A),R[1]([])}).then(()=>{C=void 0})})}),{base:ge,location:m,params:H,isRouting:f,renderPath:a,parsePath:s,navigatorFactory:Ve,matches:M,beforeLeave:u,preloadRoute:Qe,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:R};function He(y,A,P){L(()=>{if(typeof A=="number"){A&&(l.go?l.go(A):console.warn("Router integration does not support relative routing"));return}const{replace:te,resolve:ne,scroll:$,state:D}={replace:!1,resolve:!0,scroll:!0,...P},B=ne?y.resolvePath(A):G("",A);if(B===void 0)throw new Error(`Path '${A}' is not a routable path`);if(k.length>=_t)throw new Error("Too many redirects");const me=E();if((B!==me||D!==d())&&!yt){if(u.confirm(B,P)){const Xe=k.push({value:me,replace:te,scroll:$,state:d()});b(()=>{C="navigate",h(B),v(D),R[1]([])}).then(()=>{k.length===Xe&&(C=void 0,Ge({value:B,state:D}))})}}})}function Ve(y){return y=y||Ce(qe)||ge,(A,P)=>He(y,A,P)}function Ge(y){const A=k[0];A&&((y.value!==A.value||y.state!==A.state)&&i({...y,replace:A.replace,scroll:A.scroll}),k.length=0)}function Qe(y,A){const P=ie(t(),y.pathname),te=C;C="preload";for(let ne in P){const{route:$,params:D}=P[ne];$.component&&$.component.preload&&$.component.preload();const{load:B}=$;A&&B&&Le(n(),()=>B({params:D,location:{pathname:y.pathname,search:y.search,hash:y.hash,query:Fe(y),state:null,key:""},intent:"preload"}))}C=te}}function It(e,t,n,r){const{base:o,location:i,params:l}=e,{pattern:s,component:a,load:u}=r().route,c=x(()=>r().path);a&&a.preload&&a.preload();const f=u?u({params:l,location:i,intent:C||"initial"}):void 0;return{parent:t,pattern:s,path:c,outlet:()=>a?_(a,{params:l,location:i,data:f,get children(){return n()}}):n(),resolvePath(b){return G(o.path(),b,c())}}}const Mt=e=>t=>{const{base:n}=t,r=fe(()=>t.children),o=x(()=>Ke(r(),t.base||""));let i;const l=Bt(e,o,()=>i,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),_(De.Provider,{value:l,get children(){return _(Nt,{routerState:l,get root(){return t.root},get load(){return t.rootLoad},get children(){return[x(()=>(i=_e())&&null),_($t,{routerState:l,get branches(){return o()}})]}})}})};function Nt(e){const t=e.routerState.location,n=e.routerState.params,r=x(()=>e.load&&L(()=>{e.load({params:n,location:t,intent:kt()||"initial"})}));return _(Ie,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>_(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function $t(e){const t=[];let n;const r=x(Ee(e.routerState.matches,(o,i,l)=>{let s=i&&o.length===i.length;const a=[];for(let u=0,c=o.length;u<c;u++){const f=i&&i[u],p=o[u];l&&f&&p.route.key===f.route.key?a[u]=l[u]:(s=!1,t[u]&&t[u](),Se(b=>{t[u]=b,a[u]=It(e.routerState,a[u-1]||e.routerState.base,ve(()=>r()[u+1]),()=>e.routerState.matches()[u])}))}return t.splice(o.length).forEach(u=>u()),l&&s?l:(n=a[0],a)}));return ve(()=>r()&&n)()}const ve=e=>()=>_(Ie,{get when(){return e()},keyed:!0,children:t=>_(qe.Provider,{value:t,get children(){return t.outlet()}})}),be=e=>{const t=fe(()=>e.children);return ut(e,{get children(){return t()}})};function Ft([e,t],n,r){return[e,r?o=>t(r(o)):t]}function Ut(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function jt(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Ft(U(n(e.get()),{equals:(o,i)=>o.value===i.value&&o.state===i.state}),void 0,o=>(!t&&e.set(o),o));return e.init&&Pe(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Mt({signal:r,create:e.create,utils:e.utils})}function Dt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function qt(e,t){const n=Ut(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Wt=new Map;function Kt(e=!0,t=!1,n="/_server",r){return o=>{const i=o.base.path(),l=o.navigatorFactory(o.base);let s={};function a(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function u(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const d=h.composedPath().find(H=>H instanceof Node&&H.nodeName.toUpperCase()==="A");if(!d||t&&!d.hasAttribute("link"))return;const v=a(d),m=v?d.href.baseVal:d.href;if((v?d.target.baseVal:d.target)||!m&&!d.hasAttribute("state"))return;const R=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||R&&R.includes("external"))return;const M=v?new URL(m,document.baseURI):new URL(m);if(!(M.origin!==window.location.origin||i&&M.pathname&&!M.pathname.toLowerCase().startsWith(i.toLowerCase())))return[d,M]}function c(h){const d=u(h);if(!d)return;const[v,m]=d,k=o.parsePath(m.pathname+m.search+m.hash),R=v.getAttribute("state");h.preventDefault(),l(k,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:R&&JSON.parse(R)})}function f(h){const d=u(h);if(!d)return;const[v,m]=d;typeof r=="function"&&(m.pathname=r(m.pathname)),s[m.pathname]||o.preloadRoute(m,v.getAttribute("preload")!=="false")}function p(h){const d=u(h);if(!d)return;const[v,m]=d;typeof r=="function"&&(m.pathname=r(m.pathname)),!s[m.pathname]&&(s[m.pathname]=setTimeout(()=>{o.preloadRoute(m,v.getAttribute("preload")!=="false"),delete s[m.pathname]},200))}function b(h){const d=u(h);if(!d)return;const[,v]=d;typeof r=="function"&&(v.pathname=r(v.pathname)),s[v.pathname]&&(clearTimeout(s[v.pathname]),delete s[v.pathname])}function E(h){if(h.defaultPrevented)return;let d=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const m=new URL(d,$e);if(d=o.parsePath(m.pathname+m.search),!d.startsWith(n))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const v=Wt.get(d);if(v){h.preventDefault();const m=new FormData(h.target);h.submitter&&h.submitter.name&&m.append(h.submitter.name,h.submitter.value),v.call({r:o,f:h.target},m)}}dt(["click","submit"]),document.addEventListener("click",c),e&&(document.addEventListener("mouseover",p),document.addEventListener("mouseout",b),document.addEventListener("focusin",f),document.addEventListener("touchstart",f)),document.addEventListener("submit",E),Pe(()=>{document.removeEventListener("click",c),e&&(document.removeEventListener("mouseover",p),document.removeEventListener("mouseout",b),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",E)})}}function Ht(e){const t=()=>{const r=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},n=Ne();return jt({get:t,set({value:r,replace:o,scroll:i,state:l}){o?window.history.replaceState(wt(l),"",r):window.history.pushState(l,"",r),qt(window.location.hash.slice(1),i),pe()},init:r=>Dt(window,"popstate",vt(r,o=>{if(o&&o<0)return!n.confirm(o);{const i=t();return!n.confirm(i.value,{state:i.state})}})),create:Kt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const Vt="_App_pxktl_6",Gt="_logo_pxktl_10",Qt="_header_pxktl_19",Xt="_link_pxktl_30",Yt="_container_pxktl_43",Jt="_animated_text_pxktl_47",Zt="_typing_pxktl_1",zt="_cursor_pxktl_1",en="_mainMenuTransition_pxktl_63",tn="_fadeOut_pxktl_1",O={App:Vt,logo:Gt,"logo-spin":"_logo-spin_pxktl_1",header:Qt,link:Xt,container:Yt,animated_text:Jt,typing:Zt,cursor:zt,mainMenuTransition:en,fadeOut:tn},nn=""+new URL("HG2HQ-DPm6rQTf.png",import.meta.url).href;var rn=Me("<div id=mainBox><header><img alt=logo><div id=textContainer><p id=textBlock></p></div>");const on=()=>{U("Initializing RESOLYTH SITE... Please wait a moment...");const e=Rt();return ze(()=>{sn("Initializing RESOLYTH SITE... Please wait a moment..."),setTimeout(()=>{const n=document.getElementById("mainBox");n&&(n.classList.remove(O.App),n.offsetWidth,n.classList.add(O.mainMenuTransition))},3e3),setTimeout(()=>{e("/MainMenu")},5e3)}),(()=>{var n=rn(),r=n.firstChild,o=r.firstChild,i=o.nextSibling,l=i.firstChild;return pt(o,"src",nn),j(s=>{var a=O.App,u=O.header,c=O.logo,f=O.container,p=O.animated_text;return a!==s.e&&q(n,s.e=a),u!==s.t&&q(r,s.t=u),c!==s.a&&q(o,s.a=c),f!==s.o&&q(i,s.o=f),p!==s.i&&q(l,s.i=p),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),n})()};function sn(e){const t=document.getElementById("textBlock");t&&(t.classList.remove(O.animated_text),t.innerHTML="",t.offsetWidth,t.innerHTML=e,t.classList.add(O.animated_text))}var ln=Me("<div><p>Main Menu!");const an=()=>ln(),un=document.getElementById("root");ht(()=>_(Ht,{get children(){return[_(be,{path:"/",component:on}),_(be,{path:"MainMenu",component:an})]}}),un);
