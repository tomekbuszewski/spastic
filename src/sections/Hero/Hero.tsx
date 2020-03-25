import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { SECTIONS } from "@config/sections";

import { Markdown } from "@components";
import {
  Grid,
  HEADING_SIZES,
  PARAGRAPH_VARIANTS,
  Section,
  FadeIn,
} from "@ui/Atoms";

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
      <FadeIn>
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
            desktop={[1, 3]}
            mobile={[1, 4]}
          />
        </Grid>
      </FadeIn>
    </Section>
  );
};

export { Hero };
