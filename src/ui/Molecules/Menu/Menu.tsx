/**
 * @author tomek
 * @since 2020-02-17 11:26:10
 */

import * as React from "react";
import styled from "styled-components";

import { MenuItem } from "@ui/Atoms";
import { withTransitions } from "@ui/helpers";
import { theme } from "@ui";

export interface IMenuItem {
  onClick?: any;
  text: string;
}

interface Props {
  active?: boolean;
  className?: string;
  items: IMenuItem[];
}

const Menu = styled((props: Props) => (
  <ul className={props.className}>
    {props.items.map(item => (
      <MenuItem key={item.text}>{item.text}</MenuItem>
    ))}
  </ul>
))`
  ${withTransitions(["opacity", "transform"])};

  display: grid;
  align-items: center;
  align-content: center;

  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;

  margin: 0;
  padding: 0;

  transform: ${props => (props.active ? "none" : "translateX(25%)")};
  opacity: ${props => (props.active ? 1 : 0)};
  background: var(--body);

  ${theme.breakpoints.tablet} {
    opacity: 1;
    transform: none;
    grid-template-columns: repeat(3, 1fr);

    position: static;
    height: auto;
    width: auto;

    background: none;
  }
`;

export { Menu };
