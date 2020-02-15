/**
 * @author tomekbuszewski
 * @since 2020-02-05 13:08:01
 */

import * as React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@ui/theme";

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
  background: var(--overlay);
  position: relative;
`;

const Grid = styled(Base)`
  height: 100vh;
  position: fixed;
  z-index: 99;
  pointer-events: none;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  grid-auto-flow: column;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;

  ${theme.breakpoints.tablet} {
    padding-left: 0;
    padding-right: 0;
  }

  ${theme.breakpoints.desktop} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Overlay = () => (
  <React.Fragment>
    <Grid>
      <VerticalLine />
      <VerticalLine />
      <VerticalLine />
      <VerticalLine />
      <VerticalLine />
    </Grid>
  </React.Fragment>
);

export { Overlay };
