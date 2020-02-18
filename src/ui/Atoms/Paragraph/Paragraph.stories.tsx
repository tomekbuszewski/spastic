import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import { Paragraph, PARAGRAPH_VARIANTS } from "./";
import { SECTIONS } from "@config/sections";

const sections = Object.keys(SECTIONS).map(s => String(s).toLowerCase());
const variants = Object.keys(PARAGRAPH_VARIANTS).map(s =>
  String(s).toLowerCase()
);

storiesOf("Atoms/Paragraph", module).add("Basic", () => (
  <Paragraph
    variant={select("Variant", variants, variants[0]) as PARAGRAPH_VARIANTS}
    section={select("Section", sections, sections[0]) as SECTIONS}
  >
    Hello <u>from</u> Paragraph
  </Paragraph>
));
