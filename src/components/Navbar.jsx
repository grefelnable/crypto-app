import styled from "styled-components";
import logo from "../assets/crypto-logo.png";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger-menu.svg";

const Navbar = () => {
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
          <i>
            <HamburgerIcon />
          </i>
        </SearchMenuContainer>
      </SectionCenter>
    </Nav>
  );
};
export default Navbar;

// CSS

const Nav = styled.nav`
  border: 2px solid magenta;
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
  i {
    stroke: var(--grey-500);
  }
`;
