/**
 * @author tomek
 * @since 2020-02-25 09:40:18
 */

import * as React from "react";
import styled from "styled-components";
import Lowlight from "react-lowlight";

import { theme } from "@ui";

import js from "./syntax/js";
import ts from "./syntax/ts";
import html from "highlight.js/lib/languages/htmlbars";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import python from "highlight.js/lib/languages/python";
import yaml from "highlight.js/lib/languages/yaml";
import twig from "highlight.js/lib/languages/twig";
import java from "highlight.js/lib/languages/java";
import json from "highlight.js/lib/languages/json";

Lowlight.registerLanguage("js", js);
Lowlight.registerLanguage("ts", ts);
Lowlight.registerLanguage("css", css);
Lowlight.registerLanguage("scss", scss);
Lowlight.registerLanguage("typescript", ts);
Lowlight.registerLanguage("html", html);
Lowlight.registerLanguage("python", python);
Lowlight.registerLanguage("java", java);
Lowlight.registerLanguage("yaml", yaml);
Lowlight.registerLanguage("twig", twig);
Lowlight.registerLanguage("json", json);

const CodeBlock = styled((props: any) => <Lowlight {...props} />)`
  padding: 1rem;
  font-family: ${theme.fonts.faces.secondary};
  font-size: ${theme.fonts.sizes.small};
  border-radius: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  background: var(--code-bg);
  color: var(--code-bracket);

  .hljs-keyword {
    color: var(--code-keyword);
    font-style: italic;
    font-weight: bold;
  }

  .hljs-title {
    color: var(--code-func);
    font-weight: bold;
  }

  .hljs-params {
    color: var(--code-param);
  }

  .hljs-number {
    color: var(--code-number);
  }

  .hljs-built_in,
  .hljs-attr {
    color: var(--code-number);
    font-weight: bold;
  }

  .hljs-string {
    color: var(--code-text);
  }

  ${theme.breakpoints.tablet} {
    padding: 2rem;
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  ${theme.breakpoints.desktop} {
    overflow: hidden;
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
        top: -4.5rem;
        left: -4.5rem;
        background: var(--code-tag);
        padding: 1rem 1rem 0.5rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 0.25rem;
        font-family: ${theme.fonts.faces.normal};
      }

      &.js:after {
        content: "javascript";
      }

      &.ts:after {
        content: "typescript";
      }

      &.jsx:after {
        content: "jsx";
      }
    }
  }
`;

export { CodeBlock };
