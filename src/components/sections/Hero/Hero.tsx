/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:48:38
 */

import * as React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import {
  Section as Base,
  Grid,
  Heading as BaseHeading,
  Paragraph as BaseParagraph,
} from "@ui/Atoms";
import { gridElement } from "@ui/helpers";
import { BaseSection } from "@components/sections";

const Section = styled(Base)`
  padding-bottom: 8rem;
  display: grid;
  align-content: end;
`;

const Heading = styled(BaseHeading)`
  font-size: 4rem;
  line-height: 1.17;
  ${gridElement};
  margin-bottom: 6rem;

  ${props => props.theme.breakpoints.tablet} {
    font-size: 7rem;
  }

  ${props => props.theme.breakpoints.desktop} {
    font-size: 9rem;
  }
`;

const Paragraph = styled(BaseParagraph)`
  ${gridElement};
  font-size: 2rem;
  line-height: 3.25rem;
`;

export const HeroSection = ({ name }: BaseSection) => (
  <Section name={name}>
    <Grid>
      <Heading section={name}>
        Hello,
        <br />
        <u>my name is</u> Tomek<u>.</u>
      </Heading>
      <Paragraph section={name}>
        I am <u>a</u> front-end team leader <u>at</u> TVN.
      </Paragraph>
      <Paragraph section={name}>
        <u>Got something</u> interesting in mind?
        <br />
        <u>Or just want to</u> say hi?{" "}
        <a href={""}>
          <span>Let’s talk!</span>
        </a>
      </Paragraph>
    </Grid>
  </Section>
);
