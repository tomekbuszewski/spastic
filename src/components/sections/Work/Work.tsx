/**
 * @author tomekbuszewski
 * @since 2020-02-10 12:48:38
 */

import * as React from "react";
import styled, { css } from "styled-components";

import { Section, Grid as BaseGrid, Heading } from "@ui/Atoms";
import { BaseSection } from "@components/sections";
import { gridElement } from "@ui/helpers";

const Grid = styled(BaseGrid)`
  display: block;

  ${props => props.theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const WorksWrapper = styled.div`
  overflow: hidden;
  position: relative;

  ${props => props.theme.breakpoints.desktop} {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-template-columns: repeat(10, 1fr);
    min-width: 2876px;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      z-index: 10;
    }

    &:before {
      left: 1150px;
      width: 1150px;
      height: 100%;
      background: var(--body);
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 862.5px;
      width: 288px;
      pointer-events: none;
      background: linear-gradient(
        to right,
        hsla(0, 0%, 99.2%, 0) 0%,
        hsla(0, 0%, 99.2%, 0.013) 8.1%,
        hsla(0, 0%, 99.2%, 0.049) 15.5%,
        hsla(0, 0%, 99.2%, 0.104) 22.5%,
        hsla(0, 0%, 99.2%, 0.175) 29%,
        hsla(0, 0%, 99.2%, 0.259) 35.3%,
        hsla(0, 0%, 99.2%, 0.352) 41.2%,
        hsla(0, 0%, 99.2%, 0.45) 47.1%,
        hsla(0, 0%, 99.2%, 0.55) 52.9%,
        hsla(0, 0%, 99.2%, 0.648) 58.8%,
        hsla(0, 0%, 99.2%, 0.741) 64.7%,
        hsla(0, 0%, 99.2%, 0.825) 71%,
        hsla(0, 0%, 99.2%, 0.896) 77.5%,
        hsla(0, 0%, 99.2%, 0.951) 84.5%,
        hsla(0, 0%, 99.2%, 0.987) 91.9%,
        hsl(0, 0%, 99.2%) 100%
      );
    }
  }
`;

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  position: relative;
  overflow: hidden;
  transition: ${props =>
    `${props.theme.animations.med} transform ${props.theme.animations.easing}`};
  grid-template-columns: 1fr 1fr;

  ${props => props.theme.breakpoints.desktop} {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-template-columns: repeat(10, 1fr);
    min-width: 2876px;
  }
`;

const Position = styled.li`
  padding: 0;
  margin: 0;
  ${gridElement};
`;

const Nav = styled.div`
  display: none;
  ${gridElement};

  ${props => props.theme.breakpoints.desktop} {
    display: block;
  }
`;

const NavButton = styled.button<{ active: boolean }>`
  font-size: 2rem;
  outline: 0;
  background: 0;
  font-weight: 800;
  border: 0;
  padding: 0;
  color: var(--section-exp-extra);
  cursor: pointer;
  transition: ${props =>
    `${props.theme.animations.short} opacity ${props.theme.animations.easing}`};
  opacity: ${props => (props.active ? 1 : 0.5)};

  &:first-of-type {
    margin-right: 2rem;
  }

  &:active,
  &:focus {
    outline: 0;
  }
`;

export const WorkSection = ({ name }: BaseSection) => {
  const [position, setPosition] = React.useState<number>(0);

  return (
    <Section centered name={name} id={name}>
      <Grid>
        <Heading full section={name}>
          Work Experience<u>.</u>
        </Heading>
        <Nav>
          <NavButton
            active={position < 7}
            onClick={() => position < 7 && setPosition(pos => pos + 1)}
          >
            prev
          </NavButton>
          <NavButton
            active={position > 0}
            onClick={() => position > 0 && setPosition(pos => pos - 1)}
          >
            next
          </NavButton>
        </Nav>
        <WorksWrapper>
          <Wrapper style={{ transform: `translateX(-${position * 287.5}px)` }}>
            <Position>1</Position>
            <Position>2</Position>
            <Position>3</Position>
            <Position>4</Position>
            <Position>5</Position>
            <Position>6</Position>
            <Position>7</Position>
            <Position>8</Position>
            <Position>9</Position>
            <Position>10</Position>
          </Wrapper>
        </WorksWrapper>
      </Grid>
    </Section>
  );
};
