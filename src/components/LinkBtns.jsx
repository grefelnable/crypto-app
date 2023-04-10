import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkBtns = () => {
  return (
    <BtnGroup>
      <NavLink id="btn-group" to="/">
        Coins
      </NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
    </BtnGroup>
  );
};
export default LinkBtns;

const BtnGroup = styled.div`
  /* hide on small screen */
  display: none;
  /* display on bigger screen */
  @media screen and (min-width: 768px) {
    display: flex;
  }
  gap: 0.5em;
  a {
    color: var(--grey-50);
    padding: 0.5em 1em;
    border: 1px solid var(--grey-800);
    border-radius: 0.5em;
    transition: var(--transition);
  }
  a:hover {
    background-color: var(--primary-500);
  }
`;
