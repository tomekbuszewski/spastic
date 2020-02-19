import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

import { theme, BASE_SIZE } from "@ui/theme";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import ManropeMedium from "@ui/fonts/Manrope-Medium.woff2";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import ManropeExtraBold from "@ui/fonts/Manrope-ExtraBold.woff2";
import { SECTIONS } from "@config/sections";

const rebootOptions = {
  bodyBg: "var(--body)",
  bodyColor: "var(--text)",
  fontFamilyBase: theme.fonts.faces.primary,
  fontWeightBase: 500,
  linkHoverDecoration: "none",
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${BASE_SIZE}px;
  }
  
  :root {
    --overlay: rgba(45, 35, 46, 0.1);
    --body: #FDFDFD;
    --text: #4B4B4B;
    --section-${SECTIONS.HERO}-background: #F1C40F;
    --section-${SECTIONS.HERO}-lead: #2D232E;
    --section-${SECTIONS.HERO}-text: #714701;
    --section-${SECTIONS.HERO}-highlight: #F1A30F;
    --section-${SECTIONS.ABOUT}-background: #F4FDFF;
    --section-${SECTIONS.ABOUT}-lead: #0E2F37;
    --section-${SECTIONS.ABOUT}-text: #446b80;
    --section-${SECTIONS.ABOUT}-highlight: #C7DEE3;
    --section-${SECTIONS.EXPERIENCE}-background: #f6f6f6;
    --section-${SECTIONS.EXPERIENCE}-lead: #353535;
    --section-${SECTIONS.EXPERIENCE}-text: #7E7E7E;
    --section-${SECTIONS.EXPERIENCE}-extra: #7E7E7E;
    --section-${SECTIONS.EXPERIENCE}-highlight: #E6E6E6;
    --section-${SECTIONS.WRITINGS}-background: #FAF7ED;
    --section-${SECTIONS.WRITINGS}-lead: #373326;
    --section-${SECTIONS.WRITINGS}-text: #938F83;
    --section-${SECTIONS.WRITINGS}-highlight: #E4DFD1;
    --section-${SECTIONS.CONTACT}-background: #FAEDF4;
    --section-${SECTIONS.CONTACT}-lead: #71043F;
    --section-${SECTIONS.CONTACT}-text: #B497A7;
    --section-${SECTIONS.CONTACT}-extra: #984672;
    --section-${SECTIONS.CONTACT}-highlight: #DBBECE;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --overlay: rgba(136,98,31,0.25);
      --body: #000;
      --text: #666;
      --section-${SECTIONS.HERO}-background: #2D232E;
      --section-${SECTIONS.HERO}-lead: #9E8212;
      --section-${SECTIONS.HERO}-text: #88621f;
      --section-${SECTIONS.HERO}-highlight: #514152;
      --section-${SECTIONS.ABOUT}-background: #222c37;
      --section-${SECTIONS.ABOUT}-lead: #5fa5b5;
      --section-${SECTIONS.ABOUT}-text: #3f7f8c;
      --section-${SECTIONS.ABOUT}-highlight: #323f4f;
      --section-${SECTIONS.EXPERIENCE}-background: #100e0d;
      --section-${SECTIONS.EXPERIENCE}-lead: #726566;
      --section-${SECTIONS.EXPERIENCE}-text: #574b48;
      --section-${SECTIONS.EXPERIENCE}-extra: #7E7E7E;
      --section-${SECTIONS.EXPERIENCE}-highlight: #272727;
      --section-${SECTIONS.WRITINGS}-background: #FAF7ED;
      --section-${SECTIONS.WRITINGS}-lead: #373326;
      --section-${SECTIONS.WRITINGS}-text: #938F83;
      --section-${SECTIONS.WRITINGS}-highlight: #E4DFD1;
      --section-${SECTIONS.CONTACT}-background: #FAEDF4;
      --section-${SECTIONS.CONTACT}-lead: #71043F;
      --section-${SECTIONS.CONTACT}-text: #B497A7;
      --section-${SECTIONS.CONTACT}-extra: #b14f87;
      --section-${SECTIONS.CONTACT}-highlight: #DBBECE;
    }
  }
  
  @font-face {
    font-family: ${theme.fonts.faces.normal};
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
    src: local("Manrope Medium"), local("Manrope-Medium"), url(${ManropeMedium}) format("woff2");
  }
  
  @font-face {
    font-family: ${theme.fonts.faces.normal};
    font-style: normal;
    font-weight: 800;
    font-display: fallback;
    src: local("Manrope ExtraBold"), local("Manrope-ExtraBold"), url(${ManropeExtraBold}) format("woff2");
  }

  ${reboot(rebootOptions)};
`;
