import * as React from "react";

import { Grid, HEADING_SIZES, PARAGRAPH_VARIANTS, Section } from "@ui/Atoms";

import { Markdown } from "@ui/helpers";
import { SECTIONS } from "@config/sections";

import { graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  const { head, text } = useStaticQuery(graphql`
    {
      head: markdownRemark(id: { eq: "f1835b8c-8544-5f16-8cdc-f83978573798" }) {
        body: rawMarkdownBody
      }
      text: markdownRemark(id: { eq: "a8f7c5f6-03ac-5823-8dcb-7e7e4ef26302" }) {
        body: rawMarkdownBody
      }
    }
  `);

  return (
    <Section name={SECTIONS.HERO}>
      <Grid padded>
        <Markdown size={HEADING_SIZES.LARGE} source={head.body} />
        <Markdown variant={PARAGRAPH_VARIANTS.BOLD} source={text.body} />
      </Grid>
    </Section>
  );
};

export { Hero };
