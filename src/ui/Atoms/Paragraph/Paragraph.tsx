/**
 * @author tomek
 * @since 2020-02-06 15:16:14
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

interface Props {
  section: string;
  children?: React.ReactNode;
  theme: ITheme;
}

const Paragraph = styled.p<Props>`
  font-weight: 800;
  font-size: 2.5rem;
  color: ${props => `var(--section-${props.section}-lead)`};
  margin-bottom: 3rem;
  
  u {
    color: ${props => `var(--section-${props.section}-text)`};
    text-decoration: none;
  }
  
  a {
    color: ${props => `var(--section-${props.section}-lead)`};
    position: relative;
    
    span {
      position: relative;
      z-index: 2;
    }
    
    &:before {
      position: absolute;
      bottom: -10%;
      left: -6.25%;
      width: 112.5%;
      height: 120%;
      background: ${props => `var(--section-${props.section}-highlight)`};
      display: block;
      content: "";
      z-index: 1;
      transform: scaleY(0.5);
      transform-origin: bottom;
      transition: ${props => props.theme.animations.short} transform ${props => props.theme.animations.easing}, ${props => props.theme.animations.short} opacity ${props => props.theme.animations.easing};
    }
  }
  
  a:hover {
    color: ${props => `var(--section-${props.section}-lead)`};
    
    &:before {
      transform: scaleY(1);
    }
  }
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
    line-height: 1.75;
  }
`;

Paragraph.defaultProps = {
  section: "hero",
};

export {
  Paragraph,
}