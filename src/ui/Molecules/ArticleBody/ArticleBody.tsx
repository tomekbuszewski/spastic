/**
 * @author tomek
 * @since 2020-02-25 09:05:18
 */

import * as React from "react";
import styled from "styled-components";

import { Grid } from "@ui/Atoms";
import { theme } from "@ui";
import { ColorContext } from "@ui/Atoms/Section/Section";
import { gridElement, withTransitions } from "@ui/helpers";

interface Props {
  className?: string;
  source: string;
}

const ArticleBody = styled((props: Props) => {
  return (
    <Grid
      gridColumnsMobile="1fr"
      gridColumnsDesktop="repeat(8, 1fr)"
      className={props.className}
      dangerouslySetInnerHTML={{ __html: props.source }}
    />
  );
})`
  position: relative;

  p,
  li {
    font-family: ${theme.fonts.faces.serif};
    font-size: ${theme.fonts.sizes.smallDesktop};
    font-weight: 400;
    line-height: 1.85;
    margin-bottom: 3rem;
    ${gridElement};

    background: none;
    border: 0;

    &:hover,
    &:focus {
      outline: 0;
    }

    &[disabled] {
      opacity: 0.5;
    }

    &:first-of-type {
      font-size: ${theme.fonts.sizes.medium};
    }

    a {
      ${withTransitions("background", theme.animations.long)};
      color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
      position: relative;
      background: linear-gradient(
          to bottom,
          ${() => `var(--section-${React.useContext(ColorContext)}-highlight)`}
            0%,
          ${() => `var(--section-${React.useContext(ColorContext)}-highlight)`}
            100%
        )
        repeat-x 0 100%;
      background-size: 0.5rem 1rem;

      span {
        position: relative;
        z-index: 2;
      }
    }

    strong {
      color: ${() => `var(--section-${React.useContext(ColorContext)}-text)`};
      font-weight: 900;
    }

    code {
      font-size: 0.9em;
      font-family: ${theme.fonts.faces.secondary};
      background: var(--code-bg);
      color: var(--code-text);
      padding: 0.5rem;
      border-radius: 0.25rem;
    }

    img {
      max-width: 100%;
    }

    a:hover {
      color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
      background-size: 0.5rem 3rem;

      &:before {
        transform: scaleY(1);
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    & + blockquote {
      &:last-of-type {
        margin-bottom: 3rem;
      }
    }
  }

  blockquote {
    opacity: 0.65;
    margin-bottom: 3rem;
    margin-left: 1rem;
    padding: 0 1rem;
    border-left: 1rem solid
      ${() => `var(--section-${React.useContext(ColorContext)}-highlight)`};

    & > p:first-of-type {
      font-size: 2rem;
    }
  }

  pre {
    padding: 1rem;
    font-family: ${theme.fonts.faces.secondary};
    font-size: ${theme.fonts.sizes.small};
    line-height: 1.65;
    border-radius: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;

    background: var(--code-bg);
    color: var(--code-text);

    .keyword {
      color: var(--code-keyword);
      font-style: italic;
      font-weight: bold;
    }

    .comment {
      color: var(--code-comment);
      font-style: italic;

      * {
        color: inherit;
      }
    }

    .string {
      color: var(--code-text);
    }

    .class-name,
    .function,
    .constant {
      color: var(--code-func);
      font-weight: bold;
    }

    .punctuation,
    .operator {
      color: var(--code-param);
    }

    .builtin {
      color: var(--code-number);
      font-weight: bold;
    }

    .hljs-string {
      color: var(--code-text);
    }

    .space,
    .tab {
      position: relative;
      color: var(--code-whitespace);

      &:after {
        font-size: 0.75em;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        display: block;
        content: "·";
      }
    }

    .tab:after {
      content: "→";
    }
  }

  figure {
    margin-bottom: 3rem;
    
    img {
      border-radius: 1rem;
      display: block;
      margin: auto;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 800;
    color: ${() => `var(--section-${React.useContext(ColorContext)}-lead)`};
    ${gridElement};
    font-size: ${theme.fonts.sizes.large};
    line-height: 1.2;
    margin-top: 2rem;
    margin-bottom: 2rem;
    letter-spacing: -0.015em;

    strong {
      color: ${() => `var(--section-${React.useContext(ColorContext)}-text)`};
      text-decoration: none;
    }
  }

  table {
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
  }

  li {
    margin-bottom: 0.5rem;
    color: inherit;

    &:first-of-type {
      font-size: initial;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &:after {
    grid-column-start: 1;
    grid-column-end: 2;
    width: 100%;
    content: "∞";
    display: block;
    text-align: center;
    font-size: 2rem;
    margin: 4rem 0 3rem;
  }

  ${theme.breakpoints.tablet} {
    p {
      grid-column-start: 1;
      grid-column-end: 5;
      align-self: flex-start;
    }

    pre {
      font-size: ${theme.fonts.sizes.smallDesktop};
      padding: 2rem;
      margin-bottom: 3rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  ${theme.breakpoints.desktop} {
    p {
      grid-column-start: 3;
      grid-column-end: 7;
      align-self: flex-start;
    }

    blockquote {
      grid-column-start: 3;
      grid-column-end: 7;
      margin-left: 1.5rem;
    }

    pre {
      padding: 4rem;
      grid-column-start: 2;
      grid-column-end: 8;
      margin-left: 0;
      margin-right: 0;

      > code {
        position: relative;

        &:after {
          display: inline-block;
          position: absolute;
          top: -4.75rem;
          left: -4.5rem;
          background: var(--code-tag);
          padding: 1rem 1rem 0.5rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 0.25rem;
          font-family: ${theme.fonts.faces.normal};
        }

        &.language-js:after,
        &.language-javascript:after {
          content: "javascript";
        }

        &.language-ts:after,
        &.language-typescript:after {
          content: "typescript";
        }

        &.language-jsx:after {
          content: "jsx";
        }

        &.language-twig:after {
          content: "twig";
        }

        &.language-java:after {
          content: "java";
        }

        &.language-scss:after {
          content: "scss";
        }

        &.language-css:after {
          content: "css";
        }
      }
    }

    table {
      font-size: ${theme.fonts.sizes.smallDesktop};
      grid-column-start: 2;
      grid-column-end: 8;
      margin-bottom: 3rem;

      td,
      th {
        padding: 1rem;
      }
    }

    &:after {
      grid-column-start: 1;
      grid-column-end: 9;
    }

    h1,
    h2,
    h3,
    h4 {
      font-size: ${theme.fonts.sizes.large};
      margin: 2rem 0 2rem;
      grid-column-start: 3;
      grid-column-end: 7;
    }

    ul,
    ol {
      grid-column-start: 3;
      grid-column-end: 8;
      margin-bottom: 3rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    figure {
      grid-column-start: 2;
      grid-column-end: 8;

      .gatsby-resp-image-background-image {
        ${withTransitions(["opacity", "transform"])};
        filter: blur(2rem);
        transform: none;
      }

      &:hover {
        .gatsby-resp-image-background-image {
          opacity: 0.75 !important;
          transform: translateY(1rem);
        }
      }
    }
  }
`;

export { ArticleBody };
