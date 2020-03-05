import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { HorizontalLine } from "./";

storiesOf("Atoms/HorizontalLine", module).add("Normal", () => (
  <HorizontalLine>{text("Example text", "Hello")}</HorizontalLine>
));
