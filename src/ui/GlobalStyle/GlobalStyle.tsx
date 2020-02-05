import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

import { theme, BASE_SIZE } from "@ui/theme";
import { light, dark, IColorScheme } from "@ui/colors";

import ManropeMedium from "@ui/fonts/Manrope-Medium.woff2";
import ManropeExtraBold from "@ui/fonts/Manrope-ExtraBold.woff2";

function mapColors(scheme: IColorScheme, _prefix?: string): string {
  const keys = Object.keys(scheme);

  const result = keys.map(key => {
    const currentItem = scheme[key];

    if (typeof currentItem === "string") {
      const prefix = _prefix ? `${_prefix}-` : "";
      return `--${prefix}${key}: ${currentItem}`;
    }

    return mapColors(currentItem, `section-${key}`);
  });

  return result.join(process.env.NODE_ENV === "production" ? ";" : ";\n");
}

const rebootOptions = {
  bodyBg: "var(--body)",
  bodyColor: "var(--text)",
  fontFamilyBase: theme.fonts.faces.primary,
  fontWeightBase: 500,
  linkHoverDecoration: "none",
};

export const GlobalStyle = createGlobalStyle`
  :root {
    ${mapColors(light)};
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      ${mapColors(dark)};
    }
  }
  
  @font-face {
    font-family: ${theme.fonts.faces.normal};
    font-style: normal;
    font-weight: 500;
    src: local("Manrope Medium"), local("Manrope-Medium"), url(${ManropeMedium}) format("woff2");  
  }
  
  @font-face {
    font-family: ${theme.fonts.faces.normal};
    font-style: normal;
    font-weight: 800;
    src: local("Manrope ExtraBold"), local("Manrope-ExtraBold"), url(${ManropeExtraBold}) format("woff2");  
  }

  ${reboot(rebootOptions)};
  
  html {
    font-size: ${BASE_SIZE}px;
  }
`;
