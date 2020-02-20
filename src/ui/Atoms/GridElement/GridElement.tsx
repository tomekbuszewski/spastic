/**
 * @author tomek
 * @since 2020-02-19 11:27:54
 */

import * as React from "react";
import styled from "styled-components";

import { gridHelper, IGridHelper } from "@ui/helpers";
import { theme } from "@ui";

interface Props extends IGridHelper {
  children?: React.ReactNode;
  mobileTop?: boolean;
}

const GridElement = styled.div<Props>`
  ${props => props.mobileTop && "margin-top: 10rem"};

  ${gridHelper};

  ${theme.breakpoints.tablet} {
    margin-top: 0;
  }
`;

export { GridElement };
