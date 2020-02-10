/**
 * @author tomekbuszewski
 * @since 2020-02-05 14:30:37
 */

import * as React from "react";
import styled from "styled-components";

import { Grid, Logo, NavButton } from "@ui/Atoms";
import { Navigation } from "@ui/Molecules";

import { LinkWrapper } from "@components";

const HeaderWrapper = styled(Grid)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 6.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  width: calc(100vw - 2rem);
  padding: 0 1rem;
  z-index: 12;
  background: var(--body);

  ${props => props.theme.breakpoints.tablet} {
    top: 2rem;
    height: 6rem;
  }

  ${props => props.theme.breakpoints.desktop} {
    width: calc(100vw - 6rem);
    padding: 0;
  }
`;

const NavContainer = styled.nav`
  display: grid;
`;

const Header = () => {
  const [isNavActive, setNavActive] = React.useState<boolean>(false);
  const toggleNav = () => setNavActive(state => !state);

  return (
    <HeaderWrapper as="header">
      <LinkWrapper to="/">
        <Logo />
      </LinkWrapper>
      <NavContainer>
        <NavButton
          aria-label="Menu toggle"
          active={isNavActive}
          onClick={toggleNav}
        />
        <Navigation active={isNavActive} toggler={toggleNav} />
      </NavContainer>
    </HeaderWrapper>
  );
};

export { Header };
