import { useState} from "react";
import { Container, More, SearchContent} from "./styles";
import api from "../../Services/api";

import { Search } from "../../Components/Search/Search";
import { useCallback } from "react";

import { CardCharacter } from "../../Components/Cards/CardCharacter";
import { CartButton } from "../../Components/CartButton/CartButton";




export const Characters = ({characters, setCharacters, cartComics}) => {

  const [ cardDescription, setCardDescription ] = useState(false);
 

  const handleDescription = () => {
    cardDescription === false ? setCardDescription(true) : setCardDescription(false);
  }



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
      

      <Container>

      <SearchContent>
        <Search setCharacters={setCharacters}/>
      </SearchContent>
            
      {characters.map((character) => {
          return( 
                  
              <CardCharacter 
                key={character.id}
                character={character}
                handleDescription={handleDescription}  
                cardDescription={cardDescription}
                
              />
              
            )
            
          }
        )
      }

      </Container>
                <More onClick={handleMore}> Mais Personagens </More>

      {cartComics.length > 0 ? <CartButton  cartComics={cartComics} /> : null }
</>
  )
}