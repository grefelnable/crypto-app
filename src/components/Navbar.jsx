import styled from "styled-components";
import logo from "../assets/crypto-logo.png";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger-menu.svg";
import { useState } from "react";
import DropDownContent from "./DropDownContent";
import Search from "./Search";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuClick = () => {
    return setToggleMenu(!toggleMenu);
  };
  return (
    <Nav>
      <SectionCenter>
        {/* LOGO */}
        <LogoContainer>
          <img src={logo} alt="crypto logo by grefel" className="img" />
        </LogoContainer>
        <SearchMenuContainer>
          {/* SEARCH BAR */}
          <Search />
          {/* HAMBURGER MENU */}
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
  height: 55px;
`;

const LogoContainer = styled.div`
  width: 100px;
`;

const SectionCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;

const SearchMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--grey-900);
`;

const HamburgerIconContainer = styled.i`
  margin-top: 6px;
  cursor: pointer;

  /* hide on big screen */
  @media (min-width: 768px) {
    display: none;
  }
`;
