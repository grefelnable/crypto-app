import styled from "styled-components";
import logo from "../assets/crypto-logo.png";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger-menu.svg";
import { useState } from "react";
import DropDownContent from "./DropDownContent";
import Search from "./Search";
import LinkBtns from "./LinkBtns";
import ToggleThemeBtn from "./ToggleThemeBtn";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuClick = () => {
    return setToggleMenu(!toggleMenu);
  };

  return (
    <Nav>
      <SectionCenter>
        <LogoBtnsContainer>
          {/* LOGO */}
          <LogoContainer>
            <img src={logo} alt="crypto logo by grefel" className="img" />
          </LogoContainer>
          {/* links to different page on bigger screen */}
          <LinkBtns />
        </LogoBtnsContainer>
        <SearchMenuContainer>
          {/* SEARCH BAR */}
          <Search />
          {/* TOGGLE THEME */}
          <ToggleThemeBtn />
          {/* HAMBURGER MENU on Small screen*/}
          <HamburgerIconContainer onClick={handleMenuClick}>
            <HamburgerIcon />
          </HamburgerIconContainer>
        </SearchMenuContainer>
        {/* DROPDOWN CONTENT */}
        <DropDownContent toggleMenu={toggleMenu} />
      </SectionCenter>
    </Nav>
  );
};
export default Navbar;

// CSS

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 65px;
`;

const SectionCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;

const LogoBtnsContainer = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 100px;
`;

const SearchMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.body};
  // to make smooth transition on theme change
  transition: var(--transition);
`;

const HamburgerIconContainer = styled.i`
  margin-top: 6px;
  cursor: pointer;

  /* hide on big screen */
  @media (min-width: 768px) {
    display: none;
  }
`;
