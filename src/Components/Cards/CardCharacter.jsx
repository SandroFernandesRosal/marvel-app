import { BsFillCartCheckFill, BsPlus, BsDash } from "react-icons/bs";
import { CardItem } from "../../Pages/Characters/styles";
import {ContainerDescription, CardDescriptions } from "../../Pages/Characters/styles";
import {AiOutlineClose} from "react-icons/ai";

export const CardCharacter = ({character, handleDescription, cardDescription, handleAddItemToCart, handleRemoveItemFromCart}) => {

  

  return(
    <>
    <CardItem>
                    <img 
                      onClick={() => handleDescription()}
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={`Foto do ${character.name}`} />

                    <div className="container-name">  
                    <span>{character.name}</span>
                    
                      
                    <button className="car" type="button" onClick={() => handleAddItemToCart(character.name, character.thumbnail)}>
                      
                      <BsFillCartCheckFill  />
                     
                    </button>
                    </div>
    </CardItem>



{cardDescription &&
  <ContainerDescription >
    <CardDescriptions key={character.id}>
                      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                      
                      <div className="descriptions">
                          <button 
                              type="button" 
                              onClick={handleDescription}>
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