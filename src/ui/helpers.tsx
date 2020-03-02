/* eslint-disable react/display-name */
import { theme } from "@ui/theme";
import { css } from "styled-components";
import React from "react";

export const gridElement = () => css`
  padding-left: 1rem;
  padding-right: 1rem;

  ${theme.breakpoints.desktop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const canSmoothScroll =
  "scrollBehavior" in document.documentElement.style;

export const scrollTo = (sectionId: string, e?: React.MouseEvent) => {
  if (!canSmoothScroll) {
    if (e) {
      e.preventDefault();
    }

    const section = sectionId[0] === "#" ? sectionId : `#${sectionId}`;
    const element = document.querySelector(section);

    element && element.scrollIntoView({ behavior: "smooth" });
    window.location.hash = section;
  }
};

export const withTransitions = (
  prop: string | string[],
  time: string = theme.animations.med,
  easing = theme.animations.easing,
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

const generateGrid = (input: [number, number]) =>
  `grid-column-start: ${input[0]}; grid-column-end: ${input[1]};`;

export const gridHelper = () => (props: IGridHelper & any) => {
  let result = "";

  if (props.mobile) {
    result += generateGrid(props.mobile);
  }

  if (props.tablet) {
    result += `${theme.breakpoints.tablet} { ${generateGrid(props.tablet)} }`;
  }

  if (props.desktop) {
    result += `${theme.breakpoints.desktop} { ${generateGrid(props.desktop)} }`;
  }

  return result;
};
