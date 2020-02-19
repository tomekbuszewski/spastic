import * as React from "react";

import { GlobalStyle } from "@ui";
import { Overlay } from "@ui/Molecules";
import { PageFooter, PageHeader } from "@ui/Organisms";
import SEO from "../seo";

import { scrollTo } from "@ui/helpers";
import { SECTIONS } from "@config/sections";
import { debounce } from "@helpers/debounce";

interface Props {
  children: React.ReactNode;
}

const items = [
  {
    children: "About and Work",
    onClick: () => scrollTo(SECTIONS.ABOUT),
  },
  {
    children: "Writings",
    onClick: () => scrollTo(SECTIONS.WRITINGS),
  },
  {
    children: "Contact",
    onClick: () => scrollTo(SECTIONS.CONTACT),
  },
];

export const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <PageHeader items={items} fromTop={0} />
      <SEO />
      <main>
        <GlobalStyle />
        {props.children}
      </main>
      <Overlay />
      <PageFooter>
        All rights reserved. This site probably harvests your cookies.
      </PageFooter>
    </React.Fragment>
  );
};
