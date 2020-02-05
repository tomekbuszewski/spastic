/**
 * @author tomekbuszewski
 * @since 2020-02-05 14:30:37
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

import { Logo, Grid } from "@ui/Atoms";

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
  display: flex;
  align-items: center;

  ${props => props.theme.breakpoints.tablet} {
    top: 2rem;
    height: 10rem;
  }

  ${props => props.theme.breakpoints.desktop} {
    top: 3rem;
  }
`;

const Header = () => (
  <HeaderWrapper as="header">
    <Logo />
  </HeaderWrapper>
);

export { Header };
