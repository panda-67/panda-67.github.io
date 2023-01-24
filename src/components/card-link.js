import React from "react"
import { Link } from "gatsby"

export default function CardLink({ children, href, src, alt }) {
   return (
      <article className="rounded-lg hover:border border-indigo-600">
         <Link
            to={href}
            className="relative w-full flex flex-col transform hover:translate-x-0.5 hover:translate-y-0.5"
         >
            <img
               className="rounded-lg object-fill"
               src={src}
               alt={alt}
            />
            <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
               <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                  {children}
               </div>
            </div>
         </Link>
      </article>
   )
}