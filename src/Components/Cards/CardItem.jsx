
import { CardItens } from "./styles"

export const CardItem = ({ name, img, onclick}) => {


  return(
 <CardItens onClick={onclick}>
  <img src={img} />
  <p>{name}</p>
 </CardItens>

  )
}