import * as React from "react";

import { Grid, HEADING_SIZES, PARAGRAPH_VARIANTS, Section } from "@ui/Atoms";

import { Markdown } from "@ui/helpers";
import { SECTIONS } from "@config/sections";

import { graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  const { head, text } = useStaticQuery(graphql`
    {
      head: markdownRemark(
        frontmatter: { group: { eq: "hero" }, title: { eq: "intro" } }
      ) {
        body: rawMarkdownBody
      }
      text: markdownRemark(
        frontmatter: { group: { eq: "hero" }, title: { eq: "description" } }
      ) {
        body: rawMarkdownBody
      }
    }
  `);

  return (
    <Section name={SECTIONS.HERO}>
      <Grid padded gridColumnsMobile="repeat(4, 1fr)">
        <Markdown
          size={HEADING_SIZES.LARGE}
          source={head.body}
          desktop={[1, 4]}
          mobile={[1, 4]}
        />
        <Markdown
          variant={PARAGRAPH_VARIANTS.BOLD}
          source={text.body}
          desktop={[1, 2]}
          mobile={[1, 4]}
        />
      </Grid>
    </Section>
  );
};

export { Hero };
