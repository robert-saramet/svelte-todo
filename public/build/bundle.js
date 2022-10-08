var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let g;function $(t){g=t}function b(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const y=[],v=[],k=[],_=[],x=Promise.resolve();let w=!1;function E(t){k.push(t)}const S=new Set;let N=0;function j(){const t=g;do{for(;N<y.length;){const t=y[N];N++,$(t),A(t.$$)}for($(null),y.length=0,N=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];S.has(e)||(S.add(e),e())}k.length=0}while(y.length);for(;_.length;)_.pop()();w=!1,S.clear(),$(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;function O(t,e){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,x.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(r,l,s,i,a,f,d,p=[-1]){const h=g;$(r);const m=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(h?h.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:l.target||h.$$.root};d&&d(m.root);let b=!1;if(m.ctx=s?s(r,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),b&&O(r,t)),e})):[],m.update(),b=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();l.intro&&((y=r.$$.fragment)&&y.i&&(L.delete(y),y.i(v))),function(t,n,r,l){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s&&s.m(n,r),l||E((()=>{const n=u.map(e).filter(c);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(E)}(r,l.target,l.anchor,l.customElement),j()}var y,v;$(h)}class C{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(t,e,n){const o=t.slice();return o[12]=e[n],o[14]=n,o}function I(t){let e,n,o,c,r,m,g=t[12].name+"";function $(){return t[9](t[14])}return{c(){e=i("button"),e.innerHTML='<i class="fa fa-trash"></i>',n=f(),o=i("span"),c=a(g),p(e,"class","icon-btn delete-btn svelte-1p9pfy0"),p(o,"class","item-checked svelte-1p9pfy0")},m(t,u){s(t,e,u),s(t,n,u),s(t,o,u),l(o,c),r||(m=d(e,"click",$),r=!0)},p(e,n){t=e,1&n&&g!==(g=t[12].name+"")&&h(c,g)},d(t){t&&u(e),t&&u(n),t&&u(o),r=!1,m()}}}function M(t){let e,n,o,c,r,l=t[12].name+"";function m(){return t[8](t[14])}return{c(){e=i("button"),e.innerHTML='<i class="fa fa-check"></i>',n=f(),o=a(l),p(e,"class","icon-btn check-btn svelte-1p9pfy0")},m(t,l){s(t,e,l),s(t,n,l),s(t,o,l),c||(r=d(e,"click",m),c=!0)},p(e,n){t=e,1&n&&l!==(l=t[12].name+"")&&h(o,l)},d(t){t&&u(e),t&&u(n),t&&u(o),c=!1,r()}}}function H(t){let e,n;function o(t,e){return t[12].checked?I:M}let c=o(t),r=c(t);return{c(){e=i("li"),r.c(),n=f(),p(e,"class","svelte-1p9pfy0")},m(t,o){s(t,e,o),r.m(e,null),l(e,n)},p(t,l){c===(c=o(t))&&r?r.p(t,l):(r.d(1),r=c(t),r&&(r.c(),r.m(e,n)))},d(t){t&&u(e),r.d()}}}function J(e){let n,c,r,g,$,b,y,v,k,_,x,w,E,S,N,j,A,L,O,T,C,I,M,J=(void 0===e[6][e[2]]?e[2]:e[6][e[2]])+"",z=1==e[2]?"task":"tasks",B=e[0],P=[];for(let t=0;t<B.length;t+=1)P[t]=H(D(e,B,t));return{c(){n=i("link"),c=f(),r=i("h1"),r.textContent=`${q}`,g=f(),$=i("p"),b=a("You have "),y=i("strong"),v=a(J),k=f(),_=a(z),x=a(" left"),w=f(),E=i("ul");for(let t=0;t<P.length;t+=1)P[t].c();S=f(),N=i("form"),j=i("input"),A=i("br"),L=f(),O=i("button"),T=a("Add"),p(n,"rel","stylesheet"),p(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),p(y,"class","svelte-1p9pfy0"),p($,"class","svelte-1p9pfy0"),p(E,"class","svelte-1p9pfy0"),p(j,"id","task-input"),p(j,"placeholder","New task"),p(j,"class","svelte-1p9pfy0"),p(O,"class",C="add-btn "+(""==e[1]?"add-btn-disabled":"")+" svelte-1p9pfy0"),p(N,"autocomplete","off")},m(t,o){s(t,n,o),s(t,c,o),s(t,r,o),s(t,g,o),s(t,$,o),l($,b),l($,y),l(y,v),l($,k),l($,_),l($,x),s(t,w,o),s(t,E,o);for(let t=0;t<P.length;t+=1)P[t].m(E,null);var u;s(t,S,o),s(t,N,o),l(N,j),m(j,e[1]),l(N,A),l(N,L),l(N,O),l(O,T),I||(M=[d(j,"input",e[10]),d(O,"click",e[3]),d(N,"submit",(u=e[7],function(t){return t.preventDefault(),u.call(this,t)}))],I=!0)},p(t,[e]){if(4&e&&J!==(J=(void 0===t[6][t[2]]?t[2]:t[6][t[2]])+"")&&h(v,J),4&e&&z!==(z=1==t[2]?"task":"tasks")&&h(_,z),49&e){let n;for(B=t[0],n=0;n<B.length;n+=1){const o=D(t,B,n);P[n]?P[n].p(o,e):(P[n]=H(o),P[n].c(),P[n].m(E,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=B.length}2&e&&j.value!==t[1]&&m(j,t[1]),2&e&&C!==(C="add-btn "+(""==t[1]?"add-btn-disabled":"")+" svelte-1p9pfy0")&&p(O,"class",C)},i:t,o:t,d(t){t&&u(n),t&&u(c),t&&u(r),t&&u(g),t&&u($),t&&u(w),t&&u(E),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(P,t),t&&u(S),t&&u(N),I=!1,o(M)}}}let q="Svelte To-Do List";function z(t,e,n){let o,c=[];if(localStorage.getItem("notes")){let t=localStorage.getItem("notes");c=JSON.parse(t)}else c[0]={name:"Don't be shy, add some tasks",checked:!1},r();function r(){let t=JSON.stringify(c);localStorage.setItem("notes",t)}let l="";function s(t){c.splice(t,1),n(0,c),r()}function u(t){n(0,c[t].checked=!0,c),r()}return t.$$.update=()=>{1&t.$$.dirty&&n(2,o=c.length)},[c,l,o,function(){let t={name:l,checked:!1};n(0,c=[...c,t]),r(),n(1,l="")},s,u,["zero","one","two","three","four","five","six","seven","eight","nine","ten"],function(e){b.call(this,t,e)},t=>u(t),t=>s(t),function(){l=this.value,n(1,l)}]}return new class extends C{constructor(t){super(),T(this,t,z,J,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
