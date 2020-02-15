/**
 * @author tomek
 * @since 2020-02-06 14:42:40
 */

import * as React from "react";
import styled, { css } from "styled-components";
import { theme } from "@ui/theme";
import { gridElement } from "@ui/helpers";

interface Props {
  section: string;
  children?: React.ReactNode;
  full?: boolean;
}

const Heading = styled.h2<Props>`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  color: ${props => `var(--section-${props.section}-lead)`};
  letter-spacing: -0.025em;
  ${gridElement};
  
  ${props => props.full && css`
    grid-column-start: 1;
    grid-column-end: 12;
  `};
  
  u {
    color: ${props => `var(--section-${props.section}-text)`};
    text-decoration: none;
  }
  
  ${theme.breakpoints.desktop} {
    font-size: 6rem;
    margin-bottom: 9rem;
  }
`;

Heading.defaultProps = {
  section: "hero",
};

export {
  Heading,
}