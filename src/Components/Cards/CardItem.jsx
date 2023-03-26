
import { CardItens } from "./styles";
import { BsFillCartCheckFill } from "react-icons/bs";


export const CardItem = ({ character, handleDescription}) => {


  return(
    <CardItens  onClick={handleDescription}>
    <img 
     src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
     alt={`Foto do ${character.name}`} />
     <span>{character.name}</span>
     <button className="car" type="button"> <BsFillCartCheckFill /></button>
     
    </CardItens>

  )
}