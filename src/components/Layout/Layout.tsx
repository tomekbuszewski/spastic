import * as React from "react";

import { GlobalStyle } from "@ui";
import { Overlay } from "@ui/Molecules";
import { PageFooter, PageHeader } from "@ui/Organisms";
import SEO from "../seo";
import { canSmoothScroll } from "@ui/helpers";
import { SCROLL_DIRECTION, useScroll } from "@hooks";

interface Props {
  children: React.ReactNode;
  isFrontPage: boolean;
  title?: string;
}

const Layout = (props: Props) => {
  const { scrollFromTop, scrollDirection } = useScroll();
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
      <PageHeader
        isFrontPage={props.isFrontPage}
        hidden={
          scrollDirection === SCROLL_DIRECTION.BOTTOM && scrollFromTop >= 150
        }
      />
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
