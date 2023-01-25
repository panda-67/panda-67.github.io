import './src/styles/global.css'
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css'

export const shouldUpdateScroll = () => {
   window.scrollTo(0, 0);
   return true
}