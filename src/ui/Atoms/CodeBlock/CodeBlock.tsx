/**
 * @author tomek
 * @since 2020-02-25 09:40:18
 */

import * as React from "react";
import styled from "styled-components";
import { theme } from "@ui";

const CodeBlock = styled((props: any) => (
  <pre className={`${props.className} language-${props.language}`}>
    <code>{props.value}</code>
  </pre>
))`
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

  ${theme.breakpoints.tablet} {
    font-size: ${theme.fonts.sizes.smallDesktop};
    padding: 2rem;
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  ${theme.breakpoints.desktop} {
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
`;

export { CodeBlock };
