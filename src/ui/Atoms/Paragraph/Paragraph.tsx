/**
 * @author tomek
 * @since 2020-02-06 15:16:14
 */

import * as React from "react";
import styled, { css } from "styled-components";
import { ITheme, theme } from "@ui/theme";
import { SECTIONS } from "@config/sections";
import {
  gridElement,
  gridHelper,
  IGridHelper,
  withTransitions,
} from "@ui/helpers";
import { ColorContext } from "@ui/Atoms/Section/Section";
import { Heading } from "@ui/Atoms";

export enum PARAGRAPH_VARIANTS {
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
  BOLD = "bold",
  TEXT = "text",
  TEXT_FIRST = "text_first",
}

interface Props extends IGridHelper {
  section?: SECTIONS;
  children?: React.ReactNode;
  theme: ITheme;
  padded?: boolean;
  right?: boolean;
  variant?: PARAGRAPH_VARIANTS;
}

const Paragraph = styled.p<Props>`
  color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
  line-height: 1.75;
  font-weight: 500;
  margin-bottom: 3rem;
  ${props => props.padded && gridElement};
  ${props => (props.mobile || props.desktop || props.tablet) && gridHelper};
  ${props => props.right && "text-align: right"};

  &[disabled] {
    opacity: 0.5;
  }

  background: none;
  border: 0;

  &:hover,
  &:focus {
    outline: 0;
  }

  strong {
    color: ${() => `var(--section-${React.useContext(ColorContext)}-text)`};
    text-decoration: none;
    font-weight: inherit;
  }

  a {
    ${withTransitions("background", theme.animations.long)};
    color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
    position: relative;
    background: linear-gradient(
        to bottom,
        ${() => `var(--section-${React.useContext(ColorContext)}-highlight)`} 0%,
        ${() => `var(--section-${React.useContext(ColorContext)}-highlight)`}
          100%
      )
      repeat-x 0 100%;
    background-size: 0.5rem 1rem;

    span {
      position: relative;
      z-index: 2;
    }
  }

  code {
    font-size: 0.9em;
    font-family: ${theme.fonts.faces.secondary};
    background: var(--code-bg);
    color: var(--code-text);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  a:hover {
    color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
    background-size: 0.5rem 3rem;

    &:before {
      transform: scaleY(1);
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  ${({ variant }) =>
    variant === PARAGRAPH_VARIANTS.SMALL &&
    css`
      font-size: ${theme.fonts.sizes.small};
    `};

  ${({ variant }) =>
    variant === PARAGRAPH_VARIANTS.NORMAL &&
    css`
      font-size: ${theme.fonts.sizes.smallDesktop};
    `};

  ${({ variant }) =>
    variant === PARAGRAPH_VARIANTS.BOLD &&
    css`
      font-size: ${theme.fonts.sizes.smallDesktop};
      font-weight: 800;
    `};

  ${({ variant }) =>
    variant === PARAGRAPH_VARIANTS.LARGE &&
    css`
      font-size: ${theme.fonts.sizes.medium};
      font-weight: 800;
      line-height: 1.6;
    `};

  ${({ variant }) =>
    variant === PARAGRAPH_VARIANTS.TEXT &&
    css`
      font-family: ${theme.fonts.faces.serif};
      font-size: ${theme.fonts.sizes.smallDesktop};
      font-weight: 400;
      line-height: 1.85;

      &:first-of-type {
        font-size: ${theme.fonts.sizes.medium};
      }

      strong {
        color: ${() => `var(--section-${React.useContext(ColorContext)}-text)`};
        font-weight: 900;
      }
    `};

  ${({ variant }) =>
    variant === PARAGRAPH_VARIANTS.TEXT_FIRST &&
    css`
      font-family: ${theme.fonts.faces.serif};
      font-size: ${theme.fonts.sizes.medium};
      font-weight: 400;
      line-height: 1.5;
    `};

  ${theme.breakpoints.tablet} {
    ${({ variant }) =>
      variant === PARAGRAPH_VARIANTS.LARGE &&
      css`
        font-size: ${theme.fonts.sizes.mediumDesktop};
        line-height: 1.6;
      `};
  }

  ${theme.breakpoints.desktop} {
    ${({ variant }) =>
      variant === PARAGRAPH_VARIANTS.TEXT &&
      css`
        grid-column-start: 3;
        grid-column-end: 7;
        align-self: flex-start;
      `};
  }
`;

Paragraph.defaultProps = {
  variant: PARAGRAPH_VARIANTS.NORMAL,
};

export { Paragraph };
