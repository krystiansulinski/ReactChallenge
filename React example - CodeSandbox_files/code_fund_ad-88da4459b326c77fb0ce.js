/*! For license information please see code_fund_ad-88da4459b326c77fb0ce.js.LICENSE */
!function(e){var t={};function a(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/packs/",a(a.s=269)}({15:function(e,t,a){var n={"./branding/codefund-logo-square-512.png":16,"./branding/codefund-logo.png":17,"./branding/codefund-logo.svg":18,"./branding/codefund-wg-full-256.svg":19,"./diagrams/anatomy-of-an-ad@2x.png":20,"./illustrations/error-404.svg":21,"./patterns/pattern2.svg":22,"./pixel.gif":23,"./placeholders/missing-200x200.png":24,"./placeholders/missing-260x200.png":25,"./placeholders/missing-screenshot.jpg":26,"./placeholders/sponsor-placeholder.svg":27,"./sponsor-catch-all.svg":28,"./tophat/gitcoin-symbol.svg":29,"./tophat/grants-symbol.svg":30,"./tophat/kudos-symbol.svg":31,"./tophat/missing-260x200.png":32,"./tophat/quests-symbol.svg":33};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=15},16:function(e,t,a){e.exports=a.p+"media/images/branding/codefund-logo-square-512-07880204c83ca5c547cc909713157c77.png"},168:function(e,t,a){var n,s,r;function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r=function(){"use strict";var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function a(e){return"function"===typeof e}function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function s(e,t){return null!=e&&"object"===i(e)&&t in e}var r=RegExp.prototype.test,o=/\S/;function c(e){return!function(e,t){return r.call(e,t)}(o,e)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},p=/\s*/,d=/\s+/,u=/\s*=/,f=/\s*\}/,h=/#|\^|\/|>|\{|&|=|!/;function m(e){this.string=e,this.tail=e,this.pos=0}function g(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function v(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}m.prototype.eos=function(){return""===this.tail},m.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var a=t[0];return this.tail=this.tail.substring(a.length),this.pos+=a.length,a},m.prototype.scanUntil=function(e){var t,a=this.tail.search(e);switch(a){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,a),this.tail=this.tail.substring(a)}return this.pos+=t.length,t},g.prototype.push=function(e){return new g(e,this)},g.prototype.lookup=function(e){var t,n,r,o=this.cache;if(o.hasOwnProperty(e))t=o[e];else{for(var c,l,p,d=this,u=!1;d;){if(e.indexOf(".")>0)for(c=d.view,l=e.split("."),p=0;null!=c&&p<l.length;)p===l.length-1&&(u=s(c,l[p])||(n=c,r=l[p],null!=n&&"object"!==i(n)&&n.hasOwnProperty&&n.hasOwnProperty(r))),c=c[l[p++]];else c=d.view[e],u=s(d.view,e);if(u){t=c;break}d=d.parent}o[e]=t}return a(t)&&(t=t.call(this.view)),t},v.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},v.prototype.parse=function(e,a){var s=this.templateCache,r=e+":"+(a||b.tags).join(":"),i="undefined"!==typeof s,o=i?s.get(r):void 0;return void 0==o&&(o=function(e,a){if(!e)return[];var s,r,i,o=!1,l=[],g=[],v=[],y=!1,w=!1,k="",x=0;function I(){if(y&&!w)for(;v.length;)delete g[v.pop()];else v=[];y=!1,w=!1}function C(e){if("string"===typeof e&&(e=e.split(d,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);s=new RegExp(n(e[0])+"\\s*"),r=new RegExp("\\s*"+n(e[1])),i=new RegExp("\\s*"+n("}"+e[1]))}C(a||b.tags);for(var M,O,_,S,A,E,j=new m(e);!j.eos();){if(M=j.pos,_=j.scanUntil(s))for(var U=0,B=_.length;U<B;++U)c(S=_.charAt(U))?(v.push(g.length),k+=S):(w=!0,o=!0,k+=" "),g.push(["text",S,M,M+1]),M+=1,"\n"===S&&(I(),k="",x=0,o=!1);if(!j.scan(s))break;if(y=!0,O=j.scan(h)||"name",j.scan(p),"="===O?(_=j.scanUntil(u),j.scan(u),j.scanUntil(r)):"{"===O?(_=j.scanUntil(i),j.scan(f),j.scanUntil(r),O="&"):_=j.scanUntil(r),!j.scan(r))throw new Error("Unclosed tag at "+j.pos);if(A=">"==O?[O,_,M,j.pos,k,x,o]:[O,_,M,j.pos],x++,g.push(A),"#"===O||"^"===O)l.push(A);else if("/"===O){if(!(E=l.pop()))throw new Error('Unopened section "'+_+'" at '+M);if(E[1]!==_)throw new Error('Unclosed section "'+E[1]+'" at '+M)}else"name"===O||"{"===O||"&"===O?w=!0:"="===O&&C(_)}if(I(),E=l.pop())throw new Error('Unclosed section "'+E[1]+'" at '+j.pos);return function(e){for(var t,a=[],n=a,s=[],r=0,i=e.length;r<i;++r)switch((t=e[r])[0]){case"#":case"^":n.push(t),s.push(t),n=t[4]=[];break;case"/":s.pop()[5]=t[2],n=s.length>0?s[s.length-1][4]:a;break;default:n.push(t)}return a}(function(e){for(var t,a,n=[],s=0,r=e.length;s<r;++s)(t=e[s])&&("text"===t[0]&&a&&"text"===a[0]?(a[1]+=t[1],a[3]=t[3]):(n.push(t),a=t));return n}(g))}(e,a),i&&s.set(r,o)),o},v.prototype.render=function(e,t,a,n){var s=this.parse(e,n),r=t instanceof g?t:new g(t,void 0);return this.renderTokens(s,r,a,e,n)},v.prototype.renderTokens=function(e,t,a,n,s){for(var r,i,o,c="",l=0,p=e.length;l<p;++l)o=void 0,"#"===(i=(r=e[l])[0])?o=this.renderSection(r,t,a,n):"^"===i?o=this.renderInverted(r,t,a,n):">"===i?o=this.renderPartial(r,t,a,s):"&"===i?o=this.unescapedValue(r,t):"name"===i?o=this.escapedValue(r,t):"text"===i&&(o=this.rawValue(r)),void 0!==o&&(c+=o);return c},v.prototype.renderSection=function(e,n,s,r){var o=this,c="",l=n.lookup(e[1]);if(l){if(t(l))for(var p=0,d=l.length;p<d;++p)c+=this.renderTokens(e[4],n.push(l[p]),s,r);else if("object"===i(l)||"string"===typeof l||"number"===typeof l)c+=this.renderTokens(e[4],n.push(l),s,r);else if(a(l)){if("string"!==typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(n.view,r.slice(e[3],e[5]),(function(e){return o.render(e,n,s)})))&&(c+=l)}else c+=this.renderTokens(e[4],n,s,r);return c}},v.prototype.renderInverted=function(e,a,n,s){var r=a.lookup(e[1]);if(!r||t(r)&&0===r.length)return this.renderTokens(e[4],a,n,s)},v.prototype.indentPartial=function(e,t,a){for(var n=t.replace(/[^ \t]/g,""),s=e.split("\n"),r=0;r<s.length;r++)s[r].length&&(r>0||!a)&&(s[r]=n+s[r]);return s.join("\n")},v.prototype.renderPartial=function(e,t,n,s){if(n){var r=a(n)?n(e[1]):n[e[1]];if(null!=r){var i=e[6],o=e[5],c=e[4],l=r;return 0==o&&c&&(l=this.indentPartial(r,c,i)),this.renderTokens(this.parse(l,s),t,n,l)}}},v.prototype.unescapedValue=function(e,t){var a=t.lookup(e[1]);if(null!=a)return a},v.prototype.escapedValue=function(e,t){var a=t.lookup(e[1]);if(null!=a)return b.escape(a)},v.prototype.rawValue=function(e){return e[1]};var b={name:"mustache.js",version:"4.0.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){y.templateCache=e},get templateCache(){return y.templateCache}},y=new v;return b.clearCache=function(){return y.clearCache()},b.parse=function(e,t){return y.parse(e,t)},b.render=function(e,a,n,s){if("string"!==typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(r=e)?"array":i(r))+'" was given as the first argument for mustache#render(template, view, partials)');var r;return y.render(e,a,n,s)},b.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return l[e]}))},b.Scanner=m,b.Context=g,b.Writer=v,b},"object"===i(t)&&"undefined"!==typeof e?e.exports=r():void 0===(s="function"===typeof(n=r)?n.call(t,a,t,e):n)||(e.exports=s)},17:function(e,t,a){e.exports=a.p+"media/images/branding/codefund-logo-e51b90b7fd26b3b978721ca168ee6d49.png"},175:function(e,t,a){},176:function(e,t,a){var n={"./@responsive_footer/index.js.erb":177,"./bottom-bar/index.js.erb":179,"./centered/index.js.erb":181,"./default/index.js.erb":183,"./docsify/index.js.erb":185,"./horizontal/index.js.erb":187,"./image-centered/index.js.erb":189,"./image-only/index.js.erb":191,"./media/index.js.erb":193,"./rectangle-narrow/index.js.erb":195,"./smart-bar/index.js.erb":197,"./sponsored-text/index.js.erb":199,"./square/index.js.erb":201,"./sticky-box/index.js.erb":203,"./text/index.js.erb":205,"./top-bar/index.js.erb":207,"./vertical/index.js.erb":209};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=176},177:function(e,t,a){"use strict";a.r(t);a(178);t.default={mustache:'<div id="cf" data-template="responsive_footer" data-theme="{{theme}}"> <a href="{{urls.campaign}}" class="cf-img-wrapper" target="_blank" rel="sponsored noopener"> <img src="{{creative.imageUrls.small}}" alt="{{creative.name}}" border="0" height="55" width="55" class="cf-img"> </a> <a href="{{urls.campaign}}" class="cf-text" target="_blank" rel="sponsored noopener"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> <button type="button" data-behavior="close"> <span aria-hidden="true">\u2715</span> </button> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);a(180);t.default={mustache:'<div id="cf" data-template="bottom-bar" data-theme="{{theme}}"> <span class="cf-wrapper"> <a href="{{urls.campaign}}" class="cf-text" target="_blank" rel="sponsored noopener"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> <span class="cf-cta">{{creative.cta}}</span> </a> <div class="cf-footer"> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> <a class="cf-powered-by" href="{{urls.poweredBy}}" target="_blank" rel="sponsored noopener"><em>ethical</em> ads by CodeFund</a> \u2022 <span class="cf-close" data-behavior="close">Close</span> </div> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},18:function(e,t,a){e.exports=a.p+"media/images/branding/codefund-logo-e0351cf0d203e280c3016e78eb548adb.svg"},180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);a(182);t.default={mustache:'<div id="cf" data-template="centered" data-theme="{{theme}}"> <div class="cf-wrapper"> <div class="cf-header">Proudly sponsored by</div> <a href="{{urls.campaign}}" class="cf-text" target="_blank" rel="sponsored noopener"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> </a> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </div> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},182:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);a(184);t.default={mustache:'<div id="cf" data-template="default" data-theme="{{theme}}"> <span> <span class="cf-wrapper"> <a href="{{urls.campaign}}" class="cf-sponsored-by" target="_blank" rel="sponsored noopener"> <span class="cf-img-wrapper"> <img src="{{creative.imageUrls.large}}" alt="{{creative.name}}" border="0" height="100" width="130" class="cf-img"> </span> <span class="cf-text"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> </span> </a> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </span> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},184:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);a(186);t.default={mustache:'<div id="cf" data-template="docsify" data-theme="{{theme}}"> <div class="cf-wrapper"> <div class="clearfix"> <a href="{{urls.campaign}}" class="cf-sponsored-by" target="_blank" rel="sponsored noopener"> <span class="cf-img-wrapper"> <img src="{{creative.imageUrls.small}}" alt="{{creative.name}}" height="65" width="65" class="cf-img"> </span> <span class="cf-text"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> </span> </a> </div> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </div> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);a(188);t.default={mustache:'<div id="cf" data-template="horizontal" data-theme="{{theme}}"> <span class="cf-wrapper"> <a href="{{urls.campaign}}" class="cf-text" target="_blank" rel="sponsored noopener"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> <span class="cf-cta">{{creative.cta}}</span> </a> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},188:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);a(190);t.default={mustache:'<div id="cf" data-template="image-centered" data-theme="{{theme}}"> <span class="cf-wrapper"> <a href="{{urls.campaign}}" class="cf-sponsored-by" target="_blank" rel="sponsored noopener"> <span class="cf-img-wrapper"> <img src="{{creative.imageUrls.large}}" alt="{{creative.name}}" border="0" height="100" width="130" class="cf-img"> </span> <span class="cf-text"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> <span class="cf-cta">{{creative.cta}}</span> </span> </a> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},19:function(e,t,a){e.exports=a.p+"media/images/branding/codefund-wg-full-256-1c0ef098a439032525c1db90bd725054.svg"},190:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);a(192);t.default={mustache:'<div id="cf" data-template="image-only" data-theme="{{theme}}"> <span class="cf-wrapper"> <div class="cf-header">supported by</div> <a href="{{urls.campaign}}" class="cf-img-wrapper" target="_blank" rel="sponsored noopener"> <img src="{{creative.imageUrls.small}}" alt="{{creative.name}}" height="150" width="150" class="cf-img"> </a> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},192:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);a(194);t.default={mustache:'<div id="cf" data-template="media" data-theme="{{theme}}"> <span class="cf-wrapper"> <a href="{{urls.campaign}}" class="cf-img-wrapper" target="_blank" rel="sponsored noopener"> <img src="{{creative.imageUrls.small}}" alt="{{creative.name}}" border="0" height="48" width="48" class="cf-img"> </a> <div class="cf-media-body"> <a href="{{urls.campaign}}" class="cf-text" target="_blank" rel="sponsored noopener"> <strong>{{creative.headline}}</strong> <span> {{creative.body}} <span class="cf-link">{{creative.cta}}</span> </span> </a> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund </a> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </div> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);a(196);t.default={mustache:'<div id="cf" data-template="rectangle-narrow" data-theme="{{theme}}"> <span> <span class="cf-wrapper"> <a href="{{urls.campaign}}" class="cf-sponsored-by" target="_blank" rel="sponsored noopener"> <span class="cf-img-wrapper"> <img src="{{creative.imageUrls.small}}" alt="{{creative.name}}" border="0" height="100" width="100" class="cf-img"> </span> <span class="cf-text"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> </span> </a> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> ads served ethically <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </span> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},196:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);a(198);var n=a(36),s=a.n(n);t.default={mustache:'<div id="cf" data-template="smart-bar" data-theme="{{theme}}"> <a href="{{urls.campaign}}" class="cf-wrapper" target="_blank" rel="noopener sponsored"> <span class="cf-smartbar-left"> <span class="cf-img-wrapper"> <img src="{{creative.imageUrls.logo}}" alt="{{creative.name}}" width="100" height="40" class="cf-img"> </span> <span class="cf-text"> <span class="cf-body"> <strong>{{creative.headline}}</strong> {{creative.body}} </span> </span> </span> <span class="cf-smartbar-right"> <span class="cf-cta">{{creative.cta}}</span> </span> </a> <div class="cf-footer"> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> <span class="cf-close" data-behavior="close">Close Ad</span> \u2022 <a class="cf-powered-by" href="{{urls.poweredBy}}"><em>Ethical</em> ads by CodeFund</a> </div> </div>',initialize:function(e){document.body.prepend(e.container);var t=!1,a=window.innerWidth>=648?-80:-196;addEventListener("scroll",(function(n){e.closed||(scrollY>=100&&!t?(s.a.animateCSS(e.element,"top","px",a,0,600,"easeInOutQuart"),e.trackImpression(),t=!0):scrollY<100&&t&&(s.a.animateCSS(e.element,"top","px",0,a,300,"easeInOutQuart"),t=!1))}))}}},198:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);a(200);t.default={mustache:'<ins id="cf" data-template="sponsored-text" data-theme="{{theme}}"> <span class="cf-wrapper"> Sponsored:&nbsp; <img src="{{creative.imageUrls.icon}}" alt="{{creative.name}}" border="0" height="20" width="20" class="cf-img" style="width: 20px; height: 20px;"> <b>{{creative.headline}}</b> {{creative.body}} <a href="{{urls.campaign}}" class="cf-cta" target="_blank" rel="sponsored noopener"> <b>{{creative.cta}}</b> </a> </span> <sup> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener" title="Ethical ads by CodeFund"> <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="info-circle-light" fill="#aaaaaa" fill-rule="nonzero"> <path d="M5,0.64516129 C7.39155242,0.64516129 9.35483871,2.58215726 9.35483871,5 C9.35483871,7.40506048 7.40705645,9.35483871 5,9.35483871 C2.5958871,9.35483871 0.64516129,7.40802419 0.64516129,5 C0.64516129,2.59671371 2.59278226,0.64516129 5,0.64516129 Z M5,0 C2.23877016,0 0,2.23957661 0,5 C0,7.76203629 2.23877016,10 5,10 C7.76122984,10 10,7.76203629 10,5 C10,2.23957661 7.76122984,0 5,0 Z M4.27419355,6.93548387 L4.51612903,6.93548387 L4.51612903,4.51612903 L4.27419355,4.51612903 C4.14058468,4.51612903 4.03225806,4.40780242 4.03225806,4.27419355 L4.03225806,4.11290323 C4.03225806,3.97929435 4.14058468,3.87096774 4.27419355,3.87096774 L5.24193548,3.87096774 C5.37554435,3.87096774 5.48387097,3.97929435 5.48387097,4.11290323 L5.48387097,6.93548387 L5.72580645,6.93548387 C5.85941532,6.93548387 5.96774194,7.04381048 5.96774194,7.17741935 L5.96774194,7.33870968 C5.96774194,7.47231855 5.85941532,7.58064516 5.72580645,7.58064516 L4.27419355,7.58064516 C4.14058468,7.58064516 4.03225806,7.47231855 4.03225806,7.33870968 L4.03225806,7.17741935 C4.03225806,7.04381048 4.14058468,6.93548387 4.27419355,6.93548387 Z M5,2.09677419 C4.64368952,2.09677419 4.35483871,2.385625 4.35483871,2.74193548 C4.35483871,3.09824597 4.64368952,3.38709677 5,3.38709677 C5.35631048,3.38709677 5.64516129,3.09824597 5.64516129,2.74193548 C5.64516129,2.385625 5.35631048,2.09677419 5,2.09677419 Z" id="Shape"></path> </g> </svg> <span class="tooltiptext"><em>ethical</em> ad by CodeFund</span> </a> </sup> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </ins>',initialize:function(e){e.visible&&e.trackImpression()}}},20:function(e,t,a){e.exports=a.p+"media/images/diagrams/anatomy-of-an-ad@2x-6315273c36e735784ab3d2f0d90b3854.png"},200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);a(202);t.default={mustache:'<div id="cf" data-template="square" data-theme="{{theme}}"> <span class="cf-wrapper"> <a href="{{urls.campaign}}" class="cf-sponsored-by" target="_blank" rel="sponsored noopener"> <span class="cf-img-wrapper" > <img src="{{creative.imageUrls.large}}" alt="{{creative.name}}" class="cf-img"> </span> <span class="cf-text"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> <span class="cf-cta">{{creative.cta}}</span> </span> </a> <div class="cf-footer"> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund </a> \u2022 <span class="cf-close" data-behavior="close">Close Ad</span> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </div> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},202:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);a(204);t.default={mustache:'<div id="cf" data-template="sticky-box" data-theme="{{theme}}"> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener">ad</a> <a href="{{urls.campaign}}" class="cf-sponsored-by" target="_blank" rel="sponsored noopener"> <img src="{{creative.imageUrls.small}}" alt="{{creative.name}}" border="0" height="65" width="65" class="cf-img"> <span class="cf-text"> <strong class="cf-headline">{{creative.headline}}</strong> <span class="cf-body"> {{creative.body}} <span class="cf-link">{{creative.cta}}</span> </span> </span> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> <span data-behavior="close">\u2715</span> </div>',initialize:function(e){switch(e.container.dataset.position){case"top left":e.element.style.top="20px",e.element.style.left="20px";break;case"top right":e.element.style.top="20px",e.element.style.right="20px";break;case"bottom left":e.element.style.bottom="20px",e.element.style.left="20px";break;default:e.element.style.bottom="20px",e.element.style.right="20px"}e.visible&&e.trackImpression()}}},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);a(206);t.default={mustache:'<div id="cf" data-template="text" data-theme="{{theme}}"> <b>{{creative.headline}}</b> {{creative.body}} <a href="{{urls.campaign}}" class="cf-cta" target="_blank" rel="sponsored noopener"> <b>{{creative.cta}}</b> </a> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </div>',initialize:function(e){e.element.querySelector("a.cf-cta").addEventListener("mouseenter",(function(e){e.target.style.color="#1d6fa5"})),e.element.querySelector("a.cf-cta").addEventListener("mouseleave",(function(e){e.target.style.color="#3498db"})),e.visible&&e.trackImpression()}}},206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);a(208);t.default={mustache:'<div id="cf" data-template="top-bar" data-theme="{{theme}}"> <a href="{{urls.campaign}}" class="cf-wrapper" target="_blank" rel="noopener sponsored"> <span class="cf-smartbar-left"> <span class="cf-img-wrapper"> <img src="{{creative.imageUrls.logo}}" alt="{{creative.name}}" width="100" height="40" class="cf-img"> </span> <span class="cf-text"> <span class="cf-body"> <strong>{{creative.headline}}</strong> {{creative.body}} </span> </span> </span> <span class="cf-smartbar-right"> <span class="cf-cta">{{creative.cta}}</span> </span> </a> <div class="cf-footer"> <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> <span class="cf-close" data-behavior="close">Close Ad</span> \u2022 <a class="cf-powered-by" href="{{urls.poweredBy}}" target="_blank" rel="sponsored noopener"><em>Ethical</em> ads by CodeFund</a> </div> </div>',initialize:function(e){document.body.prepend(e.container),e.visible&&e.trackImpression()}}},208:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);a(210);t.default={mustache:'<div id="cf" data-template="vertical" data-theme="{{theme}}"> <span class="cf-wrapper"> <a href="{{urls.campaign}}" class="cf-sponsored-by" target="_blank" rel="sponsored noopener"> <span class="cf-img-wrapper"> <img src="{{creative.imageUrls.small}}" alt="{{creative.name}}" border="0" height="125" width="125" class="cf-img"> </span> <span class="cf-text"> <strong>{{creative.headline}}</strong> <span>{{creative.body}}</span> <span class="cf-cta">{{creative.cta}}</span> </span> </a> <a href="{{urls.poweredBy}}" class="cf-powered-by" target="_blank" rel="sponsored noopener"> ethical ad by CodeFund <img src="{{urls.instantImpression}}" data-src="{{urls.impression}}" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </span> </div>',initialize:function(e){e.visible&&e.trackImpression()}}},21:function(e,t,a){e.exports=a.p+"media/images/illustrations/error-404-96758d270fab76cb64df2fcb460f48a5.svg"},210:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"media/images/patterns/pattern2-ac6c7c66deba899d12cde19ac6450215.svg"},23:function(e,t,a){e.exports=a.p+"media/images/pixel-22edb6617e829a61262a0835d85572f7.gif"},24:function(e,t,a){e.exports=a.p+"media/images/placeholders/missing-200x200-dfa7654c03771806a6905e043110ee1b.png"},25:function(e,t,a){e.exports=a.p+"media/images/placeholders/missing-260x200-d10921f32684299316e6e6fac60c417d.png"},26:function(e,t,a){e.exports=a.p+"media/images/placeholders/missing-screenshot-ebb5388b2385b815b3e5a0eb0cd9b979.jpg"},269:function(e,t,a){"use strict";a.r(t);a(175);var n=a(168),s=a.n(n);function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i,o={};(i=a(176)).keys().forEach((function(e){var t=e.split("/")[1];o[t]=i(e).default}));var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,t),this.uplift={},this.perform()}var t,a,n;return t=e,(a=[{key:"close",value:function(){sessionStorage.setItem("codefund","closed"),this.container.remove()}},{key:"dispatch",value:function(e){var t=new Event("codefund");t.detail=e,window.dispatchEvent(t)}},{key:"perform",value:function(){var e=this;return this.visible?this.urls&&this.urls.campaign&&0!==this.urls.campaign.length?this.closed?(console.log("CodeFund ad has been closed by the user."),this.dispatch({status:"closed"})):(this.container.innerHTML=s.a.render(o[this.template].mustache,this),this.container.querySelectorAll("img").forEach((function(e){e.addEventListener("error",(function(e){e.target.setAttribute("data-src-with-error",e.target.src),e.target.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}))})),this.container.querySelectorAll('[data-behavior="close"]').forEach((function(t){t.addEventListener("click",e.close.bind(e))})),o[this.template].initialize(this),void this.applyStickyBehavior()):(console.log("CodeFund does not have an advertiser for you at this time."),this.dispatch({status:"no-advertiser"})):(console.log('CodeFund container element not visible! Please verify an element exists (and is visible) that matches the CSS selector "'.concat(this.selector,'"')),this.dispatch({status:"no-container-element"}))}},{key:"applyStickyBehavior",value:function(){if("sticky"===this.container.dataset.behavior){var e=getComputedStyle(this.container),t=getComputedStyle(this.element);"fixed"!==e.position&&"fixed"!==t.position&&(this.container.style.position="sticky",this.container.hasAttribute("data-bottom")?this.container.style.bottom=this.container.dataset.bottom:this.container.style.top=this.container.dataset.top||0)}}},{key:"trackImpression",value:function(){this.impressionTracked||(this.impressionTracked=!0,this.element.querySelectorAll('img[data-behavior="trackImpression"]').forEach((function(e){e.src=e.dataset.src})),this.dispatch({status:"ok",house:this.fallback}),this.detectUplift(1))}},{key:"trackUplift",value:function(){try{console.log("CodeFund is recording uplift. ".concat(this.urls.uplift));var e=new XMLHttpRequest;e.open("POST",this.urls.uplift),e.send()}catch(t){console.log("CodeFund was unable to record uplift! ".concat(t.message))}}},{key:"verifyUplift",value:function(){void 0!==this.uplift.pixel1&&void 0!==this.uplift.pixel2&&this.uplift.pixel1&&!this.uplift.pixel2&&this.trackUplift(this.urls.uplift)}},{key:"detectUplift",value:function(e){var t=this;if(this.urls.adblock&&0!==this.urls.adblock.length){var a=new XMLHttpRequest;a.onreadystatechange=function(){4===a.readyState&&(a.status>=200&&a.status<300?(1===e&&t.detectUplift(2),t.uplift["pixel"+e]=!0):t.uplift["pixel"+e]=!1,t.verifyUplift())},a.open("GET","".concat(this.urls.adblock,"?ch=").concat(e,"&rnd=").concat(11*Math.random())),a.send()}}},{key:"container",get:function(){return(this.selector&&this.selector.length?document.querySelector(this.selector):null)||document.getElementById("codefund")}},{key:"element",get:function(){return this.container?this.container.querySelector("#cf"):null}},{key:"visible",get:function(){var e=this.container;if(!e)return!1;for(;e;){var t=getComputedStyle(e);if("hidden"===t.visibility)return!1;if("none"===t.display)return!1;e=e.parentElement}return!0}},{key:"closed",get:function(){return"closed"===sessionStorage.getItem("codefund")}}])&&r(t.prototype,a),n&&r(t,n),e}();window.CodeFundAd=c,a(15)},27:function(e,t,a){e.exports=a.p+"media/images/placeholders/sponsor-placeholder-590e67b818d0ab8a85032664291a8d2f.svg"},28:function(e,t,a){e.exports=a.p+"media/images/sponsor-catch-all-f1de9af140c7409cae27688bdc430ff0.svg"},29:function(e,t,a){e.exports=a.p+"media/images/tophat/gitcoin-symbol-dd7cb1fa506c1968c79cb2acc2050318.svg"},30:function(e,t,a){e.exports=a.p+"media/images/tophat/grants-symbol-27781b76f802c1ebd36492b5fe8c941c.svg"},31:function(e,t,a){e.exports=a.p+"media/images/tophat/kudos-symbol-cecef87194487fdccabd4e289d574a01.svg"},32:function(e,t,a){e.exports=a.p+"media/images/tophat/missing-260x200-d10921f32684299316e6e6fac60c417d.png"},33:function(e,t,a){e.exports=a.p+"media/images/tophat/quests-symbol-8f8d864f8d1e24effb91942e3d0d4b11.svg"},36:function(e,t,a){var n,s;s=this,void 0===(n=function(e){!function(e){e.animate=function(e,a,n,s,r,i){if("number"===typeof e&&"number"===typeof a&&"number"===typeof n&&"function"===typeof s){"string"===typeof r&&t[r]&&(r=t[r]),"function"!==typeof r&&(r=t.linear),"function"!==typeof i&&(i=function(){});var o=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},c=!1,l=a-e;s(e);var p=window.performance&&window.performance.now?window.performance.now():+new Date;return o((function t(d){if(!c){var u=(d||+new Date)-p;u>=0&&s(r(u,e,l,n)),u>=0&&u>=n?(s(a),i()):o(t)}})),{cancel:function(){c=!0}}}},e.animateCSS=function(t,a,n,s,r,i,o,c){return e.animate(s,r,i,(function(e){t.style[a]=e+n}),o,c)},e.cancel=function(e){e&&e.cancel()};var t=e.easings={};t.linear=function(e,t,a,n){return a*e/n+t},t.easeInQuad=function(e,t,a,n){return a*(e/=n)*e+t},t.easeOutQuad=function(e,t,a,n){return-a*(e/=n)*(e-2)+t},t.easeInOutQuad=function(e,t,a,n){return(e/=n/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},t.easeInCubic=function(e,t,a,n){return a*(e/=n)*e*e+t},t.easeOutCubic=function(e,t,a,n){return a*((e=e/n-1)*e*e+1)+t},t.easeInOutCubic=function(e,t,a,n){return(e/=n/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},t.easeInQuart=function(e,t,a,n){return a*(e/=n)*e*e*e+t},t.easeOutQuart=function(e,t,a,n){return-a*((e=e/n-1)*e*e*e-1)+t},t.easeInOutQuart=function(e,t,a,n){return(e/=n/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},t.easeInQuint=function(e,t,a,n){return a*(e/=n)*e*e*e*e+t},t.easeOutQuint=function(e,t,a,n){return a*((e=e/n-1)*e*e*e*e+1)+t},t.easeInOutQuint=function(e,t,a,n){return(e/=n/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},t.easeInSine=function(e,t,a,n){return-a*Math.cos(e/n*(Math.PI/2))+a+t},t.easeOutSine=function(e,t,a,n){return a*Math.sin(e/n*(Math.PI/2))+t},t.easeInOutSine=function(e,t,a,n){return-a/2*(Math.cos(Math.PI*e/n)-1)+t},t.easeInExpo=function(e,t,a,n){return 0==e?t:a*Math.pow(2,10*(e/n-1))+t},t.easeOutExpo=function(e,t,a,n){return e==n?t+a:a*(1-Math.pow(2,-10*e/n))+t},t.easeInOutExpo=function(e,t,a,n){return 0==e?t:e==n?t+a:(e/=n/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(2-Math.pow(2,-10*--e))+t},t.easeInCirc=function(e,t,a,n){return-a*(Math.sqrt(1-(e/=n)*e)-1)+t},t.easeOutCirc=function(e,t,a,n){return a*Math.sqrt(1-(e=e/n-1)*e)+t},t.easeInOutCirc=function(e,t,a,n){return(e/=n/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},t.easeInElastic=function(e,t,a,n){var s=0,r=a;if(0==e)return t;if(1==(e/=n))return t+a;if(s||(s=.3*n),r<Math.abs(a)){r=a;var i=s/4}else i=s/(2*Math.PI)*Math.asin(a/r);return-r*Math.pow(2,10*(e-=1))*Math.sin((e*n-i)*(2*Math.PI)/s)+t},t.easeOutElastic=function(e,t,a,n){var s=0,r=a;if(0==e)return t;if(1==(e/=n))return t+a;if(s||(s=.3*n),r<Math.abs(a)){r=a;var i=s/4}else i=s/(2*Math.PI)*Math.asin(a/r);return r*Math.pow(2,-10*e)*Math.sin((e*n-i)*(2*Math.PI)/s)+a+t},t.easeInOutElastic=function(e,t,a,n){var s=0,r=a;if(0==e)return t;if(2==(e/=n/2))return t+a;if(s||(s=n*(.3*1.5)),r<Math.abs(a)){r=a;var i=s/4}else i=s/(2*Math.PI)*Math.asin(a/r);return e<1?r*Math.pow(2,10*(e-=1))*Math.sin((e*n-i)*(2*Math.PI)/s)*-.5+t:r*Math.pow(2,-10*(e-=1))*Math.sin((e*n-i)*(2*Math.PI)/s)*.5+a+t},t.easeInBack=function(e,t,a,n,s){return void 0==s&&(s=1.70158),a*(e/=n)*e*((s+1)*e-s)+t},t.easeOutBack=function(e,t,a,n,s){return void 0==s&&(s=1.70158),a*((e=e/n-1)*e*((s+1)*e+s)+1)+t},t.easeInOutBack=function(e,t,a,n,s){return void 0==s&&(s=1.70158),(e/=n/2)<1?a/2*(e*e*((1+(s*=1.525))*e-s))+t:a/2*((e-=2)*e*((1+(s*=1.525))*e+s)+2)+t},t.easeInBounce=function(e,a,n,s){return n-t.easeOutBounce(s-e,0,n,s)+a},t.easeOutBounce=function(e,t,a,n){return(e/=n)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},t.easeInOutBounce=function(e,a,n,s){return e<s/2?.5*t.easeInBounce(2*e,0,n,s)+a:.5*t.easeOutBounce(2*e-s,0,n,s)+.5*n+a}}(s.TinyAnimate=e)}.apply(t,[t]))||(e.exports=n)}});
//# sourceMappingURL=code_fund_ad-88da4459b326c77fb0ce.js.map