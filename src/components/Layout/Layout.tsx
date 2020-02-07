import * as React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@ui";
import { Overlay, Header } from "@ui/Molecules";
import SEO from "../seo";

import { theme } from "@ui/theme";

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <SEO />
      <Header />
      <Overlay />
      <main>
        <GlobalStyle />
        {props.children}
      </main>
    </React.Fragment>
  </ThemeProvider>
);
