/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:48:38
 */

import * as React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import {
  Section,
  Grid as BaseGrid,
  Heading,
  Paragraph as BaseParagraph,
  ListItem,
} from "@ui/Atoms";
import { List } from "@ui/Molecules";
import { gridElement } from "@ui/helpers";
import { BaseSection } from "@components/sections";
import { theme } from "@ui";

const Paragraph = styled(BaseParagraph)`
  ${gridElement};

  &:last-of-type {
    margin-bottom: 4rem;
  }

  ${props => props.theme.breakpoints.tablet} {
    &:last-of-type {
      margin-bottom: 9rem;
    }
  }
`;

const Grid = styled(BaseGrid)`
  display: block;

  ${props => props.theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const LinkWrapper = styled(Paragraph)`
  grid-column-start: 1;
  grid-column-end: 12;

  &:last-of-type {
    margin: 4rem 0 0;
  }

  ${props => props.theme.breakpoints.tablet} {
    &:last-of-type {
      margin: 4rem 0 0;
    }
  }

  ${props => props.theme.breakpoints.desktop} {
    &:last-of-type {
      margin: 9rem 0 0;
    }
  }
`;

export const AboutSection = ({ name }: BaseSection) => (
  <Section centered name={name} id={name}>
    <Grid>
      <Heading full section={name}>
        About me<u>.</u>
      </Heading>
      <Paragraph section={name}>
        Developer, consultant <u>and</u> lead <u>with over</u> 12 years of
        commercial experience. <u>Capable of managing projects from start</u>{" "}
        (writing concepts, choosing technology, creating boilerplate and style
        guides) <u>to finish</u>
        (active development with strong understanding of agile methodology).
      </Paragraph>
      <List section={name}>
        <ListItem>
          Clean <u>and</u> documented code <u>fanatic</u>;
        </ListItem>
        <ListItem>
          <u>Able to</u> create scalable project architecture{" "}
          <u>from scratch</u>;
        </ListItem>
        <ListItem>
          Functional <u>and</u> object-oriented programming <u>user</u>;
        </ListItem>
        <ListItem>
          <u>Experienced in</u> optimization of front-end layer{" "}
          <u>of application</u>;
        </ListItem>
        <ListItem>
          <u>REST</u> and <u>GraphQL</u> user;
        </ListItem>
        <ListItem>
          <u>Able to</u> create PoC <u>and develop it</u> into a working
          product;
        </ListItem>
        <ListItem>
          <u>Writes</u> tests <u>with good</u> code coverage;
        </ListItem>
        <ListItem>
          <u>Strict</u> code reviewer;
        </ListItem>
        <ListItem>
          <u>Proven</u> team leader;
        </ListItem>
        <ListItem>
          <u>Good</u> team player.
        </ListItem>
      </List>
      <LinkWrapper section={name}>
        <AniLink cover to="/about" bg={theme.colors.brand} duration={1}>
          <span>A bit more info please</span>
        </AniLink>
      </LinkWrapper>
    </Grid>
  </Section>
);
