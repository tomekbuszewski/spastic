import * as React from "react";

export enum SCROLL_DIRECTION {
  BOTTOM,
  TOP,
}

export function useScroll() {
  const [scrollFromTop, setScrollFromTop] = React.useState(0);
  const [scrollDirection, setScrollDirection] = React.useState<
    SCROLL_DIRECTION
  >(SCROLL_DIRECTION.BOTTOM);
  let scrollTop = 0;

  function attach() {
    const { pageYOffset } = window;

    setScrollDirection(
      pageYOffset > scrollTop ? SCROLL_DIRECTION.BOTTOM : SCROLL_DIRECTION.TOP,
    );
    setScrollFromTop(pageYOffset);
    sessionStorage.setItem("scrollOffset", String(pageYOffset));

    scrollTop = pageYOffset;
  }

  React.useEffect(() => {
    window.addEventListener("scroll", attach, false);

    return () => {
      window.removeEventListener("scroll", attach);
    };
  }, [null]);

  return {
    scrollFromTop,
    scrollDirection,
  };
}
