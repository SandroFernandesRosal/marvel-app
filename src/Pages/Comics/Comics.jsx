import { Container, More, SearchContent  } from "./styles";
import api from "../../Services/api";
import { SearchComics} from "../../Components/Search/SearchComics";
import { useCallback } from "react";
import { CardComics } from "../../Components/Cards/CardComics";
import { CartButton } from "../../Components/CartButton/CartButton";


export const Comics = ({comics, setComics, handleComicsAddItemToCart, cart, cartComics }) => {


  

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
    
    {comics.map(comic => 

            <CardComics
              key={comic.id}
              comic={comic}
              handleComicsAddItemToCart={handleComicsAddItemToCart} 
              />

              )
         }


    </Container>
    <More onClick={handleMoreComics}> Mais Personagens</More>
  
  {cartComics.length > 0 ? <CartButton cart={cart} cartComics={cartComics} /> : null }
    
</>
  )
}