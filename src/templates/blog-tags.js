import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import _ from "lodash";
import TagsLink from "../components/tags-link";
import Frame from "../layouts/template";

const BlogTags = ({
  data: {
    tagsPosts: { group },
    allMarkdownRemark,
  },
  pageContext,
}) => {
  const { tag } = pageContext;
  const { edges, totalCount } = allMarkdownRemark;
  const Tags = group.map((tag) => <TagsLink key={tag.fieldValue} tag={tag} />);
  // const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`

  return (
    <Frame>
      <div className="mx-4 lg:mx-16 lg:grid gap-4 grid-flow-col grid-cols-10">
        <div className="col-span-8">
          <h4 className="flex justify-center gap-2 text-lg lg:text-2xl mb-6">
            <div className="italic font-semibold">{`${totalCount} Post${
              totalCount === 1 ? "" : "s"
            }`}</div>
            <div>{`tagged with "${_.capitalize(tag)}"`}</div>
          </h4>
          <div className="grid md:grid-cols-2 gap-2">
            {edges.map(({ node }) => {
              const { slug } = node.fields;
              const { excerpt } = node;
              const { title, date } = node.frontmatter;
              return (
                <div
                  key={slug}
                  className="p-4 rounded-lg border border-gray-300 shadow-lg"
                >
                  <Link to={`/blog${slug}`}>
                    <h4 className="mb-2 leading-5 text-neutral font-semibold link-primary">
                      {title}
                    </h4>
                  </Link>
                  <h5>{date}</h5>
                  <p className="text-gray-500">{excerpt}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-2 mt-8 lg:mt-14">
          <div className="sticky top-2 space-y-4">
            <Link to="/blog">
              <div className="w-full font-semibold rounded-lg bg-gray-200 hover:bg-gray-600 hover:text-gray-100 shadow-lg p-4">
                All Posts
              </div>
            </Link>
            <div className="rounded-lg bg-gray-200 shadow-lg p-4 mt-2 lg:mt-0 space-y-2">
              <h4>
                <strong>All Tags</strong>
              </h4>
              <div className="flex flex-wrap gap-2">{Tags}</div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
};

BlogTags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default BlogTags;

export const Head = ({
  data: {
    site: { meta },
  },
  pageContext,
}) => (
  <>
    <title>{`${_.capitalize(pageContext.tag)} | Blog Tags | ${
      meta.title
    }`}</title>
    <meta name="description" content={`${meta.desc} by ${meta.author}`} />
    <meta
      name="keywords"
      content="blog, travel, hobby, daliy, activity, coding, photography"
    />
  </>
);

export const tagQuery = graphql`query ($tag: String) {
  allMarkdownRemark(
    limit: 2000
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
          tags
        }
      }
    }
  }
  tagsPosts: allMarkdownRemark(limit: 2000) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
  site {
    meta: siteMetadata {
      title
      desc
      author
    }
  }
}`;
