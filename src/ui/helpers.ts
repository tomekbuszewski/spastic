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

const generateGrid = (input: [number, number]) => `grid-column-start: ${input[0]}; grid-column-end: ${input[1]};`;

export const gridHelper = () => (props: IGridHelper) => {
  let result = "";

  if (props.mobile) {
    result += generateGrid(props.mobile);
  }

  if (props.tablet) {
    result += `${theme.breakpoints.tablet} { ${generateGrid(props.tablet)} }`
  }

  if (props.desktop) {
    result += `${theme.breakpoints.desktop} { ${generateGrid(props.desktop) }`
  }

  return result;
};
