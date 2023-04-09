
import { CardItem } from "../../Pages/Characters/styles";
import {ContainerDescription, CardDescriptions } from "../../Pages/Characters/styles";
import {AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

export const CardCharacter = ({character}) => {

  const [ cardDescription, setCardDescription ] = useState(false);
 

  const handleDescription = () => {
    
    cardDescription === false ? setCardDescription(true) : setCardDescription(false);
  }

  return(
    <>
    <CardItem>  
                    <img 
                      onClick={() => handleDescription()}
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={`Foto do ${character.name}`} />

                    <div className="container-name">  
                    <span>{character.name}</span>
                    
                    
                    </div>
    </CardItem>



{cardDescription &&
  <ContainerDescription >
    <CardDescriptions >
                      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                      
                      <div className="descriptions">
                          <button 
                              type="button" 
                              onClick={() => handleDescription()}>
                              <AiOutlineClose />
                          </button>
                          <h2>{character.name}</h2>
                          <span>{character.description}</span>

                      </div>
    </CardDescriptions>
    </ContainerDescription>
}
   
    </>
  )
}