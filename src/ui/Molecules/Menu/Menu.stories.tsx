import * as React from "react";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { Menu } from "./";

export const MENU_CHILDREN = [
  { children: "About me" },
  { children: "Writings" },
  { children: "Contact" },
];

storiesOf("Molecules/Menu", module).add("Normal", () => (
  <Menu active={boolean("Menu active", true)} items={MENU_CHILDREN} />
));
