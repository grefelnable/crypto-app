import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkBtns = () => {
  return (
    <BtnGroup>
      <NavLink
        id="btn-group"
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
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
    background-color: var(--primary-700);
    padding: 0.5em 1em;
    border-radius: 0.5em;
    transition: var(--transition);
  }
  a:hover {
    background-color: var(--primary-500);
  }
`;
