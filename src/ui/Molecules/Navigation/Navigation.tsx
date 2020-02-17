/**
 * @author tomek
 * @since 2020-02-06 10:17:34
 */

import * as React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import { ITheme, theme } from "@ui/theme";
import { gridElement, scrollTo } from "@ui/helpers";
import { SECTIONS } from "@config/sections";
import { SyntheticEvent } from "react";

interface Props {
  active: boolean;
  children?: React.ReactNode;
  theme: ITheme;
}

const NavigationItem = styled.li`
  font-weight: 800;
  line-height: 2.5;
  font-size: 2rem;
  color: var(--section-hero-text);
  cursor: pointer;
  ${gridElement};

  > *,
  > *:hover {
    color: var(--section-hero-text);
  }

  ${theme.breakpoints.tablet} {
    font-size: 1.5rem;
  }

  ${theme.breakpoints.desktop} {
    font-size: 2rem;
  }
`;

const NavigationWrapper = styled.ul<Props>`
  text-align: center;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 6.5rem;
  left: 0;
  width: calc(100vw - 2rem);
  height: calc(100vh - 7.5rem);
  background: ${theme.colors.brand};
  z-index: 11;
  align-items: center;
  align-content: center;
  display: grid;
  list-style: none;
  transition: ${theme.animations.med} opacity ${theme.animations.easing};
  opacity: ${props => (props.active ? 1 : 0)};
  pointer-events: ${props => (props.active ? "all" : "none")};

  ${theme.breakpoints.tablet} {
    background: none;
    opacity: 1;
    width: auto;
    height: auto;
    position: static;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: right;
    pointer-events: all;
  }
`;

interface NavigationProps {
  active: boolean;
  toggler: () => any;
}

const Navigation = (props: NavigationProps) => {
  const clickHandler = (e: SyntheticEvent, section: SECTIONS) => {
    e.preventDefault();

    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      return navigate(`/#${section}`);
    }

    props.toggler();
    scrollTo(section);
  };

  return (
    <NavigationWrapper active={props.active}>
      <NavigationItem>
        <a
          href={`#${SECTIONS.ABOUT}`}
          onClick={e => clickHandler(e, SECTIONS.ABOUT)}
        >
          About and work
        </a>
      </NavigationItem>
      <NavigationItem>
        <a
          href={`#${SECTIONS.WRITINGS}`}
          onClick={e => clickHandler(e, SECTIONS.WRITINGS)}
        >
          Writings
        </a>
      </NavigationItem>
      <NavigationItem>
        <a
          href={`#${SECTIONS.CONTACT}`}
          onClick={e => clickHandler(e, SECTIONS.CONTACT)}
        >
          Contact
        </a>
      </NavigationItem>
    </NavigationWrapper>
  );
};

export { Navigation };
