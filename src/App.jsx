
import { ThemeProvider } from "styled-components";
import { GloballStyles } from "./Themes/GlobalStyles";
import CartProvider from "./Context/Cart";
import { AppRoutes } from "./Routes/Approutes";
import usePersistedState from "./Hooks/usePersistedState";
import dark from "./themes/dark";
import light from "./themes/light";
import { useState } from "react";



function App() {
  const [ theme, setTheme ] = usePersistedState('theme', dark);

  

  const handleChangeTheme = () => {
    
    setTheme(theme.title === 'dark' ? light : dark);
    
  }


  
  return (
    <ThemeProvider theme={theme}>
        <CartProvider>
            <GloballStyles/>
              
            <AppRoutes handleChangeTheme={handleChangeTheme} theme={theme} />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App;
