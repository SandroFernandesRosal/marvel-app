import { Container } from "./styles";
import { Characters } from "../Characters/Characters";



export const Home = ({characters, setCharacters, handleAddItemToCart, cart, cartComics }) => {
  
  return(
    <Container>
      
      <Characters characters={characters} setCharacters={setCharacters} handleAddItemToCart={handleAddItemToCart}  cart={cart} cartComics={cartComics} /> 
      
    </Container>
  )
}