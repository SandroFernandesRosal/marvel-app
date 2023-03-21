import { createGlobalStyle } from "styled-components";
import Themes from ".";

export const GloballStyles = createGlobalStyle `
body {
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.textColor};
}
`