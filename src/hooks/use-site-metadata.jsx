import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query {
         site {
            meta: siteMetadata {
               title
               author
               siteUrl
               desc
               twitter
               github
               linkedin
               instagram
            }
         }
      }
   `)
   return data.site
}