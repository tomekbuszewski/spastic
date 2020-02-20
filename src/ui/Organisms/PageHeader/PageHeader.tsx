/**
 * @author tomek
 * @since 2020-02-17 10:36:53
 */

import * as React from "react";
import styled from "styled-components";

import { Grid, Logo, NavButton } from "@ui/Atoms";
import { Menu } from "@ui/Molecules";

import { theme } from "@ui";
import { scrollTo, withTransitions } from "@ui/helpers";
import { SECTIONS } from "@config/sections";

interface Props {
  items: any[];
  className?: string;
}

const PageHeader = styled((props: Props) => {
  const [isActive, setActive] = React.useState<boolean>(false);
  const enhancedItems = props.items.map(item => ({
    ...item,
    onClick: () => {
      item.onClick();
      setActive(false);
    },
  }));

  return (
    <header className={props.className}>
      <Grid as="nav" gridColumnsMobile="1fr 1fr" gridColumnsTablet="1fr 3fr">
        <Logo
          asMain
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            scrollTo(SECTIONS.HERO);
          }}
        />
        <NavButton
          active={isActive}
          onClick={() => setActive(active => !active)}
        />
        <Menu items={enhancedItems} active={isActive} />
      </Grid>
    </header>
  );
})`
  ${withTransitions("height")};

  height: 6rem;
  display: grid;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 200;
  padding-left: 1rem;
  padding-right: 1rem;

  background: var(--body);

  ${theme.breakpoints.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ${theme.breakpoints.desktop} {
    height: 10rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

export { PageHeader };
