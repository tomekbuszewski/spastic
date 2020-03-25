/**
 * @author tomek
 * @since 2020-02-19 10:51:36
 */

import * as React from "react";
import styled from "styled-components";

import { LinkWrapper, Markdown } from "@components";
import {
  Heading,
  HEADING_SIZES,
  Paragraph,
  PARAGRAPH_VARIANTS,
} from "@ui/Atoms";
import {
  gridElement,
  gridHelper,
  IGridHelper,
  isClient,
  withTransitions,
} from "@ui/helpers";
import { theme } from "@ui";

export interface IBlogEntry {
  title: string;
  pubdate: string;
  slugPubdate: string;
  summary: string;
  slug: string;
  featuredImage: null | any;
  photo?: null | any;
}

interface Props extends IBlogEntry, IGridHelper {
  className?: string;
  children?: React.ReactNode;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onBlur?: any;
}

const BlogEntry = styled((props: Props) => {
  return (
    <li
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onBlur={props.onBlur}
    >
      <LinkWrapper to={props.slug}>
        <Heading size={HEADING_SIZES.SMALL}>
          {props.title}

          <time>{props.pubdate}</time>
        </Heading>
        <Markdown variant={PARAGRAPH_VARIANTS.NORMAL} source={props.summary} />
        <Paragraph variant={PARAGRAPH_VARIANTS.SMALL}>Read more →</Paragraph>
      </LinkWrapper>
    </li>
  );
})`
  list-style: none;
  ${gridElement};
  ${gridHelper};
  position: relative;
  margin-bottom: 3rem;

  * {
    margin: 0;
  }

  time {
    display: block;
    padding: 1rem 0 2rem;
    font-size: ${theme.fonts.sizes.small};
    opacity: 0.5;
    font-weight: 400;
  }

  p {
    color: var(--section-writings-text);
  }

  p:last-of-type {
    ${withTransitions(["opacity", "transform"], theme.animations.long)};
    color: var(--section-writings-lead);
    transform: skewY(2deg) translateY(1rem);
    opacity: 0;
    margin-top: 2rem;
    text-align: right;
  }

  &:hover {
    p:last-of-type {
      transform: none;
      opacity: 1;
    }
  }
`;

export { BlogEntry };
