/**
 * @author tomek
 * @since 2020-02-18 13:12:54
 */

import * as React from "react";
import styled, { css, keyframes } from "styled-components";

import { Heading, HEADING_SIZES, Paragraph } from "@ui/Atoms";
import { gridElement } from "@ui/helpers";
import { theme } from "@ui";

interface Props {
  className?: string;
  work: string;
  position: string;
  from: string | number;
  to: string | number;
  visible?: boolean;
}

const show = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const WorkItem = styled((props: Props) => {
  return (
    <li className={props.className}>
      <Heading as="h4" size={HEADING_SIZES.SMALL}>
        {props.position}
      </Heading>
      <Heading as="p" size={HEADING_SIZES.SMALL}>
        <u>at {props.work}</u>
      </Heading>
      <Paragraph>
        <u>
          {props.from} – {props.to}
        </u>
      </Paragraph>
    </li>
  );
})`
  list-style: none;
  align-content: flex-start;
  ${gridElement};

  margin-bottom: 3rem;

  display: flex;
  flex-flow: column;

  * {
    margin-bottom: 0;
  }

  > *:last-child {
    margin-top: 1rem;
    opacity: 0.75;
  }

  ${theme.breakpoints.tablet} {
    text-align: right;
    min-height: 16rem;

    ${props =>
      props.visible &&
      css`
        animation: ${theme.animations.long} ${show} ${theme.animations.easing}
          forwards;
      `};
    display: ${props => (props.visible ? "flex" : "none")};

    > *:last-child {
      margin-top: auto;
    }
  }
`;

WorkItem.defaultProps = {
  visible: true,
};

export { WorkItem };
