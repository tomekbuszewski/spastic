/**
 * @author tomek
 * @since 2020-02-26 16:56:52
 */

import styled from "styled-components";

import { SECTIONS } from "@config/sections";
import { theme } from "@ui";
import { gridElement, gridHelper } from "@ui/helpers";

interface Props {
  right?: boolean;
}

const PaginationButton = styled.button<Props>`
  ${gridHelper};
  ${gridElement};
  border: 0;
  width: 100%;
  background: none;
  color: ${() => `var(--section-${SECTIONS.WRITINGS}-lead)`};
  font-size: 2rem;
  height: 6rem;

  text-align: ${props => (props.right ? "right" : "left")};

  &:active,
  &:focus {
    outline: 0;
  }

  > span {
    display: none;
  }

  ${theme.breakpoints.tablet} {
    > span {
      display: inline-block;
    }
  }
`;

export { PaginationButton };
