import * as React from "react";
import { navigate } from "gatsby";

export const linkWrapperFunc = (link: string) => {
  if (link!.indexOf("http") === 0 && typeof window !== "undefined") {
    return (window.location.href = link!);
  }

  if (document) {
    const body = document.querySelector("body");
    if (body) {
      body.classList.remove("loaded");
      body.classList.add("loading");
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
