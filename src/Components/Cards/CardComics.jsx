import { CardItens, ContainerDescription, CardDescriptions } from "../../Pages/Comics/styles";
import { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";

export const CardComics = ({comic, handleComicsAddItemToCart}) => {

  const [ comicsDescription, setComicsDescription ] = useState(false);
  
  const handleDescriptionComics = () => {
    comicsDescription === false ? setComicsDescription(true) : setComicsDescription(false);
  }

  return(
  <>
       <CardItens key={comic.id}  >
           <img 
              onClick={handleDescriptionComics}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={`Foto do ${comic.name}`} 
            />
                    
                    
            <div className="container-title">
               <span>{comic.title}</span>
                  <button 
                     className="car"
                     type="button" 
                     onClick={() => {handleComicsAddItemToCart(comic.thumbnail, comic.title, comic.prices )}}>
                     <span>R$ {comic.prices[0].price}</span>
                     <BsFillCartCheckFill  /> 
                  </button>
            </div>
        </CardItens>

    {comicsDescription && 
            <ContainerDescription >
                <CardDescriptions  >
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                       <div className="descriptions">
                          <button 
                              type="button" 
                              onClick={handleDescriptionComics}>
                              <AiOutlineClose />
                          </button>
                          <h4>{comic.title}</h4>
                          <span>{comic.description}</span>
                       </div>
                  </CardDescriptions>
            </ContainerDescription>
    }
              
</>
    )
  }