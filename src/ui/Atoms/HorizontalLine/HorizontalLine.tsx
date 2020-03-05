/**
 * @author tomekbuszewski
 * @since 2020-03-05 11:53:41
 */

import * as React from "react";
import styled from "styled-components";
import { theme } from "@ui";
import { Paragraph } from "@ui/Atoms";

interface Props {
  children?: React.ReactNode;
}

const HorizontalLine = styled.hr`
  grid-column-start: 1;
  grid-column-end: 2;
  
  margin: 2rem auto 4rem;
  opacity: 0.25;
  border: 0;
  width: 100%;
  height: 8rem;
  line-height: 8rem;
  
  position: relative;
  
  &:before {
  font-size: ${theme.fonts.sizes.medium};
    text-align: center;
    display: block;
    content: "―";
    background: var(--body);
    margin: auto;
  }
  
  ${theme.breakpoints.tablet} {
    grid-column-end: 5;
  }
  
  ${theme.breakpoints.desktop} {
    grid-column-start: 2;
    grid-column-end: 8;
  }
`;

export {
  HorizontalLine,
}