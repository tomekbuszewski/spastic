import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { SECTIONS } from "@config/sections";

import {
  Grid,
  Heading,
  HEADING_SIZES,
  Paragraph,
  PARAGRAPH_VARIANTS,
  Section,
} from "@ui/Atoms";
import { PageHeader } from "@ui/Organisms";
import { MENU_CHILDREN } from "@ui/Molecules/Menu/Menu.stories";
import { Overlay } from "@ui/Molecules";

storiesOf("Demos/Sections", module).add("Hero", () => (
  <React.Fragment>
    {boolean("With overlay", true) && <Overlay />}
    {boolean("With header", true) && <PageHeader items={MENU_CHILDREN} />}
    <Section name={SECTIONS.HERO}>
      <Grid padded>
        <Heading size={HEADING_SIZES.LARGE} section={SECTIONS.HERO}>
          Hello, <br />
          <u>my name is</u> Tomek.
        </Heading>
        <Paragraph variant={PARAGRAPH_VARIANTS.BOLD}>
          I am <u>a</u> front-end team leader <u>at</u> TVN.
        </Paragraph>
        <Paragraph variant={PARAGRAPH_VARIANTS.BOLD}>
          <u>Got something</u> interesting in mind? <br />
          <u>Or just want to</u> say hi?{" "}
          <a href="#contact">
            <span>Let’s talk!</span>
          </a>
        </Paragraph>
      </Grid>
    </Section>
  </React.Fragment>
));
