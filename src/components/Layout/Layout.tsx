import * as React from "react";

import { GlobalStyle } from "@ui";
import { Overlay } from "@ui/Molecules";
import { PageFooter, PageHeader } from "@ui/Organisms";
import SEO from "../seo";
import { canSmoothScroll } from "@ui/helpers";

interface Props {
  children: React.ReactNode;
  isFrontPage: boolean;
  title?: string;
}

const Layout = (props: Props) => {
  React.useEffect(() => {
    if (!canSmoothScroll) {
      import("smoothscroll-polyfill")
        .then(module => module.default)
        .then(scroll => {
          scroll.polyfill();
        });
    }
  }, []);

  return (
    <React.Fragment>
      <PageHeader isFrontPage={props.isFrontPage} />
      <SEO title={props.title} />
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

export { Layout };
