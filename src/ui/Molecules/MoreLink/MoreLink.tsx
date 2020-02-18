/**
 * @author tomek
 * @since 2020-02-17 09:15:56
 */

import * as React from "react";
import styled from "styled-components";

import { Paragraph, PARAGRAPH_VARIANTS } from "@ui/Atoms";
import { gridElement } from "@ui/helpers";
import { theme } from "@ui";

interface Props {
  component?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  to?: string;
  hrefProps?: any;
}

const MoreLink = styled((props: Props) => {
  const Component: any = props.component ? props.component : "a";
  return (
    <Paragraph variant={PARAGRAPH_VARIANTS.BOLD} className={props.className}>
      <Component to={props.to || ""} {...props.hrefProps}>
        <span>{props.children}</span>
      </Component>
    </Paragraph>
  );
})`
  grid-column-start: 1;
  grid-column-end: 12;
  ${gridElement};

  &:last-of-type {
    margin-top: 3rem;
  }

  ${theme.breakpoints.tablet} {
    &:last-of-type {
      margin-top: 8rem;
    }
  }
`;

export { MoreLink };
