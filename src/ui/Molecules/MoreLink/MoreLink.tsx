/**
 * @author tomek
 * @since 2020-02-17 09:15:56
 */

import * as React from "react";
import styled from "styled-components";

import { Paragraph, PARAGRAPH_VARIANTS } from "@ui/Atoms";
import { SECTIONS } from "@config/sections";
import { gridElement } from "@ui/helpers";

interface Props {
  children?: React.ReactNode;
  section?: SECTIONS;
}

const MoreLink = styled((props: Props) => (
  <Paragraph
    variant={PARAGRAPH_VARIANTS.BOLD}
    section={props.section as SECTIONS}
  >
    <a href={""}>
      <span>{props.children}</span>
    </a>
  </Paragraph>
))`
  grid-column-start: 1;
  grid-column-end: 12;
  ${gridElement};
`;

MoreLink.defaultProps = {
  section: SECTIONS.HERO,
};

export { MoreLink };
