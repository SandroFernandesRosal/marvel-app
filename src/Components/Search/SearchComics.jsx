import api from "../../Services/api";
import { useState, useEffect } from "react";
import { SearchComic } from "./styles";

export const SearchComics = ({setComics}) => {

  const [searchComics, setSearchComics] = useState('')
 
 useEffect(() => {

      api
      .get(`/comics?titleStartsWith=${searchComics}`)
      .then(response =>  {
         setComics(response.data.data.results);
        })
      .catch(err => console.log(err));
    }, [searchComics])

  return(
    
      <SearchComic className="searchcomics"
          name="search"
          type="text"
          placeholder="Pesquise seu personagem"
          value={searchComics}
          onChange={e => setSearchComics(e.target.value)}
          
        />

    
  )
}