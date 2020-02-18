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
  ListItem,
} from "@ui/Atoms";
import { Overlay, List, MoreLink } from "@ui/Molecules";

storiesOf("Demos/Sections", module).add("About", () => (
  <React.Fragment>
    {boolean("With overlay", true) && <Overlay />}
    <Section name={SECTIONS.ABOUT}>
      <Grid
        padded
        gridColumnsMobile="1fr"
        gridColumnsTablet="1fr 1fr"
        as="article"
      >
        <Heading
          padded
          full
          section={SECTIONS.ABOUT}
          size={HEADING_SIZES.NORMAL}
        >
          About me<u>.</u>
        </Heading>
        <Paragraph
          mobile={[1, 12]}
          tablet={[1, 2]}
          padded
          section={SECTIONS.ABOUT}
          variant={PARAGRAPH_VARIANTS.LARGE}
        >
          Developer, consultant <u>and</u> lead <u>with over</u> 12 years of
          commercial experience. <u>Capable of managing projects from start</u>{" "}
          (writing concepts, choosing technology, creating boilerplate and style
          guides) <u>to finish</u> (active development with strong understanding
          of agile methodology)<u>.</u>
        </Paragraph>
        <List padded>
          <ListItem>
            Clean <u>and</u> documented code <u>fanatic</u>;
          </ListItem>
          <ListItem>
            <u>Able to</u> create scalable project architecture{" "}
            <u>from scratch</u>;
          </ListItem>
          <ListItem>
            Functional <u>and</u> object-oriented programming <u>user</u>;
          </ListItem>
          <ListItem>
            <u>Experienced in</u> optimization of front-end layer <u>of web</u>;
          </ListItem>
          <ListItem>
            Rest API <u>and</u> GraphQL <u>user</u>;
          </ListItem>
          <ListItem>
            <u>Experienced in</u> implementing new technologies in existing
            projects;
          </ListItem>
          <ListItem>
            <u>Able to</u> create PoC <u>and develop them</u> into working
            applications;
          </ListItem>
          <ListItem>
            <u>Writes</u> tests <u>with good</u> code coverage;
          </ListItem>
          <ListItem>
            <u>Strict</u> code reviewer;
          </ListItem>
          <ListItem>
            <u>Proven</u> team leader <u>and</u> team player.
          </ListItem>
        </List>
        <MoreLink>
          A bit more info please<u>.</u>
        </MoreLink>
      </Grid>
    </Section>
  </React.Fragment>
));
