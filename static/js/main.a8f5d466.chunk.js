(this["webpackJsonplusitania-theme"]=this["webpackJsonplusitania-theme"]||[]).push([[0],Array(70).concat([function(e,t,a){e.exports=a(140)},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),i=a.n(c),l=a(21),s=a(15),o=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(3),m=a(142);var d=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=Object(u.a)(a,2),c=r[0],i=r[1],l=Object(n.useCallback)((function(e){return Object(m.a)(Date.now(),e)}),[]),s=Object(n.useCallback)((function(e,t,a){return new Promise((function(n,r){try{a(t),window.localStorage.setItem(e,JSON.stringify(t)),n(t)}catch(c){r(c)}}))}),[]);return{checkHours:l,localStorageItem:c,setValueFunction:Object(n.useCallback)((function(e){return i(e)}),[i]),setValue:s}},f=Object(n.createContext)({}),b=function(e){var t=e.children,a=d("lusitania_theme_categories",{items:[],date:Date.now()}),c=a.checkHours,i=a.localStorageItem,l=a.setValue,s=a.setValueFunction,m=Object(n.useState)({items:[],date:Date.now()}),b=Object(u.a)(m,2),v=b[0],E=b[1],g=Object(n.useCallback)((function(e){return!!v.length&&v.filter((function(t){return t.name===e}))[0]}),[v]),p=Object(n.useCallback)((function(e){return!!v.length&&v.filter((function(t){return t.id===e}))[0]}),[v]),h=Object(n.useCallback)((function(e,t,a){return o.a.get("/categories").then((function(e){return e.data})).then((function(n){return e("lusitania_theme_categories",{items:n,date:Date.now()},t).then((function(){return a(n)}))}))}),[]),j=Object(n.useCallback)((function(e,t){var a=i.items,n=i.date;a&&a.length>0&&c(n)<"10"?E({items:a,date:n}):h(e,t,E)}),[i,E,h,c]);return Object(n.useEffect)((function(){j(l,s)}),[j,l,s]),r.a.createElement(f.Provider,{value:{getCategoryById:p,getCategoryByName:g,categories:v}},t)},v=Object(n.createContext)({}),E=function(e){var t=e.children,a=d("lusitania_theme_posts",{items:[],date:Date.now()}),c=a.checkHours,i=a.localStorageItem,l=a.setValue,s=a.setValueFunction,m=Object(n.useState)({items:[],date:Date.now()}),f=Object(u.a)(m,2),b=f[0],E=f[1],g=Object(n.useCallback)((function(e){return o.a.get(e).then((function(e){return e.data}))}),[]),p=Object(n.useCallback)((function(e,t,a){return o.a.get("/".concat("houses","?per_page=100")).then((function(e){return e.data})).then((function(n){return e("lusitania_theme_posts",{items:n,date:Date.now()},t).then((function(){return a(n)}))}))}),[]),h=Object(n.useCallback)((function(e){return o.a.get("/".concat(e)).then((function(e){return e.data}))}),[]),j=Object(n.useCallback)((function(e,t){return o.a.get("/".concat(e,"?categories=").concat(t)).then((function(e){return e.data}))}),[]),O=Object(n.useCallback)((function(e,t){return o.a.get("/".concat(e,"?filter=").concat(t,"&per_page=100")).then((function(e){return e.data}))}),[]),N=Object(n.useCallback)((function(e,t){return o.a.get("/".concat(e,"/").concat(t)).then((function(e){return e.data}))}),[]),y=Object(n.useCallback)((function(e,t){var a=i.items,n=i.date;a&&a.length>0&&c(n)<"10"?E({items:a,date:n}):p(e,t,E)}),[i,E,p,c]);return Object(n.useEffect)((function(){y(l,s)}),[y,l,s]),r.a.createElement(v.Provider,{value:{posts:b.items,getQuery:g,getPostByCategoryName:O,getPostByCategoryId:j,getPostById:h,getCustomPostById:N}},t)},g=Object(n.createContext)({}),p=function(e){var t=e.children,a=d("lusitania_theme_tags",{items:[],date:Date.now()}),c=a.checkHours,i=a.localStorageItem,l=a.setValue,s=a.setValueFunction,m=Object(n.useState)({items:[],date:Date.now()}),f=Object(u.a)(m,2),b=f[0],v=f[1],E=Object(n.useCallback)((function(e){return b.items.filter((function(t){return t.id===e}))[0]}),[b]),p=Object(n.useCallback)((function(e,t,a){return o.a.get("/tags").then((function(e){return e.data})).then((function(n){return e("lusitania_theme_tags",{items:n,date:Date.now()},t).then((function(){return a(n)}))}))}),[]),h=Object(n.useCallback)((function(e,t){var a=i.items,n=i.date;a&&a.length>0&&c(n)<"10"?v({items:a,date:n}):p(e,t,v)}),[i,v,p,c]);return Object(n.useEffect)((function(){h(l,s)}),[h,l,s]),r.a.createElement(g.Provider,{value:{tags:b.items,getTagById:E}},t)},h=function(e){var t=e.children;return r.a.createElement(b,null,r.a.createElement(p,null,r.a.createElement(E,null,t)))},j=a(7),O=a(8),N=a.n(O),y=a(17),C=a(33),k=a(22),w=a(32),x=(a(92),Object(n.memo)((function(e){var t=e.count,a=e.current,c=e.type,i=Object(n.useCallback)((function(e){return isNaN(e)?"00":e<9?"0".concat(e+1):e+1}),[]);return r.a.createElement("div",{className:"number--text","data-type":c},r.a.createElement("p",{className:"current"},i(a)),r.a.createElement("p",{className:"count"},i(t-1)))}))),P=a(10),S=a(11),I=a(25),B=a(14),_=a(12);function A(e){var t=function(t){Object(_.a)(n,t);var a=Object(B.a)(n);function n(e){var t;return Object(P.a)(this,n),(t=a.call(this,e)).state={direction:"none",current:0,last:void 0},t.onPrevNext=t.onPrevNext.bind(Object(I.a)(t)),t.setCurrent=t.setCurrent.bind(Object(I.a)(t)),t}return Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.items;this.setState({items:e})}},{key:"setCurrent",value:function(e){if(!0===isNaN(e))return!1;var t=this.state.current;this.setState({last:t,direction:e>t?"prev":"next",current:e})}},{key:"onPrevNext",value:function(e){var t,a=this.state.current,n=this.props.items;t="prev"===e?a-1<0?n.length-1:a-1:a+1>=n.length?0:a+1,this.setState({last:a,current:t,direction:e})}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.state,this.props,{onPrevNext:this.onPrevNext,setCurrent:this.setCurrent}))}}]),n}(r.a.Component);return t.displayName="SliderBase(".concat(e.displayName||e.name,")"),t}a(93);var F=Object(n.memo)((function(e){var t=e.current,a=e.count,n=e.items,c=e.onPrevNext,i=e.setCurrent;return r.a.createElement("div",{className:"webdoor--controls"},r.a.createElement("button",{className:"btn-arrow","data-prev":!0,onClick:function(){return c("prev")},disabled:0===t},r.a.createElement("span",{className:"icon"})),r.a.createElement("ul",{className:"webdoor--controls--list"},n&&n.map((function(e,a){return r.a.createElement("li",{className:"webdoor--controls--item",key:a},r.a.createElement("button",{className:"btn-min","data-active":a===t,onClick:function(){return i(a)}}))}))),r.a.createElement("button",{className:"btn-arrow","data-next":!0,onClick:function(){return c("next")},disabled:t>=a-1},r.a.createElement("span",{className:"icon"})))})),W=(a(94),Object(n.memo)((function(e){var t=e.item.acf,a=t.cidade,n=t.distrito;return r.a.createElement("div",{className:"list--address"},r.a.createElement("p",null,r.a.createElement("strong",null,n),", ",a))}))),V=(a(95),Object(n.memo)((function(e){var t=e.item,a=Object(n.useCallback)((function(e){if(e instanceof Object===!1)return!1;var t=e.acf;if(t){var a=t.area,n=t.tipo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"list--attributes--item"},r.a.createElement("p",null,r.a.createElement("span",null,a,"\u33a1"))),r.a.createElement("li",{className:"list--attributes--item"},r.a.createElement("p",null,r.a.createElement("span",null,n))))}}),[]);return r.a.createElement("ul",{className:"list--attributes"},a(t))}))),D=(a(96),Object(n.memo)((function(e){var t=e.current,a=e.last,c=e.index,i=e.rendered,l=Object(n.useState)({animationFinished:!1}),s=Object(u.a)(l,2),o=s[0],m=s[1],d=Object(n.useCallback)((function(){m({animationFinished:!1})}),[m]),f=Object(n.useCallback)((function(){m({animationFinished:!0})}),[m]);return Object(n.useEffect)((function(){d()}),[t,d]),r.a.createElement("div",{className:"webdoor--footer--item","data-finish":o.animationFinished,"data-current":t,"data-last":a,key:c},r.a.createElement("div",{className:"images",onAnimationEnd:f,onAnimationStart:d,dangerouslySetInnerHTML:{__html:i},key:c}),r.a.createElement("p",{className:"text-info"},!0===t?"Seguinte":"Anterior"))}))),H=(a(97),Object(n.memo)((function(e){var t=e.current,a=e.items,c=(e.setCurrent,Object(n.useCallback)((function(e,t){return e+1>a.length-1?0===t:e+1===t}),[a])),i=Object(n.useCallback)((function(e,t){return e-1<0?a.length-1===t:e-1===t}),[a]);return r.a.createElement("div",{className:"webdoor--footer"},a&&a.map((function(e,a){var n=e.content.rendered;return r.a.createElement(D,{current:c(t,a),last:i(t,a),index:a,key:a,rendered:n})})))}))),M=(a(98),Object(n.memo)((function(e){var t=e.current,a=e.items,c=e.setCurrent,i=Object(n.useState)({classNames:"",animationFinished:!1}),s=Object(u.a)(i,2),o=s[0],m=s[1],d=a[t],f=Object(n.useCallback)((function(){m({classNames:"animation",animationFinished:!1})}),[m]),b=Object(n.useCallback)((function(){m({classNames:"",animationFinished:!0})}),[m]);return Object(n.useEffect)((function(){f()}),[t,f]),r.a.createElement("div",{className:"webdoor--info ".concat(o.classNames),onAnimationEnd:b,onAnimationStart:f},d&&r.a.createElement("div",{className:"webdoor--info--content"},r.a.createElement("h4",{dangerouslySetInnerHTML:{__html:d.title.rendered}}),r.a.createElement(W,{item:d}),r.a.createElement(V,{item:d}),r.a.createElement(l.b,{className:"btn-more",to:"/gallery/".concat(d.id)},r.a.createElement("span",{className:"text"},"Ver casa"),r.a.createElement("span",{className:"material-icons"},"add"))),r.a.createElement(H,{current:t,items:a,setCurrent:c}))}))),L=a(31),T=a.n(L);var J=function(){return{filterImages:Object(n.useCallback)((function(e){if(!Array.isArray(e))return[];for(var t=[],a=0;a<e.length;a++){var n=e[a];n instanceof Object&&t.push(n)}return t}),[])}},q=(a(113),Object(n.memo)((function(e){var t=e.display,a=e.drag,n=e.i,c=e.x,i=e.items[n],l=J().filterImages,s=T()(i.content.rendered,{replace:function(e){var t=e.attribs,a=(e.name,e.children);return t?t&&"wp-block-image"===t.class?a:void 0:null}});return r.a.createElement(k.animated.div,Object.assign({},a(),{className:"webdoor--item",key:n,style:{display:t,transform:c.to((function(e){return"translate3d(".concat(e,"px,0,0)")}))}}),l(s)[0])}))),z=(a(114),Object(n.memo)((function(){return r.a.createElement("div",{className:"webdoor--slogan"},r.a.createElement("img",{className:"image",src:"".concat("/lusitania-theme","/images/logo-main.svg"),alt:"Lusitania"}),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus feugiat sed scelerisque porttitor. Pulvinar eros, hac consectetur cras commodo felis accumsan. Cursus imperdiet tellus, orci in. Vitae, non lectus luctus vel, netus volutpat augue elementum sagittis. Molestie leo dui amet orci. Maecenas viverra habitant vel morba."))}))),Q=(a(115),A((function(e){var t=e.current,a=e.items,c=e.last,i=e.onPrevNext,l=e.setCurrent,s=Object(k.useSprings)(a.length,(function(e){return{x:e*window.innerWidth,display:"block"}}))||void 0,o=Object(u.a)(s,2),m=o[0],d=o[1],f=Object(w.a)((function(e){var n=e.down,r=Object(u.a)(e.movement,1)[0],c=Object(u.a)(e.direction,1)[0],i=e.distance,s=e.cancel;if(n&&i>window.innerWidth/2){var o=Object(C.a)(t+(c>0?-1:1),0,a.length-1);s(l(o))}d((function(e){return e<t-1||e>t+1?{display:"none"}:{x:(e-t)*window.innerWidth+(n?r:0),display:"block"}}))}));return Object(n.useEffect)((function(){d((function(e){return e<t-1||e>t+1?{display:"none"}:{x:(e-t)*window.innerWidth,display:"block"}}))}),[t,d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(M,{current:t,last:c,onPrevNext:i,setCurrent:l,items:a}),r.a.createElement("div",{className:"webdoor--content"},m.map((function(e,t){var n=e.x,c=e.display;return r.a.createElement(q,{drag:f,items:a,display:c,x:n,i:t,key:t})}))),r.a.createElement(F,{count:a.length,current:t,items:a,setCurrent:l,onPrevNext:i}),r.a.createElement(x,{current:t,count:a.length,type:1}))}))),R=(a(116),Object(n.memo)((function(e){var t=e.category,a=e.getPostByCategoryName,c=Object(n.useState)([]),i=Object(u.a)(c,2),l=i[0],s=i[1],o=Object(n.useCallback)(function(){var e=Object(y.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("houses",t);case 2:(n=e.sent)&&s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a]);return Object(n.useEffect)((function(){o(t)}),[t,o]),r.a.createElement("div",{className:"webdoor"},r.a.createElement(Q,{items:l}))}))),U=function(e){var t=e.getPostByCategoryName;return r.a.createElement("div",{className:"home"},r.a.createElement(R,{category:"highlights",getPostByCategoryName:t}))},Z=(a(117),Object(n.memo)((function(e){var t=e.setActive;return r.a.createElement("div",{className:"category--header"},r.a.createElement("button",{className:"btn-more",onClick:function(){return t(null)}},r.a.createElement("span",{className:"material-icons"},"undo"),r.a.createElement("span",{className:"text"},"Voltar")))}))),$=(a(118),Object(n.memo)((function(e){var t=e.current,a=e.items,n=e.onPrevNext,c=e.setCurrent;return r.a.createElement("div",{className:"card--gallery--controls"},r.a.createElement("div",{className:"card--gallery--controls--arrows"},r.a.createElement("button",{className:"btn-arrow min","data-prev":!0,onClick:function(){return n("prev")}},r.a.createElement("span",{className:"icon"})),r.a.createElement("button",{className:"btn-arrow min","data-next":!0,onClick:function(){return n("next")}},r.a.createElement("span",{className:"icon"}))),r.a.createElement("ul",{className:"card--gallery--controls--buttons"},a&&a.map((function(e,a){return r.a.createElement("li",{className:"card--gallery--controls--buttons--item",key:a},r.a.createElement("button",{className:"btn-min","data-active":a===t,onClick:function(){return c(a)}}))}))))}))),G=(a(119),A((function(e){var t=e.current,a=e.items,c=e.setCurrent,i=e.onPrevNext,l=Object(k.useSprings)(a.length,(function(e){return{x:e*window.innerWidth,display:"block"}}))||void 0,s=Object(u.a)(l,2),o=s[0],m=s[1],d=Object(w.a)((function(e){var n=e.down,r=Object(u.a)(e.movement,1)[0],i=Object(u.a)(e.direction,1)[0],l=e.distance,s=e.cancel;if(n&&l>window.innerWidth/2){var o=Object(C.a)(t+(i>0?-1:1),0,a.length-1);s(c(o))}m((function(e){return e<t-1||e>t+1?{display:"none"}:{x:(e-t)*window.innerWidth+(n?r:0),display:"block"}}))}));return Object(n.useEffect)((function(){m((function(e){return e<t-1||e>t+1?{display:"none"}:{x:(e-t)*window.innerWidth,display:"block"}}))}),[t,m]),r.a.createElement("div",{className:"card--gallery"},r.a.createElement($,{current:t,items:a,onPrevNext:i,setCurrent:c}),r.a.createElement("div",{className:"card--gallery--list"},o.map((function(e,t){var n=e.x,c=e.display;return r.a.createElement(k.animated.div,Object.assign({className:"card--gallery--item"},d(),{key:t,style:{display:c,transform:n.to((function(e){return"translate3d(".concat(e,"px,0,0)")}))}}),a[t])}))))}))),K=(a(120),Object(n.memo)((function(e){var t=e.item,a=J().filterImages,n=t.title,c=T()(t.content.rendered,{replace:function(e){var t=e.attribs,a=(e.name,e.children);return t?t&&"wp-block-image"===t.class?a:void 0:null}});return r.a.createElement("div",{className:"card"},r.a.createElement(G,{items:a(c)}),r.a.createElement("div",{className:"card--info"},r.a.createElement("h4",{dangerouslySetInnerHTML:{__html:n.rendered}}),r.a.createElement(W,{item:t}),r.a.createElement(V,{item:t}),r.a.createElement(l.b,{className:"btn-more",to:"/gallery/".concat(t.id)},r.a.createElement("span",{className:"text"},"Ver casa"),r.a.createElement("span",{className:"material-icons"},"add"))))}))),X=(a(121),function(e){var t=e.items;return r.a.createElement("ul",{className:"category--item--list"},Array.isArray(t)&&t.map((function(e,t){return r.a.createElement("li",{className:"category--item--list--item",key:t},r.a.createElement(K,{item:e}))})))}),Y=(a(122),Object(n.memo)((function(e){var t=e.active,a=e.category,c=e.index,i=e.getPostByCategoryId,l=e.setActive,s=Object(n.useState)([]),o=Object(u.a)(s,2),m=o[0],d=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("houses",a.id);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,i]),r.a.createElement("div",{className:"category--item","data-active":t},r.a.createElement("h2",null,a.name),r.a.createElement(X,{items:m}),r.a.createElement("div",{className:"category--item--footer"},r.a.createElement("button",{className:"btn-more",onClick:function(){return l(c)}},r.a.createElement("span",{className:"text"},"ver todos"),r.a.createElement("span",{className:"material-icons"},"add"))))}))),ee=(a(123),Object(n.memo)((function(e){var t=e.active,a=e.setActive,c=e.items,i=Object(n.useContext)(v).getPostByCategoryId;return r.a.createElement("div",{className:"category--list","data-active":null!==t},c&&c.map((function(e,n){return r.a.createElement("li",{className:"category--list--item",key:n,"data-active":t===n},r.a.createElement(Y,{active:t===n,index:n,category:e,setActive:a,getPostByCategoryId:i}))})))}))),te=(a(124),Object(n.memo)((function(e){var t=e.categories.items,a=Object(n.useState)(null),c=Object(u.a)(a,2),i=c[0],l=c[1];return r.a.createElement("div",{className:"category","data-active":null!==i},r.a.createElement(Z,{setActive:l}),r.a.createElement(ee,{active:i,setActive:l,items:t}))}))),ae=(a(125),Object(n.memo)((function(e){var t=e.categories,a=Object(n.useState)(!1),c=Object(u.a)(a,2);c[0],c[1];return r.a.createElement("div",{className:"gallery"},r.a.createElement(te,{categories:t}))}))),ne=(a(126),Object(n.memo)((function(e){var t=e.tags,a=Object(n.useContext)(g).getTagById,c=Object(n.useCallback)((function(e,t){if(!e)return!1;var a=e(t);return a instanceof Object&&a.name?a.name:""}),[]);return r.a.createElement("div",{className:"list--tags"},t&&t.map((function(e,t){return r.a.createElement("p",{className:"tag",key:t},r.a.createElement("small",null,c(a,e)))})))}))),re=(a(127),Object(n.memo)((function(e){var t=e.tags,a=e.acf,n=a.cidade,c=a.distrito,i=a.conselho,l=a.freguesia,s=a.zona;return r.a.createElement("div",{className:"house--info--attributes"},r.a.createElement("ul",{className:"house--info--attributes--list"},r.a.createElement("li",{className:"house--info--attributes--item"},r.a.createElement("p",null,r.a.createElement("span",null,n),r.a.createElement("small",null,"Cidade"))),r.a.createElement("li",{className:"house--info--attributes--item"},r.a.createElement("p",null,r.a.createElement("span",null,c),r.a.createElement("small",null,"Distrito"))),r.a.createElement("li",{className:"house--info--attributes--item"},r.a.createElement("p",null,r.a.createElement("span",null,i),r.a.createElement("small",null,"Conselho"))),r.a.createElement("li",{className:"house--info--attributes--item"},r.a.createElement("p",null,r.a.createElement("span",null,l),r.a.createElement("small",null,"Freguesia"))),r.a.createElement("li",{className:"house--info--attributes--item"},r.a.createElement("p",null,r.a.createElement("span",null,s),r.a.createElement("small",null,"Zona")))),t&&r.a.createElement(ne,{tags:t}))}))),ce=(a(128),Object(n.memo)((function(e){var t=e.active,a=e.id,n=e.setActive;return r.a.createElement("div",{className:"house--info--header"},r.a.createElement(l.b,{className:"btn-map",to:"/map/".concat(a)},r.a.createElement("span",{className:"material-icons"},"location_on"),r.a.createElement("span",{className:"text"},"Ver no mapa")),r.a.createElement("button",{className:"btn-clear","data-active":t,onClick:function(){return n(!t)}},r.a.createElement("span",{className:"material-icons"},"fullscreen"),r.a.createElement("span",{className:"material-icons"},"fullscreen_exit")))}))),ie=(a(129),function(e){var t=e.item,a=e.active,n=e.setActive;return r.a.createElement("div",{className:"house--info","data-active":a},r.a.createElement(ce,{active:a,id:t.id,setActive:n}),r.a.createElement("div",{className:"house--info--title"},r.a.createElement("h2",null,t.title.rendered),r.a.createElement(W,{item:t}),r.a.createElement(V,{item:t}),t.acf&&r.a.createElement("p",null,t.acf.descripcao)),r.a.createElement(re,{tags:t.tags,acf:t.acf}))}),le=(a(130),Object(n.memo)((function(e){var t=e.display,a=e.drag,n=e.i,c=e.x,i=e.items;return r.a.createElement(k.animated.div,Object.assign({},a(),{className:"house--gallery--item",key:n,style:{display:t,transform:c.to((function(e){return"translate3d(".concat(e,"px,0,0)")}))}}),r.a.createElement(k.animated.div,null,i[n]))}))),se=(a(131),Object(n.memo)((function(e){var t=e.active,a=e.current,n=e.count,c=e.onPrevNext;return r.a.createElement("div",{className:"house--gallery--control","data-active":t},r.a.createElement("button",{className:"btn-arrow","data-prev":!0,onClick:function(){return c("prev")},disabled:0===a},r.a.createElement("span",{className:"icon"})),r.a.createElement("button",{className:"btn-arrow","data-next":!0,onClick:function(){return c("next")},disabled:a>=n-1},r.a.createElement("span",{className:"icon"})))}))),oe=(a(132),Object(n.memo)((function(e){var t=e.current,a=e.count,c=e.setCurrent,i=Object(n.useCallback)((function(e,t){for(var n=[],c=function(a){n.push(r.a.createElement("button",{className:"btn-min","data-active":e===a,onClick:function(){return t(a)},key:a}))},i=0;i<a;i++)c(i);return n}),[a]);return r.a.createElement("div",{className:"house--gallery--control--footer"},i(t,c)," ")}))),ue=(a(133),A((function(e){var t=e.active,a=e.current,c=e.items,i=e.setCurrent,l=(e.item,e.onPrevNext),s=Object(k.useSprings)(c.length,(function(e){return{x:e*window.innerWidth,display:"block"}}))||void 0,o=Object(u.a)(s,2),m=o[0],d=o[1],f=Object(w.a)((function(e){var t=e.down,n=Object(u.a)(e.movement,1)[0],r=Object(u.a)(e.direction,1)[0],l=e.distance,s=e.cancel;if(t&&l>window.innerWidth/2){var o=Object(C.a)(a+(r>0?-1:1),0,c.length-1);s(i(o))}d((function(e){return e<a-1||e>a+1?{display:"none"}:{x:(e-a)*window.innerWidth+(t?n:0),display:"block"}}))}));return Object(n.useEffect)((function(){d((function(e){return e<a-1||e>a+1?{display:"none"}:{x:(e-a)*window.innerWidth,display:"block"}}))}),[a,d]),r.a.createElement("div",{className:"house--gallery"},r.a.createElement("div",{className:"house--gallery--content"},m.map((function(e,t){var a=e.x,n=e.display;return r.a.createElement(le,{drag:f,display:n,items:c,i:t,x:a,key:t})}))),r.a.createElement(se,{active:t,current:a,count:c.length-1,onPrevNext:l}),r.a.createElement(oe,{current:a,count:c.length-1,setCurrent:i}),r.a.createElement(x,{current:a,count:c.length-1,type:1}))}))),me=(a(134),Object(n.memo)((function(e){var t=e.item,a=Object(n.useState)(!1),c=Object(u.a)(a,2),i=c[0],l=c[1],s=J().filterImages,o=T()(t.content.rendered,{replace:function(e){var t=e.attribs,a=(e.name,e.children);return t?t&&"wp-block-image"===t.class?a:void 0:null}});return r.a.createElement("div",{className:"house","data-active":i},t.content&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{active:i,item:t,items:s(o)}),r.a.createElement(ie,{active:i,item:t,setActive:l})))}))),de=(a(135),Object(n.memo)((function(e){var t=e.getCustomPostById,a=Object(j.f)().id,c=Object(n.useState)(null),i=Object(u.a)(c,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(N.a.mark((function e(){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("houses",a);case 2:(n=e.sent)&&s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t]),r.a.createElement("div",{className:"house-page"},l&&r.a.createElement(me,{item:l}))}))),fe=Object(n.memo)((function(){var e=Object(n.useContext)(f),t=Object(n.useContext)(v),a=t.getPostByCategoryName,c=t.getCustomPostById,i=e.categories;return r.a.createElement("div",{className:"content"},r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/"},r.a.createElement(U,{getPostByCategoryName:a,categories:i})),r.a.createElement(j.a,{exact:!0,path:"/gallery"},r.a.createElement(ae,{categories:i})),r.a.createElement(j.a,{exact:!0,path:"/gallery/:id"},r.a.createElement(de,{getCustomPostById:c}))))})),be=(a(136),function(){return r.a.createElement("nav",{className:"header--nav"},r.a.createElement(l.b,{exact:!0,to:"/",className:"header--nav--item logo",activeClassName:"active"},r.a.createElement("span",{className:"icon icon-logo"})),r.a.createElement(l.b,{to:"/gallery",className:"header--nav--item",activeClassName:"active"},"galeria"))}),ve=(a(137),Object(n.memo)((function(){return r.a.createElement("header",{className:"header"},r.a.createElement(be,null))}))),Ee=(a(138),Object(n.memo)((function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"loader","data-active":a,onAnimationEnd:function(){return c(!0)}},r.a.createElement("div",{className:"loader--content"},r.a.createElement("span",{className:"icon icon-logo"})))}))),ge=(a(139),Object(n.memo)((function(){return r.a.createElement(h,null,r.a.createElement(Ee,null),r.a.createElement(ve,null),r.a.createElement(fe,{any:"any"}))})));o.a.defaults.baseURL="https://www.julianibarra.com/lusitania/wp-json/wp/v2/",o.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{basename:"/"},r.a.createElement(h,null,r.a.createElement(ge,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[70,1,2]]]);
//# sourceMappingURL=main.a8f5d466.chunk.js.map