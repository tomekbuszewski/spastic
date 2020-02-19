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
    </button>
  </li>
))`
  background: none;
  list-style: none;
  text-align: center;
  display: block;

  font-size: ${theme.fonts.sizes.smallDesktop};
  line-height: 5rem;

  color: var(--text);

  cursor: pointer;
  
  button {
    background: none;
    border: 0;
    color: inherit;
    
    &:active, &:focus {
      outline: 0;
    }
  }

  ${theme.breakpoints.tablet} {
    text-align: left;
    ${gridElement}
  }
`;

export { MenuItem };
