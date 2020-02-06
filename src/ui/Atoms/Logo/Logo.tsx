/**
 * @author tomekbuszewski
 * @since 2020-02-05 14:27:25
 */

import * as React from "react";
import styled from "styled-components";

import LogoImage from "../../../images/Logo.svg";

import { gridElement } from "@ui/helpers";

const Logo = styled(LogoImage as any)`
  ${gridElement};
  box-sizing: content-box;
  width: 10rem;
  fill: var(--section-hero-lead);
  z-index: 12;
`;

export {
  Logo,
}