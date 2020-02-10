import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { theme } from "@ui";

export const LinkWrapper = (props: {
  to: string;
  children: React.ReactNode;
}) => <AniLink cover duration={1} bg={theme.colors.brand} {...props} />;
