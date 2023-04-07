import { Container } from "./styles";
import { Characters } from "../Characters/Characters";



export const Home = ({characters, setCharacters, handleAddItemToCart, car, acountCar}) => {
  
  return(
    <Container>
      
      <Characters characters={characters} setCharacters={setCharacters} handleAddItemToCart={handleAddItemToCart} car={car} acountCar={acountCar}  /> 
      
    </Container>
  )
}