import * as React from "react";

import { GlobalStyle } from "@ui";
import { Overlay } from "@ui/Molecules";
import { PageFooter, PageHeader } from "@ui/Organisms";
import SEO from "../seo";
import { canSmoothScroll, isClient } from "@ui/helpers";
import { SCROLL_DIRECTION, useScroll } from "@hooks";

interface Props {
  children: React.ReactNode;
  isFrontPage: boolean;
  title?: string;
}

const maxScrolledPosition = () => {
  let result = 0;

  if (isClient) {
    if (
      window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
    ) {
      result = 160;
    } else if (
      window.matchMedia("(min-width: 1024px) and (max-width: 1199px)").matches
    ) {
      result = 300;
    } else if (window.matchMedia("(min-width: 1200px)").matches) {
      result = 200;
    } else {
      result = 200;
    }
  }

  return result;
};

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
          isClient &&
          scrollDirection === SCROLL_DIRECTION.BOTTOM &&
          scrollFromTop >= maxScrolledPosition()
        }
        scrolled={scrollFromTop > maxScrolledPosition()}
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
