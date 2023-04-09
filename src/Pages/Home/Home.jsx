import { Container } from "./styles";
import { Characters } from "../Characters/Characters";



export const Home = ({characters, setCharacters, cartComics }) => {
  
  return(
    <Container>
      
      <Characters characters={characters} setCharacters={setCharacters} cartComics={cartComics} /> 
      
    </Container>
  )
}