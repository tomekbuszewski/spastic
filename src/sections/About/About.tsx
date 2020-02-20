import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { SECTIONS } from "@config/sections";
import {
  Grid,
  Heading,
  HEADING_SIZES,
  PARAGRAPH_VARIANTS,
  Section,
} from "@ui/Atoms";
import { MoreLink } from "@ui/Molecules";
import { Markdown } from "@ui/helpers";

const About = () => {
  const { list, description } = useStaticQuery(graphql`
    {
      list: markdownRemark(
        frontmatter: { group: { eq: "aboutMe" }, title: { eq: "list" } }
      ) {
        body: rawMarkdownBody
      }

      description: markdownRemark(
        frontmatter: { group: { eq: "aboutMe" }, title: { eq: "description" } }
      ) {
        body: rawMarkdownBody
      }
    }
  `);

  return (
    <Section name={SECTIONS.ABOUT}>
      <Grid gridColumnsMobile="1fr" gridColumnsTablet="1fr 1fr" as="article">
        <Heading
          padded
          full
          section={SECTIONS.ABOUT}
          size={HEADING_SIZES.NORMAL}
        >
          About me<strong>.</strong>
        </Heading>
        <Markdown
          mobile={[1, 12]}
          tablet={[1, 2]}
          padded
          source={description.body}
          variant={PARAGRAPH_VARIANTS.LARGE}
        />
        <Markdown padded source={list.body} />
        <MoreLink>
          A bit more info please<u>.</u>
        </MoreLink>
      </Grid>
    </Section>
  );
};

export { About };
