import * as React from "react";
import { text, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { MoreLink } from "./index";
import { SECTIONS } from "@config/sections";

const sections = Object.keys(SECTIONS).map(s => String(s).toLowerCase());

storiesOf("Molecules|MoreLink", module).add("Normal", () => (
  <MoreLink section={select("Section", sections, sections[0]) as SECTIONS}>
    {text("Text", "A bit more info please")}
  </MoreLink>
));
