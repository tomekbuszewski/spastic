/**
 * @author tomek
 * @since 2020-02-17 13:03:08
 */

import * as React from "react";
import styled from "styled-components";

import { Grid, Paragraph, PARAGRAPH_VARIANTS } from "@ui/Atoms";
import { theme } from "@ui";
import { SECTIONS } from "@config/sections";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const PageFooter = styled((props: Props) => (
  <footer className={props.className}>
    <Grid padded>
      <Paragraph variant={PARAGRAPH_VARIANTS.SMALL} section={SECTIONS.WRITINGS}>
        (c) {new Date().getFullYear()} buszewski.com — {props.children}
      </Paragraph>
    </Grid>
  </footer>
))`
  text-align: center;
  background: var(--body);

  ${theme.breakpoints.tablet} {
    display: grid;

    text-align: right;
    height: 10rem;
    align-items: center;
  }
`;

export { PageFooter };
