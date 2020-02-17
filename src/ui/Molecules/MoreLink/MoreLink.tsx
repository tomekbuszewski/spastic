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
  component?: React.ReactNode;
  children?: React.ReactNode;
  to?: string;
  hrefProps?: any;
  section?: SECTIONS;
}

const MoreLink = styled((props: Props) => {
  const Component: any = props.component ? props.component : "a";
  return (
    <Paragraph
      variant={PARAGRAPH_VARIANTS.BOLD}
      section={props.section as SECTIONS}
    >
      <Component to={props.to || ""} {...props.hrefProps}>
        <span>{props.children}</span>
      </Component>
    </Paragraph>
  );
})`
  grid-column-start: 1;
  grid-column-end: 12;
  ${gridElement};
`;

MoreLink.defaultProps = {
  section: SECTIONS.HERO,
};

export { MoreLink };
