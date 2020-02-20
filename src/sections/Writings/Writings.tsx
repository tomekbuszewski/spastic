import * as React from "react";
import { SECTIONS } from "@config/sections";
import { Grid, Heading, HEADING_SIZES, Section } from "@ui/Atoms";
import { BlogEntry, MoreLink } from "@ui/Molecules";
import { graphql, useStaticQuery } from "gatsby";

import { IBlogEntry } from "@ui/Molecules/BlogEntry/BlogEntry";

interface IBlogNode {
  entry: {
    id: string;
    entry: IBlogEntry;
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
            entry: frontmatter {
              pubdate(formatString: "MMMM Do, YYYY")
              summary
              title
              link
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
          gridColumnsTablet="repeat(4, 1fr)"
        >
          {entries.map(({ entry }: IBlogNode) => (
            <BlogEntry key={entry.id} {...entry.entry} />
          ))}
        </Grid>
        {totalCount > 8 && (
          <MoreLink to={""}>
            More entries<strong>.</strong>
          </MoreLink>
        )}
      </Grid>
    </Section>
  );
};

export { Writings };
