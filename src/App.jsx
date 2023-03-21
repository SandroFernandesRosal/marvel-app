
import { ThemeProvider } from "styled-components";
import { GloballStyles } from "./Themes/GlobalStyles";
import themes from "./themes"
import { useState } from "react"


function App() {
  const [ theme, setTheme ] = useState('dark');

  function handleChangeTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }
console.log({theme});
  return (
    <ThemeProvider theme={themes[theme]}>
      <GloballStyles/>
        <div className="App">
          <button onClick={handleChangeTheme}>Mudar tema</button>
          Marvel APP
        </div>
    </ThemeProvider>
  )
}

export default App
