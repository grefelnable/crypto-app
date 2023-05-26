import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import SetCurrency from "./SetCurrency";
import ToggleThemeBtn from "./ToggleThemeBtn";

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
      {/* add later when working on Portfolio */}
      {/* <NavLink
        to="/portfolio"
        onClick={() => {
          setToggleMenu();
        }}
      >
        Portfolio
      </NavLink> */}
      {/* theme and currency buttons */}
      <ButtonContainer>
        <SetCurrency />
        <ToggleThemeBtn />
      </ButtonContainer>
    </Container>
  );
};
export default ModalMenu;

const Container = styled.div`
  font-size: 1.75rem;
  text-align: left;
  padding-top: 100px;
  padding-left: 2em;
  height: 100vh;
  background: ${({ theme }) => theme.body};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  animation: growDown 250ms ease-in-out forwards;
  transform-origin: top center;

  /* animation keyframes */
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }

  a {
    color: ${({ theme }) => theme.text};
    display: block;
    transition: var(--transition);
    letter-spacing: var(--letterSpacing);
    font-weight: 500;
    text-transform: capitalize;
  }
  a:hover {
    color: var(--primary-500);
  }
`;

const ButtonContainer = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 0.5em;
`;
