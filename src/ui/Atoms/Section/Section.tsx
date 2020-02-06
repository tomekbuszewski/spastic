/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:48:38
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

interface Props {
  children?: React.ReactNode;
  theme: ITheme;
  sectionName: string;
}

const Section = styled.section<Props>`
  width: calc(100vw - 2rem);
  min-height: calc(100vh - 2rem);
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 1rem;

  background: var(--section-${props => props.sectionName}-background);
  color: var(--section-${props => props.sectionName}-lead);

  ${props => props.theme.breakpoints.tablet} {
    width: calc(100vw - 4rem);
    min-height: calc(100vh - 4rem);
    margin: 2rem;
    padding-left: 0;
    padding-right: 0;
  }

  ${props => props.theme.breakpoints.desktop} {
    width: calc(100vw - 6rem);
    min-height: calc(100vh - 6rem);
    margin: 3rem;
  }
`;

export { Section };
