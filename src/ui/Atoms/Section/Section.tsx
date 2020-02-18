/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:48:38
 */

import * as React from "react";
import styled from "styled-components";
import { theme } from "@ui/theme";
import { SECTIONS } from "@config/sections";

interface Props {
  className?: string;
  children?: React.ReactNode;
  name: SECTIONS;
}

export const ColorContext = React.createContext(SECTIONS.ABOUT);

const Section = styled((props: Props) => {
  return (
    <ColorContext.Provider value={props.name}>
      <section className={props.className} {...props} />
    </ColorContext.Provider>
  );
})`
  padding: 9rem 0;
  margin: 1rem;

  background: ${props => `var(--section-${props.name}-background)`};
  color: ${props => `var(--section-${props.name}-lead)`};

  ${props => props.name === SECTIONS.HERO && "margin-top: 0"};

  ${theme.breakpoints.tablet} {
    margin: 2rem;
    ${props => props.name === SECTIONS.HERO && "margin-top: 0"};
    padding: 10rem 0;
  }

  ${theme.breakpoints.desktop} {
    width: calc(100vw - 6rem);
    margin: 3rem;
    ${props => props.name === SECTIONS.HERO && "margin-top: 0"};
    padding: 14rem 0;
  }
`;

export { Section };
