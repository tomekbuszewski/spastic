/**
 * @author tomek
 * @since 2020-02-26 10:27:24
 */

import * as React from "react";
import styled from "styled-components";
import { theme } from "@ui";
import { ColorContext } from "@ui/Atoms/Section/Section";
import { Paragraph } from "@ui/Atoms";

const Blockquote = styled.blockquote`
  opacity: 0.65;
  margin-bottom: 3rem;
  margin-left: 1rem;
  padding: 0 1rem;
  border-left: 1rem solid
    ${() => `var(--section-${React.useContext(ColorContext)}-highlight)`};

  & > ${Paragraph}:first-of-type {
    font-size: 2rem;
  }

  ${theme.breakpoints.desktop} {
    grid-column-start: 3;
    grid-column-end: 7;
    margin-left: 1.5rem;
  }
`;

export { Blockquote };
