function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){var a=i.default(e,t,"get");return s.default(e,a)};var i=l(o("fExtF")),s=l(o("iaRLo"));function l(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,a){d.default(e,t),t.set(e,a)};var c,d=(c=o("7K24o"))&&c.__esModule?c:{default:c};var f=o("2shzp"),p=new WeakMap,h=new WeakMap;var g=o("eWCmQ"),y=o("ag29v"),v=o("fZKcF");const _=document.querySelector(".search-form"),w=document.querySelector(".gallery"),b=document.querySelector(".btn"),m=new class{fetchPhotosByQuery(){const t=new URLSearchParams({key:e(n)(this,p),q:this.q,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:this.page});return e(f).get(`${e(n)(this,h)}/?${t}`)}constructor(){e(u)(this,p,{writable:!0,value:"28738829-9f4f28c3b0015af3dd201bcd9"}),e(u)(this,h,{writable:!0,value:"https://pixabay.com/api"}),this.page=1,this.q=null,this.per_page=40}};_.addEventListener("submit",(async function(e){e.preventDefault(),m.q=e.currentTarget.elements.searchQuery.value,b.classList.add("is-hidden"),m.page=1;try{const e=await m.fetchPhotosByQuery();if(0===e.data.total)return g.Notify.warning("Sorry, there are no images matching your search query. Please try again.");m.page*m.per_page<e.data.totalHits&&(console.log("total:",e.data.total),b.classList.remove("is-hidden")),g.Notify.success(`Was founded: ${e.data.total} images`),w.innerHTML=(0,y.default)(e.data.hits),x.refresh()}catch(e){g.Notify.failure(e.message)}})),b.addEventListener("click",(async function(){m.page+=1;const e=await m.fetchPhotosByQuery();try{m.page*m.per_page>=e.data.totalHits&&(console.log("hits:",e.data.hits.length),g.Notify.warning("We're sorry, but you've reached the end of search results."),b.classList.add("is-hidden")),w.insertAdjacentHTML("beforeend",(0,y.default)(e.data.hits)),x.refresh()}catch{console.log("err:"+err)}}));const x=new(e(v))(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=index.ad42c281.js.map