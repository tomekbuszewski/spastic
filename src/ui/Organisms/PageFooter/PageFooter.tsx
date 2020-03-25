/**
 * @author tomek
 * @since 2020-02-17 13:03:08
 */

import * as React from "react";
import styled from "styled-components";

import { Grid, Paragraph, PARAGRAPH_VARIANTS } from "@ui/Atoms";
import { theme } from "@ui";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const PageFooter = styled((props: Props) => (
  <footer className={props.className}>
    <Grid padded>
      <Paragraph variant={PARAGRAPH_VARIANTS.SMALL}>
        (c) {new Date().getFullYear()} buszewski.com — {props.children}
      </Paragraph>
    </Grid>
  </footer>
))`
  text-align: center;
  background: var(--body);
  padding-top: 2rem;
  padding-bottom: 3rem;
  position: sticky;
  z-index: 0;
  bottom: 0;

  ${theme.breakpoints.tablet} {
    display: grid;

    text-align: right;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }

  ${theme.breakpoints.desktop} {
    padding-top: 1rem;
    padding-bottom: 4rem;
  }
`;

export { PageFooter };
