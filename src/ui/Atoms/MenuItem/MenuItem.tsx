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
    <button type="button" onClick={props.onClick}>
      {props.children}
      <span>→</span>
    </button>
  </li>
))`
  background: none;
  list-style: none;
  text-align: center;
  display: block;
  position: relative;

  font-size: ${theme.fonts.sizes.smallDesktop};
  line-height: 5rem;

  color: var(--text);

  button {
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
    ${gridElement}
    
    button {
      text-align: left;
    }
  }
`;

export { MenuItem };
