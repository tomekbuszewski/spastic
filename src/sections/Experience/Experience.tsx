import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { MoreLink, WorkItem } from "@ui/Molecules";
import {
  Grid,
  Heading,
  HEADING_SIZES,
  NavHolder,
  Paragraph,
  PARAGRAPH_VARIANTS,
  Section,
} from "@ui/Atoms";
import { SECTIONS } from "@config/sections";
import { IWorkItem } from "@ui/Molecules/WorkItem/WorkItem";

interface IWorkNode {
  node: {
    data: IWorkItem;
  };
}

const Experience = () => {
  const {
    items: { items },
  } = useStaticQuery(graphql`
    {
      items: allMarkdownRemark(
        filter: { frontmatter: { group: { eq: "experience" } } }
        sort: { fields: frontmatter___from, order: DESC }
      ) {
        items: edges {
          node {
            data: frontmatter {
              from(formatString: "YYYY.MM")
              position
              to(formatString: "YYYY.MM")
              work
            }
          }
        }
      }
    }
  `);

  const [visible, setVisible] = React.useState<number[]>([0, 1, 2]);
  const showMore = () => setVisible(vis => vis.map(i => i + 1));
  const showLess = () => setVisible(vis => vis.map(i => i - 1));

  return (
    <React.Fragment>
      <Section name={SECTIONS.EXPERIENCE}>
        <Grid
          gridColumnsMobile="1fr"
          gridColumnsTablet="repeat(4, 1fr)"
          as="article"
        >
          <Heading right padded size={HEADING_SIZES.NORMAL} tablet={[1, 3]}>
            Work Experience<strong>.</strong>
          </Heading>
          <Grid
            as="ul"
            mobile={[1, 5]}
            tablet={[1, 5]}
            gridColumnsTablet="repeat(4, 1fr)"
          >
            <NavHolder as="li">
              <Paragraph
                variant={PARAGRAPH_VARIANTS.BOLD}
                as={"button"}
                onClick={showLess}
                disabled={visible[0] <= 0}
              >
                less
              </Paragraph>
              <Paragraph
                as="button"
                variant={PARAGRAPH_VARIANTS.BOLD}
                onClick={showMore}
                disabled={visible[2] >= items.length - 1}
              >
                more
              </Paragraph>
            </NavHolder>
            {items.map((item: IWorkNode, i: number) => (
              <WorkItem
                {...item.node.data}
                key={item.node.data.work}
                visible={visible.includes(i)}
              />
            ))}
          </Grid>
          <MoreLink
            right
            hrefProps={{ download: true, href: "/tomek-buszewski_cv.pdf" }}
          >
            Get my résumé as .pdf<strong>.</strong>
          </MoreLink>
        </Grid>
      </Section>
    </React.Fragment>
  );
};

export { Experience };
