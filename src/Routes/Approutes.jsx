import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Cart } from "../Pages/Cart/Cart";
import { Comics } from "../Pages/Comics/Comics";
import api from "../Services/api";
import { useState, useEffect } from "react";
import { Characters } from "../Pages/Characters/Characters";


export const AppRoutes = ({handleChangeTheme, theme}) => {
  const [characters, setCharacters ] = useState([]);
  const [comics, setComics ] = useState([]);
  const [cartComics, setCartComics ] = useState([]);
  const [loading, setLoading ] = useState(true);

function handleComicsAddItemToCart(thumbnail, title, prices) {
  const itemObject = {thumbnail, title, prices};
  setCartComics([...cartComics, itemObject]);
}

function handleRemoveComicsFromCart(index) {
  const filteredCartComics = cartComics.filter(
    (cartItem) => cartComics.indexOf(cartItem) !== index);
  setCartComics(filteredCartComics);
}

const totalPrice = cartComics.reduce((acc, current) => acc + current.prices[0].price, 0);

  useEffect(() => {
    api
      .get('/characters')
      .then( response => {
        setCharacters(response.data.data.results);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get('/comics')
      .then( response => {
        setComics(response.data.data.results);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return(
   <BrowserRouter>
      <Header handleChangeTheme={handleChangeTheme} theme={theme} />
          <Routes>

          <Route element={
              <Comics 
                  comics={comics} 
                  setComics={setComics} 
                  handleComicsAddItemToCart={handleComicsAddItemToCart} 
                  cartComics={cartComics}
                  totalPrice={totalPrice}
                  loading={loading}
                  
              />
              } path="/" exact
            />

          <Route element={
              <Characters 
                  characters={characters} 
                  setCharacters={setCharacters} 
                  cartComics={cartComics}
                  totalPrice={totalPrice}
                  loading={loading}
                  
              />
              } path="/characters" 
            />

            <Route  element={
              <Cart 
                  cartComics={cartComics} 
                  handleRemoveComicsFromCart={handleRemoveComicsFromCart} 
                  setCartComics={setCartComics} 
                  totalPrice={totalPrice}
              />
             } path="/carrinho" 
            />
            
          </Routes>
      <Footer />
   </BrowserRouter>
  )
}