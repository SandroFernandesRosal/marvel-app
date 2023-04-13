import { Container, More, SearchContent} from "./styles";
import api from "../../Services/api";
import { Search } from "../../Components/Search/Search";
import { useCallback } from "react";
import { CardCharacter } from "../../Components/Cards/CardCharacter";
import { CartButton } from "../../Components/CartButton/CartButton";
import { BsPlusSquare } from 'react-icons/bs'

export const Characters = ({characters, setCharacters, cartComics}) => {

  const handleMore = useCallback( async () => {
    try {
      const offset = characters.length;
      const response = await api.get('/characters', {
        params: {
          offset,
        },
      });

      setCharacters([... characters, ... response.data.data.results]);
    } 
   catch(err) {
        console.log(err);
    }
  }, [characters]);

return(

<>    
  <Container style={{height: characters.length === 0 ? "100vh" : null}} >

      <SearchContent>
        <Search setCharacters={setCharacters}/>
      </SearchContent>
            
      {characters.map((character) => 
                  
              <CardCharacter 
                key={character.id}
                character={character}
               />  
            )
      }

      <More onClick={handleMore}> 
        <div className="icon">
        <BsPlusSquare /></div> 
        <div className="more-description"><h5>Mais Personagens</h5></div>
      </More>
  </Container>

     
      {cartComics.length > 0 ? <CartButton  cartComics={cartComics} /> : null }
</>
  )
}