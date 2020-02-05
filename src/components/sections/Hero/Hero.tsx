/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:48:38
 */

import * as React from "react";
import styled from "styled-components";

import { Section as Base, Grid } from "@ui/Atoms";

const Section = styled(Base)`
  padding-top: 50vh;
`;

export const HeroSection = () => (
  <Section sectionName="hero">
    <Grid>Hello from Hero</Grid>
  </Section>
);
