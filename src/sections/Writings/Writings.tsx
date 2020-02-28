import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { LinkWrapper } from "@components";
import { SECTIONS } from "@config/sections";
import { Grid, Heading, HEADING_SIZES, Section } from "@ui/Atoms";
import { BlogEntry, MoreLink } from "@ui/Molecules";

import { IBlogEntry } from "@ui/Molecules/BlogEntry/BlogEntry";

export interface IBlogNode {
  entry: {
    id: string;
    entry: IBlogEntry;
    fields: {
      slug: string;
    };
  };
}

const Writings = () => {
  const {
    data: { entries, totalCount },
  } = useStaticQuery(graphql`
    {
      data: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/writings/" } }
        sort: { fields: frontmatter___pubdate, order: DESC }
        limit: 9
      ) {
        totalCount
        entries: edges {
          entry: node {
            fields {
              slug
            }
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
  `);

  return (
    <Section name={SECTIONS.WRITINGS}>
      <Grid gridColumnsMobile="1fr" as="article">
        <Heading right tablet={[4, 5]} padded size={HEADING_SIZES.NORMAL}>
          Writings<strong>.</strong>
        </Heading>
        <Grid
          as="ul"
          mobile={[1, 5]}
          gridColumnsMobile="1fr"
          gridColumnsTablet="repeat(2, 1fr)"
          gridColumnsDesktop="repeat(4, 1fr)"
        >
          {[...entries].slice(0, 8).map(({ entry }: IBlogNode) => (
            <BlogEntry
              key={entry.id}
              {...entry.entry}
              slug={entry.fields.slug}
            />
          ))}
        </Grid>
        {totalCount > 8 && (
          <MoreLink to="/writings/2" component={LinkWrapper}>
            More entries<strong>.</strong>
          </MoreLink>
        )}
      </Grid>
    </Section>
  );
};

export { Writings };
