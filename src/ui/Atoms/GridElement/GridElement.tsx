/**
 * @author tomek
 * @since 2020-02-19 11:27:54
 */

import * as React from "react";
import styled from "styled-components";

import { gridHelper, IGridHelper } from "@ui/helpers";

interface Props extends IGridHelper {
  children?: React.ReactNode;
}

const GridElement = styled.div<Props>`
  ${gridHelper};
`;

export { GridElement };
