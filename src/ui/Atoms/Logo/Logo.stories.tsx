import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { Logo } from "./";

storiesOf("Atoms/Logo", module).add("Normal", () => (
  <Logo>{text("Example text", "Hello")}</Logo>
));
