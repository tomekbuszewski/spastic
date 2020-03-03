import * as React from "react";
import { navigate } from "gatsby";
import { isClient } from "@ui/helpers";

export const linkWrapperFunc = (link: string) => {
  if (link!.indexOf("http") === 0 && isClient) {
    return (window.location.href = link!);
  }

  if (document) {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    if (body && html) {
      body.classList.remove("loaded");
      body.classList.add("loading");
      html.classList.add("loading");
      setTimeout(() => {
        navigate(link!);
      }, 250);
    }
  } else {
    navigate(link!);
  }
};

export const LinkWrapper = (props: {
  to?: string;
  href?: string;
  children: React.ReactNode;
}) => {
  const link = props.to || props.href || "";

  return (
    <a
      href={link}
      onClick={e => {
        e.preventDefault();

        linkWrapperFunc(link!);
      }}
      {...props}
    >
      {props.children}
    </a>
  );
};
