import { Container, More, SearchContent  } from "./styles";
import api from "../../Services/api";
import { SearchComics} from "../../Components/Search/SearchComics";
import { useCallback } from "react";
import { CardComics } from "../../Components/Cards/CardComics";
import { CartButton } from "../../Components/CartButton/CartButton";
import { BsPlusSquare } from 'react-icons/bs'


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
    <Container style={{height: comics.length === 0 ? "100vh" : null}} >

      <SearchContent>
        <SearchComics setComics={setComics}/>
      </SearchContent>
    
      {comics.map(comic => 

         <CardComics
            key={comic.id}
            comic={comic}
            handleComicsAddItemToCart={handleComicsAddItemToCart} 
         />

       )
      }

   <More onClick={handleMoreComics}> 
        <div className="icon">
        <BsPlusSquare /></div>
        <div className="more-description"><h4>Mais quadrinhos</h4></div>
        
    </More>

    </Container>

    
    {cartComics.length > 0 ? <CartButton cart={cart} cartComics={cartComics} /> : null }
    
</>
  )
}