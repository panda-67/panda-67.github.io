import { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

export function Theme() {
	const [themeOpen, setThemeOpen] = useState(false)
	const themeToggle = () => { setThemeOpen(!themeOpen) }
	return { themeOpen, themeToggle }
}

export function Nav() {
	const [navOpen, setNavOpen] = useState(false)
	const navToggle = () => { setNavOpen(!navOpen) }
	return { navOpen, navToggle }
}

export function useScroll() {
   const [scrolled, setScrolled] = useState(false)
   useEffect(() => {
      const handleScroll = () => {
         const isScrolled = window.scrollY > 200;
         if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
         }
      }
      document.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
         document.removeEventListener('scroll', handleScroll);
      }
   }, [scrolled])

   return scrolled
}

export const useMenuLink = () => {
	const { site } = useStaticQuery(graphql`
      query {
         site {
           	siteMetadata {
					menuLinks {
						name
						link
					}
           	}
         }
      }
   `)
	return site.siteMetadata
}
