import styled from "styled-components";
import logo from "../assets/crypto-logo.png";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger-menu.svg";

const Navbar = () => {
  const handleMenuClick = () => {
    console.log("clicked");
  };
  return (
    <Nav>
      <SectionCenter>
        <LogoContainer>
          <img src={logo} alt="crypto logo by grefel" className="img" />
        </LogoContainer>
        <SearchMenuContainer>
          <SearchContainer>
            <input type="text" placeholder="Search" />
            <i>
              <SearchIcon />
            </i>
          </SearchContainer>
          <HamburgerIconContainer onClick={handleMenuClick}>
            <HamburgerIcon />
          </HamburgerIconContainer>
        </SearchMenuContainer>
        {/* Dropdown menu */}
        <DropdownContent>
          <a href="#">Coins</a>
          <a href="#">Portfolio</a>
        </DropdownContent>
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

const SearchContainer = styled.form`
  border: none;
  position: relative;
  input {
    color: var(--grey-500);
    background-color: var(--grey-900);
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 2.5rem;
    border: 1px solid var(--grey-600);
    border-radius: 1rem;
  }
  input::placeholder {
    color: var(--grey-500);
  }
  /* search icon */
  i {
    stroke: var(--grey-500);
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    left: 15px;
  }
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

const DropdownContent = styled.div`
  background-color: var(--grey-700);
  position: absolute;
  padding: 1em 0.75em;
  right: 1.5em;
  top: 3.5em;
  z-index: 10;

  a {
    color: white;
    display: block;
  }
`;
