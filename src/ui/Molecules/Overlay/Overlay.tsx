/**
 * @author tomekbuszewski
 * @since 2020-02-05 13:08:01
 */

import * as React from "react";
import styled, { keyframes } from "styled-components";
import { ITheme } from "@ui/theme";

import LogoBase from "../../../images/Logo.svg";
import { Grid as Base } from "@ui/Atoms";

const load = keyframes`
  from {
    transform: scaleX(1) translateX(1px);
  }
  
  to {
    transform: scaleX(0) translateX(1px);
  }
`;

const loadLogo = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
  }
`;

const VerticalLine = styled.span`
  display: block;
  height: 100%;
  width: 1px;
  background: rgba(45, 35, 46, 0.1);
  position: relative;
  
  &:before, &:after {
    transform-origin: right;
    height: 100%;
    width: 40rem;
    content: "";
    display: block;
    right: 0;
    top: 0;
    position: absolute;
    background: ${props => props.theme.colors.brand};
    z-index: 9;
    animation: 500ms 1000ms ${load} ease-out forwards;
  }
  
  &:after {
    display: none;
    left: 0;
  }
  
  &:last-of-type:after {
    display: block;
  }
`;

const Grid = styled(Base)`
  height: 100vh;
  position: fixed;
  z-index: 10;
  pointer-events: none;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  grid-auto-flow: column;
  justify-content: space-between;
`;

const Logo = styled(LogoBase as any)`
  animation: 500ms 500ms ${loadLogo} ease-out forwards;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);
  max-width: 10rem;
`;

const Overlay = () => (
  <React.Fragment>
    <Logo />
    <Grid>
      <VerticalLine />
      <VerticalLine />
      <VerticalLine />
      <VerticalLine />
      <VerticalLine />
    </Grid>
  </React.Fragment>
);

export {
  Overlay,
}