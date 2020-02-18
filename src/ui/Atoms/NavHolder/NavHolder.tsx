/**
 * @author tomek
 * @since 2020-02-18 18:05:27
 */

import * as React from "react";
import styled from "styled-components";
import { theme } from "@ui";

const NavHolder = styled.nav`
  display: none;

  ${theme.breakpoints.tablet} {
    display: block;
  }
`;

export { NavHolder };
