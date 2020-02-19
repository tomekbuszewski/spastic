/**
 * @author tomek
 * @since 2020-02-19 10:51:36
 */

import * as React from "react";
import styled from "styled-components";

import {
  Heading,
  HEADING_SIZES,
  Paragraph,
  PARAGRAPH_VARIANTS,
} from "@ui/Atoms";
import { gridElement, withTransitions } from "@ui/helpers";
import { theme } from "@ui";

export interface IBlogEntry {
  title: string;
  pubdate: string;
  summary: string;
  link?: string;
}

interface Props extends IBlogEntry {
  className?: string;
  children?: React.ReactNode;
}

const BlogEntry = styled((props: Props) => (
  <a href={props.link}>
    <li className={props.className}>
      <Heading size={HEADING_SIZES.SMALL}>
        {props.title}

        <time>{props.pubdate}</time>
      </Heading>
      <Paragraph variant={PARAGRAPH_VARIANTS.NORMAL}><strong>{props.summary}</strong></Paragraph>
    </li>
  </a>
))`
  ${withTransitions("transform", theme.animations.long)};
  list-style: none;
  ${gridElement};
  margin-bottom: 6rem;

  > * {
    margin: 0;
  }

  time {
    display: block;
    padding: 1rem 0 2rem;
    font-size: ${theme.fonts.sizes.small};
    opacity: 0.5;
    font-weight: 400;
  }

  &:hover {
    transform: translateY(-1rem);
  }
`;

export { BlogEntry };
