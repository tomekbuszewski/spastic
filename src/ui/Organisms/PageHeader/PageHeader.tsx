/**
 * @author tomek
 * @since 2020-02-17 10:36:53
 */

import * as React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import { Grid, Logo, NavButton } from "@ui/Atoms";
import { Menu } from "@ui/Molecules";

import { theme } from "@ui";
import { scrollTo } from "@ui/helpers";
import { SECTIONS } from "@config/sections";

interface Props {
  items?: any[];
  className?: string;
  isFrontPage: boolean;
}

const items = [
  {
    children: "About and Work",
    section: SECTIONS.ABOUT,
    onClick: () => scrollTo(SECTIONS.ABOUT),
  },
  {
    children: "Writings",
    section: SECTIONS.WRITINGS,
    onClick: () => scrollTo(SECTIONS.WRITINGS),
  },
  {
    children: "Contact",
    section: SECTIONS.CONTACT,
    onClick: () => scrollTo(SECTIONS.CONTACT),
  },
];

const PageHeader = styled((props: Props) => {
  const [isActive, setActive] = React.useState<boolean>(false);
  const enhancedItems = (props.items ? props.items : []).map(item => ({
    ...item,
    onClick: () => {
      if (props.isFrontPage) {
        item.onClick();
      } else {
        navigate(`#${item.section}`);
      }

      setActive(false);
    },
  }));

  return (
    <header className={props.className}>
      <Grid as="nav" gridColumnsMobile="1fr 1fr" gridColumnsTablet="1fr 3fr">
        <Logo
          isFrontPage={props.isFrontPage}
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
  height: 6rem;
  display: grid;
  align-items: center;
  //position: sticky;
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

PageHeader.defaultProps = {
  items,
};

export { PageHeader };
