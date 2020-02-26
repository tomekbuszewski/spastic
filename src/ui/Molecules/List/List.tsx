/**
 * @author tomek
 * @since 2020-02-17 16:07:37
 */

import * as React from "react";
import styled, { css } from "styled-components";
import { gridElement, gridHelper, IGridHelper } from "@ui/helpers";
import { ColorContext } from "@ui/Atoms/Section/Section";

interface Props extends IGridHelper {
  children?: React.ReactNode;
  className?: string;
  numbered?: boolean;
  padded?: boolean;
}

const List = styled((props: Props) => {
  const Component = props.numbered ? "ol" : "ul";

  return <Component className={props.className}>{props.children}</Component>;
})`
  margin: 0;
  padding: 0;
  list-style: none;
  ${props => props.padded && gridElement};
  ${props => (props.mobile || props.desktop || props.tablet) && gridHelper};

  li {
    color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};

    u {
      color: ${() => `var(--section-${React.useContext(ColorContext)}-text)`};
    }
  }

  li {
    position: relative;

    &:before {
      opacity: 0.5;
    }
  }

  ${props =>
    props.numbered
      ? css`
          counter-reset: list-counter;

          li {
            counter-increment: my-awesome-counter;
            padding-left: 2.5rem;

            &:before {
              font-size: 0.7em;
              content: "0" counter(my-awesome-counter);
              top: 50%;
              transform: translateY(-50%);
              text-align: right;

              position: absolute;
              left: 0;
              width: 1.5rem;
            }
          }
        `
      : css`
          li:before {
            width: 2rem;
            content: "–";
            display: inline-block;
          }
        `};
`;

export { List };
