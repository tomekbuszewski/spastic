/**
 * @author tomek
 * @since 2020-02-06 14:42:40
 */

import * as React from "react";
import styled, { css } from "styled-components";
import { theme } from "@ui/theme";
import { gridElement } from "@ui/helpers";

export enum HEADING_SIZES {
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
}

interface Props {
  section: string;
  children?: React.ReactNode;
  full?: boolean;
  size?: HEADING_SIZES;
}

const Heading = styled.h2<Props>`
  font-weight: 800;
  margin-bottom: 4rem;
  color: ${props => `var(--section-${props.section}-lead)`};
  ${gridElement};

  ${props =>
    props.size === HEADING_SIZES.SMALL &&
    css`
      font-size: ${theme.fonts.sizes.medium};
      letter-spacing: -0.01em;
    `};

  ${props =>
    props.size === HEADING_SIZES.NORMAL &&
    css`
      font-size: ${theme.fonts.sizes.large};
      letter-spacing: -0.015em;
    `};

  ${props =>
    props.size === HEADING_SIZES.LARGE &&
    css`
      font-size: ${theme.fonts.sizes.huge};
      letter-spacing: -0.02em;
    `};

  ${props =>
    props.full &&
    css`
      grid-column-start: 1;
      grid-column-end: 12;
    `};

  u {
    color: ${props => `var(--section-${props.section}-text)`};
    text-decoration: none;
  }

  ${theme.breakpoints.desktop} {
    ${props =>
      props.size === HEADING_SIZES.SMALL &&
      css`
        font-size: ${theme.fonts.sizes.mediumDesktop};
      `};

    ${props =>
      props.size === HEADING_SIZES.NORMAL &&
      css`
        font-size: ${theme.fonts.sizes.largeDesktop};
      `};

    ${props =>
      props.size === HEADING_SIZES.LARGE &&
      css`
        font-size: ${theme.fonts.sizes.hugeDesktop};
        letter-spacing: -0.035em;
      `};
  }
`;

Heading.defaultProps = {
  section: "hero",
  size: HEADING_SIZES.NORMAL,
};

export { Heading };
