/**
 * @author tomek
 * @since 2020-02-06 14:42:40
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

interface Props {
  section: string;
  children?: React.ReactNode;
  theme: ITheme;
}

const Heading = styled.h2<Props>`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  color: ${props => `var(--section-${props.section}-lead)`};
  letter-spacing: -0.025em;
  
  u {
    color: ${props => `var(--section-${props.section}-text)`};
    text-decoration: none;
  }
  
  ${props => props.theme.breakpoints.desktop} {
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