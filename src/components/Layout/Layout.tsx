import * as React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@ui";
import { Overlay, Header } from "@ui/Molecules";

import { theme } from "@ui/theme";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Header />
      <Overlay />
      <main>
        <GlobalStyle />
        {children}
      </main>
    </React.Fragment>
  </ThemeProvider>
);
