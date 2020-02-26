import * as React from "react";
import { graphql } from "gatsby";
import slugify from "slugify";

import { Layout } from "@components";
import { Grid } from "@ui/Atoms";
import { BlogEntry } from "@ui/Molecules";
import slugifyCfg from "@config/slugify";

const Writings = ({
  data: {
    data: { entries },
  },
}: any) => {
  return (
    <Layout isFrontPage={false}>
      <Grid
        gridColumnsMobile="1fr"
        gridColumnsTablet="repeat(2, 1fr)"
        gridColumnsDesktop="repeat(4, 1fr)"
      >
        {entries.map(({ entry }) => (
          <BlogEntry
            key={entry.id}
            {...entry.entry}
            slug={slugify(
              `/writings/${entry.entry.slugPubdate}-${entry.entry.title}`,
              slugifyCfg
            )}
          />
        ))}
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
