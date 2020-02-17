/**
 * @author tomek
 * @since 2020-02-17 11:21:24
 */

import styled from "styled-components";
import { theme } from "@ui";
import { gridElement } from "@ui/helpers";

const MenuItem = styled.li`
  list-style: none;
  text-align: center;
  display: block;

  font-size: ${theme.fonts.sizes.smallDesktop};
  line-height: 5rem;
  font-weight: 800;

  color: var(--text);

  cursor: pointer;

  ${theme.breakpoints.tablet} {
    text-align: left;
    ${gridElement}
  }
`;

export { MenuItem };
