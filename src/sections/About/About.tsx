import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { LinkWrapper as AniLink, Markdown } from "@components";

import { SECTIONS } from "@config/sections";
import {
  Grid,
  Heading,
  HEADING_SIZES,
  PARAGRAPH_VARIANTS,
  Section,
  FadeIn,
} from "@ui/Atoms";
import { MoreLink } from "@ui/Molecules";

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
      <FadeIn>
        <Grid gridColumnsMobile="1fr" gridColumnsDesktop="1fr 1fr" as="article">
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
            desktop={[1, 2]}
            padded
            source={description.body}
            variant={PARAGRAPH_VARIANTS.LARGE}
          />
          <Markdown padded source={list.body} />
          <MoreLink to="/about" component={AniLink}>
            A bit more info please<strong>.</strong>
          </MoreLink>
        </Grid>
      </FadeIn>
    </Section>
  );
};

export { About };
export default About;
