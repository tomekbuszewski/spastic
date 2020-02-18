import * as React from "react";

import { storiesOf } from "@storybook/react";

import { List } from "./";
import { ListItem } from "@ui/Atoms";
import { SECTIONS } from "@config/sections";

storiesOf("Molecules/List", module)
  .add("Unnumbered", () => (
    <List>
      <ListItem section={SECTIONS.ABOUT}>One</ListItem>
      <ListItem section={SECTIONS.ABOUT}>Two</ListItem>
      <ListItem section={SECTIONS.ABOUT}>
        Three <u>test</u>
      </ListItem>
    </List>
  ))
  .add("Numbered", () => (
    <List numbered>
      <ListItem section={SECTIONS.ABOUT}>One</ListItem>
      <ListItem section={SECTIONS.ABOUT}>Two</ListItem>
      <ListItem section={SECTIONS.ABOUT}>
        Three <u>test</u>
      </ListItem>
    </List>
  ));
