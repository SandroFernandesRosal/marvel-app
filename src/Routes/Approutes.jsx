import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Pages/Home/Home";
import { Cart } from "../Pages/Cart/Cart";
import { Comics } from "../Pages/Comics/Comics";
import api from "../Services/api";
import { useState, useEffect } from "react";


export const AppRoutes = ({handleChangeTheme, theme}) => {
  const [characters, setCharacters ] = useState([]);
  
  const [ car, setCar ] = useState(false);
  

  const [comics, setComics ] = useState([]);
  const [cartComics, setCartComics ] = useState([]);



function handleComicsAddItemToCart(thumbnail, title, prices) {
  const itemObject = {thumbnail, title, prices};
  console.log(itemObject);
  setCartComics([...cartComics, itemObject]);
  
  
 
}



function handleRemoveComicsFromCart(index) {
  const filteredCartComics = cartComics.filter(
    (cartItem) => cartComics.indexOf(cartItem) !== index);
  setCartComics(filteredCartComics);
  
  
}


  useEffect(() => {
    api
      .get('/characters')
      .then( response => {
        setCharacters(response.data.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get('/comics')
      .then( response => {
        setComics(response.data.data.results);
        
      })
      .catch(err => console.log(err));
  }, []);

  return(
   <BrowserRouter>
      <Header handleChangeTheme={handleChangeTheme} theme={theme} />
          <Routes>
            <Route element={
              <Home 
                  characters={characters} 
                  setCharacters={setCharacters} 
                  
                  cartComics={cartComics}
              />
              } path="/" exact
            />

            <Route element={
              <Comics 
                  comics={comics} 
                  setComics={setComics} 
                  handleComicsAddItemToCart={handleComicsAddItemToCart} 
                  
                  cartComics={cartComics}
              />
              } path="/comics" 
            />

            <Route  element={
              <Cart 
                  
                  
                  cartComics={cartComics} 
                  handleRemoveComicsFromCart={handleRemoveComicsFromCart} 
                  
                  setCartComics={setCartComics} 
                  setCar={setCar} 
              />
             } path="/carrinho" 
            />
            
          </Routes>
      <Footer />
   </BrowserRouter>
  )
}