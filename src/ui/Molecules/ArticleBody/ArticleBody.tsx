/**
 * @author tomek
 * @since 2020-02-25 09:05:18
 */

import * as React from "react";
import styled from "styled-components";

import { Markdown } from "@components";
import { HEADING_SIZES, PARAGRAPH_VARIANTS, Grid } from "@ui/Atoms";
import { theme } from "@ui";
import { List } from "@ui/Molecules";

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
      as="article"
    >
      <Markdown
        source={props.source}
        variant={PARAGRAPH_VARIANTS.TEXT}
        size={HEADING_SIZES.ARTICLE}
        padded
      />
    </Grid>
  );
})`
  position: relative;

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

  ${theme.breakpoints.desktop} {
    &:after {
      grid-column-start: 1;
      grid-column-end: 9;
    }

    ${List} {
      grid-column-start: 3;
      grid-column-end: 8;
      margin-bottom: 3rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export { ArticleBody };
