import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import {
  Grid,
  GridElement,
  Heading,
  HEADING_SIZES,
  Paragraph,
  PARAGRAPH_VARIANTS,
  Section,
} from "@ui/Atoms";
import { Overlay } from "@ui/Molecules";
import { SECTIONS } from "@config/sections";

storiesOf("Demos/Sections", module).add("Contact", () => (
  <React.Fragment>
    {boolean("With overlay", true) && <Overlay />}
    <Section name={SECTIONS.CONTACT}>
      <Grid
        as="article"
        gridColumnsMobile="1fr"
        gridColumnsTablet="repeat(4, 1fr)"
      >
        <GridElement tablet={[1, 3]} desktop={[2, 3]}>
          <Heading padded size={HEADING_SIZES.NORMAL}>
            Write me an e-mail<u>.</u>
          </Heading>
          <Paragraph padded variant={PARAGRAPH_VARIANTS.BOLD}>
            <a href="mailto:tomek.buszewski@gmail.com">
              <span>tomek.buszewski@gmail.com</span>
            </a>
          </Paragraph>
        </GridElement>
        <GridElement tablet={[3, 5]} desktop={[3, 5]}>
          <Heading mobileTop padded as="h3" size={HEADING_SIZES.NORMAL}>
            Or social media, if that’s your thing<u>.</u>
          </Heading>
          <Paragraph padded variant={PARAGRAPH_VARIANTS.BOLD}>
            <a href="https://www.linkedin.com/in/tomek-buszewski/">
              <span>LinkedIn</span>
            </a>
            <br />
            <a href="https://github.com/tomekbuszewski/">
              <span>GitHub</span>
            </a>
            <br />
            <a href="https://stackoverflow.com/users/1409674/tomek-buszewski">
              <span>Stack Overflow</span>
            </a>
            <br />
            <a href="https://codepen.io/tomekbuszewski">
              <span>Stack Overflow</span>
            </a>
          </Paragraph>
        </GridElement>
      </Grid>
    </Section>
  </React.Fragment>
));
