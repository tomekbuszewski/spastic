import * as React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { GlobalStyle } from "../../src/ui";

addDecorator(story => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
