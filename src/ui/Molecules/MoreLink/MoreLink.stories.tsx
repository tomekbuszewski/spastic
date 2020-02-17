import * as React from "react";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { MoreLink } from "./index";
import { SECTIONS } from "@config/sections";

const sections = Object.keys(SECTIONS).map(s => String(s).toLowerCase());

storiesOf("Molecules|MoreLink", module).add("Normal", () => (
  <MoreLink
    section={select("Section", sections, sections[0]) as SECTIONS}
    hrefProps={{ href: "https://google.com", title: "Jello" }}
  >
    A bit more info please<u>.</u>
  </MoreLink>
));
