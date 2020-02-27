/**
 * @author tomek
 * @since 2020-02-27 09:20:31
 */

import styled from "styled-components";
import { theme } from "@ui";

const Table = styled.table`
  grid-column-start: 1;
  grid-column-end: 3;
  font-family: ${theme.fonts.faces.primary};
  font-size: ${theme.fonts.sizes.small};
  margin-bottom: 1rem;
  border: 1px solid var(--code-bg);
  background: var(--body);
  position: relative;
  z-index: 1000;

  td,
  th {
    padding: 0.5rem;
    border: 1px solid var(--code-bg);
  }

  ${theme.breakpoints.desktop} {
    font-size: ${theme.fonts.sizes.smallDesktop};
    grid-column-start: 2;
    grid-column-end: 8;
    margin-bottom: 3rem;

    td,
    th {
      padding: 1rem;
    }
  }
`;

export { Table };
