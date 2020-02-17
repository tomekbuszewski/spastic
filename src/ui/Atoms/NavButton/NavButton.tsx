/**
 * @author tomekbuszewski
 * @since 2020-02-06 07:01:12
 */

import * as React from "react";
import styled, { css } from "styled-components";
import { theme } from "@ui/theme";

interface Props {
  active: boolean;
  children?: React.ReactNode;
}

const NavButton = styled.button<Props>`
  width: 5rem;
  height: 5rem;
  background: none;
  outline: 0;
  border: 0;
  margin-left: auto;
  position: relative;
  z-index: 12;

  &:before,
  &:after {
    width: 2rem;
    height: 1px;
    background: var(--section-hero-text);
    display: block;
    content: "";
    position: absolute;
    right: 0;
    transition: ${theme.animations.short} transform ${theme.animations.easing};
  }

  &:before {
    top: calc(50% - 2px);
  }

  &:after {
    top: calc(50% + 2px);
  }

  &:focus,
  &:active {
    outline: 0;
  }

  ${props =>
    props.active &&
    css`
      &:before {
        transform: translateY(2px) rotate(45deg);
      }

      &:after {
        transform: translateY(-2px) rotate(-45deg);
      }
    `};

  ${theme.breakpoints.tablet} {
    display: none;
  }
`;

export { NavButton };
