(self.webpackChunkmyfol=self.webpackChunkmyfol||[]).push([[139],{9422:function(e,t,r){"use strict";var i=r(7713);t.__esModule=!0,t.default=void 0;var a=i(r(9474)),l=i(r(1185)),n=i(r(2959)),c=r(8387),s=function(e){return a.default.useContext(c.OptionsContext).useAutoGen?a.default.createElement(l.default,e):a.default.createElement(n.default,e)};t.default=s},1185:function(e,t,r){"use strict";var i=r(7713);t.__esModule=!0,t.default=void 0;var a=i(r(5797)),l=i(r(8340)),n=i(r(9474)),c=i(r(2736)),s=r(305),o=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],m=function(e){var t=e.title,r=e.crumbs,i=e.crumbLabel,c=e.crumbSeparator,m=e.disableLinks,d=e.hiddenCrumbs,u=(0,l.default)(e,o);return n.default.createElement(n.default.Fragment,null,t&&n.default.createElement("span",{className:"breadcrumb__title"},t),n.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},n.default.createElement("ol",{className:"breadcrumb__list"},r.map((function(e,t){return d.includes(e.pathname)?null:n.default.createElement(n.default.Fragment,{key:t+"-"+e.pathname},!m.includes(e.pathname)&&n.default.createElement("li",{className:"breadcrumb__list__item"},n.default.createElement(s.Link,(0,a.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===r.length-1?"page":null},u),i&&t===r.length-1?i:e.crumbLabel)),m.includes(e.pathname)&&n.default.createElement("li",{className:"breadcrumb__list__item"},n.default.createElement("span",(0,a.default)({className:"breadcrumb__link__disabled"},u),i&&t===r.length-1?i:e.crumbLabel)),t===r.length-1?null:n.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},c))})))))};m.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},m.propTypes={title:c.default.string,crumbSeparator:c.default.oneOfType([c.default.string,c.default.element]),crumbs:c.default.arrayOf(c.default.shape({location:c.default.shape(),pathname:c.default.string.isRequired})).isRequired,crumbLabel:c.default.string,disableLinks:c.default.arrayOf(c.default.string),hiddenCrumbs:c.default.arrayOf(c.default.string)};var d=m;t.default=d},2959:function(e,t,r){"use strict";var i=r(7713);t.__esModule=!0,t.default=void 0;var a=i(r(5797)),l=i(r(8340)),n=i(r(9474)),c=i(r(2736)),s=r(305),o=r(8387),m=i(r(1925)),d=["title","location","crumbLabel","crumbSeparator"],u=function(e){var t=e.title,r=e.location,i=e.crumbLabel,c=e.crumbSeparator,u=(0,l.default)(e,d),h=n.default.useContext(o.OptionsContext).usePathPrefix,f=(0,m.default)({location:(0,a.default)({},r,{pathname:h?r.pathname.replace(new RegExp("^"+h),""):r.pathname}),crumbLabel:i,crumbSeparator:c}).crumbs,b=void 0===f?[]:f;return n.default.createElement(n.default.Fragment,null,t&&n.default.createElement("span",{className:"breadcrumb__title"},t),n.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},n.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(e,t){return n.default.createElement("li",{className:"breadcrumb__item",key:t},n.default.createElement(s.Link,(0,a.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===b.length-1?"page":null},u),e.crumbLabel),t===b.length-1?null:n.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};u.defaultProps={title:"",crumbSeparator:" / "},u.propTypes={location:c.default.shape().isRequired,crumbLabel:c.default.string.isRequired,title:c.default.string,crumbSeparator:c.default.string};var h=u;t.default=h},39:function(e,t,r){"use strict";var i=r(7713);t.__esModule=!0;var a=i(r(9422));t.Breadcrumb=a.default;var l=i(r(1185));t.AutoGenCrumb=l.default;var n=r(9448);t.BreadcrumbContext=n.BreadcrumbContext,t.BreadcrumbConsumer=n.BreadcrumbConsumer,t.BreadcrumbProvider=n.BreadcrumbProvider;var c=i(r(1925));t.useBreadcrumb=c.default},1925:function(e,t,r){"use strict";var i=r(7713);t.__esModule=!0,t.default=void 0;var a=i(r(9474)),l=r(9448),n=function(e){var t=e.location,r=e.crumbLabel,i=e.crumbSeparator,n=a.default.useContext(l.BreadcrumbContext),c=n.crumbs,s=n.updateCrumbs;return a.default.useEffect((function(){s({location:t,crumbLabel:r,crumbSeparator:i})}),[t,r,i,s]),{crumbs:c}};t.default=n},9742:function(e,t,r){"use strict";var i=r(39);t.Qp=i.Breadcrumb,i.BreadcrumbContext,i.BreadcrumbConsumer,i.BreadcrumbProvider,i.useBreadcrumb,i.AutoGenCrumb},3372:function(e,t,r){"use strict";r.d(t,{A:function(){return o}});var i=r(9474),a=r(9742),l=r(305),n=r(9932);var c=e=>{let{href:t,children:r}=e;return i.createElement(l.Link,{to:t,className:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:text-2xl focus:outline-none focus:text-gray-700 focus:border-gray-300 transition-all duration-70 ease-in-out delay-80",activeClassName:"inline-flex items-center px-1 pt-1 pb-2 border-b-2 text-2xl leading-5 text-current focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out",activeStyle:{borderColor:"orange"}},r)},s=r(4488);var o=function(e){let{bread:t,children:o}=e;return i.createElement(l.StaticQuery,{query:"2862787750",render:e=>i.createElement(s.A,null,i.createElement("div",{style:{margin:"0 auto",padding:"0"}},i.createElement("div",{className:"mx-6 md:mx-10 lg:mx-20"},i.createElement(a.Qp,{className:"text-base font-light font-sans capitalize pl-[9px] border-l border-zinc-400",crumbs:t,crumbSeparator:""})),i.createElement("div",{className:"lg:grid grid-flow-col grid-cols-10 font-edu md:mx-4 lg:mx-12"},i.createElement("ul",{className:"lg:hidden flex justify-start md:justify-start mx-8 gap-4 my-4"},e.site.meta.aboutPath.map((e=>i.createElement("li",{key:e.name},i.createElement(l.Link,{className:"btn btn-xs btn-outline font-sans border-zinc-400 font-light capitalize",activeClassName:"bg-zinc-400 text-white font-medium",to:`/about${e.link}`},e.name))))),i.createElement("div",{className:"col-span-8"},o),i.createElement("div",{className:"hidden h-full col-span-2 pl-4 lg:flex flex-col items-center"},i.createElement("div",{className:"sticky top-20"},i.createElement("figure",{className:" h-48"},i.createElement(n.S,{src:"../images/icon.svg",title:"Samsul Muarrif",alt:"Profile",width:130,__imageData:r(755)})),i.createElement("ul",{className:"flex flex-col gap-2 text-lg text-center font-medium font-edu"},e.site.meta.aboutPath.map((e=>i.createElement("li",{key:e.name,className:"capitalize w-full"},i.createElement(c,{href:`/about${e.link}`},e.name))))))))))})}},9592:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return c},default:function(){return n}});var i=r(9474),a=r(3372),l=r(7859);function n(e){let{pageContext:{breadcrumb:{crumbs:t}}}=e;return i.createElement(a.A,{bread:t},i.createElement("div",{className:"h-max"},i.createElement("div",{className:"m-10 space-y-10 flex flex-col items-center"},i.createElement("div",{className:"w-40"},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 52 52",enableBackground:"new 0 0 52 52",className:"fill-zinc-600"},i.createElement("g",{display:"none"},i.createElement("path",{display:"inline",opacity:"0.2",enableBackground:"new",d:"M0,0v52h52V0H0z M49.9,49.9H2.1V2.1h47.8   C49.9,2.1,49.9,49.9,49.9,49.9z"})),i.createElement("g",{display:"none"},i.createElement("rect",{x:"2",y:"2",display:"inline",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"48"})),i.createElement("g",{display:"none"},i.createElement("g",{display:"inline",opacity:"0.5"},i.createElement("line",{fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",x1:"50",y1:"2",x2:"2",y2:"50"}),i.createElement("line",{fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",x1:"2",y1:"2",x2:"49.9",y2:"50"}),i.createElement("rect",{x:"2",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"4",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"6",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"8",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"10",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"12",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"14",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"16",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"18",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"20",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"22",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"24",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"26",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"28",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"30",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"32",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"34",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"36",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"38",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"40",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"42",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"44",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"46",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"48",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"2",height:"48"}),i.createElement("rect",{x:"2",y:"48",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"46",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"44",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"42",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"40",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"38",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"36",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"34",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"32",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"30",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"28",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"26",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"24",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"22",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"20",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"18",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"16",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"14",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"12",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"10",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"8",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"6",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"4",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}),i.createElement("rect",{x:"2",y:"2",fill:"none",strokeWidth:"0.25",strokeMiterlimit:"10",width:"48",height:"2"}))),i.createElement("g",null,i.createElement("path",{d:"M25.8,26.7c-1.2,0.1-2.3-0.4-3.5-0.8c-6.3-2.1-12.7-4.2-19-6.3c-0.4-0.2-0.7-0.3-1-0.6   c-0.4-0.3-0.4-0.7,0-1c0.3-0.2,0.7-0.5,1.1-0.6c6.8-2,13.5-4,20.3-6.1c1.5-0.5,3.1-0.5,4.7,0c6.7,2,13.4,4,20.1,6   c0.4,0.2,0.8,0.3,1.2,0.6c0.5,0.3,0.5,0.8,0,1.1c-0.3,0.2-0.6,0.4-1,0.5C42,21.7,35.3,24,28.5,26.2C27.6,26.6,26.8,26.7,25.8,26.7z   "}),i.createElement("path",{d:"M12.5,27c-1-0.2-1.2,0.4-1.2,0.9c0,2.6,0,5.1,0,7.6c0,0.9,0.3,1.4,0.9,2c0.2,0.2,0.5,0.4,0.7,0.6   c1.6,1.1,3.5,1.8,5.4,2.3c3.8,1,7.6,1.2,11.5,0.7c2.5-0.3,5-1,7.3-2c1-0.5,2-1,2.7-1.8c0.5-0.5,0.7-1,0.6-1.7   c0.1-2.4,0.1-4.9,0.1-7.4c0-1.4-1-1.2-1.4-1.1c-3.5,1.2-7.2,2.3-10.7,3.5c-1.8,0.6-3.5,0.6-5.2,0L12.5,27z"}),i.createElement("path",{d:"M45.9,24.7c-0.3,0.1-0.4,0.2-0.4,0.6c0,2.3,0,4.5,0,6.8c0,0.2-0.1,0.5-0.2,0.7c-0.5,1.2-1,2.4-1.4,3.6   c-0.4,1.1-0.2,2.3,0.6,3.1c0.2,0.3,0.6,0.6,0.9,0.8c0.3,0.3,0.8,0.4,1.2,0.5c0.7,0.1,1.3-0.3,1.8-0.7c0.2-0.2,0.5-0.4,0.7-0.7   c0.6-0.8,0.7-1.8,0.5-2.7c-0.3-1.4-0.9-2.6-1.5-3.8c-0.2-0.2-0.2-0.6-0.2-0.8c0-2.5,0-4.9,0-7.4c0-0.5-0.4-0.4-0.6-0.3L45.9,24.7z"})))),i.createElement("div",{className:"text-center text-zinc-700 font-semibold"},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://unsyiah.ac.id"},i.createElement("h2",{className:"text-3xl tracking-wide font-teko"},"Universitas Syiah Kuala")),i.createElement("h4",{className:"text-lg tracking-tighter"},"Fakultas Matematika dan Ilmu Pengetahuan Alam"),i.createElement("h4",{className:"text-xl font-serif"},"Jurusan Biologi")),i.createElement("div",{className:"text-center max-w-2xl"},i.createElement("p",{className:"font-light"},i.createElement("strong",{className:"font-medium"},"Thesis Title:")," Detection of Avian Influenza Virus H5N1 on Laying Hens (Layer) in Aceh Besar by the method of RT-PCR (Reverse Transcriptase Polymerase Chain Reaction).",i.createElement("br",null),"GPA: 3.4 / 4")))))}function c(){const{meta:e}=(0,l.Q)();return i.createElement(i.Fragment,null,i.createElement("title",null,"Education | ",e.title),i.createElement("meta",{name:"keywords",content:"resume, portfolio, profile"}),i.createElement("meta",{name:"description",content:"Whole thing about my school."}))}},8340:function(e){e.exports=function(e,t){if(null==e)return{};var r={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.includes(i))continue;r[i]=e[i]}return r},e.exports.__esModule=!0,e.exports.default=e.exports},755:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/74a3a66d7d20ec1b40adb197606e1e14/65a17/icon.svg","srcSet":"/static/74a3a66d7d20ec1b40adb197606e1e14/c0e7f/icon.svg 27w,\\n/static/74a3a66d7d20ec1b40adb197606e1e14/16a0c/icon.svg 55w,\\n/static/74a3a66d7d20ec1b40adb197606e1e14/65a17/icon.svg 109w","sizes":"(min-width: 109px) 109px, 100vw"},"sources":[{"srcSet":"/static/74a3a66d7d20ec1b40adb197606e1e14/222d5/icon.webp 27w,\\n/static/74a3a66d7d20ec1b40adb197606e1e14/14c73/icon.webp 55w,\\n/static/74a3a66d7d20ec1b40adb197606e1e14/db833/icon.webp 109w","type":"image/webp","sizes":"(min-width: 109px) 109px, 100vw"}]},"width":130,"height":172.9357798165138}')}}]);
//# sourceMappingURL=component---src-pages-about-education-js-105d0d27bafbb2332cbd.js.map