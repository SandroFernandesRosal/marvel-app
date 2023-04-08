import { Container } from "./styles";
import { Characters } from "../Characters/Characters";



export const Home = ({characters, setCharacters, handleAddItemToCart, car, cart, cartComics}) => {
  
  return(
    <Container>
      
      <Characters characters={characters} setCharacters={setCharacters} handleAddItemToCart={handleAddItemToCart} car={car} cart={cart} cartComics={cartComics}  /> 
      
    </Container>
  )
}