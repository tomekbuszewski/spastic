/**
 * @author tomek
 * @since 2020-02-17 11:21:24
 */

import * as React from "react";
import styled from "styled-components";
import { theme } from "@ui";
import { gridElement, withTransitions } from "@ui/helpers";

const MenuItem = styled(props => (
  <li className={props.className}>
    <a onClick={props.onClick} href={props.href}>
      {props.children}
      <span>↓</span>
    </a>
  </li>
))`
  background: none;
  list-style: none;
  text-align: center;
  display: block;
  position: relative;

  font-size: ${theme.fonts.sizes.smallDesktop};

  a {
    display: block;
    background: none;
    border: 0;
    padding: 0;
    color: inherit;
    cursor: pointer;
    width: 100%;

    &:active,
    &:focus {
      outline: 0;
    }

    &:hover {
      color: inherit;
    }
  }

  span {
    ${withTransitions(["opacity", "transform"])};
    opacity: 0;
    display: inline-block;
    transform: translateY(1rem);
    margin-left: 1rem;
  }

  &:hover {
    span {
      opacity: 0.5;
      transform: none;
    }
  }

  ${theme.breakpoints.tablet} {
    text-align: left;
    ${gridElement}

    a {
      text-align: left;
    }
  }
`;

export { MenuItem };
