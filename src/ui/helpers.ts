import { theme } from "@ui/theme";
import { css } from "styled-components";
import { SECTIONS } from "@config/sections";
import { scroller } from "react-scroll";

export const gridElement = () => css`
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

export const withTransitions = (
  prop: string | string[],
  time: string = theme.animations.med,
  easing = theme.animations.easing
) => {
  if (Array.isArray(prop)) {
    return `transition: ${prop
      .map(item => `${time} ${item} ${easing}`)
      .join(", ")}`;
  }

  return `transition: ${prop} ${time} ${easing}`;
};

export interface IGridHelper {
  mobile?: [number, number];
  tablet?: [number, number];
  desktop?: [number, number];
}

export const gridHelper = () => (props: IGridHelper) => {
  /*
  `
  ${props.mobile &&
`
      grid-column-start: ${props.mobile && props.mobile[0]};
      grid-column-end: ${props.mobile && props.mobile[1]};
    `};

${theme.breakpoints.tablet} {
  ${props.tablet &&
`
      grid-column-start: ${props.tablet && props.tablet[0]};
      grid-column-end: ${props.tablet && props.tablet[1]};
    `};
}

${theme.breakpoints.desktop} {
  ${props.desktop &&
`
      grid-column-start: ${(props: IGridHelper) =>
  props.desktop && props.desktop[0]};
      grid-column-end: ${(props: IGridHelper) =>
  props.desktop && props.desktop[1]};
    `};
}
`;
   */

  let result = "";

  if (props.mobile) {
    result += `grid-column-start: ${props.mobile[0]}; grid-column-end: ${props.mobile[1]};`;
  }

  if (props.tablet) {
    result += `${theme.breakpoints.tablet} { grid-column-start: ${props.tablet[0]}; grid-column-end: ${props.tablet[1]}; }`
  }

  if (props.desktop) {
    result += `${theme.breakpoints.desktop} { grid-column-start: ${props.desktop[0]}; grid-column-end: ${props.desktop[1]}; }`
  }

  return result;
};
