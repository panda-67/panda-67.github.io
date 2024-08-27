import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import SidePost from "../../components/side-post";
import TagsLink from "../../components/tags-link";
import Frame from "../../layouts/main";
import { MDXProvider } from "@mdx-js/react";

export default function BlogPost({ data, children, pageContext }) {
  const { meta } = useSiteMetadata();
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const posts = data.recentPosts.edges;
  const toc = data.mdx.tableOfContents;
  const { frontmatter } = data.mdx;
  const tags = data.tagPosts.group;

  console.log("context:", pageContext);

  return (
    <>
      <Frame>
        <div className="mx-4 pt-2 lg:mx-16 lg:grid grid-cols-10 gap-6">
          <div className="col-span-8 flex flex-col-reverse lg:grid grid-cols-8 gap-6">
            {/* Left Sidebar */}
            <section className="col-span-2 mx-2 mt-8 lg:mt-0">
              <div className="sticky top-[5rem]">
                <h3>Recent Post</h3>
                <article>
                  {posts
                    .filter((edge) => !!edge.node.frontmatter.date)
                    .map((edge) => (
                      <SidePost key={edge.node.id} post={edge.node} />
                    ))}
                </article>
              </div>
            </section>

            {/* Post */}
            <div className="col-span-6 ">
              <div className="flex rounded-lg py-1 leading-4 tranform -translate-x-1">
                <div className="md:hidden">
                  <Breadcrumb
                    className="text-xs font-light pl-[9px] border-l border-zinc-400"
                    crumbs={crumbs}
                    crumbSeparator=""
                    crumbLabel={_.truncate(frontmatter.title, {
                      length: 40,
                      omission: " ...",
                    })}
                  />
                </div>
                <div className="hidden md:block">
                  <Breadcrumb
                    className="text-base font-light pl-[10px] border-l border-zinc-400"
                    crumbs={crumbs}
                    crumbSeparator=""
                    crumbLabel={_.truncate(frontmatter.title, {
                      length: 70,
                      omission: " ...",
                    })}
                  />
                </div>
              </div>

              <div className="flex flex-col shadow-lg border border-zinc-300 border-t-0 border-l-0 p-4 mt-2 ">
                <article>
                  {/* Head */}
                  <div className="mb-4 px-2 mx-2 pb-6 pt-2 lg:pt-6 border-b border-slate-300 flex gap-4 flex-col lg:flex-row-reverse lg:justify-end">
                    <div className="flex flex-col w-full">
                      <h3 className="lg:text-3xl">{frontmatter.title}</h3>
                      <div className="flex gap-1">
                        {frontmatter.tags.map((tag) => (
                          <div key={tag}>
                            <Link to={`/tags/${tag}`}>
                              <small className="my-1 italic bg-yellow-300 border-amber-300 text-gray-800 badge">
                                {_.startCase(tag)}
                              </small>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="divider lg:divider-horizontal my-0 lg:mx-1"></div>
                    <div className="flex lg:flex-col flex-col-reverse justify-center items-center lg:items-end lg:text-right">
                      <div aria-label="author" className="font-edu capitalize">
                        {frontmatter.author ? frontmatter.author : meta.author}
                      </div>
                      <div aria-label="date">{frontmatter.date}</div>
                    </div>
                  </div>

                  {/* TOC */}
                  <div
                    aria-label="table of content"
                    className="lg:hidden sticky top-1 md:relative z-20 mt-6 bg-base-300 bg-opacity-70 rounded-lg px-4 py-3"
                  >
                    <div className="font-semibold">Daftar Isi</div>
                    {toc.items && toc.items.length > 0 && (
                      <ul className="text-inherit text-[15px]">
                        {toc.items.map((i) => (
                          <li key={i.url} className=" hover:text-white">
                            <Link
                              activeClassName="bg-zinc-400 text-current"
                              partiallyActive={true}
                              to={i.url}
                            >
                              {i.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="mx-4">
                    <MDXProvider> {children} </MDXProvider>
                  </div>
                </article>

                {/* Contact */}

                <article className="p-4 rounded-lg border mt-4 space-y-2">
                  <p>
                    Jika Anda punya pertanyaan lebih lanjut tentang artikel ini
                    atau ingin <em>request</em> artikel lain.
                  </p>
                  <p>Silakan hubungi:</p>
                  <div className="flex w-full justify-around py-6">
                    <Link
                      to="mailto:samuarrif@gmail.com"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="52 42 88 66"
                      >
                        <path
                          fill="#4285f4"
                          d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
                        />
                        <path
                          fill="#34a853"
                          d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
                        />
                        <path
                          fill="#fbbc04"
                          d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                        />
                        <path
                          fill="#ea4335"
                          d="M72 74V48l24 18 24-18v26L96 92"
                        />
                        <path
                          fill="#c5221f"
                          d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                        />
                      </svg>
                      Gmail
                    </Link>
                    <div className="divider divider-horizontal lg:mx-1"></div>
                    <Link
                      to="https://wa.me/6285159606776?text=Hello+Samsul+Muarrif"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <svg className="w-5" viewBox="0 0 512 512">
                        <rect
                          width="512"
                          height="512"
                          rx="15%"
                          fill="#25d366"
                        />
                        <path
                          fill="#25d366"
                          stroke="#fff"
                          strokeWidth="26"
                          d="M123 393l14-65a138 138 0 1150 47z"
                        />
                        <path
                          fill="#fff"
                          d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                        />
                      </svg>
                      Whatsapp
                    </Link>
                  </div>
                </article>

                {/* Navigation */}
                {/* <nav className="mt-8 mx-1 space-x-2 grid grid-flow-col grid-cols-2">
                  <div className="pr-4">
                    {previous && (
                      <Link to={`/blog${previous.id}`}>
                        <div className="flex flex-col items-start link-primary text-current">
                          <span>❮ Previous</span>
                          <h4>{previous.frontmatter.title}</h4>
                        </div>
                      </Link>
                    )}
                  </div>

                  <div>
                    {next && (
                      <Link to={`/blog${next.id}`}>
                        <div className="flex flex-col items-end link-primary text-current">
                          <span>Next ❯</span>
                          <h4 className="text-right">{next.frontmatter.title}</h4>
                        </div>
                      </Link>
                    )}
                  </div>
                </nav> */}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-2 mx-2 mt-4 lg:mt-0">
            <section className="px-0">
              <h3>Tags</h3>
              <div className="flex flex-wrap gap-x-2 mx-1">
                {tags.map((tag) => (
                  <TagsLink key={tag.fieldValue} tag={tag} />
                ))}
              </div>
            </section>

            {/* TOC */}
            <div
              aria-label="table of content"
              className="hidden lg:block sticky top-[5rem] mt-6 bg-base-200 rounded-lg -mx-4 px-4 py-3"
            >
              <h4 className="font-semibold">Daftar Isi</h4>
              {toc.items && toc.items.length > 0 && (
                <ul className="text-blue-400 text-[15px]">
                  {toc.items.map((i) => (
                    <li key={i.url} className=" hover:text-white">
                      <Link
                        activeClassName="bg-zinc-400 text-current"
                        partiallyActive={true}
                        to={i.url}
                      >
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Frame>
    </>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
  }),
};

export function Head({
  data: {
    mdx: { frontmatter, excerpt },
  },
}) {
  const { meta } = useSiteMetadata();
  return (
    <>
      <title>{`Blogs | ${frontmatter.title} | ${meta.title}`}</title>
      <meta name="description" content={excerpt} />
      <meta name="keywords" content={frontmatter.tags} />
    </>
  );
}

export const query = graphql`
  query blogQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tags
        date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
      }
      fields {
        slug
      }
      tableOfContents
      excerpt(pruneLength: 170)
      body
    }
    recentPosts: allMdx(sort: { frontmatter: { date: DESC } }, limit: 5) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 50)
          frontmatter {
            date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
            title
          }
        }
      }
    }
    tagPosts: allMdx(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
