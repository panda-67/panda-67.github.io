(self.webpackChunkmyfol=self.webpackChunkmyfol||[]).push([[989],{782:function(e,t,l){"use strict";var a=l(8029),n=l.n(a),r=l(1804),m=l.n(r),s=l(7294),c=l(1597);t.Z=function(e){var t=e.tag;return s.createElement("div",{key:t.fieldValue,className:"link-primary text-neutral"},s.createElement(c.Link,{to:"/tags/"+m()(t.fieldValue)+"/"},n()(t.fieldValue),s.createElement("span",{className:"badge bg-amber-300 border-amber-300 text-gray-800 transform -translate-y-1 text-xs ml-1"},t.totalCount)))}},668:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return d}});var a=l(8029),n=l.n(a),r=l(7294),m=l(1597),s=l(5414),c=l(2989),i=function(e){var t=e.post;return r.createElement("div",{className:"my-4 flex flex-col justify-start"},r.createElement("h4",{className:"link-primary text-neutral font-semibold"},r.createElement(m.Link,{to:"/blog"+t.fields.slug},t.frontmatter.title)),r.createElement("small",null,t.frontmatter.date),r.createElement("p",null,t.excerpt))},o=l(782),d=function(e){var t=e.data,l=t.recentPosts.edges,a=t.tagsPosts.group,d=t.site.meta,u=t.markdownRemark,f=u.frontmatter,g=u.html,E=u.excerpt,x=e.pageContext,v=x.previous,p=x.next,N=l.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return r.createElement(i,{key:e.node.id,post:e.node})})),y=a.map((function(e){return r.createElement(o.Z,{key:e.fieldValue,tag:e})}));return r.createElement("div",null,r.createElement(s.q,{title:"Blogs | "+f.title+" | "+d.title,meta:[{name:"description",content:E},{name:"keywords",content:f.tags}]}),r.createElement("div",{className:"mx-4 lg:mx-16"},r.createElement(c.Z,null)),r.createElement("div",{className:"mx-4 lg:mx-16 mt-4 lg:grid grid-cols-10 gap-6"},r.createElement("div",{className:"col-span-8 flex flex-col-reverse lg:grid grid-cols-8 gap-6"},r.createElement("div",{className:"col-span-2 mx-2 mt-8 lg:mt-0"},r.createElement("h3",null,"Recent Post"),r.createElement("div",null,N)),r.createElement("div",{className:"col-span-6 shadow-lg border p-4 rounded-lg"},r.createElement("div",{className:"flex flex-col"},r.createElement("div",null,r.createElement("div",{className:"mb-4 px-2 mx-2 pb-6 pt-2 lg:pt-6 border-b border-slate-300 flex gap-4 flex-col lg:flex-row-reverse lg:justify-end"},r.createElement("div",{className:"flex flex-col lg:items-end w-full"},r.createElement("h3",{className:"lg:text-3xl"},f.title),r.createElement("div",{className:"flex gap-1"},f.tags.map((function(e){return r.createElement("div",{key:e},r.createElement(m.Link,{to:"/tags/"+e},r.createElement("small",{className:"my-1 italic bg-yellow-300 border-amber-300 text-gray-800 badge"},n()(e))))})))),r.createElement("div",{className:"divider lg:divider-horizontal my-0 lg:mx-1"}),r.createElement("div",{className:"flex flex-col justify-center items-end lg:text-right"},r.createElement("div",{className:"font-edu capitalize"},f.author?f.author:d.author),r.createElement("h5",null,f.date))),r.createElement("div",{className:"mx-2",dangerouslySetInnerHTML:{__html:g}})),r.createElement("div",{className:"mt-12 mx-2 flex justify-between"},r.createElement("div",null,v&&r.createElement(m.Link,{to:"/blog"+v.fields.slug},r.createElement("div",{className:"flex flex-col items-start link-primary text-neutral"},r.createElement("span",null,"⇐"),r.createElement("h4",null,v.frontmatter.title)))),r.createElement("div",{className:"divider divider-horizontal"}),r.createElement("div",null,p&&r.createElement(m.Link,{to:"/blog"+p.fields.slug},r.createElement("div",{className:"flex flex-col items-end link-primary text-neutral"},r.createElement("span",null,"⇒"),r.createElement("h4",{className:"text-right"},p.frontmatter.title)))))))),r.createElement("div",{className:"col-span-2 mx-2 mt-4 lg:mt-0"},r.createElement("div",null,r.createElement("h3",null,"Tags"),r.createElement("div",{className:"grid sm:grid-cols-2"},y)))),r.createElement("div",{className:"mt-8 py-2"},r.createElement("div",{className:"col-span-6 flex justify-center w-full mb-4"},"© 2022 Samsul Muarrif")))}},1804:function(e,t,l){var a=l(5393)((function(e,t,l){return e+(l?"-":"")+t.toLowerCase()}));e.exports=a}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6b8ff15090c4c2cec54f.js.map