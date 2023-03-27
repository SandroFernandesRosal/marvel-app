import api from "../../Services/api";
import { useState, useEffect } from "react";
import { Container } from "./styles";
export const Search = ({setCharacters}) => {

  const [search, setSearch] = useState('')
  const [extension, setExtension ] = useState('')

useEffect(() => {
  setExtension('?nameStartsWith=')
},[search])
  
 useEffect(() => {

  
      
 
      api
      .get(`/characters${extension}${search}`)
      .then(response =>  {
         setCharacters(response.data.data.results);
        console.log(response.data.data.results)
        })
      .catch(err => console.log(err));
    }, [search])

  return(
    
      
      <Container
          name="search"
          type="text"
          placeholder="Pesquise seu personagem"
          value={search}
          onChange={e => setSearch(e.target.value)}
          
        />

    
  )
}