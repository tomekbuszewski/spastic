import * as React from "react";
import { storiesOf } from "@storybook/react";

import { PageHeader } from "./";
import { MENU_CHILDREN } from "@ui/Molecules/Menu/Menu.stories";

storiesOf("Organisms/Page Header", module).add("Normal", () => (
  <React.Fragment>
    <PageHeader items={MENU_CHILDREN} />
    {Array(100)
      .fill(null)
      .map((_, iter) => (
        <div key={iter}>{iter}</div>
      ))}
  </React.Fragment>
));
