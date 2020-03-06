/**
 * @author tomek
 * @since 2020-02-17 10:36:53
 */

import * as React from "react";
import styled, { css } from "styled-components";

import { linkWrapperFunc } from "@components";
import { Grid, Logo, NavButton } from "@ui/Atoms";
import { Menu } from "@ui/Molecules";

import { theme } from "@ui";
import { isClient, scrollTo, withTransitions } from "@ui/helpers";
import { SECTIONS } from "@config/sections";

interface Props {
  className?: string;
  isFrontPage: boolean;
  hidden?: boolean;
  scrolled?: boolean;
}

const PageHeader = styled((props: Props) => {
  const [isActive, setActive] = React.useState<boolean>(false);

  const handleClick = (isFront: boolean, section: SECTIONS) => {
    const sectionId = `#${section}`;

    if (isClient) {
      if (isFront) {
        scrollTo(sectionId);
      } else {
        linkWrapperFunc(sectionId);
      }
      setActive(false);
    }
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
  ${withTransitions(["transform", "background", "padding"])};
  height: 6rem;
  display: grid;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 200;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: ${props => props.isFrontPage && "2rem"};
  color: var(--text);
  background: var(--body);
  margin: ${props => props.isFrontPage && "1rem 1rem 0 1rem"};

  &:before {
    ${withTransitions(["opacity", "transform"])};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    transform-origin: bottom;
    background: ${props =>
      props.isFrontPage
        ? `var(--section-${SECTIONS.HERO}-background)`
        : "var(--body)"};
  }

  li {
    ${withTransitions(["line-height"])};
    line-height: 5rem;
  }

  ${props =>
    props.hidden &&
    css`
      transform: translateY(-100%);
    `};

  ${props =>
    props.scrolled &&
    props.isFrontPage &&
    css`
      padding-top: 0;
      background: var(--body);

      &:before {
        transform: scaleY(0);
      }

      li {
        line-height: 5rem;
      }
    `};

  ${theme.breakpoints.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
    margin: ${props => props.isFrontPage && "2rem 2rem 0 2rem"};
  }

  ${theme.breakpoints.desktop} {
    height: 10rem;
    padding-left: 0;
    padding-right: 0;
    margin: ${props => props.isFrontPage && "3rem 3rem 0 3rem"};
  }
`;

export { PageHeader };
