import { ITheme } from "@ui/theme";
import { css } from "styled-components";

export const gridElement = (props: { theme: ITheme }) => css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  
  ${props => props.theme.breakpoints.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  ${props => props.theme.breakpoints.desktop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;