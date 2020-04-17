import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { LinkWrapper } from "@components";
import { SECTIONS } from "@config/sections";
import { Grid, Heading, HEADING_SIZES, Section, FadeIn } from "@ui/Atoms";
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
              featuredImage {
                childImageSharp {
                  fluid(
                    duotone: {
                      highlight: "#0ec4f1"
                      shadow: "#192550"
                      opacity: 50
                    }
                    quality: 90
                    webpQuality: 90
                  ) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Section name={SECTIONS.WRITINGS}>
      <FadeIn>
        <Grid gridColumnsMobile="1fr" gridColumnsTablet="repeat(4, 1fr)">
          <Heading tablet={[4, 5]} padded size={HEADING_SIZES.NORMAL}>
            Writings<strong>.</strong>
          </Heading>
          <Grid
            as="ul"
            mobile={[1, 5]}
            gridColumnsMobile="1fr"
            gridColumnsTablet="repeat(2, 1fr)"
            gridColumnsDesktop="repeat(4, 1fr)"
          >
            {[...entries].slice(0, 8).map(({ entry }: IBlogNode) => {
              const photo =
                entry.entry.featuredImage &&
                entry.entry.featuredImage.childImageSharp;

              return (
                <BlogEntry
                  key={entry.id}
                  {...entry.entry}
                  slug={entry.fields.slug}
                  photo={photo}
                />
              );
            })}
          </Grid>
          {totalCount > 8 && (
            <MoreLink to="/writings/2" component={LinkWrapper}>
              More entries<strong>.</strong>
            </MoreLink>
          )}
        </Grid>
      </FadeIn>
    </Section>
  );
};

export { Writings };
export default Writings;
