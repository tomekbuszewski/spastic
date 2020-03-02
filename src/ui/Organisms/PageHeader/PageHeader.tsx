/**
 * @author tomek
 * @since 2020-02-17 10:36:53
 */

import * as React from "react";
import styled from "styled-components";

import { linkWrapperFunc } from "@components";
import { Grid, Logo, NavButton } from "@ui/Atoms";
import { Menu } from "@ui/Molecules";

import { theme } from "@ui";
import { scrollTo } from "@ui/helpers";
import { SECTIONS } from "@config/sections";

interface Props {
  className?: string;
  isFrontPage: boolean;
}

const PageHeader = styled((props: Props) => {
  const [isActive, setActive] = React.useState<boolean>(false);

  const handleClick = (isFront: boolean, section: SECTIONS) => {
    const sectionId = `#${section}`;

    if (typeof window !== "undefined") {
      if (isFront) {
        scrollTo(sectionId);
      } else {
        linkWrapperFunc(sectionId);
      }
    }

    setActive(false);
  };

  const items = [
    {
      children: "About and Work",
      section: SECTIONS.ABOUT,
      href: `#${SECTIONS.ABOUT}`,
      onClick: () => handleClick(props.isFrontPage, SECTIONS.ABOUT),
    },
    {
      children: "Writings",
      section: SECTIONS.WRITINGS,
      href: `#${SECTIONS.WRITINGS}`,
      onClick: () => handleClick(props.isFrontPage, SECTIONS.WRITINGS),
    },
    {
      children: "Contact",
      section: SECTIONS.CONTACT,
      href: `#${SECTIONS.CONTACT}`,
      onClick: () => handleClick(props.isFrontPage, SECTIONS.CONTACT),
    },
  ];

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
        >
          Toggle Menu
        </NavButton>
        <Menu items={items} active={isActive} />
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

export { PageHeader };
