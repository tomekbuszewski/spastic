import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { CodeBlock } from "./";

storiesOf("Atoms/CodeBlock", module).add("Normal", () => (
  <CodeBlock value={text("Example text", "Hello")} />
));
