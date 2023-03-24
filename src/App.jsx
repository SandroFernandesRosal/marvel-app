
import { ThemeProvider } from "styled-components";
import { GloballStyles } from "./Themes/GlobalStyles";

import { AppRoutes } from "./Routes/Approutes";

import dark from "./themes/dark";
import light from "./themes/light";
import { useState } from "react";



function App() {
  const [ theme, setTheme ] = useState(dark);

  

  const handleChangeTheme = () => {
    
    setTheme(theme.title === 'dark' ? light : dark);
    
    
  }


  
  return (
    <ThemeProvider theme={theme}>
      <GloballStyles/>
        
          <AppRoutes handleChangeTheme={handleChangeTheme} />
        
    </ThemeProvider>
  )
}

export default App;
