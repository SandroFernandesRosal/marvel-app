import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Pages/Home/Home";
import { Car } from "../Pages/Car/Car";


export const AppRoutes = ({handleChangeTheme, theme}) => {



  return(
   <BrowserRouter>
      <Header handleChangeTheme={handleChangeTheme} theme={theme} />
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Car />} path="/carrinho" />
            
          </Routes>
      <Footer />
   </BrowserRouter>
  )
}