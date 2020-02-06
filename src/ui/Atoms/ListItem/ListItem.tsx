/**
 * @author tomekbuszewski
 * @since 2020-02-06 20:24:16
 */

import * as React from "react";
import styled from "styled-components";
import { ITheme } from "@ui/theme";

const ListItem = styled.li`
  font-weight: 400;
  font-size: 2rem;
  line-height: 3.5rem;
  margin-bottom: 0.25rem;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export {
  ListItem,
};