import { ButtonCar } from "./styles";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartButton = ({ cartComics, totalPrice }) => {

  return(

    <Link className="linkTo" to="/carrinho">
      <ButtonCar>    
        {cartComics.length > 0  ?
            <>
                <div className="hq">
                <p className="cartnumber">{cartComics.length} </p>
                <p>{cartComics.length > 1 ? "Quadrinhos" : "Quadrinho"}</p>    
                </div>
            </> : null
        }

        <BsFillCartCheckFill />

        <p>Total: R$ {totalPrice}</p>
        </ButtonCar>
    </Link>
  )
}