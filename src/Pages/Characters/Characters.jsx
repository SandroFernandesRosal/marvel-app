import { useState, useEffect } from "react";
import { Container, ContainerDescription, ButtonCar } from "./styles";
import api from "../../Services/api";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Search } from "../../Components/Search/Search";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { CardCharacter } from "../../Components/Cards/CardCharacter";



export const Characters = ({characters, setCharacters, handleAddItemToCart, handleRemoveItemFromCart, car,  acountCar}) => {

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
      <Search setCharacters={setCharacters}/>

      <Container>
            
      {characters.map((character) => {
          return( 
                  
              <CardCharacter 
                key={character.id}
                character={character}
                handleDescription={handleDescription}  
                cardDescription={cardDescription}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
              />
              
            )
          }
        )
      }

      </Container>
                <button 
                  className="more" 
                  onClick={handleMore}>
                  Mais Personagens
                </button>

                {car &&  
                  <Link 
                      className="linkTo"
                      to="/carrinho">
                        <ButtonCar>
                          <div className="countCar">
                            {acountCar}
                          </div>
                        <BsFillCartCheckFill />
                        </ButtonCar>
                  </Link>
                }
</>
  )
}