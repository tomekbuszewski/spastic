import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { BlogEntry } from "./";

storiesOf("Molecules/BlogEntry", module).add("Normal", () => (
  <BlogEntry
    title={text("Title", "Async concepts and the kitchen")}
    pubdate={text("Publication date", "19th of February 2020")}
    summary={text(
      "Summary",
      "I really like to cook. Yesterday, while doing panissa, I though how it would be like to do it in a synchronous way.",
    )}
  />
));
