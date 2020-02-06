/**
 * @author tomekbuszewski
 * @since 2020-02-06 20:26:57
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";
import { gridElement } from "@ui/helpers";

interface Props {
  section: string;
  children?: React.ReactNode;
  theme: ITheme;
}

const List = styled.ul<Props>`
  list-style: inside circle;
  color: ${props => `var(--section-${props.section}-lead)`};
  margin: 0;
  padding: 0;
  ${gridElement};
  
  u {
    color: ${props => `var(--section-${props.section}-text)`};
    text-decoration: none;
  }
`;

export {
  List,
};