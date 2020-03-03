import * as React from "react";

import { Layout } from "@components";
import {
  Grid,
  Heading,
  HEADING_SIZES,
  Paragraph,
  PARAGRAPH_VARIANTS,
  Section,
} from "@ui/Atoms";
import { SECTIONS } from "@config/sections";
import { LinkWrapper } from "@components";

const NotFound = () => (
  <Layout isFrontPage={false}>
    <Section name={SECTIONS.FOUR_OH_FOUR}>
      <Grid gridColumnsDesktop="repeat(4, 1fr)">
        <Heading size={HEADING_SIZES.LARGE} padded desktop={[1, 5]}>
          Data loss<strong>.</strong>
        </Heading>
        <Paragraph variant={PARAGRAPH_VARIANTS.BOLD} padded desktop={[1, 2]}>
          Sit back down again<strong>.</strong>
          <br />
          And press play<strong>.</strong>
          <br />
          <strong>Like nothing has happened</strong>
          <a href="https://www.radiohead.com/library">.</a>
          <br />
          <LinkWrapper to={"/"}>Go back to the start again</LinkWrapper>
          <strong>.</strong>
        </Paragraph>
      </Grid>
    </Section>
  </Layout>
);

export default NotFound;
