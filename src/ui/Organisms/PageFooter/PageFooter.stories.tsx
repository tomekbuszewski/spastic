import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { PageFooter } from "./";
import { Overlay } from "@ui/Molecules";

storiesOf("Organisms/Page Footer", module).add("Normal", () => (
  <React.Fragment>
    {boolean("With overlay", true) && <Overlay />}
    <PageFooter>
      {text(
        "Example text",
        "All rights reserved. This site probably harvests your cookies."
      )}
    </PageFooter>
  </React.Fragment>
));
