import { useState, useEffect } from "react";
import { Container, ContainerDescription, CardDescriptions, CardItens, ButtonCar, More, SearchContent  } from "./styles";
import api from "../../Services/api";
import { BsFillCartCheckFill, BsPlus, BsDash } from "react-icons/bs";
import { SearchComics} from "../../Components/Search/SearchComics";
import { useCallback } from "react";
import { Link } from "react-router-dom";




export const Comics = () => {

  const [comics, setComics ] = useState([]);
  const [ comicsDescription, setComicsDescription ] = useState(false);
  const [ cartComics, setCartComics ] = useState(false);
  const [ acountCartComics, setAcountCartComics ] = useState(0);
  
  const handleDescriptionComics = () => {
    comicsDescription === false ? setComicsDescription(true) : setComicsDescription(false);
  }

  const handleCartComics = () => {
    setCartComics(true);
    
  }

  const addAcountCartComics = () => {
    setAcountCartComics(acountCar + 1);
  }

  const removeAcountCartComics = () => {
    setAcountCartComics(acountCar - 1);
    if(acountCar === 1) {
      setCartComics(false);
    }
  }

  

  useEffect(() => {
    api
      .get('/comics')
      .then( response => {
        setComics(response.data.data.results);
        
      })
      .catch(err => console.log(err));
  }, []);

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
                    <span>{comic.title}</span>
                    
                    
                      
                    <button 
                            className="car"
                            type="button">
                            <BsDash onClick={removeAcountCartComics} /> <BsFillCartCheckFill /> <BsPlus onClick={() => {handleCartComics(), addAcountCartComics()}} />
                    </button>
               
            </CardItens>

    {comicsDescription && 
            <ContainerDescription >
              
                  <CardDescriptions  >
                      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                      
                      <div className="descriptions">
                          <button 
                              type="button" 
                              onClick={handleDescriptionComics}>
                              X
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

    {cartComics &&  
      <Link className="linkTo" to="/carrinho">
        <ButtonCar>
          <div className="countCar">
            {acountCartComics}
          </div><BsFillCartCheckFill />
          </ButtonCar>
      </Link>}
    </>
  )
}