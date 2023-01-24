import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Frame from '../layouts/main'
import CardLink from "../components/card-link"
import PostCard from "../components/post-card"

export default function IndexPage({
  data: {
    allMarkdownRemark: { edges },
    site: { meta },
  },
  path,
}) {

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

  return (
    <Frame path={path}>
      <div data-active={scrolled} className="w-full h-full flex flex-wrap -mt-10 nav-up">

        {/* Expertise */}
        <section className="lg:w-2/3">
          <Header>Expertise</Header>
          <div className="mx-6 grid gap-4 sm:grid-cols-2">
            <CardLink href='/programming' src='https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg' alt='Progamming'>
              Programming
            </CardLink>
            <CardLink href='/entomologist' src='https://cdn.pixabay.com/photo/2019/09/19/17/40/insect-4489864_960_720.jpg' alt='Entomologist'>
              Entomologist
            </CardLink>
            <CardLink href='#' src='https://cdn.pixabay.com/photo/2018/03/24/08/56/colorful-3256055_960_720.jpg' alt='Graphic Design'>
              Graphic Design
            </CardLink>
            <CardLink href='https://rampago.github.io' src='https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269_960_720.jpg' alt='Mapping Expert'>
              Mapping Expert
            </CardLink>
          </div>
        </section>

        {/* Latest Blog */}
        <section className="lg:w-1/3 w-full">
          <Header>Latest Post</Header>
          <div className="mx-6 py-2 min-h-max rounded-lg border border-indigo-600 bg-gradient-to-tl from-slate-300 via-transparent to-transparent text-slate-800">
            {edges
              .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
              .map((edge) => (<PostCard meta={meta} edge={edge} key={edge.node.id} />))}
          </div>
        </section>
        
      </div>      
    </Frame>
  )
}

function Header({ children }) {
  return (
    <h3 className="divider divider-vertical my-10 mx-4 px-2 text-xl md:text-4xl">
      {children}
    </h3>
  )
}

export const Head = ({
  data: {
    site: { meta },
  },
}) => (
  <>
    <title>Welcome | {meta.title}</title>
    <meta name="description" content={meta.desc} />
    <meta name="keywords" content="resume, portfolio, profile" />
  </>
)

export const indexQuery = graphql`{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 4) {
    edges {
      node {
        id
        fields {
          slug
        }
        excerpt(pruneLength: 260)
        frontmatter {
          date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
          title
          tags
          author
        }
      }
    }
  }
  site {
    meta: siteMetadata {
      title
      author
      desc
    }
  }
}`
