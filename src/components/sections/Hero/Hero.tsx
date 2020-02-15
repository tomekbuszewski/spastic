/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:48:38
 */

import * as React from "react";
import styled from "styled-components";

import {
  Section as Base,
  Grid,
  Heading as BaseHeading,
  Paragraph as BaseParagraph,
} from "@ui/Atoms";
import { gridElement, scrollTo } from "@ui/helpers";
import { BaseSection } from "@components/sections";
import { SECTIONS } from "@config/sections";
import { theme } from "@ui";

const Section = styled(Base)`
  padding-bottom: 16rem;
  margin-top: 6.5rem;
  display: grid;
  align-content: end;
  min-height: calc(100vh - 7.5rem);

  ${theme.breakpoints.tablet} {
    padding-bottom: 8rem;
    margin-top: 10rem;
    min-height: calc(100vh - 12rem);
  }

  ${theme.breakpoints.desktop} {
    margin-top: 10rem;
    min-height: calc(100vh - 13rem);
  }
`;

const Heading = styled(BaseHeading)`
  font-size: 4rem;
  line-height: 1.17;
  ${gridElement};
  margin-bottom: 6rem;

  ${theme.breakpoints.tablet} {
    font-size: 7rem;
  }

  ${theme.breakpoints.desktop} {
    font-size: 9rem;
  }
`;

const Paragraph = styled(BaseParagraph)`
  ${gridElement};
  font-size: 2rem;
  line-height: 3.25rem;
`;

export const HeroSection = ({ name }: BaseSection) => (
  <Section name={name} id={name}>
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
        <a
          href={`#${SECTIONS.CONTACT}`}
          onClick={() => scrollTo(SECTIONS.CONTACT)}
        >
          <span>Let’s talk!</span>
        </a>
      </Paragraph>
    </Grid>
  </Section>
);
