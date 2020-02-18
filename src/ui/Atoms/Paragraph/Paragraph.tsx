/**
 * @author tomek
 * @since 2020-02-06 15:16:14
 */

import * as React from "react";
import styled, { css } from "styled-components";
import { ITheme, theme } from "@ui/theme";
import { SECTIONS } from "@config/sections";
import { gridElement, gridHelper, IGridHelper } from "@ui/helpers";
import { ColorContext } from "@ui/Atoms/Section/Section";

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
  variant?: PARAGRAPH_VARIANTS;
}

const Paragraph = styled.p<Props>`
  color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
  line-height: 1.75;
  font-weight: 500;
  margin-bottom: 3rem;
  ${props => props.padded && gridElement};
  ${props => (props.mobile || props.desktop || props.tablet) && gridHelper};

  u {
    color: ${() => `var(--section-${React.useContext(ColorContext)}-text)`};
    text-decoration: none;
  }

  a {
    color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
    position: relative;

    span {
      position: relative;
      z-index: 2;
    }

    &:before {
      position: absolute;
      bottom: -10%;
      left: -6.25%;
      width: 112.5%;
      height: 120%;
      background: ${() =>
        `var(--section-${React.useContext(ColorContext)}-highlight)`};
      display: block;
      content: "";
      z-index: 1;
      transform: scaleY(0.5);
      transform-origin: bottom;
      transition: ${theme.animations.short} transform ${theme.animations.easing},
        ${theme.animations.short} opacity ${theme.animations.easing};
    }
  }

  a:hover {
    color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};

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
      line-height: 1.5;
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

    ${({ variant }) =>
      variant === PARAGRAPH_VARIANTS.TEXT_FIRST &&
      css`
        font-size: ${theme.fonts.sizes.mediumDesktop};
        font-weight: 400;
        line-height: 1.6;
      `};
  }
`;

Paragraph.defaultProps = {
  section: SECTIONS.HERO,
  variant: PARAGRAPH_VARIANTS.NORMAL,
};

export { Paragraph };
