import styled from "styled-components";
import logo from "../assets/crypto-logo.png";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <img src={logo} alt="crypto logo by grefel" className="img" />
      </LogoContainer>
    </Nav>
  );
};
export default Navbar;

// CSS

const Nav = styled.nav`
  border: 2px solid magenta;
  width: 100%;
  height: 50px;
`;

const LogoContainer = styled.div`
  width: 100px;
`;
