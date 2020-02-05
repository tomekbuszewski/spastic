/**
 * @author tomekbuszewski
 * @since 2020-02-05 14:27:25
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

import LogoImage from "../../../images/Logo.svg";

interface Props {
  children?: React.ReactNode;
  theme: ITheme;
}

const Logo = styled(LogoImage as any)`
  width: 10rem;
  fill: ${props => props.theme.colors.brand};
`;

export {
  Logo,
}