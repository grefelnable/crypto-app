import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkBtns = () => {
  return (
    <BtnGroup>
      <StyledNavLink to="/">Coins</StyledNavLink>
      <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
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
    gap: 0.5em;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: var(--grey-200);
  padding: 0.5em 1em;
  border: 1px solid var(--grey-800);
  border-radius: 0.5em;
  transition: var(--transition);
`;
