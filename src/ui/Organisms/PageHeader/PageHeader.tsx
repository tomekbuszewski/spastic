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
      <Grid padded gridColumnsMobile="1fr 1fr" gridColumnsTablet="1fr 3fr">
        <Logo />
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

  background: var(--body);

  ${theme.breakpoints.tablet} {
    height: 10rem;
  }
`;

export { PageHeader };
