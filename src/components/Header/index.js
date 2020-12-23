import React, { useState } from "react";
import styled from "styled-components";
import { Cross as Hamburger } from "hamburger-react";
import { color } from "../../shared/styles";
import { Heading1 } from "../Typography/index";

const HeaderStyled = styled.header`
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  display: grid;
  grid-template-columns:
    [full-start] minmax(2rem, 1fr)
    [main-start] minmax(0, 110rem) [main-end]
    minmax(2rem, 1fr) [full-end];
  position: fixed;

  > * {
    grid-column: main;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    align-items: center;
    border: 1px solid ${color.primary};
    color: ${color.lightest};
    display: flex;
    font-size: 2rem;
    line-height: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    text-align: center;
    text-transform: uppercase;

    strong {
      color: ${color.primary};
    }
  }
`;

const Nav = styled.nav`
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s;

  a {
    color: #fff;
    display: block;
    padding: 1rem 0;
    text-align: center;
  }

  &.open {
    max-height: 500px;
  }

  &.close {
  }
`;

const Header = ({ heading1, subheading }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderStyled>
      <div>
        <Heading1 heading1={heading1} subheading={subheading} />
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#ffffff"
          direction="right"
          label="Show menu"
        />
      </div>
      <Nav className={isOpen ? "open" : "closed"}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
