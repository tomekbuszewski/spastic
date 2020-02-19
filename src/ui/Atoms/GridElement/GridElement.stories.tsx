import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { GridElement } from "./";

storiesOf("Atoms/GridElement", module).add("Normal", () => (
  <GridElement>{text("Example text", "Hello")}</GridElement>
));
