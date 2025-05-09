import React from "react";
import { graphql } from "gatsby";
import Frame from "../layouts/main";
import CardLink from "../components/card-link";
import PostCard from "../components/post-card";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default function IndexPage({ data, path }) {
  return (
    <Frame path={path}>
      <div className="w-full h-full flex flex-wrap flex-row -mt-8 md:-mt-16">
        {/* Expertise */}
        <section className="w-1/4">
          <Header>Expertise</Header>
          <div className="mx-6 flex flex-wrap flex-col space-y-4">
            <CardLink
              href="https://panda-67.github.io/programming"
              src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305__340.jpg"
              alt="Progamming"
            >
              Programming
            </CardLink>
            <CardLink
              href="/entomologist"
              src="https://cdn.pixabay.com/photo/2019/09/19/17/40/insect-4489864__340.jpg"
              alt="Entomologist"
            >
              Entomologist
            </CardLink>
            {/* <CardLink href='#' src='https://cdn.pixabay.com/photo/2018/03/24/08/56/colorful-3256055__340.jpg' alt='Graphic Design'> */}
            {/*   Graphic Design */}
            {/* </CardLink> */}
            {/* <CardLink */}
            {/*   href="https://rampago.github.io" */}
            {/*   src="https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269__340.jpg" */}
            {/*   alt="Mapping Expert" */}
            {/* > */}
            {/*   Mapping Expert */}
            {/* </CardLink> */}
          </div>
        </section>

        {/* Latest Blog */}
        <section className="w-3/4">
          <Header>Latest Post</Header>
          <div className="mx-6 py-2 min-h-max rounded-lg border border-indigo-600 bg-gradient-to-tr from-base-300 to-transparent text-slate-800">
            {data.allMdx.edges
              .filter((edge) => !!edge.node.frontmatter.date)
              .map((edge) => (
                <PostCard edge={edge} key={edge.node.id} />
              ))}
          </div>
        </section>
      </div>
    </Frame>
  );
}

function Header({ children }) {
  return (
    <h3 className="divider divider-vertical my-10 mx-4 px-2 text-xl md:text-4xl">
      {children}
    </h3>
  );
}

export function Head() {
  const { meta } = useSiteMetadata();
  return (
    <>
      <title>Welcome | {meta.title}</title>
      <meta name="keywords" content="resume, portfolio, profile" />
      <meta name="description" content="Welcome to my personal website." />
    </>
  );
}

export const indexQuery = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 7) {
      edges {
        node {
          frontmatter {
            date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
            title
            tags
            author
          }
          fields {
            slug
          }
          excerpt(pruneLength: 260)
        }
      }
    }
  }
`;
