(self.webpackChunkmyfol=self.webpackChunkmyfol||[]).push([[989],{395:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var l=r(a(7294)),n=r(a(1932)),c=r(a(2728)),u=a(970),i=function(e){return l.default.useContext(u.OptionsContext).useAutoGen?l.default.createElement(n.default,e):l.default.createElement(c.default,e)};t.default=i},1932:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var l=r(a(434)),n=r(a(7071)),c=r(a(7294)),u=r(a(5697)),i=a(1597),s=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],m=function(e){var t=e.title,a=e.crumbs,r=e.crumbLabel,u=e.crumbSeparator,m=e.disableLinks,d=e.hiddenCrumbs,o=(0,n.default)(e,s);return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return d.includes(e.pathname)?null:c.default.createElement(c.default.Fragment,{key:t+"-"+e.pathname},!m.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement(i.Link,(0,l.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},o),r&&t===a.length-1?r:e.crumbLabel)),m.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement("span",(0,l.default)({className:"breadcrumb__link__disabled"},o),r&&t===a.length-1?r:e.crumbLabel)),t===a.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},u))})))))};m.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},m.propTypes={title:u.default.string,crumbSeparator:u.default.oneOfType([u.default.string,u.default.element]),crumbs:u.default.arrayOf(u.default.shape({location:u.default.shape(),pathname:u.default.string.isRequired})).isRequired,crumbLabel:u.default.string,disableLinks:u.default.arrayOf(u.default.string),hiddenCrumbs:u.default.arrayOf(u.default.string)};var d=m;t.default=d},2728:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var l=r(a(434)),n=r(a(7071)),c=r(a(7294)),u=r(a(5697)),i=a(1597),s=a(970),m=r(a(1775)),d=["title","location","crumbLabel","crumbSeparator"],o=function(e){var t=e.title,a=e.location,r=e.crumbLabel,u=e.crumbSeparator,o=(0,n.default)(e,d),f=c.default.useContext(s.OptionsContext).usePathPrefix,b=(0,m.default)({location:(0,l.default)({},a,{pathname:f?a.pathname.replace(new RegExp("^"+f),""):a.pathname}),crumbLabel:r,crumbSeparator:u}).crumbs,p=void 0===b?[]:b;return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},p.map((function(e,t){return c.default.createElement("li",{className:"breadcrumb__item",key:t},c.default.createElement(i.Link,(0,l.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===p.length-1?"page":null},o),e.crumbLabel),t===p.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};o.defaultProps={title:"",crumbSeparator:" / "},o.propTypes={location:u.default.shape().isRequired,crumbLabel:u.default.string.isRequired,title:u.default.string,crumbSeparator:u.default.string};var f=o;t.default=f},3172:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0;var l=r(a(395));t.Breadcrumb=l.default;var n=r(a(1932));t.AutoGenCrumb=n.default;var c=a(2623);t.BreadcrumbContext=c.BreadcrumbContext,t.BreadcrumbConsumer=c.BreadcrumbConsumer,t.BreadcrumbProvider=c.BreadcrumbProvider;var u=r(a(1775));t.useBreadcrumb=u.default},1775:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var l=r(a(7294)),n=a(2623),c=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,c=l.default.useContext(n.BreadcrumbContext),u=c.crumbs,i=c.updateCrumbs;return l.default.useEffect((function(){i({location:t,crumbLabel:a,crumbSeparator:r})}),[t,a,r,i]),{crumbs:u}};t.default=c},3845:function(e,t,a){"use strict";var r=a(3172);t.aG=r.Breadcrumb,r.BreadcrumbContext,r.BreadcrumbConsumer,r.BreadcrumbProvider,r.useBreadcrumb,r.AutoGenCrumb},782:function(e,t,a){"use strict";var r=a(8029),l=a.n(r),n=a(1804),c=a.n(n),u=a(7294),i=a(1597);t.Z=function(e){var t=e.tag;return u.createElement("div",{key:t.fieldValue,className:"link-primary text-neutral"},u.createElement(i.Link,{to:"/tags/"+c()(t.fieldValue)+"/"},l()(t.fieldValue),u.createElement("span",{className:"badge bg-amber-300 border-amber-300 text-gray-800 transform -translate-y-1 text-xs ml-1"},t.totalCount)))}},668:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return p},default:function(){return b}});var r=a(8029),l=a.n(r),n=a(9138),c=a.n(n),u=a(7294),i=a(1597),s=a(3845),m=a(2989),d=function(e){var t=e.post;return u.createElement("div",{className:"my-4 flex flex-col justify-start text-gray-400"},u.createElement("h5",{className:"link-primary text-gray-500 font-semibold"},u.createElement(i.Link,{to:"/blog"+t.fields.slug},t.frontmatter.title)),u.createElement("small",null,t.frontmatter.date))},o=a(782),f=a(1619),b=function(e){var t=e.data,a=t.siteSearchIndex,r=t.recentPosts.edges,n=t.tagsPosts.group,b=t.site.meta,p=t.markdownRemark,v=p.frontmatter,g=p.html,x=(p.excerpt,p.headings),E=e.pageContext,h=E.breadcrumb.crumbs,N=E.previous,y=E.next,k=r.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return u.createElement(d,{key:e.node.id,post:e.node})})),_=n.map((function(e){return u.createElement(o.Z,{key:e.fieldValue,tag:e})}));return u.createElement("div",null,u.createElement("div",{className:"px-4 lg:px-16 absolute top-0 z-10 bg-zinc-100 bg-opacity-70 w-full"},u.createElement(m.Z,{menuLinks:b.menuLinks,searchData:a.index})),u.createElement("div",{className:"mx-4 mt-16 pt-2 lg:mx-16 lg:grid grid-cols-10 gap-6"},u.createElement("div",{className:"col-span-8 flex flex-col-reverse lg:grid grid-cols-8 gap-6"},u.createElement("div",{className:"col-span-2 mx-2 mt-8 lg:mt-0"},u.createElement("h3",null,"Recent Post"),u.createElement("div",null,k)),u.createElement("div",{className:"col-span-6 "},u.createElement("di",{className:"flex rounded-lg py-1 leading-4 tranform -translate-x-1"},u.createElement("div",{className:"md:hidden"},u.createElement(s.aG,{className:"text-xs font-light pl-[9px] border-l border-zinc-400",crumbs:h,crumbSeparator:"",crumbLabel:c()(v.title,{length:30,omission:" ..."})})),u.createElement("div",{className:"hidden md:block"},u.createElement(s.aG,{className:"text-base font-light pl-[10px] border-l border-zinc-400",crumbs:h,crumbSeparator:"",crumbLabel:c()(v.title,{length:70,omission:" ..."}),"border-t-0":!0,"border-l-0":!0}))),u.createElement("div",{className:"flex flex-col shadow-lg border border-zinc-300 border-t-0 border-l-0 p-4 mt-2 "},u.createElement("div",null,u.createElement("div",{className:"mb-4 px-2 mx-2 pb-6 pt-2 lg:pt-6 border-b border-slate-300 flex gap-4 flex-col lg:flex-row-reverse lg:justify-end"},u.createElement("div",{className:"flex flex-col lg:items-end w-full"},u.createElement("h3",{className:"lg:text-3xl"},v.title),u.createElement("div",{className:"flex gap-1"},v.tags.map((function(e){return u.createElement("div",{key:e},u.createElement(i.Link,{to:"/tags/"+e},u.createElement("small",{className:"my-1 italic bg-yellow-300 border-amber-300 text-gray-800 badge"},l()(e))))})))),u.createElement("div",{className:"divider lg:divider-horizontal my-0 lg:mx-1"}),u.createElement("div",{className:"flex lg:flex-col flex-col-reverse justify-center items-center lg:items-end lg:text-right"},u.createElement("div",{className:"font-edu capitalize"},v.author?v.author:b.author),u.createElement("h5",null,v.date))),u.createElement("div",{className:"lg:hidden mt-6 bg-gray-100 rounded-lg px-4 py-3"},u.createElement("div",{className:"font-semibold"},"Daftar Isi"),u.createElement("ul",{className:"text-blue-400 text-[15px]"},x.map((function(e){return u.createElement("li",{key:e.id,className:"hover:text-gray-500"},u.createElement(i.Link,{activeClassName:"bg-zinc-400 text-white",partiallyActive:!0,to:"#"+e.id},e.value))})))),u.createElement("div",{className:"mx-2",dangerouslySetInnerHTML:{__html:g}})),u.createElement("div",{className:"p-4 rounded-lg border mt-4 space-y-2"},u.createElement("p",null,"Jika Anda punya pertanyaan lebih lanjut tentang artikel ini atau ingin ",u.createElement("em",null,"request")," artikel lain."),u.createElement("p",null,"Silakan hubungi:"),u.createElement("div",{className:"flex w-full justify-around py-6"},u.createElement(i.Link,{to:"mailto:samuarrif@gmail.com",target:"_blank",className:"flex gap-2"},u.createElement("svg",{className:"w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"52 42 88 66"},u.createElement("path",{fill:"#4285f4",d:"M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"}),u.createElement("path",{fill:"#34a853",d:"M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"}),u.createElement("path",{fill:"#fbbc04",d:"M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"}),u.createElement("path",{fill:"#ea4335",d:"M72 74V48l24 18 24-18v26L96 92"}),u.createElement("path",{fill:"#c5221f",d:"M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"})),"Gmail"),u.createElement("div",{className:"divider divider-horizontal lg:mx-1"}),u.createElement(i.Link,{to:"https://wa.me/6285159606776?text=Hello+Samsul+Muarrif",target:"_blank",className:"flex gap-2"},u.createElement("svg",{className:"w-5",viewBox:"0 0 512 512"},u.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#25d366"}),u.createElement("path",{fill:"#25d366",stroke:"#fff","stroke-width":"26",d:"M123 393l14-65a138 138 0 1150 47z"}),u.createElement("path",{fill:"#fff",d:"M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"})),"Whatsapp"))),u.createElement("div",{className:"mt-8 mx-1 space-x-2 grid grid-flow-col grid-cols-2"},u.createElement("div",{className:"pr-4"},N&&u.createElement(i.Link,{to:"/blog"+N.fields.slug},u.createElement("div",{className:"flex flex-col items-start link-primary text-neutral"},u.createElement("span",null,"❮ Previous"),u.createElement("h4",null,N.frontmatter.title)))),u.createElement("div",null,y&&u.createElement(i.Link,{to:"/blog"+y.fields.slug},u.createElement("div",{className:"flex flex-col items-end link-primary text-neutral"},u.createElement("span",null,"Next ❯"),u.createElement("h4",{className:"text-right"},y.frontmatter.title)))))))),u.createElement("div",{className:"col-span-2 mx-2 mt-4 lg:mt-0"},u.createElement("div",{className:"-mx-2"},u.createElement("h3",null,"Tags"),u.createElement("div",{className:"flex flex-wrap gap-x-2"},_)),u.createElement("div",{className:"hidden lg:block sticky top-3 mt-6 bg-gray-100 rounded-lg -mx-4 px-4 py-3"},u.createElement("div",{className:"font-semibold"},"Daftar Isi"),u.createElement("ul",{className:"text-blue-400 text-[15px]"},x.map((function(e){return u.createElement("li",{key:e.id,className:"hover:text-gray-500"},u.createElement(i.Link,{activeClassName:"bg-zinc-400 text-white",partiallyActive:!0,to:"#"+e.id},e.value))})))))),u.createElement("div",null,u.createElement(f.Z,{socials:b.socials,siteTitle:b.title})))},p=function(e){var t=e.data,a=t.site.meta,r=t.markdownRemark,l=r.frontmatter,n=r.excerpt;return u.createElement(u.Fragment,null,u.createElement("title",null,"Blogs | "+l.title+" | "+a.title),u.createElement("meta",{name:"description",content:n}),u.createElement("meta",{name:"keywords",content:l.tags}))}},8983:function(e,t,a){var r=a(371)("length");e.exports=r},3933:function(e,t,a){var r=a(4239),l=a(7005);e.exports=function(e){return l(e)&&"[object RegExp]"==r(e)}},371:function(e){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},7561:function(e,t,a){var r=a(7990),l=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(l,""):e}},7518:function(e){e.exports=function(e){return function(t){return e(t)}}},1167:function(e,t,a){e=a.nmd(e);var r=a(1957),l=t&&!t.nodeType&&t,n=l&&e&&!e.nodeType&&e,c=n&&n.exports===l&&r.process,u=function(){try{var e=n&&n.require&&n.require("util").types;return e||c&&c.binding&&c.binding("util")}catch(t){}}();e.exports=u},8016:function(e,t,a){var r=a(8983),l=a(2689),n=a(1903);e.exports=function(e){return l(e)?n(e):r(e)}},7990:function(e){var t=/\s/;e.exports=function(e){for(var a=e.length;a--&&t.test(e.charAt(a)););return a}},1903:function(e){var t="[\\ud800-\\udfff]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",l="[^\\ud800-\\udfff]",n="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+a+"|"+r+")"+"?",i="[\\ufe0e\\ufe0f]?",s=i+u+("(?:\\u200d(?:"+[l,n,c].join("|")+")"+i+u+")*"),m="(?:"+[l+a+"?",a,n,c,t].join("|")+")",d=RegExp(r+"(?="+r+")|"+m+s,"g");e.exports=function(e){for(var t=d.lastIndex=0;d.test(e);)++t;return t}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},6347:function(e,t,a){var r=a(3933),l=a(7518),n=a(1167),c=n&&n.isRegExp,u=c?l(c):r;e.exports=u},1804:function(e,t,a){var r=a(5393)((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=r},8601:function(e,t,a){var r=a(4841),l=1/0;e.exports=function(e){return e?(e=r(e))===l||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:function(e,t,a){var r=a(8601);e.exports=function(e){var t=r(e),a=t%1;return t==t?a?t-a:t:0}},4841:function(e,t,a){var r=a(7561),l=a(3218),n=a(3448),c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var a=u.test(e);return a||i.test(e)?s(e.slice(2),a?2:8):c.test(e)?NaN:+e}},9138:function(e,t,a){var r=a(531),l=a(180),n=a(2689),c=a(3218),u=a(6347),i=a(8016),s=a(3140),m=a(554),d=a(9833),o=/\w*$/;e.exports=function(e,t){var a=30,f="...";if(c(t)){var b="separator"in t?t.separator:b;a="length"in t?m(t.length):a,f="omission"in t?r(t.omission):f}var p=(e=d(e)).length;if(n(e)){var v=s(e);p=v.length}if(a>=p)return e;var g=a-i(f);if(g<1)return f;var x=v?l(v,0,g).join(""):e.slice(0,g);if(void 0===b)return x+f;if(v&&(g+=x.length-g),u(b)){if(e.slice(g).search(b)){var E,h=x;for(b.global||(b=RegExp(b.source,d(o.exec(b))+"g")),b.lastIndex=0;E=b.exec(h);)var N=E.index;x=x.slice(0,void 0===N?g:N)}}else if(e.indexOf(r(b),g)!=g){var y=x.lastIndexOf(b);y>-1&&(x=x.slice(0,y))}return x+f}},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c097cca85289dd60737b.js.map