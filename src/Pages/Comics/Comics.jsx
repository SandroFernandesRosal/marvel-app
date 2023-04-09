import { useState} from "react";
import { Container, ContainerDescription, CardDescriptions, CardItens, More, SearchContent  } from "./styles";
import api from "../../Services/api";
import { BsFillCartCheckFill, BsPlus, BsDash } from "react-icons/bs";
import { SearchComics} from "../../Components/Search/SearchComics";
import { useCallback } from "react";

import {AiOutlineClose} from "react-icons/ai";
import { CartButton } from "../../Components/CartButton/CartButton";





export const Comics = ({comics, setComics, handleComicsAddItemToCart, cart, cartComics }) => {
 const [ comicsDescription, setComicsDescription ] = useState(false);
  
  
  
  const handleDescriptionComics = () => {
    comicsDescription === false ? setComicsDescription(true) : setComicsDescription(false);
  }

  

  const handleMoreComics = useCallback( async () => {
    try {
      const offset = comics.length;
      const response = await api.get('/comics', {
        params: {
          offset,
        },
      });

      setComics([... comics, ... response.data.data.results]);
    } 
   catch(err) {
        console.log(err);
    }
  }, [comics]);



  return(
    <>
    <SearchContent>
    <SearchComics setComics={setComics}/>
    </SearchContent>
    

    <Container>
    
    {comics.map(comic => {
        return( 
<>
            <CardItens key={comic.id}  >
                    <img 
                      onClick={handleDescriptionComics}
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt={`Foto do ${comic.name}`} />
                    
                    
                    <div className="container-title">
                    <span>{comic.title}</span>
                    
                    
                    <button 
                            className="car"
                            type="button" onClick={() => {handleComicsAddItemToCart(comic.thumbnail, comic.title, comic.prices )}}>
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
                          <h2>{comic.title}</h2>
                          <span>{comic.description}</span>

                      </div>
                  </CardDescriptions>
              
              </ContainerDescription>
              }
              
</>
              )
         })}


    </Container>
    <More onClick={handleMoreComics}> Mais Personagens</More>
  
  {cartComics.length > 0 ? <CartButton cart={cart} cartComics={cartComics} /> : null }
    
</>
  )
}