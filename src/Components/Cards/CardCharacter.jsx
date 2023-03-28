import { useState, useEffect } from "react";
import { Container, ContainerDescription, CardDescriptions, CardItens, ButtonCar } from "./styles";
import api from "../../Services/api";
import { BsFillCartCheckFill, BsPlus, BsDash } from "react-icons/bs";
import { Search } from "../Search/Search";
import { useCallback } from "react";
import { Link } from "react-router-dom";



export const CardCharacter = () => {

  const [characters, setCharacters ] = useState([]);
  const [ cardDescription, setCardDescription ] = useState(false);
  const [ car, setCar ] = useState(false);
  const [ acountCar, setAcountCar ] = useState(0);
  
  const handleDescription = () => {
    cardDescription === false ? setCardDescription(true) : setCardDescription(false);
  }

  const handleCar = () => {
    setCar(true);
    
  }

  const addAcountCar = () => {
    setAcountCar(acountCar + 1);
  }

  const removeAcountCar = () => {
    setAcountCar(acountCar - 1);
    if(acountCar === 1) {
      setCar(false);
    }
  }

  

  useEffect(() => {
    api
      .get('/characters')
      .then( response => {
        setCharacters(response.data.data.results);
        
      })
      .catch(err => console.log(err));
  }, []);

  const handleMore = useCallback( async () => {
    try {
      const offset = characters.length;
      const response = await api.get('/characters', {
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
            <CardItens key={character.id}  >
                    <img 
                      onClick={handleDescription}
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={`Foto do ${character.name}`} />
                    <span>{character.name}</span>
                    
                      
                    <button 
                            className="car"
                            type="button">
                            <BsDash onClick={removeAcountCar} /> <BsFillCartCheckFill /> <BsPlus onClick={() => {handleCar(), addAcountCar()}} />
                    </button>
               
            </CardItens>

    {cardDescription && 
            <ContainerDescription >
              
                  <CardDescriptions  >
                      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                      
                      <div className="descriptions">
                          <button 
                              type="button" 
                              onClick={handleDescription}>
                              X
                          </button>
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
    {car &&  <Link className="linkTo" to="/carrinho"><ButtonCar><div className="countCar">{acountCar}</div><BsFillCartCheckFill /></ButtonCar></Link>}
    </>
  )
}