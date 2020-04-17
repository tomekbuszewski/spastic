import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

import { theme, BASE_SIZE } from "@ui/theme";

import { SECTIONS } from "@config/sections";
import { withTransitions } from "@ui/helpers";

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
    scroll-behavior: smooth;
    
    &.loading {
      scroll-behavior: initial;
    }
  }
  
  body {
    ${withTransitions("transform")};
    
    &:after {
      ${withTransitions("transform")};
      transform: scaleX(0);
      transform-origin: right center;
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      background: ${() => `var(--section-${SECTIONS.HERO}-background)`};
      z-index: 998;
      content: "";
    }
    
    &.loading {
      &:after {
        transform: none;
      }
    }
    
    &.loaded {
      &:after {
        transform: scaleX(0);
        transform-origin: left center;
      }
    }
  }
  
  :root {
    --overlay: rgba(45, 35, 46, 0.05);
    --body: #FDFDFD;
    --text: #4B4B4B;
    --section-${SECTIONS.FOUR_OH_FOUR}-background: #fff;
    --section-${SECTIONS.FOUR_OH_FOUR}-lead: rgb(9%, 11%, 11%);
    --section-${SECTIONS.FOUR_OH_FOUR}-text: rgb(97%, 0%, 4%);
    --section-${SECTIONS.FOUR_OH_FOUR}-highlight: rgb(76.0%, 82.0%, 80.0%);
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
    --section-${SECTIONS.ARTICLE}-background: #FAF7ED;
    --section-${SECTIONS.ARTICLE}-heading: #FAF7ED;
    --section-${SECTIONS.ARTICLE}-heading-no-photo: #373326;
    --section-${SECTIONS.ARTICLE}-heading-photo: #FAF7ED;
    --section-${SECTIONS.ARTICLE}-lead: #373326;
    --section-${SECTIONS.ARTICLE}-text: #938F83;
    --section-${SECTIONS.ARTICLE}-highlight: #E4DFD1;
    
    --code-bg: #F3F3F3;
    --code-text: rgb(95, 95, 95);
    --code-func: rgb(23, 129, 181);
    --code-keyword: rgb(204, 85, 149);
    --code-number: rgb(252, 99, 21);
    --code-param: rgb(183, 141, 18);
    --code-bracket: rgb(43, 49, 44);
    --code-tag: rgba(0, 0, 0, 0.1);
    --code-whitespace: rgba(0, 0, 0, 0.2);
    --code-comment: rgb(144, 164, 174);
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --overlay: rgba(136,98,31,0.25);
      --body: #000;
      --text: #999;
      --section-${SECTIONS.FOUR_OH_FOUR}-background: rgb(9%, 11%, 11%);
      --section-${SECTIONS.FOUR_OH_FOUR}-lead: #fff;
      --section-${SECTIONS.FOUR_OH_FOUR}-text: rgb(97%, 0%, 4%);
      --section-${SECTIONS.FOUR_OH_FOUR}-highlight: rgb(53,57,56);
      --section-${SECTIONS.HERO}-background: #2D232E;
      --section-${SECTIONS.HERO}-lead: #9E8212;
      --section-${SECTIONS.HERO}-text: #88621f;
      --section-${SECTIONS.HERO}-highlight: #463609;
      --section-${SECTIONS.ABOUT}-background: #222c37;
      --section-${SECTIONS.ABOUT}-lead: #5fa5b5;
      --section-${SECTIONS.ABOUT}-text: #3f7f8c;
      --section-${SECTIONS.ABOUT}-highlight: #323f4f;
      --section-${SECTIONS.EXPERIENCE}-background: #100e0d;
      --section-${SECTIONS.EXPERIENCE}-lead: #7a6c6d;
      --section-${SECTIONS.EXPERIENCE}-text: #615450;
      --section-${SECTIONS.EXPERIENCE}-extra: #7E7E7E;
      --section-${SECTIONS.EXPERIENCE}-highlight: #272727;
      --section-${SECTIONS.WRITINGS}-background: #211d1a;
      --section-${SECTIONS.WRITINGS}-lead: #bfb599;
      --section-${SECTIONS.WRITINGS}-text: #807c70;
      --section-${SECTIONS.WRITINGS}-highlight: #382b1c;
      --section-${SECTIONS.CONTACT}-background: #230815;
      --section-${SECTIONS.CONTACT}-lead: #b47197;
      --section-${SECTIONS.CONTACT}-text: #4e2129;
      --section-${SECTIONS.CONTACT}-extra: #b14f87;
      --section-${SECTIONS.CONTACT}-highlight: #402336;
      --section-${SECTIONS.ARTICLE}-background: #FAF7ED;
      --section-${SECTIONS.ARTICLE}-heading: #211d1a;
      --section-${SECTIONS.ARTICLE}-heading-no-photo: #E4DFD1;
      --section-${SECTIONS.ARTICLE}-heading-photo: #E4DFD1;
      --section-${SECTIONS.ARTICLE}-lead: #E4DFD1;
      --section-${SECTIONS.ARTICLE}-text: #938F83;
      --section-${SECTIONS.ARTICLE}-highlight: #382b1c;
    
      --code-bg: #2E2A2E;
      --code-text: #FBFBF9;
      --code-func: #50DFEA;
      --code-keyword: #FF5187;
      --code-number: #9BDF67;
      --code-param: #FF9255;
      --code-bracket: #939293;
      --code-tag: rgba(255, 255, 255, 0.1);
      --code-whitespace: rgba(251, 251, 249, 0.2);
      --code-comment: rgb(103, 111, 125);
    }
  }

  ${reboot(rebootOptions)};
`;
