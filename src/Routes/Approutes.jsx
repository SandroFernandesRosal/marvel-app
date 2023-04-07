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
  const [cart, setCart ] =useState([]);
  const [ car, setCar ] = useState(false);
  const [ acountCar, setAcountCar ] = useState(0);

  const [comics, setComics ] = useState([]);
  const [cartComics, setCartComics ] = useState([]);

function handleAddItemToCart(name, thumbnail) {
  const itemObject = { name, thumbnail };
  setCart([...cart, itemObject]);
  setCar(true);
  setAcountCar(acountCar + 1);
}

function handleComicsAddItemToCart(title, thumbnail) {
  const itemObject = { title, thumbnail };
  setCartComics([...cartComics, itemObject]);
  setCar(true);
  setAcountCar(acountCar + 1);
 
}

function handleRemoveItemFromCart(index) {
  const filteredCart = cart.filter(
    (cartItem) => cart.indexOf(cartItem) !== index);
  setCart(filteredCart);
  setAcountCar(acountCar - 1);
  
  if(acountCar === 1) {
    setCar(false);
  }

  if (acountCar === -1) {
    setAcountCar(0);
  }
  
}

function handleRemoveComicsFromCart(index) {
  const filteredCartComics = cartComics.filter(
    (cartItem) => cartComics.indexOf(cartItem) !== index);
  setCartComics(filteredCartComics);
  setAcountCar(acountCar - 1);
  
  if(acountCar === 1) {
    setCar(false);
  }

  if (acountCar === -1) {
    setAcountCar(0);
  }
  
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
            <Route element={<Home characters={characters} setCharacters={setCharacters} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} car={car} setCar={setCar} acountCar={acountCar} setAcountCar={setAcountCar} />} path="/" exact />
            <Route element={<Comics comics={comics} setComics={setComics} handleComicsAddItemToCart={handleComicsAddItemToCart} car={car} setCar={setCar} acountCar={acountCar} setAcountCar={setAcountCar} />} path="/comics" />
            <Route  element={<Cart cart={cart} handleRemoveItemFromCart={handleRemoveItemFromCart} cartComics={cartComics} handleRemoveComicsFromCart={handleRemoveComicsFromCart} />} path="/carrinho" />
            
          </Routes>
      <Footer />
   </BrowserRouter>
  )
}