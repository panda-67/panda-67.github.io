(self.webpackChunkmyfol=self.webpackChunkmyfol||[]).push([[493],{9422:function(e,t,r){"use strict";var a=r(7713);t.__esModule=!0,t.default=void 0;var n=a(r(9474)),u=a(r(1185)),l=a(r(2959)),c=r(8387),i=function(e){return n.default.useContext(c.OptionsContext).useAutoGen?n.default.createElement(u.default,e):n.default.createElement(l.default,e)};t.default=i},1185:function(e,t,r){"use strict";var a=r(7713);t.__esModule=!0,t.default=void 0;var n=a(r(5797)),u=a(r(8340)),l=a(r(9474)),c=a(r(2736)),i=r(305),s=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],o=function(e){var t=e.title,r=e.crumbs,a=e.crumbLabel,c=e.crumbSeparator,o=e.disableLinks,f=e.hiddenCrumbs,d=(0,u.default)(e,s);return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},r.map((function(e,t){return f.includes(e.pathname)?null:l.default.createElement(l.default.Fragment,{key:t+"-"+e.pathname},!o.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(i.Link,(0,n.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===r.length-1?"page":null},d),a&&t===r.length-1?a:e.crumbLabel)),o.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,n.default)({className:"breadcrumb__link__disabled"},d),a&&t===r.length-1?a:e.crumbLabel)),t===r.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},c))})))))};o.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},o.propTypes={title:c.default.string,crumbSeparator:c.default.oneOfType([c.default.string,c.default.element]),crumbs:c.default.arrayOf(c.default.shape({location:c.default.shape(),pathname:c.default.string.isRequired})).isRequired,crumbLabel:c.default.string,disableLinks:c.default.arrayOf(c.default.string),hiddenCrumbs:c.default.arrayOf(c.default.string)};var f=o;t.default=f},2959:function(e,t,r){"use strict";var a=r(7713);t.__esModule=!0,t.default=void 0;var n=a(r(5797)),u=a(r(8340)),l=a(r(9474)),c=a(r(2736)),i=r(305),s=r(8387),o=a(r(1925)),f=["title","location","crumbLabel","crumbSeparator"],d=function(e){var t=e.title,r=e.location,a=e.crumbLabel,c=e.crumbSeparator,d=(0,u.default)(e,f),m=l.default.useContext(s.OptionsContext).usePathPrefix,b=(0,o.default)({location:(0,n.default)({},r,{pathname:m?r.pathname.replace(new RegExp("^"+m),""):r.pathname}),crumbLabel:a,crumbSeparator:c}).crumbs,p=void 0===b?[]:b;return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},p.map((function(e,t){return l.default.createElement("li",{className:"breadcrumb__item",key:t},l.default.createElement(i.Link,(0,n.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===p.length-1?"page":null},d),e.crumbLabel),t===p.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};d.defaultProps={title:"",crumbSeparator:" / "},d.propTypes={location:c.default.shape().isRequired,crumbLabel:c.default.string.isRequired,title:c.default.string,crumbSeparator:c.default.string};var m=d;t.default=m},39:function(e,t,r){"use strict";var a=r(7713);t.__esModule=!0;var n=a(r(9422));t.Breadcrumb=n.default;var u=a(r(1185));t.AutoGenCrumb=u.default;var l=r(9448);t.BreadcrumbContext=l.BreadcrumbContext,t.BreadcrumbConsumer=l.BreadcrumbConsumer,t.BreadcrumbProvider=l.BreadcrumbProvider;var c=a(r(1925));t.useBreadcrumb=c.default},1925:function(e,t,r){"use strict";var a=r(7713);t.__esModule=!0,t.default=void 0;var n=a(r(9474)),u=r(9448),l=function(e){var t=e.location,r=e.crumbLabel,a=e.crumbSeparator,l=n.default.useContext(u.BreadcrumbContext),c=l.crumbs,i=l.updateCrumbs;return n.default.useEffect((function(){i({location:t,crumbLabel:r,crumbSeparator:a})}),[t,r,a,i]),{crumbs:c}};t.default=l},9742:function(e,t,r){"use strict";var a=r(39);t.Qp=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},4124:function(e,t,r){"use strict";var a=r(9474),n=r(305);t.A=e=>{let{post:t}=e;return a.createElement("div",{className:"my-4 flex flex-col justify-start text-gray-400"},a.createElement("h5",{className:"link-primary text-gray-500 font-semibold"},a.createElement(n.Link,{to:`/blog${t.fields.slug}`},t.frontmatter.title)),a.createElement("div",{"aria-label":"date",className:"text-sm"},t.frontmatter.date),a.createElement("p",null,t.excerpt))}},6767:function(e,t,r){"use strict";var a=r(3112),n=r.n(a),u=r(8721),l=r.n(u),c=r(9474),i=r(305);t.A=e=>{let{tag:t}=e;return c.createElement("div",{"aria-label":"tags",key:t.fieldValue},c.createElement(i.Link,{to:`/tags/${l()(t.fieldValue)}/`,className:"hover:text-sky-500 text-current"},n()(t.fieldValue),c.createElement("span",{className:"badge text-neutral-focus bg-neutral-content border-neutral-focus transform -translate-y-1 text-xs ml-1"},t.totalCount)))}},1627:function(e,t,r){var a=r(1373)("length");e.exports=a},4709:function(e,t,r){var a=r(6624),n=r(2050);e.exports=function(e){return n(e)&&"[object RegExp]"==a(e)}},1373:function(e){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},3480:function(e,t,r){var a=r(8976),n=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(n,""):e}},8877:function(e){e.exports=function(e){return function(t){return e(t)}}},6273:function(e,t,r){e=r.nmd(e);var a=r(8928),n=t&&!t.nodeType&&t,u=n&&e&&!e.nodeType&&e,l=u&&u.exports===n&&a.process,c=function(){try{var e=u&&u.require&&u.require("util").types;return e||l&&l.binding&&l.binding("util")}catch(t){}}();e.exports=c},3569:function(e,t,r){var a=r(1627),n=r(8138),u=r(8367);e.exports=function(e){return n(e)?u(e):a(e)}},8976:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},8367:function(e){var t="\\ud800-\\udfff",r="["+t+"]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",n="\\ud83c[\\udffb-\\udfff]",u="[^"+t+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",i="(?:"+a+"|"+n+")"+"?",s="[\\ufe0e\\ufe0f]?",o=s+i+("(?:\\u200d(?:"+[u,l,c].join("|")+")"+s+i+")*"),f="(?:"+[u+a+"?",a,l,c,r].join("|")+")",d=RegExp(n+"(?="+n+")|"+f+o,"g");e.exports=function(e){for(var t=d.lastIndex=0;d.test(e);)++t;return t}},7717:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},2399:function(e,t,r){var a=r(4709),n=r(8877),u=r(6273),l=u&&u.isRegExp,c=l?n(l):a;e.exports=c},8721:function(e,t,r){var a=r(5467)((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}));e.exports=a},7456:function(e,t,r){var a=r(6086),n=1/0;e.exports=function(e){return e?(e=a(e))===n||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},8825:function(e,t,r){var a=r(7456);e.exports=function(e){var t=a(e),r=t%1;return t==t?r?t-r:t:0}},6086:function(e,t,r){var a=r(3480),n=r(7717),u=r(6770),l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(u(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var r=c.test(e);return r||i.test(e)?s(e.slice(2),r?2:8):l.test(e)?NaN:+e}},2540:function(e,t,r){var a=r(9020),n=r(3978),u=r(8138),l=r(7717),c=r(2399),i=r(3569),s=r(8752),o=r(8825),f=r(8382),d=/\w*$/;e.exports=function(e,t){var r=30,m="...";if(l(t)){var b="separator"in t?t.separator:b;r="length"in t?o(t.length):r,m="omission"in t?a(t.omission):m}var p=(e=f(e)).length;if(u(e)){var v=s(e);p=v.length}if(r>=p)return e;var x=r-i(m);if(x<1)return m;var _=v?n(v,0,x).join(""):e.slice(0,x);if(void 0===b)return _+m;if(v&&(x+=_.length-x),c(b)){if(e.slice(x).search(b)){var g,h=_;for(b.global||(b=RegExp(b.source,f(d.exec(b))+"g")),b.lastIndex=0;g=b.exec(h);)var E=g.index;_=_.slice(0,void 0===E?x:E)}}else if(e.indexOf(a(b),x)!=x){var y=_.lastIndexOf(b);y>-1&&(_=_.slice(0,y))}return _+m}},8340:function(e){e.exports=function(e,t){if(null==e)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.includes(a))continue;r[a]=e[a]}return r},e.exports.__esModule=!0,e.exports.default=e.exports},6410:function(e,t,r){"use strict";r.d(t,{RP:function(){return u},xA:function(){return c}});var a=r(9474);const n=a.createContext({});function u(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||l:u(e),a.createElement(n.Provider,{value:c},t)}}}]);
//# sourceMappingURL=280b979eb3ce619832e0fdde0d02d32c4eaa7350-4a48dd01e0fd65b8a46d.js.map