import * as React from "react";
import { navigate } from "gatsby";

export const LinkWrapper = (props: {
  to: string;
  children: React.ReactNode;
}) => (
  <a
    href={props.to}
    onClick={e => {
      e.preventDefault();

      if (document) {
        const body = document.querySelector("body");
        if (body) {
          body.classList.remove("loaded");
          body.classList.add("loading");
          setTimeout(() => {
            navigate(props.to!);
          }, 250);
        }
      } else {
        navigate(props.to!);
      }
    }}
    {...props}
  >
    {props.children}
  </a>
);
