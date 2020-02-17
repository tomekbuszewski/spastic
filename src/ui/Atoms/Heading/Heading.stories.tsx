import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { Heading, HEADING_SIZES } from ".";
import { SECTIONS } from "@config/sections";

const sections = Object.keys(SECTIONS).map(s => String(s).toLowerCase());
const sizes = Object.keys(HEADING_SIZES).map(s => String(s).toLowerCase());

storiesOf("Atoms|Heading", module).add("Basic", () => (
  <Heading
    section={select("Section", sections, sections[0])}
    size={select("Size", sizes, sizes[0]) as HEADING_SIZES}
  >
    {text("Text", "Hello from Heading")}
  </Heading>
));
