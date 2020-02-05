import * as React from "react";
import { GlobalStyle } from "@ui";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);
