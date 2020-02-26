import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { Blockquote } from "./";

storiesOf("Atoms/Blockquote", module).add("Normal", () => (
  <Blockquote>{text("Example text", "Hello")}</Blockquote>
));
