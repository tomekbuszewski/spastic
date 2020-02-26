import * as React from "react";

import { text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { ArticleHeader } from "./";

storiesOf("Molecules/ArticleHeader", module).add("Normal", () => (
  <ArticleHeader
    title={text("Title", "Don’t forget to forget your code")}
    pubdate={text("Publication", "Monday, 10th of February 2020")}
    photo={
      boolean("With photo", false) &&
      "https://images.unsplash.com/photo-1582553996030-745b860f1422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    }
  />
));
