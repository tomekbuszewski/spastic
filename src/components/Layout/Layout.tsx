import * as React from "react";

import { GlobalStyle } from "@ui";
import { Overlay, Header } from "@ui/Molecules";
import SEO from "../seo";

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => (
  <React.Fragment>
    <SEO />
    <Header />
    <Overlay />
    <main>
      <GlobalStyle />
      {props.children}
    </main>
  </React.Fragment>
);
