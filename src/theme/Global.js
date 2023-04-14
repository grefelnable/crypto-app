import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
 transition:var(--transition);
}
 body{
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  // to make smooth transition on theme change
  transition:var(--transition);
 }
`;
