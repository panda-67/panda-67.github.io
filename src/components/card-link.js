import React from "react"
import { Link } from "gatsby"

export default function CardLink({ children, href, src, alt }) {
   return (
      <article className="rounded-lg hover:border border-indigo-600">
         <Link to={href} className="relative w-full flex flex-col transform hover:translate-x-0.5 hover:translate-y-0.5">
            <div className="z-0">
               <img className="rounded-lg object-cover" loading="lazy" width="600" height="300" src={src} alt={alt} />
            </div>
            <div className="absolute rounded-lg w-full h-full flex items-end justify-center text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 transition-all ease-in-out duration-300 delay-50 bg-gradient-to-tl from-indigo-800 via-transparent text-slate-200">
               <div className="absolute inset-x-0 bottom-8">
                  {children}
               </div>
            </div>
         </Link>
      </article>
   )
}
