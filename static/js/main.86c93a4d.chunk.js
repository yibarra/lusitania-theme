(this["webpackJsonplusitania-theme"]=this["webpackJsonplusitania-theme"]||[]).push([[0],Array(71).concat([function(e,t,a){e.exports=a(148)},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),i=a.n(r),s=a(17),l=a(15),o=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(3),m=a(150);var d=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),c=Object(u.a)(a,2),r=c[0],i=c[1],s=Object(n.useCallback)((function(e){return Object(m.a)(Date.now(),e)}),[]),l=Object(n.useCallback)((function(e,t,a){return new Promise((function(n,c){try{a(t),window.localStorage.setItem(e,JSON.stringify(t)),n(t)}catch(r){c(r)}}))}),[]);return{checkHours:s,localStorageItem:r,setValueFunction:Object(n.useCallback)((function(e){return i(e)}),[i]),setValue:l}},f=Object(n.createContext)({}),b=function(e){var t=e.children,a=d("lusitania_theme_categories",{items:[],date:Date.now()}),r=a.checkHours,i=a.localStorageItem,s=a.setValue,l=a.setValueFunction,m=Object(n.useState)({items:[],date:Date.now()}),b=Object(u.a)(m,2),v=b[0],p=b[1],E=Object(n.useCallback)((function(e){return!!v.length&&v.filter((function(t){return t.name===e}))[0]}),[v]),g=Object(n.useCallback)((function(e){return!!v.length&&v.filter((function(t){return t.id===e}))[0]}),[v]),h=Object(n.useCallback)((function(e,t,a){return o.a.get("/categories").then((function(e){return e.data})).then((function(n){return e("lusitania_theme_categories",{items:n,date:Date.now()},t).then((function(){return a(n)}))}))}),[]),j=Object(n.useCallback)((function(e,t){var a=i.items,n=i.date;a&&a.length>0&&r(n)<"1"?p({items:a,date:n}):h(e,t,p)}),[i,p,h,r]);return Object(n.useEffect)((function(){j(s,l)}),[j,s,l]),c.a.createElement(f.Provider,{value:{getCategoryById:g,getCategoryByName:E,categories:v}},t)},v=a(30),p=Object(n.createContext)({}),E=function(e){var t=e.children,a=d("lusitania_theme_posts",{items:[],date:Date.now()}),r=a.checkHours,i=a.localStorageItem,s=a.setValue,l=a.setValueFunction,m=Object(n.useState)({items:[],date:Date.now()}),f=Object(u.a)(m,2),b=f[0],v=f[1],E=Object(n.useCallback)((function(e){return o.a.get(e).then((function(e){return e.data}))}),[]),g=Object(n.useCallback)((function(e,t,a){return o.a.get("/".concat("houses","?per_page=100")).then((function(e){return e.data})).then((function(n){return e("lusitania_theme_posts",{items:n,date:Date.now()},t).then((function(){return a(n)}))}))}),[]),h=Object(n.useCallback)((function(e){return o.a.get("/".concat(e)).then((function(e){return e.data}))}),[]),j=Object(n.useCallback)((function(e,t){return o.a.get("/".concat(e,"?categories=").concat(t)).then((function(e){return e.data}))}),[]),O=Object(n.useCallback)((function(e,t){return o.a.get("/".concat(e,"?filter=").concat(t,"&per_page=100")).then((function(e){return e.data}))}),[]),y=Object(n.useCallback)((function(e,t){return o.a.get("/".concat(e,"/").concat(t)).then((function(e){return e.data}))}),[]),N=Object(n.useCallback)((function(e,t){var a=i.items,n=i.date;a&&a.length>0&&r(n)<"1"?v({items:a,date:n}):g(e,t,v)}),[i,v,g,r]);return Object(n.useEffect)((function(){N(s,l)}),[N,s,l]),c.a.createElement(p.Provider,{value:{posts:b.items,getQuery:E,getPostByCategoryName:O,getPostByCategoryId:j,getPostById:h,getCustomPostById:y}},t)},g=Object(n.createContext)({}),h=function(e,t){switch(t){case"cidade":return{cities:Object(v.a)({},e)};case"distrito":return{districts:Object(v.a)({},e)};case"conselho":return{councils:Object(v.a)({},e)};case"freguesia":return{neighs:Object(v.a)({},e)};case"zona":return{zones:Object(v.a)({},e)};default:return Object(v.a)({},e)}},j=function(e){var t=e.children,a=Object(n.useContext)(p).posts,r=Object(n.useReducer)(h,{cities:{id:"cidade",value:"",options:[],label:"Cidade",disabled:!1,type:"location"},districts:{id:"distrito",value:"",options:[],label:"Distrito",disabled:!0,type:"location"},councils:{id:"conselho",value:"",options:[],label:"Conselho",disabled:!0,type:"location"},neighs:{id:"freguesia",value:"",options:[],label:"Freguesia",disabled:!0,type:"location"},zones:{id:"zona",value:"",options:[],label:"Zona",disabled:!0,type:"location"},types:{id:"tipo",value:"",options:[],label:"Tipologia",type:"options"},tags:{id:"tags",value:"",ooptions:[],label:"Mais Filtros",type:"tags"}}),i=Object(u.a)(r,2),s=i[0],l=i[1],o=Object(n.useState)([]),m=Object(u.a)(o,2),d=m[0],f=m[1],b=Object(n.useCallback)((function(e,t){return""!==t&&-1===e.indexOf(t)}),[]),v=Object(n.useCallback)((function(e){for(var t=s,a=0,n=Object.keys(t);a<n.length;a++){var c=n[a];if(t[c]instanceof Object)for(var r=0,i=Object.keys(e);r<i.length;r++){var l=i[r],o=e[l];o instanceof Object&&c===l&&(t[c].options=o)}}return s}),[s]),E=Object(n.useCallback)((function(e){if(e instanceof Object===!1)return!1;for(var t=[],a=[],n=[],c=[],r=[],i=[],s=[],l=[],o=0;o<e.length;o++){var u=e[o];if(u instanceof Object){var m=u.acf,d=m.area,p=m.cidade,E=m.conselho,g=m.distrito,h=m.freguesia,j=m.tipo,O=m.zona,y=m.valor;b(t,d)&&t.push(d),b(a,p)&&a.push(p),b(n,g)&&n.push(g),b(c,E)&&c.push(E),b(r,h)&&r.push(h),b(i,j)&&i.push(j),b(s,O)&&s.push(O),b(l,y)&&l.push(y)}}v({cities:a,districts:n,councils:c,neighs:r,types:i,zones:s}),f(e)}),[b,v]),j=Object(n.useCallback)((function(e,t){if(e instanceof Object===!1)return!1;for(var a=[],n=[],c=[],r=[],i=[],s=[],l=0;l<e.length;l++){var o=e[l];if(o instanceof Object){var u=o.acf,m=u.area,d=u.conselho,f=u.distrito,v=u.freguesia,p=u.zona;b(n,f)&&"cidade"===t&&(n.push(f),c.push(d),r.push(v),i.push(p)),b(c,d)&&"distrito"===t&&(c.push(d),r.push(v),i.push(p)),b(r,v)&&"conselho"===t&&(r.push(v),i.push(p)),b(i,p)&&"freguesia"===t&&i.push(p),b(a,m)&&"area"===t&&a.push(m)}}return"cidade"===t?{districts:n,councils:c,neighs:r,zones:i,values:s}:"distrito"===t?{councils:c,neighs:r,zones:i,values:s}:"conselho"===t?{neighs:r,zones:i,values:s}:"freguesia"===t?{types:[],zones:i,values:s}:void 0}),[b]),O=Object(n.useCallback)((function(e,t,a){return a instanceof Object!==!1&&t instanceof Object!==!1&&t.filter((function(t){var a=t.acf,n=e.id,c=e.value;return a[n]===c}))}),[]),y=Object(n.useCallback)((function(e,t,a){var n,c=s;for(var r in s){var i=s[r];i.id===t&&((n=i).value=e)}var o=O(n,a,s),u=j(o,t);if(u instanceof Object&&Object.keys(u).length)switch(t){case"cidade":c.districts.value="",c.councils.value="",c.neighs.value="",c.zones.value="",c.districts.disabled=!1,c.districts.options=u.districts,l(c.districts,"distrito"),l(c.councils,"conselho"),l(c.neighs,"freguesia"),l(c.zones,"zona");break;case"distrito":c.councils.value="",c.neighs.value="",c.zones.value="",c.councils.disabled=!1,c.councils.options=u.councils,l(c.councils,"conselho"),l(c.neighs,"freguesia"),l(c.zones,"zona");break;case"conselho":c.neighs.value="",c.zones.value="",c.neighs.disabled=!1,c.neighs.options=u.neighs,l(c.neighs,"freguesia"),l(c.zones,"zona");break;case"freguesia":c.zones.value="",c.zones.disabled=!1,c.zones.options=u.zones,l(c.zones,"zona")}l(n,t)}),[s,l,O,j]),N=Object(n.useCallback)((function(){var e=s;if(e instanceof Object&&Object.keys(e).length){for(var t=0,a=Object.keys(e);t<a.length;t++){var n=e[a[t]];n instanceof Object&&(n.value="","cidade"!==n.id&&(n.disabled=!0),l(n,n.id))}return e}}),[s,l]),C=Object(n.useCallback)((function(e,t){if(t instanceof Object===!1||e instanceof Object===!1)return!1;for(var a=[],n=0,c=Object.keys(t);n<c.length;n++){var r=t[c[n]];r instanceof Object&&function(){var t=r.id,n=r.value;""!==n&&(a=e.filter((function(e){return e.acf[t]===n})))}()}return a}),[]);return Object(n.useEffect)((function(){a.length>0&&E(a)}),[a]),c.a.createElement(g.Provider,{value:{results:d,inputs:s,getFilters:E,onChange:y,onClearFilters:N,onFilterItems:C}},t)},O=Object(n.createContext)({}),y=function(e){var t=e.children,a=d("lusitania_theme_tags",{items:[],date:Date.now()}),r=a.checkHours,i=a.localStorageItem,s=a.setValue,l=a.setValueFunction,m=Object(n.useState)({items:[],date:Date.now()}),f=Object(u.a)(m,2),b=f[0],v=f[1],p=Object(n.useCallback)((function(e){return b.items.filter((function(t){return t.id===e}))[0]}),[b]),E=Object(n.useCallback)((function(e,t,a){return o.a.get("/tags").then((function(e){return e.data})).then((function(n){return e("lusitania_theme_tags",{items:n,date:Date.now()},t).then((function(){return a(n)}))}))}),[]),g=Object(n.useCallback)((function(e,t){var a=i.items,n=i.date;a&&a.length>0&&r(n)<"1"?v({items:a,date:n}):E(e,t,v)}),[i,v,E,r]);return Object(n.useEffect)((function(){g(s,l)}),[g,s,l]),c.a.createElement(O.Provider,{value:{tags:b.items,getTagById:p}},t)},N=Object(n.memo)((function(e){var t=e.children;return c.a.createElement(b,null,c.a.createElement(y,null,c.a.createElement(E,null,c.a.createElement(j,null,t))))})),C=a(7),k=a(8),w=a.n(k),x=a(18),P=a(34),F=a(22),S=a(33),I=(a(93),Object(n.memo)((function(e){var t=e.count,a=e.current,r=e.type,i=Object(n.useCallback)((function(e){return isNaN(e)?"00":e<9?"0".concat(e+1):e+1}),[]);return c.a.createElement("div",{className:"number--text","data-type":r},c.a.createElement("p",{className:"current"},i(a)),c.a.createElement("p",{className:"count"},i(t-1)))}))),z=a(10),B=a(11),A=a(25),_=a(14),D=a(12);function V(e){var t=function(t){Object(D.a)(n,t);var a=Object(_.a)(n);function n(e){var t;return Object(z.a)(this,n),(t=a.call(this,e)).state={direction:"none",current:0,last:void 0},t.onPrevNext=t.onPrevNext.bind(Object(A.a)(t)),t.setCurrent=t.setCurrent.bind(Object(A.a)(t)),t}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.items;this.setState({items:e})}},{key:"setCurrent",value:function(e){if(!0===isNaN(e))return!1;var t=this.state.current;this.setState({last:t,direction:e>t?"prev":"next",current:e})}},{key:"onPrevNext",value:function(e){var t,a=this.state.current,n=this.props.items;t="prev"===e?a-1<0?n.length-1:a-1:a+1>=n.length?0:a+1,this.setState({last:a,current:t,direction:e})}},{key:"render",value:function(){return c.a.createElement(e,Object.assign({},this.state,this.props,{onPrevNext:this.onPrevNext,setCurrent:this.setCurrent}))}}]),n}(c.a.Component);return t.displayName="SliderBase(".concat(e.displayName||e.name,")"),t}a(94);var W=Object(n.memo)((function(e){var t=e.current,a=e.count,n=e.items,r=e.onPrevNext,i=e.setCurrent;return c.a.createElement("div",{className:"webdoor--controls"},c.a.createElement("button",{className:"btn-arrow","data-prev":!0,onClick:function(){return r("prev")},disabled:0===t},c.a.createElement("span",{className:"icon"})),c.a.createElement("ul",{className:"webdoor--controls--list"},n&&n.map((function(e,a){return c.a.createElement("li",{className:"webdoor--controls--item",key:a},c.a.createElement("button",{className:"btn-min","data-active":a===t,onClick:function(){return i(a)}}))}))),c.a.createElement("button",{className:"btn-arrow","data-next":!0,onClick:function(){return r("")},disabled:t>=a-1},c.a.createElement("span",{className:"icon"})))})),M=(a(95),Object(n.memo)((function(e){var t=e.item.acf,a=t.cidade,n=t.distrito;return c.a.createElement("div",{className:"list--address"},c.a.createElement("p",null,c.a.createElement("strong",null,n),", ",a))}))),L=(a(96),Object(n.memo)((function(e){var t=e.item,a=Object(n.useCallback)((function(e){if(e instanceof Object===!1)return!1;var t=e.acf;if(t){var a=t.area,n=t.tipo;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"list--attributes--item"},c.a.createElement("p",null,c.a.createElement("span",null,a,"\u33a1"))),c.a.createElement("li",{className:"list--attributes--item"},c.a.createElement("p",null,c.a.createElement("span",null,n))))}}),[]);return c.a.createElement("ul",{className:"list--attributes"},a(t))}))),R=a(27),H=a.n(R);var T=function(){return{filterImages:Object(n.useCallback)((function(e){if(!Array.isArray(e))return[];for(var t=[],a=0;a<e.length;a++){var n=e[a];if(n instanceof Object){var c=n.props,r=c.className,i=c.children;r.includes("wp-block-gallery")&&t.length<=0&&t.push(i.props.children[0]),r.includes("wp-block-image")&&t.length<=0&&t.push(n)}}return t}),[]),filterImagesMulti:Object(n.useCallback)((function(e){if(!Array.isArray(e))return[];for(var t=[],a=0;a<e.length;a++){var n=e[a];if(n instanceof Object){var c=n.props,r=c.className,i=c.children;if(r.includes("wp-block-gallery")){var s=i.props.children;for(var l in s){var o=s[l];o instanceof Object&&t.push(o.props.children)}}r.includes("wp-block-image")&&t.push(n)}}return t}),[])}},J=(a(107),Object(n.memo)((function(e){var t=e.current,a=e.last,r=e.index,i=e.rendered,s=Object(n.useState)({animationFinished:!1}),l=Object(u.a)(s,2),o=l[0],m=l[1],d=T().filterImages,f=Object(n.useCallback)((function(){m({animationFinished:!1})}),[m]),b=Object(n.useCallback)((function(){m({animationFinished:!0})}),[m]),v=H()(i,{replace:function(e){var t=e.attribs,a=(e.name,e.children);return t?!t||"wp-block-gallery"!==t.class&&"wp-block-image"!==t.class?void 0:a:null}});return Object(n.useEffect)((function(){f()}),[t,f]),c.a.createElement("div",{className:"webdoor--footer--item","data-finish":o.animationFinished,"data-current":t,"data-last":a,key:r},c.a.createElement("div",{className:"images",onAnimationEnd:b,onAnimationStart:f},d(v)),c.a.createElement("p",{className:"text-info"},!0===t?"Seguinte":"Anterior"))}))),q=(a(108),Object(n.memo)((function(e){var t=e.current,a=e.items,r=(e.setCurrent,Object(n.useCallback)((function(e,t){return e+1>a.length-1?0===t:e+1===t}),[a])),i=Object(n.useCallback)((function(e,t){return e-1<0?a.length-1===t:e-1===t}),[a]);return c.a.createElement("div",{className:"webdoor--footer"},a&&a.map((function(e,a){var n=e.content.rendered;return c.a.createElement(J,{current:r(t,a),last:i(t,a),index:a,key:a,rendered:n})})))}))),Z=(a(109),Object(n.memo)((function(e){var t=e.current,a=e.items,r=e.setCurrent,i=Object(n.useState)({classNames:"",animationFinished:!1}),l=Object(u.a)(i,2),o=l[0],m=l[1],d=a[t],f=Object(n.useCallback)((function(){m({classNames:"animation",animationFinished:!1})}),[m]),b=Object(n.useCallback)((function(){m({classNames:"",animationFinished:!0})}),[m]);return Object(n.useEffect)((function(){f()}),[t,f]),c.a.createElement("div",{className:"webdoor--info ".concat(o.classNames),onAnimationEnd:b,onAnimationStart:f},d&&c.a.createElement("div",{className:"webdoor--info--content"},c.a.createElement("h4",{dangerouslySetInnerHTML:{__html:d.title.rendered}}),c.a.createElement(M,{item:d}),c.a.createElement(L,{item:d}),c.a.createElement(s.b,{className:"btn-more",to:"/gallery/".concat(d.id)},c.a.createElement("span",{className:"text"},"Ver casa"),c.a.createElement("span",{className:"material-icons"},"add"))),c.a.createElement(q,{current:t,items:a,setCurrent:r}))}))),Q=(a(114),Object(n.memo)((function(e){var t=e.display,a=e.drag,n=e.i,r=e.x,i=e.items[n],s=T().filterImages,l=H()(i.content.rendered,{replace:function(e){var t=e.attribs,a=(e.name,e.children);return t?!t||"wp-block-gallery"!==t.class&&"wp-block-image"!==t.class?void 0:a:null}});return c.a.createElement(F.animated.div,Object.assign({},a(),{className:"webdoor--item",key:n,style:{display:t,transform:r.to((function(e){return"translate3d(".concat(e,"px,0,0)")}))}}),s(l)[0])}))),U=(a(115),Object(n.memo)((function(){return c.a.createElement("div",{className:"webdoor--slogan"},c.a.createElement("img",{className:"image",src:"".concat("/lusitania-theme","/images/logo-main.svg"),alt:"Lusitania"}),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus feugiat sed scelerisque porttitor. Pulvinar eros, hac consectetur cras commodo felis accumsan. Cursus imperdiet tellus, orci in. Vitae, non lectus luctus vel, netus volutpat augue elementum sagittis. Molestie leo dui amet orci. Maecenas viverra habitant vel morba."))}))),$=(a(116),V((function(e){var t=e.current,a=e.items,r=e.last,i=e.onPrevNext,s=e.setCurrent,l=Object(F.useSprings)(a.length,(function(e){return{x:e*window.innerWidth,display:"block"}}))||void 0,o=Object(u.a)(l,2),m=o[0],d=o[1],f=Object(S.a)((function(e){var n=e.down,c=Object(u.a)(e.movement,1)[0],r=Object(u.a)(e.direction,1)[0],i=e.distance,l=e.cancel;if(n&&i>window.innerWidth/2){var o=Object(P.a)(t+(r>0?-1:1),0,a.length-1);l(s(o))}d((function(e){return e<t-1||e>t+1?{display:"none"}:{x:(e-t)*window.innerWidth+(n?c:0),display:"block"}}))}));return Object(n.useEffect)((function(){d((function(e){return e<t-1||e>t+1?{display:"none"}:{x:(e-t)*window.innerWidth,display:"block"}}))}),[t,d]),c.a.createElement(c.a.Fragment,null,c.a.createElement(U,null),c.a.createElement(Z,{current:t,last:r,onPrevNext:i,setCurrent:s,items:a}),c.a.createElement("div",{className:"webdoor--content"},m.map((function(e,t){var n=e.x,r=e.display;return c.a.createElement(Q,{drag:f,items:a,display:r,x:n,i:t,key:t})}))),c.a.createElement(W,{count:a.length,current:t,items:a,setCurrent:s,onPrevNext:i}),c.a.createElement(I,{current:t,count:a.length,type:1}))}))),G=(a(117),Object(n.memo)((function(e){var t=e.category,a=e.getPostByCategoryName,r=Object(n.useState)([]),i=Object(u.a)(r,2),s=i[0],l=i[1],o=Object(n.useCallback)(function(){var e=Object(x.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("houses",t);case 2:(n=e.sent)&&l(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a]);return Object(n.useEffect)((function(){o(t)}),[t,o]),c.a.createElement("div",{className:"webdoor"},s.length>0&&c.a.createElement($,{items:s}))}))),K=function(e){var t=e.getPostByCategoryName;return c.a.createElement("div",{className:"home"},c.a.createElement(G,{category:"highlights",getPostByCategoryName:t}))},X=(a(118),Object(n.memo)((function(e){var t=e.setActive;return c.a.createElement("div",{className:"category--header"},c.a.createElement("button",{className:"btn-more back",onClick:function(){return t(null)}},c.a.createElement("span",{className:"material-icons"},"keyboard_backspace"),c.a.createElement("span",{className:"text"},"Voltar")))}))),Y=(a(119),Object(n.memo)((function(e){var t=e.current,a=e.items,n=e.onPrevNext,r=e.setCurrent;return c.a.createElement("div",{className:"card--gallery--controls"},c.a.createElement("div",{className:"card--gallery--controls--arrows"},c.a.createElement("button",{className:"btn-arrow min","data-prev":!0,onClick:function(){return n("prev")}},c.a.createElement("span",{className:"icon"})),c.a.createElement("button",{className:"btn-arrow min","data-next":!0,onClick:function(){return n("next")}},c.a.createElement("span",{className:"icon"}))),c.a.createElement("ul",{className:"card--gallery--controls--buttons"},a&&a.map((function(e,a){return c.a.createElement("li",{className:"card--gallery--controls--buttons--item",key:a},c.a.createElement("button",{className:"btn-min","data-active":a===t,onClick:function(){return r(a)}}))}))))}))),ee=(a(120),V((function(e){var t=e.current,a=e.items,r=e.setCurrent,i=e.onPrevNext,s=Object(n.useRef)(null),l=Object(F.useSprings)(a.length,(function(e){return{x:e*window.innerWidth,display:"block"}}))||void 0,o=Object(u.a)(l,2),m=o[0],d=o[1],f=Object(S.a)((function(e){var n=e.down,c=Object(u.a)(e.movement,1)[0],i=Object(u.a)(e.direction,1)[0],l=e.distance,o=e.cancel,m=s.current.getBoundingClientRect().width;if(n&&l>m/2){var f=Object(P.a)(t+(i>0?-1:1),0,a.length-1);o(r(f))}d((function(e){return e<t-1||e>t+1?{display:"none"}:{x:(e-t)*m+(n?c:0),display:"block"}}))}));return Object(n.useEffect)((function(){!function(){var e=s.current.getBoundingClientRect().width;d((function(a){return a<t-1||a>t+1?{display:"none"}:{x:(a-t)*e,display:"block"}}))}()}),[t,d]),c.a.createElement("div",{className:"card--gallery",ref:s},c.a.createElement(Y,{current:t,items:a,onPrevNext:i,setCurrent:r}),c.a.createElement("div",{className:"card--gallery--list"},m.map((function(e,t){var n=e.x,r=e.display;return c.a.createElement(F.animated.div,Object.assign({className:"card--gallery--item"},f(),{key:t,style:{display:r,transform:n.to((function(e){return"translate3d(".concat(e,"px,0,0)")}))}}),a[t])}))))}))),te=(a(121),Object(n.memo)((function(e){var t=e.item,a=T().filterImagesMulti,n=t.title,r=H()(t.content.rendered,{replace:function(e){var t=e.attribs,a=(e.name,e.children);return t?!t||"wp-block-gallery"!==t.class&&"wp-block-image"!==t.class?void 0:a:null}});return c.a.createElement("div",{className:"card"},c.a.createElement(ee,{items:a(r)}),c.a.createElement("div",{className:"card--info"},c.a.createElement("h4",{dangerouslySetInnerHTML:{__html:n.rendered}}),c.a.createElement(M,{item:t}),c.a.createElement(L,{item:t}),c.a.createElement(s.b,{className:"btn-more",to:"/gallery/".concat(t.id)},c.a.createElement("span",{className:"text"},"Ver casa"),c.a.createElement("span",{className:"material-icons"},"add"))))}))),ae=(a(122),function(e){var t=e.items;return c.a.createElement("ul",{className:"category--item--list"},Array.isArray(t)&&t.map((function(e,t){return c.a.createElement("li",{className:"category--item--list--item",key:t},c.a.createElement(te,{item:e}))})))}),ne=(a(123),Object(n.memo)((function(e){var t=e.active,a=e.category,r=e.index,i=e.getPostByCategoryId,s=e.setActive,l=Object(n.useState)([]),o=Object(u.a)(l,2),m=o[0],d=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(x.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("houses",a.id);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,i]),c.a.createElement("div",{className:"category--item","data-active":t},c.a.createElement("h2",null,a.name),c.a.createElement(ae,{items:m}),c.a.createElement("div",{className:"category--item--footer"},c.a.createElement("button",{className:"btn-more",onClick:function(){return s(r)}},c.a.createElement("span",{className:"text"},"ver todos"),c.a.createElement("span",{className:"material-icons"},"add"))))}))),ce=(a(124),Object(n.memo)((function(e){var t=e.active,a=e.setActive,r=e.items,i=Object(n.useContext)(p).getPostByCategoryId;return c.a.createElement("div",{className:"category--list","data-active":null!==t},r&&r.map((function(e,n){return c.a.createElement("li",{className:"category--list--item",key:n,"data-active":t===n},c.a.createElement(ne,{active:t===n,index:n,category:e,setActive:a,getPostByCategoryId:i}))})))}))),re=(a(125),Object(n.memo)((function(e){var t=e.categories.items,a=Object(n.useState)(null),r=Object(u.a)(a,2),i=r[0],s=r[1];return c.a.createElement("div",{className:"category","data-active":null!==i},c.a.createElement(X,{setActive:s}),c.a.createElement(ce,{active:i,setActive:s,items:t}))}))),ie=(a(126),Object(n.memo)((function(e){var t=e.results;return c.a.createElement("div",{className:"filters--result","data-active":t.length>0},c.a.createElement("div",{className:"filters--result--title"},c.a.createElement("p",null,"Resultado ",c.a.createElement("span",null,t.length))),c.a.createElement("ul",{className:"filters--result--list"},t.map((function(e,t){return c.a.createElement("li",{className:"filters--result--item",key:t},c.a.createElement(te,{item:e}))}))))}))),se=function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))},le=(a(127),Object(n.memo)((function(e){var t=e.item,a=e.placeholder,r=e.onChange,i=Object(n.useRef)(),s=Object(n.useState)(!1),l=Object(u.a)(s,2),o=l[0],m=l[1],d=t.options,f=t.label,b=t.value,v=t.disabled,p=Object(n.useCallback)((function(e){m(!1),r(e)}),[r]);return se(i,(function(){return m(!1)})),c.a.createElement("div",{className:"select--container",ref:i,"data-disabled":v},c.a.createElement("label",{className:"input-label"},f),c.a.createElement("div",{className:"select","data-active":o},c.a.createElement("div",{className:"select--title",onClick:function(){return m(!o)}},b||a,c.a.createElement("span",{className:"material-icons"},"keyboard_arrow_down")),c.a.createElement("ul",{className:"select--component"},c.a.createElement("li",{className:"select--component--item","data-disabled":"false"},a),d&&d.map((function(e,t){return c.a.createElement("li",{className:"select--component--item","data-active":b===e,onClick:function(){return p(e)},key:t},e)})))))}))),oe=(a(128),Object(n.memo)((function(e){var t=e.inputs,a=e.results,r=e.onChange,i=Object(n.useCallback)((function(e){var t=[];return Object.values(e).forEach((function(n,i){"location"===n.type&&t.push(c.a.createElement("div",{className:"location--item",key:i},c.a.createElement(le,{items:e,item:n,onChange:function(e){return r(e,n.id,a)},placeholder:"Selecione uma op\xe7\xe3o"})))})),t}),[a,r]);return c.a.createElement("div",{className:"location"},t&&i(t))}))),ue=Object(n.memo)((function(e){var t=e.item,a=Object(n.useContext)(g),r=a.inputs,i=a.results,s=a.onChange,l=t.type;return c.a.createElement(c.a.Fragment,null,"location"===l&&c.a.createElement(oe,{inputs:r,results:i,onChange:s}))})),me=(a(129),Object(n.memo)((function(e){var t=e.current,a=e.items;return c.a.createElement("div",{className:"filters--body"},c.a.createElement("ul",{className:"filters--body--list"},a&&a.map((function(e,a){return c.a.createElement("li",{className:"filters--body--item","data-active":t===a,key:a},c.a.createElement(ue,{item:e}))}))))}))),de=(a(130),Object(n.memo)((function(e){var t=e.current,a=e.countFilters,r=e.setCurrent,i=e.items,s=e.onClearFilters,l=Object(n.useCallback)((function(){r(null),s()}),[r,s]);return c.a.createElement("div",{className:"filters--header"},c.a.createElement("ul",{className:"filters--header--list"},i&&i.map((function(e,n){var i=e.type,s=e.title;return c.a.createElement("li",{className:"filters--header--item","data-active":t===n,key:n},c.a.createElement("button",{className:"btn-tab","data-active":a(i),onClick:function(){return r(t!==n?n:null)}},s))}))),c.a.createElement("div",{className:"filters--header--clear","data-active":a()},c.a.createElement("button",{className:"btn-more",onClick:function(){return l()}},c.a.createElement("span",{className:"material-icons"},"clear"),c.a.createElement("span",{className:"text"},"Limpar Filtros"))))}))),fe=(a(131),Object(n.memo)((function(e){var t=e.items,a=e.countFilters,r=e.onClearFilters,i=Object(n.useState)(null),s=Object(u.a)(i,2),l=s[0],o=s[1];return c.a.createElement("div",{className:"filters--tabs"},c.a.createElement(de,{current:l,items:t,countFilters:a,onClearFilters:r,setCurrent:o}),c.a.createElement(me,{current:l,items:t}))}))),be=(a(132),Object(n.memo)((function(e){var t=e.inputs,a=e.results,r=e.onFilterItems,i=e.onClearFilters,s=Object(n.useCallback)((function(e){for(var a=0,n=0,c=Object.keys(t);n<c.length;n++){var r=c[n],i=t[r];e?e===i.type&&""!==i.value&&++a:""!==i.value&&++a}return a>0}),[t]);return c.a.createElement("div",{className:"filters","data-active":a.length>0&&s()},c.a.createElement(fe,{items:[{title:"localiza\xe7\xe3o",type:"location"},{title:"caracteristicas",type:"options"},{title:"mais filtros",type:"tags"}],countFilters:s,onClearFilters:i}),c.a.createElement(ie,{results:r(a,t)}))}))),ve=(a(133),Object(n.memo)((function(e){var t=e.categories,a=Object(n.useContext)(g),r=a.inputs,i=a.results,s=a.onClearFilters,l=a.onFilterItems;return c.a.createElement("div",{className:"gallery"},c.a.createElement(be,{inputs:r,results:i,onFilterItems:l,onClearFilters:s}),c.a.createElement(re,{categories:t}))}))),pe=(a(134),Object(n.memo)((function(e){var t=e.tags,a=Object(n.useContext)(O).getTagById,r=Object(n.useCallback)((function(e,t){if(!e)return!1;var a=e(t);return a instanceof Object&&a.name?a.name:""}),[]);return c.a.createElement("div",{className:"list--tags"},t&&t.map((function(e,t){return c.a.createElement("p",{className:"tag",key:t},c.a.createElement("small",null,r(a,e)))})))}))),Ee=(a(135),Object(n.memo)((function(e){var t=e.tags,a=e.acf,n=a.cidade,r=a.distrito,i=a.conselho,s=a.freguesia,l=a.zona;return c.a.createElement("div",{className:"house--info--attributes"},c.a.createElement("ul",{className:"house--info--attributes--list"},c.a.createElement("li",{className:"house--info--attributes--item"},c.a.createElement("p",null,c.a.createElement("span",null,n),c.a.createElement("small",null,"Cidade"))),c.a.createElement("li",{className:"house--info--attributes--item"},c.a.createElement("p",null,c.a.createElement("span",null,r),c.a.createElement("small",null,"Distrito"))),c.a.createElement("li",{className:"house--info--attributes--item"},c.a.createElement("p",null,c.a.createElement("span",null,i),c.a.createElement("small",null,"Conselho"))),c.a.createElement("li",{className:"house--info--attributes--item"},c.a.createElement("p",null,c.a.createElement("span",null,s),c.a.createElement("small",null,"Freguesia"))),c.a.createElement("li",{className:"house--info--attributes--item"},c.a.createElement("p",null,c.a.createElement("span",null,l),c.a.createElement("small",null,"Zona")))),t&&c.a.createElement(pe,{tags:t}))}))),ge=(a(136),Object(n.memo)((function(e){var t=e.active,a=e.id,n=e.setActive;return c.a.createElement("div",{className:"house--info--header"},c.a.createElement(s.b,{className:"btn-map",to:"/map/".concat(a)},c.a.createElement("span",{className:"material-icons"},"location_on"),c.a.createElement("span",{className:"text"},"Ver no mapa")),c.a.createElement("button",{className:"btn-clear","data-active":t,onClick:function(){return n(!t)}},c.a.createElement("span",{className:"material-icons"},"fullscreen"),c.a.createElement("span",{className:"material-icons"},"fullscreen_exit")))}))),he=(a(137),function(e){var t=e.item,a=e.active,n=e.setActive;return c.a.createElement("div",{className:"house--info","data-active":a},c.a.createElement(ge,{active:a,id:t.id,setActive:n}),c.a.createElement("div",{className:"house--info--title"},c.a.createElement("h2",null,t.title.rendered),c.a.createElement(M,{item:t}),c.a.createElement(L,{item:t}),t.acf&&c.a.createElement("p",null,t.acf.descripcao)),c.a.createElement(Ee,{tags:t.tags,acf:t.acf}))}),je=(a(138),Object(n.memo)((function(e){var t=e.display,a=e.drag,n=e.i,r=e.x,i=e.items;return c.a.createElement(F.animated.div,Object.assign({},a(),{className:"house--gallery--item",key:n,style:{display:t,transform:r.to((function(e){return"translate3d(".concat(e,"px,0,0)")}))}}),c.a.createElement(F.animated.div,null,i[n]))}))),Oe=(a(139),Object(n.memo)((function(e){var t=e.active,a=e.current,n=e.count,r=e.onPrevNext;return c.a.createElement("div",{className:"house--gallery--control","data-active":t},c.a.createElement("button",{className:"btn-arrow","data-prev":!0,onClick:function(){return r("prev")},disabled:0===a},c.a.createElement("span",{className:"icon"})),c.a.createElement("button",{className:"btn-arrow","data-next":!0,onClick:function(){return r("next")},disabled:a>=n-1},c.a.createElement("span",{className:"icon"})))}))),ye=(a(140),Object(n.memo)((function(e){var t=e.current,a=e.count,r=e.setCurrent,i=Object(n.useCallback)((function(e,t){for(var n=[],r=function(a){n.push(c.a.createElement("button",{className:"btn-min","data-active":e===a,onClick:function(){return t(a)},key:a}))},i=0;i<a;i++)r(i);return n}),[a]);return c.a.createElement("div",{className:"house--gallery--control--footer"},i(t,r)," ")}))),Ne=(a(141),V((function(e){var t=e.active,a=e.current,r=e.items,i=e.setCurrent,s=(e.item,e.onPrevNext),l=Object(F.useSprings)(r.length,(function(e){return{x:e*window.innerWidth,display:"block"}}))||void 0,o=Object(u.a)(l,2),m=o[0],d=o[1],f=Object(S.a)((function(e){var t=e.down,n=Object(u.a)(e.movement,1)[0],c=Object(u.a)(e.direction,1)[0],s=e.distance,l=e.cancel;if(t&&s>window.innerWidth/2){var o=Object(P.a)(a+(c>0?-1:1),0,r.length-1);l(i(o))}d((function(e){return e<a-1||e>a+1?{display:"none"}:{x:(e-a)*window.innerWidth+(t?n:0),display:"block"}}))}));return Object(n.useEffect)((function(){d((function(e){return e<a-1||e>a+1?{display:"none"}:{x:(e-a)*window.innerWidth,display:"block"}}))}),[a,d]),c.a.createElement("div",{className:"house--gallery"},c.a.createElement("div",{className:"house--gallery--content"},m.map((function(e,t){var a=e.x,n=e.display;return c.a.createElement(je,{drag:f,display:n,items:r,i:t,x:a,key:t})}))),c.a.createElement(Oe,{active:t,current:a,count:r.length-1,onPrevNext:s}),c.a.createElement(ye,{current:a,count:r.length-1,setCurrent:i}),c.a.createElement(I,{current:a,count:r.length-1,type:1}))}))),Ce=(a(142),Object(n.memo)((function(e){var t=e.item,a=Object(n.useState)(!1),r=Object(u.a)(a,2),i=r[0],s=r[1],l=T().filterImages,o=H()(t.content.rendered,{replace:function(e){var t=e.attribs,a=(e.name,e.children);return t?!t||"wp-block-gallery"!==t.class&&"wp-block-image"!==t.class?void 0:a:null}});return c.a.createElement("div",{className:"house","data-active":i},t.content&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Ne,{active:i,item:t,items:l(o)}),c.a.createElement(he,{active:i,item:t,setActive:s})))}))),ke=(a(143),Object(n.memo)((function(e){var t=e.getCustomPostById,a=Object(C.f)().id,r=Object(n.useState)(null),i=Object(u.a)(r,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(x.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("houses",a);case 2:(n=e.sent)&&l(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t]),c.a.createElement("div",{className:"house-page"},s&&c.a.createElement(Ce,{item:s}))}))),we=Object(n.memo)((function(){var e=Object(n.useContext)(f),t=Object(n.useContext)(p),a=t.getPostByCategoryName,r=t.getCustomPostById,i=e.categories;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C.c,null,c.a.createElement(C.a,{exact:!0,path:"/"},c.a.createElement(K,{getPostByCategoryName:a,categories:i})),c.a.createElement(C.a,{exact:!0,path:"/gallery"},c.a.createElement(ve,{categories:i})),c.a.createElement(C.a,{exact:!0,path:"/gallery/:id"},c.a.createElement(ke,{getCustomPostById:r}))))})),xe=(a(144),function(){return c.a.createElement("nav",{className:"header--nav"},c.a.createElement(s.b,{exact:!0,to:"/",className:"header--nav--item logo",activeClassName:"active"},c.a.createElement("span",{className:"icon icon-logo"})),c.a.createElement(s.b,{to:"/gallery",className:"header--nav--item",activeClassName:"active"},"galeria"),c.a.createElement(s.b,{to:"/contact",className:"header--nav--item",activeClassName:"active"},"contato"))}),Pe=(a(145),Object(n.memo)((function(){return c.a.createElement("header",{className:"header"},c.a.createElement(xe,null))}))),Fe=(a(146),Object(n.memo)((function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"loader","data-active":a,onAnimationEnd:function(){return r(!0)}},c.a.createElement("div",{className:"loader--content"},c.a.createElement("span",{className:"icon icon-logo"})))}))),Se=(a(147),Object(n.memo)((function(){return c.a.createElement(N,null,c.a.createElement(Fe,null),c.a.createElement(Pe,null),c.a.createElement(we,{any:"any"}))})));o.a.defaults.baseURL="https://www.julianibarra.com/lusitania/wp-json/wp/v2/",o.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{basename:"/"},c.a.createElement(N,null,c.a.createElement(Se,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[71,1,2]]]);
//# sourceMappingURL=main.86c93a4d.chunk.js.map