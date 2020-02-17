import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { PageFooter } from "./";

storiesOf("Organisms/PageFooter", module).add("Normal", () => (
  <PageFooter>
    {text(
      "Example text",
      "All rights reserved. This site probably harvests your cookies."
    )}
  </PageFooter>
));
