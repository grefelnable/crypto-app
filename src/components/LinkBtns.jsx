import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkBtns = () => {
  return (
    <BtnGroup>
      <StyledNavLink active="active" to="/">
        Coins
      </StyledNavLink>
      <StyledNavLink active="active" to="/portfolio">
        Portfolio
      </StyledNavLink>
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
  color: ${({ theme }) => theme.text};
  box-shadow: var(--shadow-1);
  padding: 0.5em 1em;
  border: 1px solid ${({ theme }) => theme.backgroundVariant};
  border-radius: 0.5em;
  transition: var(--transition);

  /* active className */
  &.${(props) => props.active} {
    background-color: ${({ theme }) => theme.backgroundVariant};
  }
`;
