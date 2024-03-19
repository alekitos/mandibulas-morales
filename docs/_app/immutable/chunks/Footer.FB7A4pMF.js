import{t as R,S as C,i as D,b as q,c as W,a as X,m as Y,d as Z}from"./index.jOx7AaNw.js";import{E as ee,s as P,b as B,f as g,h as $,j as b,d as u,r as v,i as I,u as J,g as K,e as Q,C as te,n as k,t as z,a as j,k as F,c as O,l as h}from"./scheduler.Ku3LWE4j.js";import{b as T}from"./paths.BmY9Xi_v.js";function de(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function me(n,e){n.d(1),e.delete(n.key)}function pe(n,e,a,l,t,s,i,m,p,M,d,_){let o=n.length,f=s.length,r=o;const w={};for(;r--;)w[n[r].key]=r;const S=[],A=new Map,H=new Map,x=[];for(r=f;r--;){const c=_(t,s,r),E=a(c);let y=i.get(E);y?l&&x.push(()=>y.p(c,e)):(y=M(E,c),y.c()),A.set(E,S[r]=y),E in w&&H.set(E,Math.abs(r-w[E]))}const G=new Set,U=new Set;function V(c){R(c,1),c.m(m,d),i.set(c.key,c),d=c.first,f--}for(;o&&f;){const c=S[f-1],E=n[o-1],y=c.key,N=E.key;c===E?(d=c.first,o--,f--):A.has(N)?!i.has(y)||G.has(y)?V(c):U.has(N)?o--:H.get(y)>H.get(N)?(U.add(y),V(c)):(G.add(N),o--):(p(E,i),o--)}for(;o--;){const c=n[o];A.has(c.key)||p(c,i)}for(;f;)V(S[f-1]);return ee(x),S}function se(n){let e,a;const l=n[1].default,t=B(l,n,n[0],null);return{c(){e=g("section"),t&&t.c(),this.h()},l(s){e=$(s,"SECTION",{class:!0});var i=b(e);t&&t.l(i),i.forEach(u),this.h()},h(){v(e,"class","general")},m(s,i){I(s,e,i),t&&t.m(e,null),a=!0},p(s,[i]){t&&t.p&&(!a||i&1)&&J(t,l,s,s[0],a?Q(l,s[0],i,null):K(s[0]),null)},i(s){a||(R(t,s),a=!0)},o(s){q(t,s),a=!1},d(s){s&&u(e),t&&t.d(s)}}}function ae(n,e,a){let{$$slots:l={},$$scope:t}=e;return n.$$set=s=>{"$$scope"in s&&a(0,t=s.$$scope)},[t,l]}class _e extends C{constructor(e){super(),D(this,e,ae,se,P,{})}}function le(n){let e,a=`<ul class="menu-list no-select svelte-sibp3f"><li class="svelte-sibp3f"><a class="silent-link" href="${T}">Portada</a></li> <li class="svelte-sibp3f"><a class="silent-link" href="${T}/pages#main-title">Explorar</a></li> <li class="svelte-sibp3f"><a class="silent-link" href="${T}/tour#main-title">Tour</a></li> <li class="svelte-sibp3f"><a class="silent-link" href="${T}/metadata#main-title">Metadatos</a></li></ul>`;return{c(){e=g("nav"),e.innerHTML=a},l(l){e=$(l,"NAV",{"data-svelte-h":!0}),te(e)!=="svelte-un2p5d"&&(e.innerHTML=a)},m(l,t){I(l,e,t)},p:k,i:k,o:k,d(l){l&&u(e)}}}class ne extends C{constructor(e){super(),D(this,e,null,le,P,{})}}const L={lang:"es",base:"https://srsergiorodriguez.github.io",baseurl:"/serie-mini",title:"Serie Mini",subtitle:"Una plataforma para mini colecciones digitales",credits:"Por Sergio Rodríguez Gómez. Hecho con Serie Mini",copyright:"Todos los derechos reservados, 2024",pages:{iiifViewer:!0,metadataToShow:[{key:"label",label:"Label",type:"text"},{key:"autor",label:"Autor",type:"text"},{key:"fecha",label:"Fecha",type:"text"}],metadataToIndex:["label","autor","fecha"]}};function ie(n){let e,a,l,t,s=L.title+"",i,m,p,M=L.subtitle+"",d,_,o,f;return o=new ne({}),{c(){e=g("header"),a=g("div"),l=g("h1"),t=g("a"),i=z(s),m=j(),p=g("span"),d=z(M),_=j(),W(o.$$.fragment),this.h()},l(r){e=$(r,"HEADER",{class:!0});var w=b(e);a=$(w,"DIV",{});var S=b(a);l=$(S,"H1",{class:!0,id:!0});var A=b(l);t=$(A,"A",{href:!0,class:!0});var H=b(t);i=F(H,s),H.forEach(u),A.forEach(u),m=O(S),p=$(S,"SPAN",{class:!0});var x=b(p);d=F(x,M),x.forEach(u),S.forEach(u),_=O(w),X(o.$$.fragment,w),w.forEach(u),this.h()},h(){v(t,"href",T),v(t,"class","svelte-omuwgc"),v(l,"class","main-title svelte-omuwgc"),v(l,"id","main-title"),v(p,"class","main-subtitle"),v(e,"class","main-header svelte-omuwgc")},m(r,w){I(r,e,w),h(e,a),h(a,l),h(l,t),h(t,i),h(a,m),h(a,p),h(p,d),h(e,_),Y(o,e,null),f=!0},p:k,i(r){f||(R(o.$$.fragment,r),f=!0)},o(r){q(o.$$.fragment,r),f=!1},d(r){r&&u(e),Z(o)}}}class ve extends C{constructor(e){super(),D(this,e,null,ie,P,{})}}function re(n){let e,a;const l=n[1].default,t=B(l,n,n[0],null);return{c(){e=g("section"),t&&t.c(),this.h()},l(s){e=$(s,"SECTION",{class:!0});var i=b(e);t&&t.l(i),i.forEach(u),this.h()},h(){v(e,"class","content-slot svelte-p67v15")},m(s,i){I(s,e,i),t&&t.m(e,null),a=!0},p(s,[i]){t&&t.p&&(!a||i&1)&&J(t,l,s,s[0],a?Q(l,s[0],i,null):K(s[0]),null)},i(s){a||(R(t,s),a=!0)},o(s){q(t,s),a=!1},d(s){s&&u(e),t&&t.d(s)}}}function oe(n,e,a){let{$$slots:l={},$$scope:t}=e;return n.$$set=s=>{"$$scope"in s&&a(0,t=s.$$scope)},[t,l]}class ge extends C{constructor(e){super(),D(this,e,oe,re,P,{})}}function ce(n){let e,a,l,t=L.credits+"",s,i,m,p=L.copyright+"",M;return{c(){e=g("header"),a=g("a"),l=g("p"),s=z(t),i=j(),m=g("p"),M=z(p),this.h()},l(d){e=$(d,"HEADER",{class:!0});var _=b(e);a=$(_,"A",{href:!0});var o=b(a);l=$(o,"P",{class:!0});var f=b(l);s=F(f,t),f.forEach(u),o.forEach(u),i=O(_),m=$(_,"P",{class:!0});var r=b(m);M=F(r,p),r.forEach(u),_.forEach(u),this.h()},h(){v(l,"class","main-title no-select"),v(a,"href",T+"/credits"),v(m,"class","main-title no-select"),v(e,"class","main-footer svelte-jm9aa3")},m(d,_){I(d,e,_),h(e,a),h(a,l),h(l,s),h(e,i),h(e,m),h(m,M)},p:k,i:k,o:k,d(d){d&&u(e)}}}class $e extends C{constructor(e){super(),D(this,e,null,ce,P,{})}}export{ge as C,_e as D,$e as F,ve as H,L as c,me as d,de as e,pe as u};
