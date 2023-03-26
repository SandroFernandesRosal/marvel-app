import { useState, useEffect } from "react";
import { Container, ContainerDescription, CardDescriptions, CardItens } from "./styles";
import api from "../../Services/api";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Search } from "../Search/Search";



export const CardCharacter = () => {

  const [characters, setCharacters ] = useState([]);
  const [ cardDescription, setCardDescription ] = useState(false);
  
  const handleDescription = () => {
    cardDescription === false ? setCardDescription(true) : setCardDescription(false);
  }


  useEffect(() => {
    api
      .get('/characters')
      .then( response => {
        setCharacters(response.data.data.results);
        
      })
      .catch(err => console.log(err));
  }, []);

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
                          <p>{character.description}</p>
                      </div>
                  </CardDescriptions>
              
              </ContainerDescription>
              }
              
</>
              )
         })}
  
    </Container>
    </>
  )
}