import { useEffect, useState } from "react";
import { debounce } from "./debounce";

export enum VIEWPORTS {
  MOBILE,
  TABLET,
  DESKTOP,
}

export function getViewport() {
  const [viewport, setViewport] = useState<VIEWPORTS>(VIEWPORTS.MOBILE);

  const detectResize = debounce(function() {
    const { innerWidth } = window;

    if (innerWidth < 768 && viewport !== VIEWPORTS.MOBILE) {
      setViewport(VIEWPORTS.MOBILE);
    }

    if (innerWidth >= 768 && innerWidth < 1200 && viewport !== VIEWPORTS.TABLET) {
      setViewport(VIEWPORTS.TABLET);
    }

    if (innerWidth >= 1200 && viewport !== VIEWPORTS.DESKTOP) {
      setViewport(VIEWPORTS.DESKTOP);
    }
  }, 250);

  useEffect(() => {
    window.addEventListener("resize", detectResize);
    window.dispatchEvent(new Event("resize"));

    return () => {
      window.removeEventListener("resize", detectResize);
    }
  });

  return viewport;
}