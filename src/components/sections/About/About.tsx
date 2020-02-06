/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:48:38
 */

import * as React from "react";
import styled from "styled-components";

import { Section, Grid as BaseGrid, Heading, Paragraph as BaseParagraph } from "@ui/Atoms";
import { gridElement } from "@ui/helpers";

const Paragraph = styled(BaseParagraph)`
  ${gridElement};
`;

const Grid = styled(BaseGrid)`
  ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutSection = () => (
  <Section sectionName="blue">
    <Grid>
      <Heading full section="blue">About me<u>.</u></Heading>
      <Paragraph section="blue">
        Developer, consultant <u>and</u> lead <u>with over</u> 12 years
        of commercial experience. <u>Capable of managing projects
        from start</u> (writing concepts, choosing technology,
        creating boilerplate and style guides) <u>to finish</u>
        (active development with strong understanding of agile methodology).
      </Paragraph>
    </Grid>
  </Section>
);
