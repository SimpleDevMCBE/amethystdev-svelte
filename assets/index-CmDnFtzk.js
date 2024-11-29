(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();const Ft=!1;var Lt=Array.isArray,qt=Array.from,At=Object.defineProperty,et=Object.getOwnPropertyDescriptor;function It(t){for(var r=0;r<t.length;r++)t[r]()}const S=2,at=4,Z=8,Rt=16,D=32,j=64,P=128,U=256,y=512,V=1024,K=2048,ft=4096,W=8192,Mt=16384,Bt=1<<18,ct=1<<19;function _t(t){return t===this.v}function Pt(){throw new Error("effect_update_depth_exceeded")}function Vt(){throw new Error("state_unsafe_local_read")}let vt=!1;function Wt(){vt=!0}function $t(t){return{f:0,v:t,reactions:null,equals:_t,version:0}}var lt,dt,pt;function Ht(){if(lt===void 0){lt=window;var t=Element.prototype,r=Node.prototype;dt=et(r,"firstChild").get,pt=et(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Ut(t=""){return document.createTextNode(t)}function ht(t){return dt.call(t)}function mt(t){return pt.call(t)}function ut(t,r){return ht(t)}function O(t,r=1,n=!1){let e=t;for(;r--;)e=mt(e);return e}function F(t){var r=S|V;d===null?r|=P:d.f|=ct;const n={children:null,ctx:g,deps:null,equals:_t,f:r,fn:t,reactions:null,v:null,version:0,parent:d};if(m!==null&&m.f&S){var e=m;(e.children??(e.children=[])).push(n)}return n}function Et(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];e.f&S?tt(e):$(e)}}}function wt(t){var r,n=d;x(t.parent);try{Et(t),r=Ct(t)}finally{x(n)}return r}function yt(t){var r=wt(t),n=(C||t.f&P)&&t.deps!==null?K:y;k(t,n),t.equals(r)||(t.v=r,t.version=Zt())}function tt(t){Et(t),B(t,0),k(t,W),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Yt(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function z(t,r,n,e=!0){var l=(t&j)!==0,u=d,o={ctx:g,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|V,first:null,fn:r,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,version:0};if(n){var i=N;try{ot(!0),rt(o),o.f|=Mt}catch(a){throw $(o),a}finally{ot(i)}}else r!==null&&Nt(o);var v=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&ct)===0;if(!v&&!l&&e&&(u!==null&&Yt(o,u),m!==null&&m.f&S)){var p=m;(p.children??(p.children=[])).push(o)}return o}function jt(t){const r=z(Z,null,!1);return k(r,y),r.teardown=t,r}function Kt(t){const r=z(j,t,!0);return()=>{$(r)}}function zt(t){return z(at,t,!1)}function Gt(t,r=!0){return z(Z|D,t,!0,r)}function gt(t){var r=t.teardown;if(r!==null){const n=m;b(null);try{r.call(null)}finally{b(n)}}}function bt(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)tt(r[n])}}function xt(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;$(n,r),n=e}}function Jt(t){for(var r=t.first;r!==null;){var n=r.next;r.f&D||$(r),r=n}}function $(t,r=!0){var n=!1;if((r||t.f&Bt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var u=e===l?null:mt(e);e.remove(),e=u}n=!0}xt(t,r&&!n),bt(t),B(t,0),k(t,W);var o=t.transitions;if(o!==null)for(const v of o)v.stop();gt(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}let J=!1,Q=[];function Qt(){J=!1;const t=Q.slice();Q=[],It(t)}function Xt(t){J||(J=!0,queueMicrotask(Qt)),Q.push(t)}let Y=!1,N=!1;function ot(t){N=t}let X=[],I=0;let m=null;function b(t){m=t}let d=null;function x(t){d=t}let R=null,E=null,w=0,M=null,Tt=0,C=!1,g=null;function Zt(){return++Tt}function G(t){var o,i;var r=t.f;if(r&V)return!0;if(r&K){var n=t.deps,e=(r&P)!==0;if(n!==null){var l;if(r&U){for(l=0;l<n.length;l++)((o=n[l]).reactions??(o.reactions=[])).push(t);t.f^=U}for(l=0;l<n.length;l++){var u=n[l];if(G(u)&&yt(u),e&&d!==null&&!C&&!((i=u==null?void 0:u.reactions)!=null&&i.includes(t))&&(u.reactions??(u.reactions=[])).push(t),u.version>t.version)return!0}}e||k(t,y)}return!1}function tr(t,r,n){throw t}function Ct(t){var c;var r=E,n=w,e=M,l=m,u=C,o=R,i=g,v=t.f;E=null,w=0,M=null,m=v&(D|j)?null:t,C=!N&&(v&P)!==0,R=null,g=t.ctx;try{var p=(0,t.fn)(),a=t.deps;if(E!==null){var s;if(B(t,w),a!==null&&w>0)for(a.length=w+E.length,s=0;s<E.length;s++)a[w+s]=E[s];else t.deps=a=E;if(!C)for(s=w;s<a.length;s++)((c=a[s]).reactions??(c.reactions=[])).push(t)}else a!==null&&w<a.length&&(B(t,w),a.length=w);return p}finally{E=r,w=n,M=e,m=l,C=u,R=o,g=i}}function rr(t,r){let n=r.reactions;if(n!==null){var e=n.indexOf(t);if(e!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[e]=n[l],n.pop())}}n===null&&r.f&S&&(E===null||!E.includes(r))&&(k(r,K),r.f&(P|U)||(r.f^=U),B(r,0))}function B(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)rr(t,n[e])}function rt(t){var r=t.f;if(!(r&W)){k(t,y);var n=d;d=t;try{r&Rt?Jt(t):xt(t),bt(t),gt(t);var e=Ct(t);t.teardown=typeof e=="function"?e:null,t.version=Tt}catch(l){tr(l)}finally{d=n}}}function nr(){I>1e3&&(I=0,Pt()),I++}function er(t){var r=t.length;if(r!==0){nr();var n=N;N=!0;try{for(var e=0;e<r;e++){var l=t[e];l.f&y||(l.f^=y);var u=[];St(l,u),lr(u)}}finally{N=n}}}function lr(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];!(e.f&(W|ft))&&G(e)&&(rt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function ur(){if(Y=!1,I>1001)return;const t=X;X=[],er(t),Y||(I=0)}function Nt(t){Y||(Y=!0,queueMicrotask(ur));for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(j|D)){if(!(n&y))return;r.f^=y}}X.push(r)}function St(t,r){var n=t.first,e=[];t:for(;n!==null;){var l=n.f,u=(l&D)!==0,o=u&&(l&y)!==0;if(!o&&!(l&ft))if(l&Z){u?n.f^=y:G(n)&&rt(n);var i=n.first;if(i!==null){n=i;continue}}else l&at&&e.push(n);var v=n.next;if(v===null){let s=n.parent;for(;s!==null;){if(t===s)break t;var p=s.next;if(p!==null){n=p;continue t}s=s.parent}}n=v}for(var a=0;a<e.length;a++)i=e[a],r.push(i),St(i,r)}function L(t){var i;var r=t.f,n=(r&S)!==0;if(n&&r&W){var e=wt(t);return tt(t),e}if(m!==null){R!==null&&R.includes(t)&&Vt();var l=m.deps;E===null&&l!==null&&l[w]===t?w++:E===null?E=[t]:E.push(t),M!==null&&d!==null&&d.f&y&&!(d.f&D)&&M.includes(t)&&(k(d,V),Nt(d))}else if(n&&t.deps===null){var u=t,o=u.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(u))&&(o.deriveds??(o.deriveds=[])).push(u)}return n&&(u=t,G(u)&&yt(u)),t.v}const or=~(V|K|y);function k(t,r){t.f=t.f&or|r}function ir(t,r=!1,n){g={p:g,c:null,e:null,m:!1,s:t,x:null,l:null},vt&&!r&&(g.l={s:null,u:null,r1:[],r2:$t(!1)})}function sr(t){const r=g;if(r!==null){const o=r.e;if(o!==null){var n=d,e=m;r.e=null;try{for(var l=0;l<o.length;l++){var u=o[l];x(u.effect),b(u.reaction),zt(u.fn)}}finally{x(n),b(e)}}g=r.p,r.m=!0}return{}}function ar(t){var r=m,n=d;b(null),x(null);try{return t()}finally{b(r),x(n)}}const fr=new Set,it=new Set;function cr(t,r,n,e){function l(u){if(e.capture||A.call(r,u),!u.cancelBubble)return ar(()=>n.call(this,u))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Xt(()=>{r.addEventListener(t,l,e)}):r.addEventListener(t,l,e),l}function q(t,r,n,e,l){var u={capture:e,passive:l},o=cr(t,r,n,u);(r===document.body||r===window||r===document)&&jt(()=>{r.removeEventListener(t,o,u)})}function A(t){var nt;var r=this,n=r.ownerDocument,e=t.type,l=((nt=t.composedPath)==null?void 0:nt.call(t))||[],u=l[0]||t.target,o=0,i=t.__root;if(i){var v=l.indexOf(i);if(v!==-1&&(r===document||r===window)){t.__root=r;return}var p=l.indexOf(r);if(p===-1)return;v<=p&&(o=v)}if(u=l[o]||t.target,u!==r){At(t,"currentTarget",{configurable:!0,get(){return u||n}});var a=m,s=d;b(null),x(null);try{for(var c,h=[];u!==null;){var _=u.assignedSlot||u.parentNode||u.host||null;try{var f=u["__"+e];if(f!==void 0&&!u.disabled)if(Lt(f)){var[Dt,...Ot]=f;Dt.apply(u,[t,...Ot])}else f.call(u,t)}catch(H){c?h.push(H):c=H}if(t.cancelBubble||_===r||_===null)break;u=_}if(c){for(let H of h)queueMicrotask(()=>{throw H});throw c}}finally{t.__root=r,delete t.currentTarget,b(a),x(s)}}}function _r(t){var r=document.createElement("template");return r.innerHTML=t,r.content}function vr(t,r){var n=d;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=r)}function dr(t,r){var n,e=!t.startsWith("<!>");return()=>{n===void 0&&(n=_r(e?t:"<!>"+t),n=ht(n));var l=n.cloneNode(!0);return vr(l,l),l}}function pr(t,r){t!==null&&t.before(r)}const hr=["touchstart","touchmove"];function mr(t){return hr.includes(t)}function Er(t,r){return wr(t,r)}const T=new Map;function wr(t,{target:r,anchor:n,props:e={},events:l,context:u,intro:o=!0}){Ht();var i=new Set,v=s=>{for(var c=0;c<s.length;c++){var h=s[c];if(!i.has(h)){i.add(h);var _=mr(h);r.addEventListener(h,A,{passive:_});var f=T.get(h);f===void 0?(document.addEventListener(h,A,{passive:_}),T.set(h,1)):T.set(h,f+1)}}};v(qt(fr)),it.add(v);var p=void 0,a=Kt(()=>{var s=n??r.appendChild(Ut());return Gt(()=>{if(u){ir({});var c=g;c.c=u}l&&(e.$$events=l),p=t(s,e)||{},u&&sr()}),()=>{var _;for(var c of i){r.removeEventListener(c,A);var h=T.get(c);--h===0?(document.removeEventListener(c,A),T.delete(c)):T.set(c,h)}it.delete(v),st.delete(p),s!==n&&((_=s.parentNode)==null||_.removeChild(s))}});return st.set(p,a),p}let st=new WeakMap;const yr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(yr);Wt();var gr=dr("<main><div></div> <nav><button>Discord</button></nav> <h1>Welcome!</h1> <p>I work on a couple of projects like Blossom Essentials and Simple Essentials.</p> <button>Github</button> <button>MCPEDL</button> <button>Simple Essentials</button> <button>Blossom Essentials</button></main>");function br(t){function r(_){window.location.href=`${_}`}var n=gr(),e=O(ut(n),2),l=ut(e),u=F(()=>r("https://discord.gg/T4CUhhcdzh")),o=O(e,6),i=F(()=>r("https://github.com/SimpleDevMCBE")),v=O(o,2),p=F(()=>r("https://mcpedl.com/user/amethystdev")),a=O(v,2),s=F(()=>r("https://simple.amethystdev.com")),c=O(a,2),h=F(()=>r("https://blossom.amethystdev.com"));q("click",l,function(..._){var f;(f=L(u))==null||f.apply(this,_)}),q("click",o,function(..._){var f;(f=L(i))==null||f.apply(this,_)}),q("click",v,function(..._){var f;(f=L(p))==null||f.apply(this,_)}),q("click",a,function(..._){var f;(f=L(s))==null||f.apply(this,_)}),q("click",c,function(..._){var f;(f=L(h))==null||f.apply(this,_)}),pr(t,n)}Er(br,{target:document.getElementById("app")});