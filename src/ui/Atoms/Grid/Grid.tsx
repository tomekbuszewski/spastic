/**
 * @author tomekbuszewski
 * @since 2020-02-05 13:04:13
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

const Grid = styled.div`
  display: grid;
  
  margin: auto;
  width: 100%;
  
  ${props => props.theme.breakpoints.tablet} {
    max-width: 93rem;
  }
  
  ${props => props.theme.breakpoints.desktop} {
    max-width: 144rem;
  }
`;

export {
  Grid,
}