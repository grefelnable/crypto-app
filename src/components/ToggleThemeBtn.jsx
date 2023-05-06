import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as ToggleIcon } from "../assets/toggle-icon.svg";
import { toggleTheme } from "../redux/theme/themeSlice";

const ToggleThemeBtn = () => {
  const theme = useSelector((state) => state.theme);
  // initialize dispatch variable
  const dispatch = useDispatch();

  // toggle btn
  const handleToggleClick = () => {
    const themeMode = theme === "dark" ? "light" : "dark";
    dispatch(toggleTheme(themeMode));
  };
  return (
    <ThemeBtn onClick={handleToggleClick}>
      <StyledToggleIcon />
    </ThemeBtn>
  );
};
export default ToggleThemeBtn;

const ThemeBtn = styled.button`
  cursor: pointer;
  box-shadow: var(--shadow-1);
  border: none;
  border-radius: 0.5em;
  background-color: ${({ theme }) => theme.toggleBtn};
  padding: 7px 10px;
  transition: var(--transition);

  /* media query for small screens */
  @media screen and (max-width: 768px) {
    padding: 4px 7px;
  }
`;

const StyledToggleIcon = styled(ToggleIcon)`
  fill: var(--grey-300);
  height: 25px;
  width: 25px;

  /* media query for small screens */
  @media screen and (max-width: 768px) {
    height: 20px;
  }
`;
