(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-fb841fcc":"06a60ffa"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-fb841fcc":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-fb841fcc":"e8c44d7c"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],m.parentNode.removeChild(m),n(s)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Hotel-booking/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var m=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"156c":function(t,e,n){t.exports=n.p+"img/logo_white.2540fc08.svg"},1795:function(t,e,n){},2577:function(t,e,n){t.exports=n.p+"img/instagram-brands.cc5e92b0.svg"},"2a44":function(t,e,n){},3441:function(t,e,n){t.exports=n.p+"img/facebook-square-brands.7df7570f.svg"},"3db7":function(t,e,n){"use strict";n("e604")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("034f"),n("2877")),i={},c=Object(s["a"])(i,a,o,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homepage"},[n("div",{staticClass:"banner"},[n("carousel",{attrs:{autoplay:!0,paginationEnabled:!1,perPage:1,loop:!0}},t._l(t.data,(function(t){return n("slide",{key:t.id,staticClass:"header-bg"},[n("img",{attrs:{src:t.imageUrl}})])})),1),t._m(0)],1),n("room-list",{attrs:{data:t.data}})],1)},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"logo"},[r("img",{staticClass:"logo",attrs:{src:n("156c")}})]),r("div",{staticClass:"contact-info"},[r("div",{staticClass:"social-icon"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("2577")}})]),r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("3441")}})])]),r("ul",{staticClass:"contact-list"},[r("li",[r("img",{attrs:{src:n("b2e9")}}),t._v("02-17264937")]),r("li",[r("img",{attrs:{src:n("a4f2")}}),t._v("whitespace@whitespace.com.tw")]),r("li",[r("img",{attrs:{src:n("b9c6")}}),t._v("台北市羅斯福路十段30號")])])])])}],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.data,(function(t){return n("router-link",{key:t.id,staticClass:"list",attrs:{to:{name:"RoomInfo",params:{roomId:t.id}}}},[n("room",{attrs:{room:t}})],1)})),1)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room"},[n("img",{staticClass:"list-img",attrs:{src:t.room.imageUrl,alt:t.room.name}}),n("div",{staticClass:"info"},[n("div",{staticClass:"room-name"},[n("div",{staticClass:"en-romom-name"},[n("p",[t._v(t._s(t.room.name))])]),n("div",{staticClass:"tc-romom-name"},[n("p",[t._v(t._s(t.tcName))])])]),n("div",{staticClass:"room-price"},[n("div",{staticClass:"room-price-normalday"},[n("span",[t._v("NT."+t._s(t.room.normalDayPrice))]),n("span",[t._v("平日")])]),n("div",{staticClass:"room-price-holiday"},[n("span",[t._v("NT."+t._s(t.room.holidayPrice)+"假日")])])])])])},v=[],g=(n("b0c0"),{name:"Room",props:["room"],data:function(){return{tcNameMap:{"Single Room":"單人房","Deluxe Single Room":"豪華單人房","Double Room":"單床雙人房","Deluxe Double Room":"豪華單床雙人房","Twin Room":"雙床雙人房","Deluxe Twin Room":"豪華雙床雙人房"}}},computed:{tcName:function(){return this.tcNameMap[this.room.name]}}}),b=g,_=(n("7237"),Object(s["a"])(b,h,v,!1,null,"69c7ee6c",null)),y=_.exports,C={name:"RoomList",components:{Room:y},props:["data"]},k=C,w=(n("3db7"),Object(s["a"])(k,p,d,!1,null,"157e82ab",null)),x=w.exports,j={name:"Home",components:{RoomList:x},data:function(){return{data:null}},created:function(){var t=this,e="https://challenge.thef2e.com/api/thef2e2019/stage6/rooms";t.axios.get("".concat(e),{headers:{Authorization:"Bearer ScoS6py59QIVuNsbvefbz4KB4ucBs6hrwQAks5czqkSxly1N2ND5pNYWRt8Z",accept:"application/json"}}).then((function(e){t.data=e.data.items}))},computed:{headerImg:function(){var t=this,e=t.data;return e}}},O=j,E=(n("f511"),Object(s["a"])(O,f,m,!1,null,"47847884",null)),P=E.exports,N=n("72d2");r["a"].use(l["a"]);var S=[{path:"/",name:"Home",component:P},{path:"/Picker",name:"Picker",component:N["a"]},{path:"/room/:roomId",name:"RoomInfo",component:function(){return n.e("chunk-fb841fcc").then(n.bind(null,"7042"))}}],R=new l["a"]({routes:S}),T=R,D=n("2f62");r["a"].use(D["a"]);var A=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=n("bc3a"),L=n.n(I),$=n("2106"),z=n.n($),B=n("fa33"),M=n("0a63"),q=n.n(M);r["a"].use(B["a"]),r["a"].use(q.a),r["a"].use(z.a,L.a),r["a"].config.productionTip=!1,new r["a"]({router:T,store:A,render:function(t){return t(u)}}).$mount("#app")},7222:function(t,e,n){},7237:function(t,e,n){"use strict";n("7222")},"72d2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"datepicker"},[n("datepicker",{attrs:{inline:!0,language:t.zh}}),n("button",{staticClass:"booking"},[t._v("預約時段")])],1)},a=[],o=n("fa33"),s=n("2430"),i={name:"Picker",components:{Datepicker:o["a"]},data:function(){return{zh:s["zh"]}}},c=i,u=(n("f8e9"),n("2877")),l=Object(u["a"])(c,r,a,!1,null,null,null);e["a"]=l.exports},"85ec":function(t,e,n){},a4f2:function(t,e,n){t.exports=n.p+"img/envelope-solid.a1b1533c.svg"},b2e9:function(t,e,n){t.exports=n.p+"img/phone-alt-solid.6dbf65e5.svg"},b9c6:function(t,e,n){t.exports=n.p+"img/home-solid.1600889c.svg"},e604:function(t,e,n){},f511:function(t,e,n){"use strict";n("1795")},f8e9:function(t,e,n){"use strict";n("2a44")}});
//# sourceMappingURL=app.6f452480.js.map