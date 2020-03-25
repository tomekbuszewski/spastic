import * as React from "react";
import styled, { css } from "styled-components";

import { withTransitions } from "@ui/helpers";
import { theme } from "@ui";

const isObserverAvailable =
  typeof window !== "undefined" && "IntersectionObserver" in window;

const isMobile = isObserverAvailable && window.innerWidth < 768;

const observerOptions = {
  rootMargin: isMobile ? "0px" : "25% 0px 0px 0px",
  threshold: isMobile ? 0 : 0.125,
};

const observer = isObserverAvailable
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.setAttribute("data-active", "true");
          observer.unobserve(target);
        }
      });
    }, observerOptions)
  : { observe: () => false };

const FadeIn = styled((props: any) => {
  const container = React.useRef(null);

  React.useEffect(() => {
    if (container.current !== null) {
      (container.current as any).classList.add("fade-in");
      observer.observe((container.current as unknown) as Element);
    }
  }, []);

  return React.Children.map(props.children, child =>
    React.cloneElement(child, {
      ...child.props,
      className: `${child.props.className || ""} ${props.className}`.trim(),
      ref: container,
    }),
  );
})`
  &.fade-in {
    ${withTransitions(["transform", "opacity"], theme.animations.veryLong)};
    opacity: 0;
    transform: translateY(12rem) skewY(2deg);

    > *,
    > * > p,
    > * > li,
    > * > * > p,
    > * > * > li {
      opacity: 0;
      transform: translateY(6rem) skewY(2deg);
      ${withTransitions(["transform", "opacity"], theme.animations.long)};

      ${Array(20)
        .fill(null)
        .map((_, i) => {
          return css`
            &:nth-child(${i + 1}) {
              transition-delay: ${100 * i}ms;
            }
          `;
        })};
    }
  }

  &.fade-in[data-active] {
    opacity: 1;
    transform: none;

    > *,
    > * > p,
    > * > li,
    > * > * > p,
    > * > * > li {
      opacity: 1;
      transform: none;
    }
  }
`;

export { FadeIn };
