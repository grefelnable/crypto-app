import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DropDownContent = ({ toggleMenu }) => {
  return (
    <Container style={{ display: `${toggleMenu ? "" : "none"}` }}>
      <NavLink
        to="/"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        Coins
      </NavLink>
      <NavLink
        to="/portfolio"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        Portfolio
      </NavLink>
    </Container>
  );
};
export default DropDownContent;

const Container = styled.div`
  background-color: var(--grey-800);
  border-radius: 0.5em;
  box-shadow: var(--shadow-4);
  position: absolute;
  padding: 1em 2em;
  padding-left: 1em;
  right: 1.5em;
  top: 3.5em;
  z-index: 10;
  animation: growOut 250ms ease-in-out forwards;

  /* animation keyframes */
  @keyframes growOut {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  a {
    color: var(--grey-300);
    display: block;
    transition: var(--transition);
    letter-spacing: var(--letterSpacing);
    text-transform: uppercase;
  }
  a:hover {
    color: var(--primary-500);
  }
`;
