/**
 * @author tomekbuszewski
 * @since 2020-02-10 12:48:38
 */

import * as React from "react";
import styled, { css } from "styled-components";

import { Section, Grid as BaseGrid, Heading, Paragraph } from "@ui/Atoms";
import { BaseSection } from "@components/sections";
import { gridElement } from "@ui/helpers";
import { theme } from "@ui";

interface IWorkPosition {
  position: string;
  place: string;
  time: string;
}

const Grid = styled(BaseGrid)`
  display: block;

  ${theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const WorksWrapper = styled.div`
  overflow: hidden;
  position: relative;

  ${theme.breakpoints.desktop} {
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
      height: 100%;
    }

    &:before {
      left: 1150px;
      width: 1150px;
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

      @media (prefers-color-scheme: dark) {
        background: linear-gradient(
          to right,
          hsla(0, 0%, 0%, 0) 0%,
          hsla(0, 0%, 0%, 0.013) 8.1%,
          hsla(0, 0%, 0%, 0.049) 15.5%,
          hsla(0, 0%, 0%, 0.104) 22.5%,
          hsla(0, 0%, 0%, 0.175) 29%,
          hsla(0, 0%, 0%, 0.259) 35.3%,
          hsla(0, 0%, 0%, 0.352) 41.2%,
          hsla(0, 0%, 0%, 0.45) 47.1%,
          hsla(0, 0%, 0%, 0.55) 52.9%,
          hsla(0, 0%, 0%, 0.648) 58.8%,
          hsla(0, 0%, 0%, 0.741) 64.7%,
          hsla(0, 0%, 0%, 0.825) 71%,
          hsla(0, 0%, 0%, 0.896) 77.5%,
          hsla(0, 0%, 0%, 0.951) 84.5%,
          hsla(0, 0%, 0%, 0.987) 91.9%,
          hsl(0, 0%, 0%) 100%
        );
      }
    }
  }
`;

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  overflow: hidden;
  transition: ${theme.animations.med} transform ${theme.animations.easing};
  grid-template-columns: 1fr 1fr;

  ${theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
    display: grid;
  }

  ${theme.breakpoints.desktop} {
    grid-template-columns: repeat(10, 1fr);
    width: 2876px;
  }
`;

const Position = styled.li`
  padding: 0;
  margin: 0 0 3rem 0;
  ${gridElement};

  &:last-of-type {
    margin-bottom: 0;
  }

  ${theme.breakpoints.desktop} {
    margin: 0;
  }
`;

const PositionName = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--section-exp-lead);
  display: flex;
  flex-flow: column;
  align-content: start;

  span {
    color: var(--section-exp-text);
  }

  time {
    color: var(--section-exp-text);
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: auto;
  }

  ${theme.breakpoints.desktop} {
    font-size: 3rem;
    margin-bottom: 0;

    time {
      font-size: 2rem;
    }
  }

  ${theme.breakpoints.desktop} {
    min-height: 18rem;
    text-align: right;
  }
`;

const data: IWorkPosition[] = [
  {
    position: "React Team Leader",
    place: "TVN",
    time: "2020.02 – ongoing",
  },
  {
    position: "Lead Front-end Developer",
    place: "Batmaid",
    time: "2019.02 – 2019.12",
  },
  {
    position: "Area Lead / Senior Developer",
    place: "4finance",
    time: "2018.05 –2019.02",
  },
  {
    position: "Senior Front-end Developer",
    place: "zety / interviewme",
    time: "2017.08 – 2018.05",
  },
  {
    position: "Team Leader / Senior Developer",
    place: "parkiet.com / rp.pl",
    time: "2016.06 – 2017.08",
  },
  {
    position: "Front-end Developer",
    place: "Ars Thanea / syzygy",
    time: "2015.09 – 2016.06",
  },
  {
    position: "Front-end Developer",
    place: "radiozet.pl",
    time: "2014.09 – 2015.09",
  },
];

const Nav = styled.div`
  display: none;
  ${gridElement};

  ${theme.breakpoints.desktop} {
    display: block;
    min-width: 287.5px;
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
  cursor: ${props => (props.active ? "pointer" : "not-allowed")};
  transition: ${theme.animations.short} opacity ${theme.animations.easing};
  opacity: ${props => (props.active ? 1 : 0.5)};

  &:first-of-type {
    margin-right: 2rem;
  }

  &:active,
  &:focus {
    outline: 0;
  }
`;

const LinkHolder = styled(Paragraph)`
  grid-column-start: 1;
  grid-column-end: 12;

  &:last-of-type {
    margin: 4rem 0 0;
  }

  ${theme.breakpoints.tablet} {
    &:last-of-type {
      margin: 4rem 0 0;
    }
  }

  ${theme.breakpoints.desktop} {
    &:last-of-type {
      margin: 9rem 0 0;
    }
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
            active={position < 4}
            disabled={position === 4}
            onClick={() => position < 4 && setPosition(pos => pos + 1)}
          >
            prev
          </NavButton>
          <NavButton
            active={position > 0}
            disabled={position === 0}
            onClick={() => position > 0 && setPosition(pos => pos - 1)}
          >
            next
          </NavButton>
        </Nav>
        <WorksWrapper>
          <Wrapper style={{ transform: `translateX(-${position * 287.5}px)` }}>
            {data.map(item => (
              <Position key={item.place}>
                <PositionName>
                  {item.position}
                  <span>at {item.place}</span>
                  <time>{item.time}</time>
                </PositionName>
              </Position>
            ))}
          </Wrapper>
        </WorksWrapper>
        <LinkHolder section={name}>
          <a href="" download><span>Get my .pdf résumé</span></a>
        </LinkHolder>
      </Grid>
    </Section>
  );
};
