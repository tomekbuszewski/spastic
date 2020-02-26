import * as React from "react";

import { storiesOf } from "@storybook/react";

import { ArticleBody } from "./";

import data from "./data";

storiesOf("Molecules/ArticleBody", module).add("Normal", () => (
  <ArticleBody source={data} />
));
