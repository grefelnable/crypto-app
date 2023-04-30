import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const ModalMenu = ({ toggleMenu }) => {
  // Prevent body from scrolling when sidebar menu is open on small screen
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    }
  }, [toggleMenu]);

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
export default ModalMenu;

const Container = styled.div`
  text-align: center;
  padding-top: 140px;
  height: 100vh;
  border: 1px solid magenta;
  background-color: var(--grey-800);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
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
