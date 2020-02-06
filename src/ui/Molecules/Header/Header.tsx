/**
 * @author tomekbuszewski
 * @since 2020-02-05 14:30:37
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

import { Grid, Logo, NavButton } from "@ui/Atoms";

import { getViewport, VIEWPORTS } from "@hooks";
import { gridElement } from "@ui/helpers";

interface Props {
  children?: React.ReactNode;
  theme: ITheme;
}

const HeaderWrapper = styled(Grid)`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  height: 5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  width: calc(100vw - 4rem);

  ${props => props.theme.breakpoints.tablet} {
    top: 2rem;
    height: 10rem;
  }

  ${props => props.theme.breakpoints.desktop} {
    top: 3rem;
    width: calc(100vw - 6rem);
  }
`;

const NavContainer = styled.nav`
  display: grid;
  ${gridElement};
`;

const Header = () => {
  const [isNavActive, setNavActive] = React.useState<boolean>(false);
  const viewport = getViewport();

  return (
    <HeaderWrapper as="header">
      <Logo />
      <NavContainer>
        {viewport === VIEWPORTS.MOBILE ? (
          <NavButton
            active={isNavActive}
            onClick={() => setNavActive(!isNavActive)}
          />
        ) : null}
      </NavContainer>
    </HeaderWrapper>
  );
};

export { Header };
