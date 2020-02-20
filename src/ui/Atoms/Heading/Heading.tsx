/**
 * @author tomek
 * @since 2020-02-06 14:42:40
 */

import * as React from "react";
import styled, { css } from "styled-components";

import { theme } from "@ui/theme";
import { gridElement, gridHelper, IGridHelper } from "@ui/helpers";
import { SECTIONS } from "@config/sections";

export enum HEADING_SIZES {
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
}

interface Props extends IGridHelper {
  section?: SECTIONS;
  children?: React.ReactNode;
  full?: boolean;
  size?: HEADING_SIZES;
  padded?: boolean;
  right?: boolean;
}

import { ColorContext } from "@ui/Atoms/Section/Section";

const Heading = styled.h2<Props>`
  font-weight: 800;
  margin-bottom: 4rem;
  color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
  ${props => props.padded && gridElement};
  ${props => (props.mobile || props.desktop || props.tablet) && gridHelper};

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
      margin-top: 20vh;
      font-size: ${theme.fonts.sizes.huge};
      line-height: 1.13;
      letter-spacing: -0.02em;
    `};

  ${props =>
    props.full &&
    css`
      grid-column-start: 1;
      grid-column-end: 5;
    `};

  strong {
    color: ${() => `var(--section-${React.useContext(ColorContext)}-text)`};
    text-decoration: none;
  }

  ${theme.breakpoints.tablet} {
    margin-top: 0;
    ${props => props.right && "text-align: right"};
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
        margin-bottom: 9rem;
      `};

    ${props =>
      props.size === HEADING_SIZES.LARGE &&
      css`
        margin-top: 20vh;
        font-size: ${theme.fonts.sizes.hugeDesktop};
        line-height: 1.13;
        margin-bottom: 7.5rem;
        letter-spacing: -0.035em;
      `};
  }
`;

Heading.defaultProps = {
  size: HEADING_SIZES.NORMAL,
};

export { Heading };
