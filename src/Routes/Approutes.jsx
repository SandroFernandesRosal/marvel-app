import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Pages/Home/Home";


export const AppRoutes = ({handleChangeTheme}) => {



  return(
   <BrowserRouter>
      <Header handleChangeTheme={handleChangeTheme} />
          <Routes>
            <Route element={<Home />} path="/" exact />
          </Routes>
      <Footer />
   </BrowserRouter>
  )
}