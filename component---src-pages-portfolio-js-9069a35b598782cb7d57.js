(self.webpackChunkmyfol=self.webpackChunkmyfol||[]).push([[25],{395:function(e,a,t){"use strict";var c=t(4836);a.__esModule=!0,a.default=void 0;var r=c(t(7294)),d=c(t(1932)),l=c(t(2728)),n=t(970),i=function(e){return r.default.useContext(n.OptionsContext).useAutoGen?r.default.createElement(d.default,e):r.default.createElement(l.default,e)};a.default=i},1932:function(e,a,t){"use strict";var c=t(4836);a.__esModule=!0,a.default=void 0;var r=c(t(434)),d=c(t(7071)),l=c(t(7294)),n=c(t(5697)),i=t(1883),s=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],u=function(e){var a=e.title,t=e.crumbs,c=e.crumbLabel,n=e.crumbSeparator,u=e.disableLinks,m=e.hiddenCrumbs,f=(0,d.default)(e,s);return l.default.createElement(l.default.Fragment,null,a&&l.default.createElement("span",{className:"breadcrumb__title"},a),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(e,a){return m.includes(e.pathname)?null:l.default.createElement(l.default.Fragment,{key:a+"-"+e.pathname},!u.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(i.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===t.length-1?"page":null},f),c&&a===t.length-1?c:e.crumbLabel)),u.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},f),c&&a===t.length-1?c:e.crumbLabel)),a===t.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},n))})))))};u.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},u.propTypes={title:n.default.string,crumbSeparator:n.default.oneOfType([n.default.string,n.default.element]),crumbs:n.default.arrayOf(n.default.shape({location:n.default.shape(),pathname:n.default.string.isRequired})).isRequired,crumbLabel:n.default.string,disableLinks:n.default.arrayOf(n.default.string),hiddenCrumbs:n.default.arrayOf(n.default.string)};var m=u;a.default=m},2728:function(e,a,t){"use strict";var c=t(4836);a.__esModule=!0,a.default=void 0;var r=c(t(434)),d=c(t(7071)),l=c(t(7294)),n=c(t(5697)),i=t(1883),s=t(970),u=c(t(1775)),m=["title","location","crumbLabel","crumbSeparator"],f=function(e){var a=e.title,t=e.location,c=e.crumbLabel,n=e.crumbSeparator,f=(0,d.default)(e,m),o=l.default.useContext(s.OptionsContext).usePathPrefix,p=(0,u.default)({location:(0,r.default)({},t,{pathname:o?t.pathname.replace(new RegExp("^"+o),""):t.pathname}),crumbLabel:c,crumbSeparator:n}).crumbs,b=void 0===p?[]:p;return l.default.createElement(l.default.Fragment,null,a&&l.default.createElement("span",{className:"breadcrumb__title"},a),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(e,a){return l.default.createElement("li",{className:"breadcrumb__item",key:a},l.default.createElement(i.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===b.length-1?"page":null},f),e.crumbLabel),a===b.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};f.defaultProps={title:"",crumbSeparator:" / "},f.propTypes={location:n.default.shape().isRequired,crumbLabel:n.default.string.isRequired,title:n.default.string,crumbSeparator:n.default.string};var o=f;a.default=o},3172:function(e,a,t){"use strict";var c=t(4836);a.__esModule=!0;var r=c(t(395));a.Breadcrumb=r.default;var d=c(t(1932));a.AutoGenCrumb=d.default;var l=t(2623);a.BreadcrumbContext=l.BreadcrumbContext,a.BreadcrumbConsumer=l.BreadcrumbConsumer,a.BreadcrumbProvider=l.BreadcrumbProvider;var n=c(t(1775));a.useBreadcrumb=n.default},1775:function(e,a,t){"use strict";var c=t(4836);a.__esModule=!0,a.default=void 0;var r=c(t(7294)),d=t(2623),l=function(e){var a=e.location,t=e.crumbLabel,c=e.crumbSeparator,l=r.default.useContext(d.BreadcrumbContext),n=l.crumbs,i=l.updateCrumbs;return r.default.useEffect((function(){i({location:a,crumbLabel:t,crumbSeparator:c})}),[a,t,c,i]),{crumbs:n}};a.default=l},3845:function(e,a,t){"use strict";var c=t(3172);a.aG=c.Breadcrumb,c.BreadcrumbContext,c.BreadcrumbConsumer,c.BreadcrumbProvider,c.useBreadcrumb,c.AutoGenCrumb},4037:function(e,a,t){"use strict";t.r(a),t.d(a,{Head:function(){return n}});var c=t(7294),r=t(8032),d=t(3845),l=t(3565);a.default=e=>{let{pageContext:{breadcrumb:{crumbs:a}}}=e;return c.createElement(l.Z,null,c.createElement("div",{className:"mx-6 md:mx-10 lg:mx-20"},c.createElement(d.aG,{className:"text-base font-light font-sans capitalize pl-[9px] border-l border-zinc-400",crumbs:a,crumbSeparator:""})),c.createElement("div",{className:" mx-6 md:mx-10 lg:mx-20 my-4 space-y-8 font-sans"},c.createElement("div",{className:"flex flex-col md:flex-row gap-2 md:gap-8"},c.createElement("figure",{className:"mx-auto"},c.createElement(r.S,{src:"https://images.unsplash.com/photo-1620509400948-f9c2c0a61e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",title:"Palm Oil",alt:"Plantations",width:360,className:"object-fill w-80 h-52 rounded-lg my-4",__imageData:t(3168)})),c.createElement("div",{className:"px-4 lg:px-0"},c.createElement("h3",null,"Community Palm Oil Plantations Survey"),c.createElement("h2",null,c.createElement("b",null,"ETH Zurich")),c.createElement("p",null,"Melakukan survei kepada masyarakat perkebunan sawit mengenai pengaruh kebijakan pemerintah terhadap kesejahteraan masyarakat petani sawit dalam rangka Riset Disertasi Peneliti Doktoral ETH Zurich bekerjasama dengan Institut Pertanian Bogor di Kabupaten Nagan Raya, Kabupaten Aceh Barat Daya, Kabupaten Aceh Selatan dan Kabupaten Aceh Singkil."))),c.createElement("div",{className:"flex flex-col md:flex-row-reverse gap-2 md:gap-8"},c.createElement("figure",{className:"mx-auto"},c.createElement(r.S,{src:"https://images.unsplash.com/photo-1619369029907-b8d8d5eac859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",title:"Sumatran Orangutan",alt:"Orangutan",width:360,className:"object-fill w-80 h-52 rounded-lg my-4",__imageData:t(5566)})),c.createElement("div",{className:"px-4 lg:px-0 md:text-right"},c.createElement("h3",null,"Sumatran Orangutan Survey"),c.createElement("h2",null,c.createElement("b",null,"SOCP")),c.createElement("p",null,"Melakukan survei orangutan sumatra di Kawasan Ekosistem Leuser dengan posisi sebagai ketua tim survei lapangan. Survei ini merupakan survei ulangan dari survei yang telah dilakukan 10 tahun sebelumnya."),c.createElement("p",null,"Survei ini diselenggarakan oleh Sumatra Orangutan Conservation Program (SOCP) bekerjasama dengan Yayasan Ekosistem Lestari (YEL)"))),c.createElement("div",{className:"flex flex-col md:flex-row gap-2 md:gap-8"},c.createElement("figure",{className:"mx-auto"},c.createElement(r.S,{src:"https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",title:"Graphic Design",alt:"Graphic",width:360,className:"object-fill w-80 h-52 rounded-lg my-4",__imageData:t(381)})),c.createElement("div",{className:"px-4 lg:px-0"},c.createElement("h3",null,"Graphic Designer"),c.createElement("h2",null,c.createElement("b",null,"Jroh Production")),c.createElement("p",null,"Sebagai setting grafis, saya bertugas mempersiapkan file-file desain untuk dicetak. Selain itu, saya juga melayout desain dan membuat desain seperti, banner, label, spanduk, logo, buku, pin, dll."))),c.createElement("div",{className:"flex flex-col md:flex-row-reverse gap-2 md:gap-8"},c.createElement("figure",{className:"mx-auto"},c.createElement(r.S,{src:"https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",title:"Mapping Technician",alt:"Mapping",width:360,className:"object-fill w-80 h-52 rounded-lg my-4",__imageData:t(1783)})),c.createElement("div",{className:"px-4 lg:px-0 md:text-right"},c.createElement("h3",null,"Mapping Technician"),c.createElement("p",null,"Melakukan pemetaan pada kawasan Lembah Seulawah Kabupaten Aceh Besar.")))))};const n=e=>{let{data:{site:{meta:a}}}=e;return c.createElement(c.Fragment,null,c.createElement("title",null,"Experience | ",a.title),c.createElement("meta",{name:"description",content:a.desc}),c.createElement("meta",{name:"keywords",content:"resume, portfolio, profile"}))}},7071:function(e){e.exports=function(e,a){if(null==e)return{};var t,c,r={},d=Object.keys(e);for(c=0;c<d.length;c++)t=d[c],a.indexOf(t)>=0||(r[t]=e[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},5566:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/24143ee12f03080825d009de87876cd0/91ff5/photo-1619369029907-b8d8d5eac859.jpg","srcSet":"/static/24143ee12f03080825d009de87876cd0/3fdd4/photo-1619369029907-b8d8d5eac859.jpg 90w,\\n/static/24143ee12f03080825d009de87876cd0/65576/photo-1619369029907-b8d8d5eac859.jpg 180w,\\n/static/24143ee12f03080825d009de87876cd0/91ff5/photo-1619369029907-b8d8d5eac859.jpg 360w","sizes":"(min-width: 360px) 360px, 100vw"},"sources":[{"srcSet":"/static/24143ee12f03080825d009de87876cd0/2312c/photo-1619369029907-b8d8d5eac859.webp 90w,\\n/static/24143ee12f03080825d009de87876cd0/d3c6e/photo-1619369029907-b8d8d5eac859.webp 180w,\\n/static/24143ee12f03080825d009de87876cd0/643c3/photo-1619369029907-b8d8d5eac859.webp 360w","type":"image/webp","sizes":"(min-width: 360px) 360px, 100vw"}]},"width":360,"height":540}')},381:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8532e8ddefb7e6d845341d0c5e435687/706fa/photo-1626785774625-ddcddc3445e9.jpg","srcSet":"/static/8532e8ddefb7e6d845341d0c5e435687/5d46e/photo-1626785774625-ddcddc3445e9.jpg 90w,\\n/static/8532e8ddefb7e6d845341d0c5e435687/1f252/photo-1626785774625-ddcddc3445e9.jpg 180w,\\n/static/8532e8ddefb7e6d845341d0c5e435687/706fa/photo-1626785774625-ddcddc3445e9.jpg 360w,\\n/static/8532e8ddefb7e6d845341d0c5e435687/f7872/photo-1626785774625-ddcddc3445e9.jpg 720w","sizes":"(min-width: 360px) 360px, 100vw"},"sources":[{"srcSet":"/static/8532e8ddefb7e6d845341d0c5e435687/4f169/photo-1626785774625-ddcddc3445e9.webp 90w,\\n/static/8532e8ddefb7e6d845341d0c5e435687/ff3fb/photo-1626785774625-ddcddc3445e9.webp 180w,\\n/static/8532e8ddefb7e6d845341d0c5e435687/22e2a/photo-1626785774625-ddcddc3445e9.webp 360w,\\n/static/8532e8ddefb7e6d845341d0c5e435687/4da88/photo-1626785774625-ddcddc3445e9.webp 720w","type":"image/webp","sizes":"(min-width: 360px) 360px, 100vw"}]},"width":360,"height":240}')},3168:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282818","images":{"fallback":{"src":"/static/fabfdc966af6ecdcff16d37ab73f2c2e/e35a9/photo-1620509400948-f9c2c0a61e37.jpg","srcSet":"/static/fabfdc966af6ecdcff16d37ab73f2c2e/c7a12/photo-1620509400948-f9c2c0a61e37.jpg 90w,\\n/static/fabfdc966af6ecdcff16d37ab73f2c2e/6a3af/photo-1620509400948-f9c2c0a61e37.jpg 180w,\\n/static/fabfdc966af6ecdcff16d37ab73f2c2e/e35a9/photo-1620509400948-f9c2c0a61e37.jpg 360w,\\n/static/fabfdc966af6ecdcff16d37ab73f2c2e/6dd60/photo-1620509400948-f9c2c0a61e37.jpg 720w","sizes":"(min-width: 360px) 360px, 100vw"},"sources":[{"srcSet":"/static/fabfdc966af6ecdcff16d37ab73f2c2e/6bc37/photo-1620509400948-f9c2c0a61e37.webp 90w,\\n/static/fabfdc966af6ecdcff16d37ab73f2c2e/dfeb3/photo-1620509400948-f9c2c0a61e37.webp 180w,\\n/static/fabfdc966af6ecdcff16d37ab73f2c2e/b1cd7/photo-1620509400948-f9c2c0a61e37.webp 360w,\\n/static/fabfdc966af6ecdcff16d37ab73f2c2e/b4193/photo-1620509400948-f9c2c0a61e37.webp 720w","type":"image/webp","sizes":"(min-width: 360px) 360px, 100vw"}]},"width":360,"height":270}')},1783:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#98c8e8","images":{"fallback":{"src":"/static/15f35a2faec13dae972e6948c3353b75/706fa/photo-1628158088936-68ccaaa400dc.jpg","srcSet":"/static/15f35a2faec13dae972e6948c3353b75/5d46e/photo-1628158088936-68ccaaa400dc.jpg 90w,\\n/static/15f35a2faec13dae972e6948c3353b75/1f252/photo-1628158088936-68ccaaa400dc.jpg 180w,\\n/static/15f35a2faec13dae972e6948c3353b75/706fa/photo-1628158088936-68ccaaa400dc.jpg 360w,\\n/static/15f35a2faec13dae972e6948c3353b75/f7872/photo-1628158088936-68ccaaa400dc.jpg 720w","sizes":"(min-width: 360px) 360px, 100vw"},"sources":[{"srcSet":"/static/15f35a2faec13dae972e6948c3353b75/4f169/photo-1628158088936-68ccaaa400dc.webp 90w,\\n/static/15f35a2faec13dae972e6948c3353b75/ff3fb/photo-1628158088936-68ccaaa400dc.webp 180w,\\n/static/15f35a2faec13dae972e6948c3353b75/22e2a/photo-1628158088936-68ccaaa400dc.webp 360w,\\n/static/15f35a2faec13dae972e6948c3353b75/4da88/photo-1628158088936-68ccaaa400dc.webp 720w","type":"image/webp","sizes":"(min-width: 360px) 360px, 100vw"}]},"width":360,"height":240}')}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-9069a35b598782cb7d57.js.map