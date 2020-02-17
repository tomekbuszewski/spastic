import * as React from "react";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { Menu } from "./";

export const MENU_CHILDREN = [
  { text: "About me" },
  { text: "Writings" },
  { text: "Contact" },
];

storiesOf("Molecules/Menu", module).add("Normal", () => (
  <Menu active={boolean("Menu active", true)} items={MENU_CHILDREN} />
));
