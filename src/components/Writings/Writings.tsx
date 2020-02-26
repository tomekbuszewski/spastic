import * as React from "react";
import { graphql } from "gatsby";
import slugify from "slugify";

import { Layout, LinkWrapper } from "@components";
import { Grid, PaginationButton } from "@ui/Atoms";
import { BlogEntry, ArticleHeader } from "@ui/Molecules";
import slugifyCfg from "@config/slugify";

const Writings = props => {
  const {
    pageContext: { numberOfPages, currentPage },
    data: {
      data: { entries },
    },
  } = props;

  return (
    <Layout isFrontPage={false}>
      <ArticleHeader title="Writings" />
      <Grid
        gridColumnsMobile="1fr"
        gridColumnsTablet="repeat(2, 1fr)"
        gridColumnsDesktop="repeat(4, 1fr)"
      >
        {entries.map(({ entry }) => (
          <BlogEntry
            tablet={[1, 3]}
            desktop={[2, 4]}
            key={entry.id}
            {...entry.entry}
            slug={slugify(
              `/writings/${entry.entry.slugPubdate}-${entry.entry.title}`,
              slugifyCfg
            )}
          />
        ))}
        <Grid
          as="nav"
          gridColumnsMobile="repeat(2, 1fr)"
          mobile={[1, 2]}
          tablet={[1, 3]}
          desktop={[2, 4]}
        >
          {currentPage !== 1 && (
            <LinkWrapper
              to={`/writings/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
              direction="right"
            >
              <PaginationButton>
                ← <span>Newer</span>
              </PaginationButton>
            </LinkWrapper>
          )}
          {currentPage !== numberOfPages && (
            <LinkWrapper to={`/writings/${currentPage + 1}`}>
              <PaginationButton right>
                <span>Older</span> →
              </PaginationButton>
            </LinkWrapper>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Writings;
export const writingsQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    data: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/writings/" } }
      sort: { fields: frontmatter___pubdate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      entries: edges {
        entry: node {
          entry: frontmatter {
            pubdate(formatString: "MMMM Do, YYYY")
            slugPubdate: pubdate(formatString: "YYYY-MM-DD")
            summary
            title
          }
        }
      }
    }
  }
`;
