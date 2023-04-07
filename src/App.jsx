
import { ThemeProvider } from "styled-components";
import { GloballStyles } from "./Themes/GlobalStyles";
import { AppRoutes } from "./Routes/Approutes";
import usePersistedState from "./Hooks/usePersistedState";
import { dark } from "./Themes/dark";
import { light } from "./Themes/light";


function App() {
  const [ theme, setTheme ] = usePersistedState('theme', dark);
  

  const handleChangeTheme = () => {
    
    setTheme(theme.title === 'dark' ? light : dark);
    
  }

  return (
    
    <ThemeProvider theme={theme}>
        
            <GloballStyles/>
              
            <AppRoutes handleChangeTheme={handleChangeTheme} theme={theme} />
      
    </ThemeProvider>
   
  )
}

export default App;
