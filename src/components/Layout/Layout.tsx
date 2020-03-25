import * as React from "react";
import styled from "styled-components";

import { GlobalStyle } from "@ui";
import { Overlay } from "@ui/Molecules";
import { PageFooter, PageHeader } from "@ui/Organisms";
import { canSmoothScroll, isClient } from "@ui/helpers";
import { Seo } from "@components";
import { SCROLL_DIRECTION, useScroll } from "@hooks";

interface Props {
  children: React.ReactNode;
  className?: string;
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

const Layout = styled((props: Props) => {
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
  const MainTag = props.isFrontPage ? "main" : "article";

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
      <Seo title={props.title} />
      <MainTag className={props.className}>
        <GlobalStyle />
        {props.children}
      </MainTag>
      <Overlay />
      <PageFooter>
        All rights reserved. This site probably harvests your cookies.
      </PageFooter>
    </React.Fragment>
  );
})`
  position: relative;
  z-index: 1;
  background: var(--body);
`;

export { Layout };
