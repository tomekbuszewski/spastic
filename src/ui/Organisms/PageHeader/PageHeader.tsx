/**
 * @author tomek
 * @since 2020-02-17 10:36:53
 */

import * as React from "react";
import styled from "styled-components";

import { Logo, Grid, NavButton } from "@ui/Atoms";
import { Menu } from "@ui/Molecules";

import { theme } from "@ui";

interface Props {
  items: any[];
  className?: string;
}

const PageHeader = styled((props: Props) => {
  const [isActive, setActive] = React.useState<boolean>(false);

  return (
    <header className={props.className}>
      <Grid as="nav" gridColumnsMobile="1fr 1fr" gridColumnsTablet="1fr 3fr">
        <Logo asMain />
        <NavButton
          active={isActive}
          onClick={() => setActive(active => !active)}
        />
        <Menu items={props.items} active={isActive} />
      </Grid>
    </header>
  );
})`
  height: 5rem;
  display: grid;
  align-items: center;
  position: sticky;
  top: 0;
  padding-left: 1rem;
  padding-right: 1rem;

  background: var(--body);

  ${theme.breakpoints.tablet} {
    height: 10rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ${theme.breakpoints.desktop} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export { PageHeader };