import { theme } from "@ui/theme";
import { css } from "styled-components";
import MarkdownComponent from "react-markdown";
import { scroller } from "react-scroll";

import { SECTIONS } from "@config/sections";
import { Heading, ListItem, Paragraph } from "@ui/Atoms";
import { List } from "@ui/Molecules";
import * as React from "react";

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
    offset: -24,
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

const generateGrid = (input: [number, number]) =>
  `grid-column-start: ${input[0]}; grid-column-end: ${input[1]};`;

export const gridHelper = () => (props: IGridHelper) => {
  let result = "";

  if (props.mobile) {
    result += generateGrid(props.mobile);
  }

  if (props.tablet) {
    result += `${theme.breakpoints.tablet} { ${generateGrid(props.tablet)} }`;
  }

  if (props.desktop) {
    result += `${theme.breakpoints.desktop} { ${generateGrid(props.desktop)}`;
  }

  return result;
};
export const Markdown = (props: any) => (
  <MarkdownComponent
    escapeHtml={false}
    {...props}
    renderers={{
      paragraph: (innerProps: any) => <Paragraph {...innerProps} {...props} />,
      heading: (innerProps: any) => <Heading {...innerProps} {...props} />,
      list: (innerProps: any) => <List {...innerProps} {...props} />,
      listItem: (innerProps: any) => <ListItem {...innerProps} />,
    }}
  />
);
