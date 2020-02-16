import * as React from "react";
import { addDecorator } from "@storybook/react";

import { GlobalStyle } from "../../src/ui";

addDecorator(story => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
));
