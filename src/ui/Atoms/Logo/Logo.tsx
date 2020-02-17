/**
 * @author tomek
 * @since 2020-02-17 11:08:01
 */

import styled from "styled-components";

import LogoImg from "../../../images/Logo.svg";
import { theme } from "@ui";

const Logo = styled(LogoImg as any)`
  width: 10rem;
  align-self: center;
  position: relative;
  z-index: 120;

  ${theme.breakpoints.tablet} {
    width: auto;
    height: 3rem;
  }
`;

export { Logo };
