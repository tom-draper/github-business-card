(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function O(){}function Ye(e){return e()}function Ge(){return Object.create(null)}function x(e){e.forEach(Ye)}function Ze(e){return typeof e=="function"}function Se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ue;function $e(e,t){return ue||(ue=document.createElement("a")),ue.href=t,e===ue.href}function nt(e){return Object.keys(e).length===0}function i(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function lt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function c(e){return document.createElement(e)}function F(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function z(e){return document.createTextNode(e)}function L(){return z(" ")}function He(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function r(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function st(e){return Array.from(e.childNodes)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ke(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}let ze;function X(e){ze=e}const W=[],Ke=[],de=[],Ve=[],rt=Promise.resolve();let Le=!1;function it(){Le||(Le=!0,rt.then(et))}function Ee(e){de.push(e)}const we=new Set;let fe=0;function et(){const e=ze;do{for(;fe<W.length;){const t=W[fe];fe++,X(t),at(t.$$)}for(X(null),W.length=0,fe=0;Ke.length;)Ke.pop()();for(let t=0;t<de.length;t+=1){const n=de[t];we.has(n)||(we.add(n),n())}de.length=0}while(W.length);for(;Ve.length;)Ve.pop()();Le=!1,we.clear(),X(e)}function at(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ee)}}const ge=new Set;let M;function ot(){M={r:0,c:[],p:M}}function ct(){M.r||x(M.c),M=M.p}function Y(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function he(e,t,n,l){if(e&&e.o){if(ge.has(e))return;ge.add(e),M.c.push(()=>{ge.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function tt(e){e&&e.c()}function Pe(e,t,n,l){const{fragment:s,after_update:a}=e.$$;s&&s.m(t,n),l||Ee(()=>{const u=e.$$.on_mount.map(Ye).filter(Ze);e.$$.on_destroy?e.$$.on_destroy.push(...u):x(u),e.$$.on_mount=[]}),a.forEach(Ee)}function Ae(e,t){const n=e.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(e,t){e.$$.dirty[0]===-1&&(W.push(e),it(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Be(e,t,n,l,s,a,u,m=[-1]){const h=ze;X(e);const f=e.$$={fragment:null,ctx:[],props:a,update:O,not_equal:s,bound:Ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:Ge(),dirty:m,skip_bound:!1,root:t.target||h.$$.root};u&&u(f.root);let k=!1;if(f.ctx=n?n(e,t.props||{},(o,B,...E)=>{const d=E.length?E[0]:B;return f.ctx&&s(f.ctx[o],f.ctx[o]=d)&&(!f.skip_bound&&f.bound[o]&&f.bound[o](d),k&&ut(e,o)),B}):[],f.update(),k=!0,x(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){const o=st(t.target);f.fragment&&f.fragment.l(o),o.forEach(T)}else f.fragment&&f.fragment.c();t.intro&&Y(e.$$.fragment),Pe(e,t.target,t.anchor,t.customElement),et()}X(h)}class je{$destroy(){Ae(this,1),this.$destroy=O}$on(t,n){if(!Ze(n))return O;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Je(e,t,n){const l=e.slice();return l[1]=t[n],l[3]=n,l}function Qe(e){let t,n,l=e[1][1]+"",s,a,u;return{c(){t=c("div"),n=c("div"),s=z(l),a=L(),r(n,"class","language-text svelte-11r9ong"),r(t,"class",u="language "+We(e[1][0])+" svelte-11r9ong"),ke(t,"flex",e[1][1])},m(m,h){G(m,t,h),i(t,n),i(n,s),i(t,a)},p(m,h){h&1&&l!==(l=m[1][1]+"")&&N(s,l),h&1&&u!==(u="language "+We(m[1][0])+" svelte-11r9ong")&&r(t,"class",u),h&1&&ke(t,"flex",m[1][1])},d(m){m&&T(t)}}}function ft(e){let t,n,l,s,a,u,m,h,f,k=e[0].user.name+"",o,B,E,d,v,b=e[0].user.login+"",y,_,A,p,w,D,Ce,Z,ee=e[0].stats.stars+"",ve,Ne,U,j,te,De,ne,le=e[0].stats.forks+"",_e,Me,I,se,H,C,re,ie=e[0].user.location+"",pe,Oe,R,K,ae=e[0].user.public_repos+"",me,Te,Ue,V,oe=e[0].stats.lines.toLocaleString("en-US")+"",ye,Ie,Re,J,qe,ce=new Date(e[0].user.created_at).toLocaleDateString("en-us",{year:"numeric",month:"long"})+"",be,Fe,Q,q=e[0].stats.languages,S=[];for(let g=0;g<q.length;g+=1)S[g]=Qe(Je(e,q,g));return{c(){t=c("div"),n=c("div"),l=c("div"),s=c("div"),a=c("img"),m=L(),h=c("div"),f=c("div"),o=z(k),B=L(),E=c("div"),d=c("span"),d.textContent="github.com/",v=c("span"),y=z(b),_=L(),A=c("div"),p=c("div"),w=F("svg"),D=F("path"),Ce=L(),Z=c("div"),ve=z(ee),Ne=L(),U=c("div"),j=F("svg"),te=F("path"),De=L(),ne=c("div"),_e=z(le),Me=L(),I=c("div"),se=c("div"),H=c("div"),C=F("svg"),re=F("path"),pe=z(ie),Oe=L(),R=c("div"),K=c("div"),me=z(ae),Te=z(" repos"),Ue=L(),V=c("div"),ye=z(oe),Ie=z(" lines"),Re=L(),J=c("div"),qe=z("Since "),be=z(ce),Fe=L(),Q=c("div");for(let g=0;g<S.length;g+=1)S[g].c();r(a,"class","profile-image svelte-11r9ong"),$e(a.src,u=e[0].user.avatar_url)||r(a,"src",u),r(a,"alt",""),r(s,"class","profile-image-container"),r(f,"class","name svelte-11r9ong"),r(d,"class","faint svelte-11r9ong"),ke(v,"font-weight","600"),r(E,"class","github-url svelte-11r9ong"),r(D,"fill-rule","evenodd"),r(D,"d","M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"),r(w,"aria-hidden","true"),r(w,"height","16"),r(w,"viewBox","0 0 16 16"),r(w,"version","1.1"),r(w,"width","16"),r(w,"data-view-component","true"),r(w,"class","octicon octicon-star mr-2 svelte-11r9ong"),r(Z,"class","stars-value"),r(p,"class","stars svelte-11r9ong"),r(te,"fill-rule","evenodd"),r(te,"d","M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"),r(j,"aria-hidden","true"),r(j,"height","16"),r(j,"viewBox","0 0 16 16"),r(j,"version","1.1"),r(j,"width","16"),r(j,"data-view-component","true"),r(j,"class","octicon octicon-repo-forked mr-2 svelte-11r9ong"),r(ne,"class","fork-value"),r(U,"class","forks svelte-11r9ong"),r(A,"class","stats svelte-11r9ong"),r(h,"class","name-url"),r(l,"class","name-profile svelte-11r9ong"),r(re,"fill-rule","evenodd"),r(re,"d","M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"),r(C,"class","octicon octicon-location svelte-11r9ong"),r(C,"viewBox","0 0 16 16"),r(C,"version","1.1"),r(C,"width","12"),r(C,"height","12"),r(C,"aria-hidden","true"),r(H,"class","location"),r(se,"class","location-date svelte-11r9ong"),r(K,"class","repo-count svelte-11r9ong"),r(V,"class","lines"),r(R,"class","repo-stats svelte-11r9ong"),r(I,"class","details svelte-11r9ong"),r(J,"class","since svelte-11r9ong"),r(n,"class","card-content svelte-11r9ong"),r(Q,"class","languages svelte-11r9ong"),r(t,"id","card"),r(t,"class","svelte-11r9ong")},m(g,P){G(g,t,P),i(t,n),i(n,l),i(l,s),i(s,a),i(l,m),i(l,h),i(h,f),i(f,o),i(h,B),i(h,E),i(E,d),i(E,v),i(v,y),i(h,_),i(h,A),i(A,p),i(p,w),i(w,D),i(p,Ce),i(p,Z),i(Z,ve),i(A,Ne),i(A,U),i(U,j),i(j,te),i(U,De),i(U,ne),i(ne,_e),i(n,Me),i(n,I),i(I,se),i(se,H),i(H,C),i(C,re),i(H,pe),i(I,Oe),i(I,R),i(R,K),i(K,me),i(K,Te),i(R,Ue),i(R,V),i(V,ye),i(V,Ie),i(n,Re),i(n,J),i(J,qe),i(J,be),i(t,Fe),i(t,Q);for(let $=0;$<S.length;$+=1)S[$].m(Q,null)},p(g,[P]){if(P&1&&!$e(a.src,u=g[0].user.avatar_url)&&r(a,"src",u),P&1&&k!==(k=g[0].user.name+"")&&N(o,k),P&1&&b!==(b=g[0].user.login+"")&&N(y,b),P&1&&ee!==(ee=g[0].stats.stars+"")&&N(ve,ee),P&1&&le!==(le=g[0].stats.forks+"")&&N(_e,le),P&1&&ie!==(ie=g[0].user.location+"")&&N(pe,ie),P&1&&ae!==(ae=g[0].user.public_repos+"")&&N(me,ae),P&1&&oe!==(oe=g[0].stats.lines.toLocaleString("en-US")+"")&&N(ye,oe),P&1&&ce!==(ce=new Date(g[0].user.created_at).toLocaleDateString("en-us",{year:"numeric",month:"long"})+"")&&N(be,ce),P&1){q=g[0].stats.languages;let $;for($=0;$<q.length;$+=1){const xe=Je(g,q,$);S[$]?S[$].p(xe,P):(S[$]=Qe(xe),S[$].c(),S[$].m(Q,null))}for(;$<S.length;$+=1)S[$].d(1);S.length=q.length}},i:O,o:O,d(g){g&&T(t),lt(S,g)}}}function We(e){return e.replace(" ","-").replace("+","Plus").replace("#","Sharp")}function dt(e,t,n){let{data:l}=t;return e.$$set=s=>{"data"in s&&n(0,l=s.data)},[l]}class gt extends je{constructor(t){super(),Be(this,t,dt,ft,Se,{data:0})}}function ht(e){let t,n;return{c(){t=c("img"),$e(t.src,n="github-logo.png")||r(t,"src",n),r(t,"alt",""),r(t,"class","svelte-u0vyts")},m(l,s){G(l,t,s)},d(l){l&&T(t)}}}function vt(e){let t;return{c(){t=c("span"),r(t,"class","loader svelte-u0vyts")},m(n,l){G(n,t,l)},d(n){n&&T(t)}}}function _t(e){let t;function n(a,u){return a[0]?vt:ht}let l=n(e),s=l(e);return{c(){t=c("div"),s.c(),r(t,"id","card"),r(t,"class","svelte-u0vyts")},m(a,u){G(a,t,u),s.m(t,null)},p(a,[u]){l!==(l=n(a))&&(s.d(1),s=l(a),s&&(s.c(),s.m(t,null)))},i:O,o:O,d(a){a&&T(t),s.d()}}}function pt(e,t,n){let{loading:l}=t;return e.$$set=s=>{"loading"in s&&n(0,l=s.loading)},[l]}class mt extends je{constructor(t){super(),Be(this,t,pt,_t,Se,{loading:0})}}function yt(e){let t,n;return t=new mt({props:{loading:e[1]}}),{c(){tt(t.$$.fragment)},m(l,s){Pe(t,l,s),n=!0},p(l,s){const a={};s&2&&(a.loading=l[1]),t.$set(a)},i(l){n||(Y(t.$$.fragment,l),n=!0)},o(l){he(t.$$.fragment,l),n=!1},d(l){Ae(t,l)}}}function bt(e){let t,n;return t=new gt({props:{data:e[2]}}),{c(){tt(t.$$.fragment)},m(l,s){Pe(t,l,s),n=!0},p(l,s){const a={};s&4&&(a.data=l[2]),t.$set(a)},i(l){n||(Y(t.$$.fragment,l),n=!0)},o(l){he(t.$$.fragment,l),n=!1},d(l){Ae(t,l)}}}function wt(e){let t,n,l,s,a,u,m,h,f,k,o,B,E,d,v,b;const y=[bt,yt],_=[];function A(p,w){return p[2].stats.languages.length!=0?0:1}return l=A(e),s=_[l]=y[l](e),{c(){t=c("main"),n=c("div"),s.c(),a=L(),u=c("div"),m=c("input"),h=L(),f=c("button"),f.textContent="Submit",k=L(),o=c("div"),B=z("Error: GitHub API. Try again in an hour."),r(n,"class","card-container"),r(m,"placeholder","GitHub username"),r(m,"id","username"),r(m,"type","text"),r(m,"class","svelte-yzo60l"),r(f,"id","button"),r(f,"class","svelte-yzo60l"),r(u,"class","account-entry svelte-yzo60l"),r(o,"id","error"),r(o,"style",E=e[0]?"visibility: visible;":"visibility: hidden;")},m(p,w){G(p,t,w),i(t,n),_[l].m(n,null),i(t,a),i(t,u),i(u,m),i(u,h),i(u,f),i(t,k),i(t,o),i(o,B),d=!0,v||(b=[He(window,"keydown",Et),He(f,"click",e[4])],v=!0)},p(p,[w]){let D=l;l=A(p),l===D?_[l].p(p,w):(ot(),he(_[D],1,1,()=>{_[D]=null}),ct(),s=_[l],s?s.p(p,w):(s=_[l]=y[l](p),s.c()),Y(s,1),s.m(n,null)),(!d||w&1&&E!==(E=p[0]?"visibility: visible;":"visibility: hidden;"))&&r(o,"style",E)},i(p){d||(Y(s),d=!0)},o(p){he(s),d=!1},d(p){p&&T(t),_[l].d(),v=!1,x(b)}}}function $t(){return document.getElementById("username").value}function kt(e){let t=[];for(let n in e)t.push([n,e[n]]);return t.sort(function(n,l){return l[1]-n[1]}),t}function Lt(e){let t=0;for(let a in e)t+=e[a];return Math.round(t/(4*35))}async function Xe(e){await Promise.all(e),e.length=0}function Et(e){e.key==="Enter"&&(e.preventDefault(),document.getElementById("button").click())}function St(e,t,n){function l(){n(1,k=!1),n(0,f=!0)}function s(d){fetch(`https://api.github.com/users/${d}`).then(v=>{v.status==200?v.json().then(b=>{n(2,o.user=b,o)}):l()})}async function a(d,v){await fetch(`https://api.github.com/users/${d}/repos?per_page=${v}`).then(async b=>{b.status==200?await b.json().then(y=>{n(2,o.repos=y,o)}):l()})}async function u(d,v){await fetch(d).then(async b=>{b.status==200?await b.json().then(y=>{console.log(y);for(let _ in y)_ in v||(v[_]=0),v[_]+=y[_]}):l()})}async function m(d,v,b=5){let y=[];for(let _=0;_<o.repos.length;_++)console.log(`Fetching ${o.repos[_].name} repo stats...`),y.push(fetch(`https://api.github.com/repos/${v}/${o.repos[_].name}`).then(async A=>{A.status==200?await A.json().then(async p=>{console.log(`Setting ${o.repos[_].name} repo stats...`),n(2,o.stats.stars+=p.stargazers_count,o),n(2,o.stats.forks+=p.forks,o),await u(o.repos[_].languages_url,d)}):l()})),y.length==b&&await Xe(y);y.length>0&&await Xe(y)}async function h(d){let v={};await m(v,d),n(2,o.stats.languages=kt(v),o),n(2,o.stats.lines=Lt(v),o)}let f=!1,k=!1,o={user:void 0,repos:void 0,stats:{stars:0,forks:0,lines:0,languages:[]}};async function B(d){n(1,k=!0),s(d),await a(d,500),await h(d),console.log(o),setTimeout(()=>{n(1,k=!1)},1e3)}return[f,k,o,B,()=>{B($t())}]}class zt extends je{constructor(t){super(),Be(this,t,St,wt,Se,{})}}new zt({target:document.getElementById("app")});
