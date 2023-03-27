import { useState, useEffect } from "react";
import { Container, ContainerDescription, CardDescriptions, CardItens } from "./styles";
import api from "../../Services/api";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Search } from "../Search/Search";
import { useCallback } from "react";



export const CardCharacter = () => {

  const [characters, setCharacters ] = useState([]);
  const [ cardDescription, setCardDescription ] = useState(false);
  
  const handleDescription = () => {
    cardDescription === false ? setCardDescription(true) : setCardDescription(false);
  }


  useEffect(() => {
    api
      .get('/characters/')
      .then( response => {
        setCharacters(response.data.data.results);
        
      })
      .catch(err => console.log(err));
  }, []);

  const handleMore = useCallback( async () => {
    try {
      const offset = characters.length;
      const response = await api.get('characters', {
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
        
    {characters.map(character => {
              return( 
<>
            <CardItens key={character.id}  onClick={handleDescription}>
                      <img 
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={`Foto do ${character.name}`} />
                      <span>{character.name}</span>
                      
                      <button className="car" type="button"> <BsFillCartCheckFill /></button>
               
            </CardItens>

    {cardDescription && 
            <ContainerDescription >
              
                  <CardDescriptions  >
                      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                      
                      <div className="descriptions">
                          <button type="button" onClick={handleDescription}>X</button>
                          <h2>{character.name}</h2>
                          <span>{character.description}</span>

                      </div>
                  </CardDescriptions>
              
              </ContainerDescription>
              }
              
</>
              )
         })}
     
    </Container>
    <button className="more" onClick={handleMore}> Mais Personagens</button>
    </>
  )
}