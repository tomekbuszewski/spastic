import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { Overlay } from "@ui/Molecules";

import { PageHeader } from "./";
import { MENU_CHILDREN } from "@ui/Molecules/Menu/Menu.stories";

storiesOf("Organisms/Page Header", module).add("Normal", () => (
  <React.Fragment>
    <PageHeader items={MENU_CHILDREN} />
    {boolean("With overlay", true) && <Overlay />}
    {Array(100)
      .fill(null)
      .map((_, iter) => (
        <div key={iter}>{iter}</div>
      ))}
  </React.Fragment>
));
