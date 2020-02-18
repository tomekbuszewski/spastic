import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { MenuItem } from "./";

storiesOf("Atoms/MenuItem", module).add("Normal", () => (
  <MenuItem>{text("Example text", "Hello")}</MenuItem>
));
