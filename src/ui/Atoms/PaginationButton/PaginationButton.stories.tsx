import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { PaginationButton } from "./";

storiesOf("Atoms/PaginationButton", module).add("Normal", () => (
  <PaginationButton>
    ← <span>Previous</span>
  </PaginationButton>
));
