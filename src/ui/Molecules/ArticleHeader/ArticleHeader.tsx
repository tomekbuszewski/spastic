/**
 * @author tomekbuszewski
 * @since 2020-02-24 19:08:38
 */

import * as React from "react";
import styled, { css } from "styled-components";
import Img from "gatsby-image";

import {
  Grid,
  Heading,
  HEADING_SIZES,
  Paragraph,
  PARAGRAPH_VARIANTS,
  Section,
} from "@ui/Atoms";
import { SECTIONS } from "@config/sections";

interface Props {
  title: string;
  pubdate?: string;
  className?: string;
  photo?: any | false;
}

const ArticleHeader = styled((props: Props) => {
  return (
    <Section
      as={("header" as unknown) as undefined} // just wtf
      name={SECTIONS.ARTICLE}
      className={props.className}
    >
      {props.photo && (
        <Img
          fluid={props.photo}
          loading="lazy"
          title={props.title}
          alt={props.title}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
            minHeight: "55vh",
          }}
        />
      )}
      <Grid gridColumnsTablet="repeat(4, 1fr)" padded>
        <Heading size={HEADING_SIZES.LARGE} tablet={[1, 4]}>
          {props.title}
        </Heading>
        {props.pubdate && (
          <Paragraph variant={PARAGRAPH_VARIANTS.BOLD} tablet={[1, 5]}>
            Posted on {props.pubdate}
          </Paragraph>
        )}
      </Grid>
    </Section>
  );
})`
  background: var(--section-article-heading);
  padding-bottom: 9rem;
  margin-top: 0;

  ${Heading}, ${Paragraph} {
    color: var(--section-article-heading-no-photo);
  }

  ${props =>
    props.photo &&
    css`
      position: relative;
      overflow: hidden;

      & > ${Grid} {
        position: relative;
        z-index: 10;
      }

      ${Heading}, ${Paragraph} {
        color: var(--section-article-heading-photo);
      }

      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(
          to bottom,
          hsla(0, 0%, 0%, 0) 0%,
          hsla(0, 0%, 0%, 0.008) 8.1%,
          hsla(0, 0%, 0%, 0.029) 15.5%,
          hsla(0, 0%, 0%, 0.062) 22.5%,
          hsla(0, 0%, 0%, 0.105) 29%,
          hsla(0, 0%, 0%, 0.156) 35.3%,
          hsla(0, 0%, 0%, 0.211) 41.2%,
          hsla(0, 0%, 0%, 0.27) 47.1%,
          hsla(0, 0%, 0%, 0.33) 52.9%,
          hsla(0, 0%, 0%, 0.389) 58.8%,
          hsla(0, 0%, 0%, 0.444) 64.7%,
          hsla(0, 0%, 0%, 0.495) 71%,
          hsla(0, 0%, 0%, 0.538) 77.5%,
          hsla(0, 0%, 0%, 0.571) 84.5%,
          hsla(0, 0%, 0%, 0.592) 91.9%,
          hsla(0, 0%, 0%, 0.6) 100%
        );
      }
    `};
`;

export { ArticleHeader };
