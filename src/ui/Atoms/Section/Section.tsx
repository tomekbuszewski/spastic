/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:48:38
 */

import * as React from "react";
import styled, { css } from "styled-components";
import { ITheme, theme } from "@ui/theme";

interface Props {
  children?: React.ReactNode;
  centered?: boolean;
  theme: ITheme;
  name: string;
}

const Section = styled.section<Props>`
  width: calc(100vw - 2rem);
  padding: 9rem 1rem;
  margin: 1rem;

  background: ${props => `var(--section-${props.name}-background)`};
  color: ${props => `var(--section-${props.name}-lead)`};

  ${props =>
    props.centered &&
    css`
      min-height: calc(100vh - 2rem);
      display: grid;
      align-content: center;
    `};

  ${theme.breakpoints.tablet} {
    width: calc(100vw - 4rem);
    min-height: ${props => props.centered && "calc(100vh - 4rem)"};
    margin: 2rem;
    padding: 10rem 0;
  }

  ${theme.breakpoints.desktop} {
    width: calc(100vw - 6rem);
    min-height: ${props => props.centered && "calc(100vh - 6rem)"};
    margin: 3rem;
    padding: 14rem 0;
  }
`;

export { Section };
