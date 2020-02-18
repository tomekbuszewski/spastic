import * as React from "react";

import { storiesOf } from "@storybook/react";

import { WorkItem } from "./";

storiesOf("Molecules/WorkItem", module).add("Normal", () => (
  <WorkItem
    position={"Position"}
    work={"Workplace"}
    from={"2020.02"}
    to={"ongoing"}
  />
));
