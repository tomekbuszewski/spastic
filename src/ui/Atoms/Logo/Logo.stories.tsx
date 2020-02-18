import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { Logo } from "./";

storiesOf("Atoms/Logo", module).add("Normal", () => (
  <Logo asMain={boolean("As main (h1)", false)}>
    {text("Example text", "Hello")}
  </Logo>
));
