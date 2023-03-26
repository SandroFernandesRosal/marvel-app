import { useState, useEffect } from "react";
import { Container, ContainerDescription, CardDescriptions, CardItens } from "./styles";
import { CardItem } from "./CardItem";
import { CardDescription } from "./CardDescription";
import api from "../../Services/api";

export const CardCharacter = () => {

  const [characters, setCharacters ] = useState([]);
  const [ cardDescription, setCardDescription ] = useState(false);
  const [ search, setSearch ] = useState('');
 
 

  const handleDescription = () => {
    cardDescription === false ? setCardDescription(true) : setCardDescription(false);
  }

  const filteredCharacters = search.length > 0
        ? characters.filter(character => character.name.includes(search)) : [];


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
     <input
          name="search"
          type="text"
          placeholder="Pesquise seu personagem"
          value={search}
          onChange={e => setSearch(e.target.value)}
          
        />
    
    
    <Container>
     
        { search.length > 0 ? (
          <>
           {filteredCharacters.map(character => {
            return( 
               <CardItem key={character.id} character={character} handleDescription={handleDescription} />
              )
            })} 
          </>
        ) : ( 
          <>
            {characters.map(character => {
              return( 
                <>
                 <CardItem key={character.id} character={character} handleDescription={handleDescription} />
                 {cardDescription && <CardDescription character={character} handleDescription={handleDescription}/>}
                 </>
              )
            })}
         </>
       )}
  
     
      
    
      
    </Container>
    </>
  )
}