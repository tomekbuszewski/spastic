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
  transform: translateY(1rem);
  ${withTransitions(["transform"], theme.animations.long)};

  * {
    margin: 0;
  }

  .gatsby-image-wrapper {
    ${withTransitions(["transform", "opacity"], theme.animations.long)};
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: -200%;
    transform: translateY(-4rem);
    right: 0;
    display: none;
    z-index: auto;
    width: 100vw;
    height: 100vh;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to left,
        hsla(46, 57%, 95%, 0) 0%,
        hsla(46, 57%, 95%, 0.013) 8.1%,
        hsla(46, 57%, 95%, 0.049) 15.5%,
        hsla(46, 57%, 95%, 0.104) 22.5%,
        hsla(46, 57%, 95%, 0.175) 29%,
        hsla(46, 57%, 95%, 0.259) 35.3%,
        hsla(46, 57%, 95%, 0.352) 41.2%,
        hsla(46, 57%, 95%, 0.45) 47.1%,
        hsla(46, 57%, 95%, 0.55) 52.9%,
        hsla(46, 57%, 95%, 0.648) 58.8%,
        hsla(46, 57%, 95%, 0.741) 64.7%,
        hsla(46, 57%, 95%, 0.825) 71%,
        hsla(46, 57%, 95%, 0.896) 77.5%,
        hsla(46, 57%, 95%, 0.951) 84.5%,
        hsla(46, 57%, 95%, 0.987) 91.9%,
        hsl(46, 57%, 95%) 100%
      );

      @media (prefers-color-scheme: dark) {
        background: linear-gradient(
          to left,
          hsla(26, 12%, 12%, 0) 0%,
          hsla(26, 12%, 12%, 0.013) 8.1%,
          hsla(26, 12%, 12%, 0.049) 15.5%,
          hsla(26, 12%, 12%, 0.104) 22.5%,
          hsla(26, 12%, 12%, 0.175) 29%,
          hsla(26, 12%, 12%, 0.259) 35.3%,
          hsla(26, 12%, 12%, 0.352) 41.2%,
          hsla(26, 12%, 12%, 0.45) 47.1%,
          hsla(26, 12%, 12%, 0.55) 52.9%,
          hsla(26, 12%, 12%, 0.648) 58.8%,
          hsla(26, 12%, 12%, 0.741) 64.7%,
          hsla(26, 12%, 12%, 0.825) 71%,
          hsla(26, 12%, 12%, 0.896) 77.5%,
          hsla(26, 12%, 12%, 0.951) 84.5%,
          hsla(26, 12%, 12%, 0.987) 91.9%,
          hsl(26, 12%, 12%) 100%
        );
      }
    }
  }

  &:nth-of-type(1n) {
    .gatsby-image-wrapper {
      right: -400%;
    }
  }

  &:nth-of-type(2n) {
    .gatsby-image-wrapper {
      right: -300%;
    }
  }

  &:nth-of-type(3n) {
    .gatsby-image-wrapper {
      right: -200%;
    }
  }

  &:nth-of-type(4n) {
    .gatsby-image-wrapper {
      right: -100%;
    }
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
    transform: translateY(1rem);
    opacity: 0;
    margin-top: 2rem;
    text-align: right;
  }

  &:hover {
    transform: none;

    .gatsby-image-wrapper {
      opacity: 0.2;
      transform: none;
      z-index: auto;
    }

    p:last-of-type {
      transform: none;
      opacity: 1;
    }
  }

  ${theme.breakpoints.tablet} {
    .gatsby-image-wrapper {
      display: block;
    }
  }
`;

export { BlogEntry };
