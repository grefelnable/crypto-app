import styled from "styled-components";
import logo from "../assets/crypto-logo.png";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <img src={logo} alt="crypto logo by grefel" className="img" />
      </LogoContainer>
      <SearchContainer>
        <input type="text" placeholder="Search" />
        <i>
          <SearchIcon />
        </i>
      </SearchContainer>
    </Nav>
  );
};
export default Navbar;

// CSS

const Nav = styled.nav`
  border: 2px solid magenta;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 100px;
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
