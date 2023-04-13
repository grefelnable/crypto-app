import styled from "styled-components";
import { ReactComponent as ToggleIcon } from "../assets/toggle-icon.svg";

const ToggleThemeBtn = () => {
  return (
    <ThemeBtn>
      <StyledToggleIcon />
    </ThemeBtn>
  );
};
export default ToggleThemeBtn;

const ThemeBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.5em;
  background-color: var(--grey-800);
  padding: 7px 10px;
`;

const StyledToggleIcon = styled(ToggleIcon)`
  fill: var(--grey-200);
  height: 25px;
  width: 25px;
`;
