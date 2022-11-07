import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Frame from "../layouts/template";
import _ from "lodash";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    site: { meta }
  },
  path,
}) => {
  const blogImage = `https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938875_960_720.jpg`;
  return (
    <Frame path={path}>
      <main>
        {/* <!-- Expertise --> */}
        <div className="divider divider-vertical my-12 mx-4 px-4 md:px-8 text-2xl md:text-4xl">
          Expertise
        </div>
        <div className="mx-6 md:mx-10 mb-8 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg hover:border border-indigo-600">
            <Link
              to="https://arrifusman.github.io/"
              target={"_blank"}
              noreferer
              noopener
              className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1"
            >
              <img
                className="rounded-lg object-fill"
                src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg"
                alt=""
              />
              <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
                <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                  Programming
                </div>
              </div>
            </Link>
          </div>
          <div className="rounded-lg hover:border border-indigo-600">
            <Link
              to="/"
              className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1"
            >
              <img
                className="rounded-lg object-fill"
                src="https://cdn.pixabay.com/photo/2018/03/24/08/56/colorful-3256055_960_720.jpg"
                alt=""
              />
              <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
                <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                  Graphic Desain
                </div>
              </div>
            </Link>
          </div>
          <div className="rounded-lg hover:border border-indigo-600">
            <Link
              to="/"
              className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1"
            >
              <img
                className="rounded-lg object-fill"
                src="https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269_960_720.jpg"
                alt=""
              />
              <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
                <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                  Mapping Expert
                </div>
              </div>
            </Link>
          </div>
          <div className="rounded-lg hover:border border-indigo-600">
            <Link
              to="/"
              className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1"
            >
              <img
                className="rounded-lg object-fill"
                src="https://cdn.pixabay.com/photo/2019/09/19/17/40/insect-4489864_960_720.jpg"
                alt=""
              />
              <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
                <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                  Entomology Expert
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Blog */}
        <div className="divider divider-vertical my-12 mx-4 px-4 md:px-8 text-2xl md:text-4xl">
          Latest Post
        </div>
        <div className=" grid lg:grid-cols-2 grid-flow-row gap-4 mx-6 lg:mx-10">
          {edges
            .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
            .map((edge) => (
              <div className="rounded-lg hover:border border-indigo-600">
                <div className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1">
                  <StaticImage
                    src={blogImage}
                    alt="Blog"
                    title="Blog"
                    width={800}
                    className="rounded-lg md:h-64 h-[400px]"
                  />
                  <div className="absolute h-full w-full transition-all ease-in-out duration-600 delay-100 rounded-lg bg-gradient-to-t from-zinc-400 to-transparent text-zinc-50">
                    <div className="m-6 px-4 font-sans">
                      <h3 className="lg:text-xl text-zinc-700 link-primary">
                        <Link to={`/blog${edge.node.fields.slug}`}>
                          {_.truncate(edge.node.frontmatter.title, {
                            length: 50,
                            omission: " ...",
                          })}
                        </Link>
                      </h3>
                      <div className="flex gap-1">
                        {edge.node.frontmatter.tags.map((tag) => (
                          <div key={tag}>
                            <Link to={`/tags/${tag}`}>
                              <small className="my-1 italic bg-yellow-300 border-amber-300 text-zinc-700 badge">
                                {_.startCase(tag)}
                              </small>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="md:flex gap-2 mt-1">
                        <p className="font-edu text-base">
                          By{" "}
                          {edge.node.frontmatter.author
                            ? edge.node.frontmatter.author
                            : meta.author}
                        </p>
                        <p className="divider divider-horizontal py-1 mx-0 hidden md:block"></p>
                        <small>{edge.node.frontmatter.date}</small>
                      </div>
                      <div className="text-sm leading-6 md:text-md">
                        {edge.node.excerpt + ` `}
                        <Link
                          to={`/blog${edge.node.fields.slug}`}
                          className="hover:text-primary"
                        >
                          &rArr;{` more`}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </Frame>
  );
};

export default IndexPage;

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
);

export const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
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
        desc
      }
    }
  }
`;
