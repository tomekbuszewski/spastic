/**
 * @author tomek
 * @since 2020-02-06 10:17:34
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

interface Props {
  active: boolean;
  children?: React.ReactNode;
  theme: ITheme;
}

const NavigationItem = styled.li`
  text-align: center;
  font-weight: 800;
  line-height: 2.5;
  font-size: 2rem;
  color: var(--section-hero-text);
  
  > * {
    color: var(--section-hero-text);
  }
`;

const NavigationWrapper = styled.ul<Props>`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: -1rem;
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  background: ${props => props.theme.colors.brand};
  z-index: 11;
  align-items: center;
  align-content: center;
  display: grid;
  transition: ${props => props.theme.animations.med} opacity
    ${props => props.theme.animations.easing};
  opacity: ${props => (props.active ? 1 : 0)};
`;

const Navigation = ({ active }: { active: boolean }) => (
  <NavigationWrapper active={active}>
    <NavigationItem>About and work</NavigationItem>
    <NavigationItem>Writings</NavigationItem>
    <NavigationItem>Contact</NavigationItem>
  </NavigationWrapper>
);

export { Navigation };
