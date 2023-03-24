import { createGlobalStyle } from "styled-components";

export const GloballStyles = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  
}

body, html {
background-color: ${({ theme }) => theme.colors.secundaryBg};
color: ${({ theme }) => theme.colors.primaryTextColor};
font-family: 'Roboto', sans-serif;
}

body::-webkit-scrollbar {
  width: 10px;
  
}

body::-webkit-scrollbar-track {
  background-color: gray; 
  border-radius: 10px;
  
}

body::-webkit-scrollbar-thumb {
  
  background-color:  red;
  border-radius: 10px;
  border: 3px solid gray;
  
}
`