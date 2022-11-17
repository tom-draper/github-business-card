(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function M(){}function Xe(e){return e()}function Ge(){return Object.create(null)}function G(e){e.forEach(Xe)}function Ye(e){return typeof e=="function"}function Se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let fe;function ke(e,t){return fe||(fe=document.createElement("a")),fe.href=t,e===fe.href}function et(e){return Object.keys(e).length===0}function i(e,t){e.appendChild(t)}function H(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function tt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function F(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function j(e){return document.createTextNode(e)}function L(){return j(" ")}function He(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function r(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function nt(e){return Array.from(e.childNodes)}function q(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}let Pe;function Z(e){Pe=e}const Y=[],Ke=[],ge=[],Ve=[],lt=Promise.resolve();let Le=!1;function st(){Le||(Le=!0,lt.then(Ze))}function Ee(e){ge.push(e)}const $e=new Set;let de=0;function Ze(){const e=Pe;do{for(;de<Y.length;){const t=Y[de];de++,Z(t),rt(t.$$)}for(Z(null),Y.length=0,de=0;Ke.length;)Ke.pop()();for(let t=0;t<ge.length;t+=1){const n=ge[t];$e.has(n)||($e.add(n),n())}ge.length=0}while(Y.length);for(;Ve.length;)Ve.pop()();Le=!1,$e.clear(),Z(e)}function rt(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ee)}}const he=new Set;let D;function it(){D={r:0,c:[],p:D}}function at(){D.r||G(D.c),D=D.p}function ee(e,t){e&&e.i&&(he.delete(e),e.i(t))}function pe(e,t,n,l){if(e&&e.o){if(he.has(e))return;he.add(e),D.c.push(()=>{he.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function xe(e){e&&e.c()}function ze(e,t,n,l){const{fragment:s,after_update:a}=e.$$;s&&s.m(t,n),l||Ee(()=>{const d=e.$$.on_mount.map(Xe).filter(Ye);e.$$.on_destroy?e.$$.on_destroy.push(...d):G(d),e.$$.on_mount=[]}),a.forEach(Ee)}function je(e,t){const n=e.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,t){e.$$.dirty[0]===-1&&(Y.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ae(e,t,n,l,s,a,d,y=[-1]){const g=Pe;Z(e);const c=e.$$={fragment:null,ctx:[],props:a,update:M,not_equal:s,bound:Ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:Ge(),dirty:y,skip_bound:!1,root:t.target||g.$$.root};d&&d(c.root);let S=!1;if(c.ctx=n?n(e,t.props||{},(h,P,...o)=>{const $=o.length?o[0]:P;return c.ctx&&s(c.ctx[h],c.ctx[h]=$)&&(!c.skip_bound&&c.bound[h]&&c.bound[h]($),S&&ot(e,h)),P}):[],c.update(),S=!0,G(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const h=nt(t.target);c.fragment&&c.fragment.l(h),h.forEach(O)}else c.fragment&&c.fragment.c();t.intro&&ee(e.$$.fragment),ze(e,t.target,t.anchor,t.customElement),Ze()}Z(g)}class Be{$destroy(){je(this,1),this.$destroy=M}$on(t,n){if(!Ye(n))return M;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!et(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Je(e,t,n){const l=e.slice();return l[1]=t[n],l[3]=n,l}function Qe(e){let t,n,l;return{c(){t=u("div"),r(t,"class",n="language "+We(e[1][0])+" svelte-7w8tuy"),x(t,"flex",e[1][1]),r(t,"title",l=e[1][0])},m(s,a){H(s,t,a)},p(s,a){a&1&&n!==(n="language "+We(s[1][0])+" svelte-7w8tuy")&&r(t,"class",n),a&1&&x(t,"flex",s[1][1]),a&1&&l!==(l=s[1][0])&&r(t,"title",l)},d(s){s&&O(t)}}}function ct(e){let t,n,l,s,a,d,y,g,c,S=e[0].user.name+"",h,P,o,$,C,v=e[0].user.login+"",w,b,_,f,m,A,K,te,ne=e[0].stats.stars+"",ve,Ce,I,B,le,Ne,se,re=e[0].stats.forks+"",_e,qe,U,V,N,ie,ae=e[0].user.location+"",me,De,R,J,oe=e[0].user.public_repos+"",ye,Me,Oe,Q,ce=e[0].stats.lines.toLocaleString("en-US")+"",we,Ie,Ue,W,Re,ue=new Date(e[0].user.created_at).toLocaleDateString("en-us",{year:"numeric",month:"long"})+"",be,Te,X,T=e[0].stats.languages,E=[];for(let p=0;p<T.length;p+=1)E[p]=Qe(Je(e,T,p));return{c(){t=u("div"),n=u("div"),l=u("div"),s=u("div"),a=u("img"),y=L(),g=u("div"),c=u("div"),h=j(S),P=L(),o=u("div"),$=u("span"),$.textContent="github.com/",C=u("span"),w=j(v),b=L(),_=u("div"),f=u("div"),m=F("svg"),A=F("path"),K=L(),te=u("div"),ve=j(ne),Ce=L(),I=u("div"),B=F("svg"),le=F("path"),Ne=L(),se=u("div"),_e=j(re),qe=L(),U=u("div"),V=u("div"),N=F("svg"),ie=F("path"),me=j(ae),De=L(),R=u("div"),J=u("div"),ye=j(oe),Me=j(" repos"),Oe=L(),Q=u("div"),we=j(ce),Ie=j(" lines"),Ue=L(),W=u("div"),Re=j("Since "),be=j(ue),Te=L(),X=u("div");for(let p=0;p<E.length;p+=1)E[p].c();r(a,"class","profile-image svelte-7w8tuy"),ke(a.src,d=e[0].user.avatar_url)||r(a,"src",d),r(a,"alt",""),r(s,"class","profile-image-container"),r(c,"class","name svelte-7w8tuy"),r($,"class","faint svelte-7w8tuy"),x(C,"font-weight","600"),r(o,"class","github-url svelte-7w8tuy"),r(A,"fill-rule","evenodd"),r(A,"d","M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"),r(m,"aria-hidden","true"),r(m,"height","16"),r(m,"viewBox","0 0 16 16"),r(m,"version","1.1"),r(m,"width","16"),r(m,"data-view-component","true"),r(m,"class","octicon octicon-star mr-2 svelte-7w8tuy"),r(te,"class","stars-value"),r(f,"class","stars svelte-7w8tuy"),r(le,"fill-rule","evenodd"),r(le,"d","M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"),r(B,"aria-hidden","true"),r(B,"height","16"),r(B,"viewBox","0 0 16 16"),r(B,"version","1.1"),r(B,"width","16"),r(B,"data-view-component","true"),r(B,"class","octicon octicon-repo-forked mr-2 svelte-7w8tuy"),r(se,"class","fork-value"),r(I,"class","forks svelte-7w8tuy"),r(_,"class","stats svelte-7w8tuy"),r(g,"class","name-url"),r(l,"class","name-profile svelte-7w8tuy"),r(ie,"fill-rule","evenodd"),r(ie,"d","M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"),r(N,"class","octicon octicon-location svelte-7w8tuy"),r(N,"viewBox","0 0 16 16"),r(N,"version","1.1"),r(N,"width","12"),r(N,"height","12"),r(N,"aria-hidden","true"),r(V,"class","location"),r(J,"class","repo-count svelte-7w8tuy"),r(Q,"class","lines"),r(R,"class","repo-stats svelte-7w8tuy"),r(U,"class","details svelte-7w8tuy"),r(W,"class","since svelte-7w8tuy"),r(n,"class","card-content svelte-7w8tuy"),r(X,"class","languages svelte-7w8tuy"),r(t,"id","card"),r(t,"class","svelte-7w8tuy")},m(p,z){H(p,t,z),i(t,n),i(n,l),i(l,s),i(s,a),i(l,y),i(l,g),i(g,c),i(c,h),i(g,P),i(g,o),i(o,$),i(o,C),i(C,w),i(g,b),i(g,_),i(_,f),i(f,m),i(m,A),i(f,K),i(f,te),i(te,ve),i(_,Ce),i(_,I),i(I,B),i(B,le),i(I,Ne),i(I,se),i(se,_e),i(n,qe),i(n,U),i(U,V),i(V,N),i(N,ie),i(V,me),i(U,De),i(U,R),i(R,J),i(J,ye),i(J,Me),i(R,Oe),i(R,Q),i(Q,we),i(Q,Ie),i(n,Ue),i(n,W),i(W,Re),i(W,be),i(t,Te),i(t,X);for(let k=0;k<E.length;k+=1)E[k].m(X,null)},p(p,[z]){if(z&1&&!ke(a.src,d=p[0].user.avatar_url)&&r(a,"src",d),z&1&&S!==(S=p[0].user.name+"")&&q(h,S),z&1&&v!==(v=p[0].user.login+"")&&q(w,v),z&1&&ne!==(ne=p[0].stats.stars+"")&&q(ve,ne),z&1&&re!==(re=p[0].stats.forks+"")&&q(_e,re),z&1&&ae!==(ae=p[0].user.location+"")&&q(me,ae),z&1&&oe!==(oe=p[0].user.public_repos+"")&&q(ye,oe),z&1&&ce!==(ce=p[0].stats.lines.toLocaleString("en-US")+"")&&q(we,ce),z&1&&ue!==(ue=new Date(p[0].user.created_at).toLocaleDateString("en-us",{year:"numeric",month:"long"})+"")&&q(be,ue),z&1){T=p[0].stats.languages;let k;for(k=0;k<T.length;k+=1){const Fe=Je(p,T,k);E[k]?E[k].p(Fe,z):(E[k]=Qe(Fe),E[k].c(),E[k].m(X,null))}for(;k<E.length;k+=1)E[k].d(1);E.length=T.length}},i:M,o:M,d(p){p&&O(t),tt(E,p)}}}function We(e){return e.replace(" ","-").replace("+","Plus").replace("#","Sharp")}function ut(e,t,n){let{data:l}=t;return e.$$set=s=>{"data"in s&&n(0,l=s.data)},[l]}class ft extends Be{constructor(t){super(),Ae(this,t,ut,ct,Se,{data:0})}}function dt(e){let t,n;return{c(){t=u("img"),ke(t.src,n="github-logo.png")||r(t,"src",n),r(t,"alt",""),r(t,"class","svelte-1parntd")},m(l,s){H(l,t,s)},d(l){l&&O(t)}}}function gt(e){let t;return{c(){t=u("span"),r(t,"class","loader svelte-1parntd")},m(n,l){H(n,t,l)},d(n){n&&O(t)}}}function ht(e){let t,n,l,s;function a(g,c){return g[0]?gt:dt}let d=a(e),y=d(e);return{c(){t=u("div"),y.c(),n=L(),l=u("div"),s=u("div"),r(s,"class","progress svelte-1parntd"),x(s,"width",e[1]+"%"),r(l,"class","loading-bar svelte-1parntd"),r(t,"id","card"),r(t,"class","svelte-1parntd")},m(g,c){H(g,t,c),y.m(t,null),i(t,n),i(t,l),i(l,s)},p(g,[c]){d!==(d=a(g))&&(y.d(1),y=d(g),y&&(y.c(),y.m(t,n))),c&2&&x(s,"width",g[1]+"%")},i:M,o:M,d(g){g&&O(t),y.d()}}}function pt(e,t,n){let{loading:l,progress:s}=t;return e.$$set=a=>{"loading"in a&&n(0,l=a.loading),"progress"in a&&n(1,s=a.progress)},[l,s]}class vt extends Be{constructor(t){super(),Ae(this,t,pt,ht,Se,{loading:0,progress:1})}}function _t(e){let t,n;return t=new vt({props:{loading:e[1],progress:e[2]}}),{c(){xe(t.$$.fragment)},m(l,s){ze(t,l,s),n=!0},p(l,s){const a={};s&2&&(a.loading=l[1]),s&4&&(a.progress=l[2]),t.$set(a)},i(l){n||(ee(t.$$.fragment,l),n=!0)},o(l){pe(t.$$.fragment,l),n=!1},d(l){je(t,l)}}}function mt(e){let t,n;return t=new ft({props:{data:e[3]}}),{c(){xe(t.$$.fragment)},m(l,s){ze(t,l,s),n=!0},p(l,s){const a={};s&8&&(a.data=l[3]),t.$set(a)},i(l){n||(ee(t.$$.fragment,l),n=!0)},o(l){pe(t.$$.fragment,l),n=!1},d(l){je(t,l)}}}function yt(e){let t,n,l,s,a,d,y,g,c,S,h,P,o,$,C,v;const w=[mt,_t],b=[];function _(f,m){return f[3].stats.languages.length!=0?0:1}return l=_(e),s=b[l]=w[l](e),{c(){t=u("main"),n=u("div"),s.c(),a=L(),d=u("div"),y=u("input"),g=L(),c=u("button"),c.textContent="Submit",S=L(),h=u("div"),P=j("Error: GitHub API rate limit exceeded for your IP address. Retry in an hour."),r(n,"class","card-container"),r(y,"placeholder","GitHub username"),r(y,"id","username"),r(y,"type","text"),r(y,"class","svelte-1jqpz6s"),r(c,"id","button"),r(c,"class","svelte-1jqpz6s"),r(d,"class","account-entry svelte-1jqpz6s"),r(h,"id","error"),r(h,"style",o=e[0]?"visibility: visible;":"visibility: hidden;"),r(h,"class","svelte-1jqpz6s")},m(f,m){H(f,t,m),i(t,n),b[l].m(n,null),i(t,a),i(t,d),i(d,y),i(d,g),i(d,c),i(t,S),i(t,h),i(h,P),$=!0,C||(v=[He(window,"keydown",kt),He(c,"click",e[5])],C=!0)},p(f,[m]){let A=l;l=_(f),l===A?b[l].p(f,m):(it(),pe(b[A],1,1,()=>{b[A]=null}),at(),s=b[l],s?s.p(f,m):(s=b[l]=w[l](f),s.c()),ee(s,1),s.m(n,null)),(!$||m&1&&o!==(o=f[0]?"visibility: visible;":"visibility: hidden;"))&&r(h,"style",o)},i(f){$||(ee(s),$=!0)},o(f){pe(s),$=!1},d(f){f&&O(t),b[l].d(),C=!1,G(v)}}}function wt(){return document.getElementById("username").value}function bt(e){let t=[];for(let n in e)t.push([n,e[n]]);return t.sort(function(n,l){return l[1]-n[1]}),t}function $t(e){let t=0;for(let a in e)t+=e[a];return Math.round(t/(4*35))}function kt(e){e.key==="Enter"&&(e.preventDefault(),document.getElementById("button").click())}function Lt(e,t,n){function l(){n(1,h=!1),n(0,S=!0)}function s(v){console.log(v),o.repos==null?n(2,P=0):n(2,P=(v/o.repos.length-1)*100),console.log(P)}function a(v){fetch(`https://api.github.com/users/${v}`).then(w=>{w.status==200?w.json().then(b=>{n(3,o.user=b,o)}):l()})}async function d(v,w){await fetch(`https://api.github.com/users/${v}/repos?per_page=${w}`).then(async b=>{b.status==200?await b.json().then(_=>{n(3,o.repos=_,o)}):l()})}async function y(v,w){await fetch(v).then(async b=>{b.status==200?await b.json().then(_=>{console.log(_);for(let f in _)f in w||(w[f]=0),w[f]+=_[f]}):l()})}async function g(v,w,b=10){let _=[];for(let f=0;f<o.repos.length;f++){const m=f;console.log(m,o.repos[m]),console.log(`Fetching ${o.repos[m].name} repo stats...`),_.push(fetch(`https://api.github.com/repos/${w}/${o.repos[m].name}`).then(async A=>{A.status==200?await A.json().then(async K=>{console.log(`Setting ${o.repos[m].name} repo stats...`),n(3,o.stats.stars+=K.stargazers_count,o),n(3,o.stats.forks+=K.forks,o),await y(o.repos[m].languages_url,v)}):l()})),_.length==b&&(console.log(_),await Promise.all(_),_=[],s(f))}_.length>0&&(await Promise.all(_),_=[],s(o.repos.length-1))}async function c(v){let w={};await g(w,v),n(3,o.stats.languages=bt(w),o),n(3,o.stats.lines=$t(w),o)}let S=!1,h=!1,P=0,o={user:void 0,repos:void 0,stats:{stars:0,forks:0,lines:0,languages:[]}};async function $(v){n(1,h=!0),a(v),await d(v,500),await c(v),console.log(o),setTimeout(()=>{n(1,h=!1)},1e3)}return[S,h,P,o,$,()=>{$(wt())}]}class Et extends Be{constructor(t){super(),Ae(this,t,Lt,yt,Se,{})}}new Et({target:document.getElementById("app")});
