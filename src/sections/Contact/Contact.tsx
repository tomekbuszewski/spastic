import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SECTIONS } from "@config/sections";
import { Grid, GridElement, Section } from "@ui/Atoms";
import { Markdown } from "@components";

const Contact = () => {
  const { email, social } = useStaticQuery(graphql`
    {
      email: markdownRemark(
        frontmatter: { group: { eq: "contact" }, title: { eq: "email" } }
      ) {
        body: rawMarkdownBody
      }
      social: markdownRemark(
        frontmatter: { group: { eq: "contact" }, title: { eq: "social" } }
      ) {
        body: rawMarkdownBody
      }
    }
  `);

  return (
    <Section name={SECTIONS.CONTACT}>
      <Grid
        as="article"
        gridColumnsMobile="1fr"
        gridColumnsTablet="repeat(4, 1fr)"
      >
        <GridElement tablet={[1, 3]} desktop={[2, 3]}>
          <Markdown padded source={email.body} />
        </GridElement>
        <GridElement tablet={[3, 5]} desktop={[3, 5]} mobileTop>
          <Markdown padded source={social.body} />
        </GridElement>
      </Grid>
    </Section>
  );
};

export { Contact };
