import { ButtonCar } from "./styles";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartButton = ({ cartComics }) => {
  return(
    <Link className="linkTo" to="/carrinho">
      <ButtonCar>    
       {cartComics.length > 0  ?
          <>
              <p className="cartnumber">{cartComics.length} </p>
              <p>{cartComics.length > 1 ? "Quadrinhos" : "Quadrinho"}</p>

              

              

         </> : null
    }


          
          <BsFillCartCheckFill />
          </ButtonCar>
          </Link>
  )
}