import styled from "styled-components";
import logo from "../assets/logo.png";
import { useState } from "react";
import ModalMenu from "./ModalMenu";
import Search from "./Search";
import LinkBtns from "./LinkBtns";
import ToggleThemeBtn from "./ToggleThemeBtn";
import SetCurrency from "./SetCurrency";

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
        <SearchMenuContainer className="display-none">
          {/* SEARCH BAR */}
          <Search />
          {/* Set Currency */}
          <SetCurrency />
          {/* TOGGLE THEME */}
          <ToggleThemeBtn />
        </SearchMenuContainer>
        {/* HAMBURGER MENU on Small screen*/}
        <HamburgerIconContainer onClick={handleMenuClick}>
          <HamburgerIconCheckbox type="checkbox" />
          <div>
            <span></span>
            <span></span>
          </div>
        </HamburgerIconContainer>

        {/* Modal Menu */}
        <ModalMenu toggleMenu={toggleMenu} />
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
  width: 100%;
  background-color: ${({ theme }) => theme.navbarBackground};
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
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  background-color: ${({ theme }) => theme.navbarBackground};
`;

const HamburgerIconContainer = styled.div`
  z-index: 20;
  margin-top: 2px;
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 50px;
  transform: scale(1.25);
  div {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 22px;
    height: 12px;
  }
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--grey-400);
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

    &:first-of-type {
      top: 0;
    }
    &:last-of-type {
      bottom: 0;
    }
  }

  &.active {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }
      &:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
    }
  }

  /* hide on big screen */
  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerIconCheckbox = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  z-index: 2;
  -webkit-touch-callout: none;
  position: absolute;
  opacity: 0;

  &:checked + div {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }
      &:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
    }
  }
`;
