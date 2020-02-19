/**
 * @author tomek
 * @since 2020-02-17 11:08:01
 */
import * as React from "react";
import styled from "styled-components";

import LogoImg from "../../../images/Logo.svg";
import { theme } from "@ui";
import { gridElement } from "@ui/helpers";

interface Props {
  asMain?: boolean;
  className?: string;
  children?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const Logo = styled((props: Props) => {
  const Component = props.asMain ? "h1" : "div";

  return (
    <Component className={props.className}>
      <a href="/" onClick={props.onClick}>
        <LogoImg />
        {props.asMain && <span>buszewski.com</span>}
      </a>
    </Component>
  );
})`
  align-self: center;
  position: relative;
  z-index: 120;
  margin: 0;
  width: 10rem;
  ${gridElement};
  cursor: pointer;

  span {
    display: none;
  }

  svg {
    width: 10rem;
  }

  ${theme.breakpoints.tablet} {
    width: auto;
    height: 3rem;

    svg {
      width: auto;
      height: 3rem;
    }
  }

  ${theme.breakpoints.desktop} {
    padding-left: ${props => (props.asMain ? "4.5rem" : "1.5rem")};

    svg {
      height: 4rem;
    }
  }

  @media (min-width: 1190px) {
    padding-left: 1.5rem;
  }
`;

export { Logo };
