(function(){"use strict";var e={3082:function(e,n,t){var r=t(2432),o=t(6185),i=t(2105),l=t(1172);const u=()=>{const e=(0,i.KR)("light"),n=(0,o.EW)((()=>"dark"===e.value)),t=()=>{e.value="light"===e.value?"dark":"light",r(e.value)},r=e=>{document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e),localStorage.setItem("theme",e)};return(0,o.sV)((()=>{const n=localStorage.getItem("theme");if(n)e.value=n;else{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;e.value=n?"dark":"light"}r(e.value)})),{currentTheme:e,isDarkMode:n,toggleTheme:t}},a={class:"nav__links"};var s=(0,o.pM)({__name:"Nav",setup(e){const{isDarkMode:n,toggleTheme:t}=u();return(e,r)=>{const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",null,[(0,o.Lk)("nav",null,[(0,o.Lk)("div",a,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/"},{default:(0,o.k6)((()=>r[1]||(r[1]=[(0,o.Lk)("i",{class:"pi pi-home"},null,-1),(0,o.eW)(" Index")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/work"},{default:(0,o.k6)((()=>r[2]||(r[2]=[(0,o.Lk)("i",{class:"pi pi-briefcase"},null,-1),(0,o.eW)(" Work")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/blog"},{default:(0,o.k6)((()=>r[3]||(r[3]=[(0,o.Lk)("i",{class:"pi pi-pencil"},null,-1),(0,o.eW)(" Blog")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/components"},{default:(0,o.k6)((()=>r[4]||(r[4]=[(0,o.Lk)("i",{class:"pi pi-box"},null,-1),(0,o.eW)(" Components")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/lists"},{default:(0,o.k6)((()=>r[5]||(r[5]=[(0,o.Lk)("i",{class:"pi pi-map"},null,-1),(0,o.eW)(" Lists")]))),_:1})])])]),(0,o.Lk)("button",{onClick:r[0]||(r[0]=(...e)=>(0,i.R1)(t)&&(0,i.R1)(t)(...e)),class:"theme-toggle"},[(0,o.Lk)("i",{class:(0,l.C4)(["pi",{"pi-sun":(0,i.R1)(n),"pi-moon":!(0,i.R1)(n)}])},null,2)])])])}}});const c=s;var p=c;function f(e,n){return null}var m=t(2037);const d={},v=(0,m.A)(d,[["render",f]]);var h=v,k=(0,o.pM)({__name:"App",setup(e){return(e,n)=>{const t=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(p),(0,o.bF)(t),(0,o.bF)(h)],64)}}});const g=k;var b=g,L=t(5438);function _(e,n){return(0,o.uX)(),(0,o.CE)(o.FK,null,[n[0]||(n[0]=(0,o.Lk)("h1",null,"Alter the majority",-1)),n[1]||(n[1]=(0,o.Lk)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius et nihil numquam esse, eligendi eos cumque. Cum ipsam cupiditate, omnis beatae quaerat animi possimus minima doloremque, asperiores inventore culpa!",-1))],64)}const w={},F=(0,m.A)(w,[["render",_]]);var O=F;const j=[{path:"/",name:"home",component:O}],y=(0,L.aE)({history:(0,L.LA)("/majoralter.github.io/"),routes:j});var C=y;(0,r.Ef)(b).use(C).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,a=0;a<r.length;a++)(!1&i||l>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[a])}))?r.splice(a--,1):(u=!1,i<l&&(l=i));if(u){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,l=r[0],u=r[1],a=r[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(a)var c=a(t)}for(n&&n(r);s<l.length;s++)i=l[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},r=self["webpackChunkmajoralter_github_io"]=self["webpackChunkmajoralter_github_io"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(3082)}));r=t.O(r)})();
//# sourceMappingURL=app.97818122.js.map