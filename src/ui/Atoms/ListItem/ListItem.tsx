/**
 * @author tomek
 * @since 2020-02-18 07:35:39
 */

import * as React from "react";
import styled from "styled-components";

import { Paragraph } from "@ui/Atoms";
import { SECTIONS } from "@config/sections";

interface Props {
  as?: string;
  children?: React.ReactNode;
  section?: SECTIONS;
}

const ListItem = styled(Paragraph)<Props>`
  margin-bottom: 0.5rem;
  color: inherit;

  &:last-of-type {
    margin-bottom: 0;
  }

  u {
    color: inherit;
  }
`;

ListItem.defaultProps = {
  as: "li",
};

export { ListItem };
