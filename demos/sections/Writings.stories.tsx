import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { SECTIONS } from "@config/sections";

import { Grid, Heading, HEADING_SIZES, Section } from "@ui/Atoms";
import { Overlay, MoreLink, BlogEntry } from "@ui/Molecules";

storiesOf("Demos/Sections", module).add("Writings", () => (
  <React.Fragment>
    {boolean("With overlay", true) && <Overlay />}
    <Section name={SECTIONS.WRITINGS}>
      <Grid gridColumnsMobile="1fr" as="article">
        <Heading right tablet={[4, 5]} padded size={HEADING_SIZES.NORMAL}>
          Writings<u>.</u>
        </Heading>
        <Grid
          as="ul"
          mobile={[1, 5]}
          gridColumnsMobile="1fr"
          gridColumnsTablet="repeat(4, 1fr)"
        >
          <BlogEntry
            title="Cosidering user’s color preference"
            pubdate="14th of January 2020"
            summary="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          />
          <BlogEntry
            title="What is Redux – Part three"
            pubdate="14th of January 2020"
            summary="Last time I've talked about Redux as a state manager. Now I want to talk about Redux as the state manager in a React application."
          />
          <BlogEntry
            title="Cosidering user’s color preference"
            pubdate="14th of January 2020"
            summary="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          />
          <BlogEntry
            title="What is Redux – Part three"
            pubdate="14th of January 2020"
            summary="Last time I've talked about Redux as a state manager. Now I want to talk about Redux as the state manager in a React application."
          />
          <BlogEntry
            title="Cosidering user’s color preference"
            pubdate="14th of January 2020"
            summary="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          />
          <BlogEntry
            title="What is Redux – Part three"
            pubdate="14th of January 2020"
            summary="Last time I've talked about Redux as a state manager. Now I want to talk about Redux as the state manager in a React application."
          />
        </Grid>
        <MoreLink to={""}>
          More entries<u>.</u>
        </MoreLink>
      </Grid>
    </Section>
  </React.Fragment>
));
