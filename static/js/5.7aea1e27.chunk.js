(this["webpackJsonpreact-hw-01-components"]=this["webpackJsonpreact-hw-01-components"]||[]).push([[5],{110:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a(45),c=a(0),o=a.n(c),l=a(65),s=a.n(l),m=a(66),u=a.n(m),i=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(r.a)(a,2),l=n[0],s=n[1];return o.a.createElement("header",{className:u.a.searchbar},o.a.createElement("form",{className:u.a.searchform,onSubmit:function(e){e.preventDefault(),t(l)}},o.a.createElement("button",{type:"submit",className:u.a["searchform-button"]},o.a.createElement("span",{className:u.a["searchform-buttom-label"]},"Search")),o.a.createElement("input",{value:l,onChange:function(e){s(e.target.value)},className:u.a["searchform-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))},f=a(67),h=a.n(f),b=a(68),p=a.n(b),y=function(e){var t=e.item,a=e.handleClickImageItem;return o.a.createElement("li",{className:p.a.ImageGalleryItem},o.a.createElement("img",{onClick:function(){a(t.largeImageURL)},src:t.webformatURL,alt:"",className:p.a["ImageGalleryItem-image"]}))},d=function(e){var t=e.items,a=e.handleClickImageItem;return o.a.createElement("ul",{className:h.a.ImageGallery},t.map((function(e){return o.a.createElement(y,{key:e.id,item:e,handleClickImageItem:a})})))},_=a(69),g=a.n(_),v=function(e){var t=e.onClick;return o.a.createElement("button",{onClick:t,className:g.a.Button},"Load more")},O=a(29),I=a(30),j=a(32),E=a(31),k=a(70),C=a.n(k),w=function(e){Object(j.a)(a,e);var t=Object(E.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){return o.a.createElement(C.a,{type:"Puff",color:"#00BFFF",height:100,width:100})}}]),a}(o.a.Component),G=a(90),N=a.n(G),S=function(e){Object(j.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleCloseModal=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(I.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseModal)}},{key:"render",value:function(){return o.a.createElement("div",{className:N.a.Overlay},o.a.createElement("div",{className:N.a.Modal},o.a.createElement("img",{src:this.props.largeImageURL,alt:""})))}}]),a}(c.Component),x=a(91),M=a.n(x),L=function(e,t){return M.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("18307166-3b43ffbdc74cd0b79f1194416","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))};t.default=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],m=Object(c.useState)(""),u=Object(r.a)(m,2),f=u[0],h=u[1],b=Object(c.useState)(1),p=Object(r.a)(b,2),y=p[0],_=p[1],g=Object(c.useState)(!1),O=Object(r.a)(g,2),I=O[0],j=O[1],E=Object(c.useState)(!1),k=Object(r.a)(E,2),C=k[0],G=k[1],N=Object(c.useState)(""),x=Object(r.a)(N,2),M=x[0],U=x[1];Object(c.useEffect)((function(){h("kyiv"),L("kyiv",1).then((function(e){return l(e.hits)})),h("kyiv"),_(1)}),[]);return o.a.createElement("div",{className:s.a.Gallery},o.a.createElement(i,{onSubmit:function(e){j(!0),h(e),_(1),L(e,y).then((function(e){return l(e.hits)})).finally((function(){return j(!1)}))}}),I?o.a.createElement(w,null):o.a.createElement(d,{handleClickImageItem:function(e){G(!0),U(e)},items:a}),I?null:o.a.createElement(v,{onClick:function(){j(!0),_(y+1),L(f,y+1).then((function(e){return l([].concat(Object(n.a)(a),Object(n.a)(e.hits)))})).finally((function(){j(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}}),C?o.a.createElement(S,{largeImageURL:M,onClose:function(){G(!1)}}):null)}},65:function(e,t,a){e.exports={Gallery:"styles_Gallery__fXqJq"}},66:function(e,t,a){e.exports={searchbar:"styles_searchbar__2yIsC",searchform:"styles_searchform__1UF8D","searchform-button":"styles_searchform-button__2x-N_","searchform-buttom-label":"styles_searchform-buttom-label__3OB4U","searchform-input":"styles_searchform-input__2f-sT"}},67:function(e,t,a){e.exports={ImageGallery:"styles_ImageGallery__qpmTG"}},68:function(e,t,a){e.exports={ImageGalleryItem:"styles_ImageGalleryItem__1GCKu","ImageGalleryItem-image":"styles_ImageGalleryItem-image__35hVf"}},69:function(e,t,a){e.exports={Button:"styles_Button__1VrMp"}},90:function(e,t,a){e.exports={Overlay:"styles_Overlay__2l2kA",Modal:"styles_Modal__1qst9"}}}]);
//# sourceMappingURL=5.7aea1e27.chunk.js.map