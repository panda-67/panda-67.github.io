(self.webpackChunkmyfol=self.webpackChunkmyfol||[]).push([[790],{395:function(a,e,t){"use strict";var n=t(4836);e.__esModule=!0,e.default=void 0;var r=n(t(7294)),i=n(t(1932)),l=n(t(2728)),u=t(970),s=function(a){return r.default.useContext(u.OptionsContext).useAutoGen?r.default.createElement(i.default,a):r.default.createElement(l.default,a)};e.default=s},1932:function(a,e,t){"use strict";var n=t(4836);e.__esModule=!0,e.default=void 0;var r=n(t(434)),i=n(t(7071)),l=n(t(7294)),u=n(t(5697)),s=t(1883),m=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],d=function(a){var e=a.title,t=a.crumbs,n=a.crumbLabel,u=a.crumbSeparator,d=a.disableLinks,c=a.hiddenCrumbs,o=(0,i.default)(a,m);return l.default.createElement(l.default.Fragment,null,e&&l.default.createElement("span",{className:"breadcrumb__title"},e),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(a,e){return c.includes(a.pathname)?null:l.default.createElement(l.default.Fragment,{key:e+"-"+a.pathname},!d.includes(a.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(s.Link,(0,r.default)({to:a.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":e===t.length-1?"page":null},o),n&&e===t.length-1?n:a.crumbLabel)),d.includes(a.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},o),n&&e===t.length-1?n:a.crumbLabel)),e===t.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},u))})))))};d.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:u.default.string,crumbSeparator:u.default.oneOfType([u.default.string,u.default.element]),crumbs:u.default.arrayOf(u.default.shape({location:u.default.shape(),pathname:u.default.string.isRequired})).isRequired,crumbLabel:u.default.string,disableLinks:u.default.arrayOf(u.default.string),hiddenCrumbs:u.default.arrayOf(u.default.string)};var c=d;e.default=c},2728:function(a,e,t){"use strict";var n=t(4836);e.__esModule=!0,e.default=void 0;var r=n(t(434)),i=n(t(7071)),l=n(t(7294)),u=n(t(5697)),s=t(1883),m=t(970),d=n(t(1775)),c=["title","location","crumbLabel","crumbSeparator"],o=function(a){var e=a.title,t=a.location,n=a.crumbLabel,u=a.crumbSeparator,o=(0,i.default)(a,c),b=l.default.useContext(m.OptionsContext).usePathPrefix,f=(0,d.default)({location:(0,r.default)({},t,{pathname:b?t.pathname.replace(new RegExp("^"+b),""):t.pathname}),crumbLabel:n,crumbSeparator:u}).crumbs,p=void 0===f?[]:f;return l.default.createElement(l.default.Fragment,null,e&&l.default.createElement("span",{className:"breadcrumb__title"},e),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},p.map((function(a,e){return l.default.createElement("li",{className:"breadcrumb__item",key:e},l.default.createElement(s.Link,(0,r.default)({to:a.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":e===p.length-1?"page":null},o),a.crumbLabel),e===p.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},a.crumbSeparator))})))))};o.defaultProps={title:"",crumbSeparator:" / "},o.propTypes={location:u.default.shape().isRequired,crumbLabel:u.default.string.isRequired,title:u.default.string,crumbSeparator:u.default.string};var b=o;e.default=b},3172:function(a,e,t){"use strict";var n=t(4836);e.__esModule=!0;var r=n(t(395));e.Breadcrumb=r.default;var i=n(t(1932));e.AutoGenCrumb=i.default;var l=t(2623);e.BreadcrumbContext=l.BreadcrumbContext,e.BreadcrumbConsumer=l.BreadcrumbConsumer,e.BreadcrumbProvider=l.BreadcrumbProvider;var u=n(t(1775));e.useBreadcrumb=u.default},1775:function(a,e,t){"use strict";var n=t(4836);e.__esModule=!0,e.default=void 0;var r=n(t(7294)),i=t(2623),l=function(a){var e=a.location,t=a.crumbLabel,n=a.crumbSeparator,l=r.default.useContext(i.BreadcrumbContext),u=l.crumbs,s=l.updateCrumbs;return r.default.useEffect((function(){s({location:e,crumbLabel:t,crumbSeparator:n})}),[e,t,n,s]),{crumbs:u}};e.default=l},3845:function(a,e,t){"use strict";var n=t(3172);e.aG=n.Breadcrumb,n.BreadcrumbContext,n.BreadcrumbConsumer,n.BreadcrumbProvider,n.useBreadcrumb,n.AutoGenCrumb},9376:function(a,e,t){"use strict";t.d(e,{Z:function(){return m}});var n=t(7294),r=t(1883),i=t(8032),l=t(3845);var u=a=>{let{href:e,children:t}=a;return n.createElement(r.Link,{to:e,className:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:text-2xl focus:outline-none focus:text-gray-700 focus:border-gray-300 transition-all duration-70 ease-in-out delay-80",activeClassName:"inline-flex items-center px-1 pt-1 pb-2 border-b-2 text-2xl leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out",activeStyle:{borderColor:"orange"}},t)},s=t(3565);var m=a=>{let{bread:e,children:m}=a;return n.createElement(r.StaticQuery,{query:"2862787750",render:a=>n.createElement(s.Z,null,n.createElement("div",{style:{margin:"0 auto",padding:"0"}},n.createElement("div",{className:"mx-6 md:mx-10 lg:mx-20"},n.createElement(l.aG,{className:"text-base font-light font-sans capitalize pl-[9px] border-l border-zinc-400",crumbs:e,crumbSeparator:""})),n.createElement("div",{className:"lg:grid grid-flow-col grid-cols-10 font-edu md:mx-4 lg:mx-12"},n.createElement("ul",{className:"lg:hidden flex justify-start md:justify-start mx-8 gap-4 my-4"},a.site.meta.aboutPath.map((a=>n.createElement("li",{key:a.name},n.createElement(r.Link,{className:"btn btn-xs btn-outline font-sans border-zinc-400 font-light capitalize",activeClassName:"bg-zinc-400 text-white font-medium",to:"/about"+a.link},a.name))))),n.createElement("div",{className:"col-span-8"},m),n.createElement("div",{className:"hidden h-full col-span-2 pl-4 lg:flex flex-col items-center"},n.createElement("div",{className:"sticky top-20"},n.createElement("figure",{className:" h-48"},n.createElement(i.S,{src:"../images/profile.png",title:"Samsul Muarrif",alt:"Profile",width:160,__imageData:t(3074)})),n.createElement("ul",{className:"flex flex-col gap-2 text-lg text-center font-medium font-edu"},a.site.meta.aboutPath.map((a=>n.createElement("li",{key:a.name,className:"capitalize w-full"},n.createElement(u,{href:"/about"+a.link},a.name))))))))))})}},848:function(a,e,t){"use strict";t.r(e),t.d(e,{Head:function(){return l}});var n=t(7294),r=t(1883),i=t(9376);e.default=a=>{let{data:{site:{meta:e}},pageContext:{breadcrumb:{crumbs:t}}}=a;return n.createElement(i.Z,{bread:t},n.createElement("div",{className:"w-full max-w-7xl mx-auto px-8 mt-4 pb-4"},n.createElement("h2",null,"About ",e.title),n.createElement("div",{className:"font-sans leading-8 my-8"},n.createElement("p",null,"Terlahir dengan nama Syamsul Mu'arrif, pada tahun 1992, dari kedua orang tua. Saya menjalani masa kecil yang indah bersama teman-teman di sebuah desa kecil yang terletak pada ujung Pulau Sumatra, yaitu desa yang bernama Gampong Lam Badeuk. Saya menyelesaikan pendidikan tingkat dasar pada sebuah Madrasah Ibtidayah tahun 2004, yang terletak tidak jauh dari tempat saya tinggal yaitu di Kemukiman Lamteungoh. Kemudian saya menyelesaikan pendidikan tingkat menengah pada sebuah sekolah yang terdapat di Kota Banda Aceh tahun 2007, yaitu"," ",n.createElement(r.Link,{className:"link-primary",to:"https://mtsnmodelbandaaceh.sch.id/",target:"_blank",noopener:!0,norel:!0},"Madrasah Tsanawiyah Negeri (MTsN) Model"," "),"Banda Aceh (MTsN 1 Banda Aceh). Setelah selesai dari MTsN, saya melanjutkan pendidikan pada"," ",n.createElement(r.Link,{className:"link-primary",to:"https://sman4ba.sch.id/",target:"_blank",noopener:!0,norel:!0},"Sekolah Menengah Atas (SMA) Negeri 4")," ","Kota Banda Aceh dan selesai tahun 2010. Tidak hanya sampai disitu, saya juga melanjutkan pendidikan hingga tingkat universitas pada sebuah universitas negeri di Aceh. Universitas tersebut dikenal dengan nama"," ",n.createElement(r.Link,{className:"link-primary",to:"https://unsyiah.ac.id/",target:"_blank",noopener:!0,norel:!0},"Universitas Syiah Kuala")," ","(USK) Banda Aceh. Saya berhasil menyelesaikan"," ",n.createElement(r.Link,{to:"/portfolio/education",className:"link-primary",target:"_blank"},"pendidikan sarjana")," ","pada tahun 2015 dengan durasi 4 tahun 6 bulan dan IPK 3,4/4."),n.createElement("br",null),n.createElement("p",null,"Memiliki minat pada lingkungan membuat saya memilih jurusan biologi. Selain itu, juga membuat saya gemar untuk melakukan hiking dan membuat saya lebih dekat dengan alam. Kegemaran hiking membuat saya bergabung dengan organisai pecinta alam. Pada organisasi ini saya banyak belajar, salah satunya bagian navigasi. Kemampuan navigasi juga saya dapatkan dari perkuliahan. Sebagai mahasiswa biologi saya dituntut untuk melakukan kegiatan lapangan. Lapangan yang dimaksud disini adalah kegiatan mengunjungi alam liar yang terdapat di daerah pegunungan. Berdasarkan hal tersebut saya semakin mendalami kemapuan navigasi, seperti mempelajari aplikasi pemetaan untuk lebih menunjang kemampuan navigasi. Setelah selesai kuliah sarjana saya juga masih sering mengunjungi alam liar untuk membantu mahasiswa-mahasiswa lain dalam melakukan penelitian. Selain itu, saya juga beberapa kali melakukan survei di alam liar, dimana hal ini sangat membutuhkan kemampuan seperti navigasi."),n.createElement("br",null),n.createElement("p",null,"Selain minat pada lingkungan, saya juga gemar dengan bidang grafis dan web desain. Kegemaran ini membuat saya banyak mempelajari tentang disain grafis dan ",n.createElement("em",null,"web development"),". Memiliki kemampuan desain grafis membuat saya pernah bekerja sebagai"," ",n.createElement("em",null,"graphic setting")," pada sebuah perusahaan percetakan di Kota Banda Aceh, yaitu Jroh Production. Ketika masa perkuliahan saya juga sering dimintai bantuan oleh mahasiswa lain atau pun dosen dalam hal membuat desain-desain grafis untuk kebutuhan presentasi dan lain-lain. Berbeda dengan kemampuan navigasi, kedua kemampuan ini saya pelajari secara autodidak baik desain grafis maupun desain website."),n.createElement("br",null),n.createElement("p",null,"Hingga kini saya masih aktif pada ketiga hal tersebut di atas. Seperti melakukan survei atau mengunjungi alam liar apabila diperlukan. Atau membuat disain grafis untuk orang-orang yang membutuhkan maupun untuk diri saya sendiri. Disamping itu, juga aktif mempelajari dan mendevelop website, salah satunya seperti website ini."))))};const l=a=>{let{data:{site:{meta:e}}}=a;return n.createElement(n.Fragment,null,n.createElement("title",null,"About | ",e.title),n.createElement("meta",{name:"description",content:e.desc}),n.createElement("meta",{name:"keywords",content:"resume, portfolio, profile"}))}},7071:function(a){a.exports=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r},a.exports.__esModule=!0,a.exports.default=a.exports},3074:function(a){"use strict";a.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/fecf53388fa32d5220092867b8c391e1/0f386/profile.png","srcSet":"/static/fecf53388fa32d5220092867b8c391e1/f31ef/profile.png 40w,\\n/static/fecf53388fa32d5220092867b8c391e1/1f8a1/profile.png 80w,\\n/static/fecf53388fa32d5220092867b8c391e1/0f386/profile.png 160w","sizes":"(min-width: 160px) 160px, 100vw"},"sources":[{"srcSet":"/static/fecf53388fa32d5220092867b8c391e1/e73fe/profile.webp 40w,\\n/static/fecf53388fa32d5220092867b8c391e1/61ca6/profile.webp 80w,\\n/static/fecf53388fa32d5220092867b8c391e1/1b09c/profile.webp 160w","type":"image/webp","sizes":"(min-width: 160px) 160px, 100vw"}]},"width":160,"height":159}')}}]);
//# sourceMappingURL=component---src-pages-about-index-js-499a238019b51ef431bf.js.map