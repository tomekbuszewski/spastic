import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { Table } from "./";

storiesOf("Molecules/Table", module).add("Normal", () => (
  <Table>{text("Example text", "Hello")}</Table>
));
