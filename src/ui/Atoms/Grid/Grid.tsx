/**
 * @author tomekbuszewski
 * @since 2020-02-05 13:04:13
 */

import styled from "styled-components";
import { theme } from "@ui/theme";
import { gridElement, gridHelper, IGridHelper } from "@ui/helpers";

interface Props extends IGridHelper {
  padded?: boolean;
  gridColumnsMobile?: string;
  gridColumnsTablet?: string;
  gridColumnsDesktop?: string;
}

const Grid = styled.div<Props>`
  display: grid;

  margin: auto;
  width: 100%;
  max-width: 94vw;
  
  ${props => (props.mobile || props.desktop || props.tablet) && gridHelper};

  ${props => props.padded && gridElement};
  grid-template-columns: ${props =>
    props.gridColumnsMobile && props.gridColumnsMobile};

  ${theme.breakpoints.tablet} {
    max-width: 93rem;
  grid-template-columns: ${props =>
    props.gridColumnsTablet && props.gridColumnsTablet};
  }

  ${theme.breakpoints.desktop} {
    max-width: 144rem;
  grid-template-columns: ${props =>
    props.gridColumnsDesktop && props.gridColumnsDesktop};
  }
  }
`;

export { Grid };
