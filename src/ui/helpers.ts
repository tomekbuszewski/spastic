import { ITheme, theme } from "@ui/theme";
import { css } from "styled-components";
import { SECTIONS } from "@config/sections";
import { scroller } from "react-scroll";

export const gridElement = (props: { theme: ITheme }) => css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  
  ${theme.breakpoints.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  ${theme.breakpoints.desktop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
export const scrollTo = (section: SECTIONS) =>
  scroller.scrollTo(section, {
    duration: parseFloat(theme.animations.long) * 2,
    delay: 0,
    smooth: "easeInOutQuart",
  });