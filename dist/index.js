require("./css/style.css"),Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={children:n.default.createElement(n.default.Fragment,null),onClickItem:function(){},showHoverGrid:!1,hideName:!1,hideId:!1},r=function(t){var a=t.children,r=t.onClickItem,i=t.data,u=t.showHoverGrid,c=t.hideName,l=t.hideId,d=e.useState(!0),o=d[0],m=d[1],f=e.useState(""),s=f[0],v=f[1],h=e.useState(""),p=h[0],g=h[1],b=e.useState(""),E=b[0],y=b[1],k=function(e){if(!o){var t=e.id,n=e.name,a=e.imagePath;v(t),g(n),y(a)}};return e.useEffect((function(){!function(){if(i&&i.length){var e=i.map((function(e){return e.default})).indexOf(!0);-1===e&&(e=0);var t=i[e],n=t.id,a=t.name,r=t.imagePath;v(n),g(a),y(r)}}();var e=setTimeout((function(){m(!1)}),500);return function(){clearTimeout(e)}}),[]),n.default.createElement("div",{className:"product-scrubber-container "+(o?"product-scrubber-container-loading":"product-scrubber-container-active")},n.default.createElement("div",{className:"child-container"},a),!c&&n.default.createElement("h4",null,p),!l&&n.default.createElement("span",null,s),n.default.createElement("div",{className:"location"},!o&&i&&i.length>0&&i.map((function(e,t){return n.default.createElement("div",{key:"item-preview-"+t,className:"item-preview "+(e.id===s?"item-preview-active":"item-preview-default"),style:{backgroundImage:"url("+e.imagePath+")"},onClick:function(){return k(e)},onKeyUp:function(){return k(e)},"aria-hidden":!0})}))),n.default.createElement("ul",{onClick:function(){return r(p)},onKeyUp:function(){return r(p)},"aria-hidden":!0},i&&i.length>0&&i.map((function(e,t){return n.default.createElement("li",{className:u?"show-grid":"hide-grid",key:"product-scrubber-image-"+t,onMouseEnter:function(){return k(e)},"aria-hidden":!0})}))),n.default.createElement("div",{className:"hover-active-image "+(o?"loading":"loading-complete"),style:{backgroundImage:"url("+E+")"}}))};r.defaultProps=a,exports.ProductScrubber=r;
