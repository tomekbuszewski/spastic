import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { ListItem } from "./";

storiesOf("Atoms/ListItem", module).add("Normal", () => (
  <ListItem>{text("Example text", "Hello")}</ListItem>
));
