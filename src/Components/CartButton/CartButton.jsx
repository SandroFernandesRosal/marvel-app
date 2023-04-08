import { ButtonCar } from "./styles";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartButton = ({cart, cartComics}) => {
  return(
    <Link className="linkTo" to="/carrinho">
      <ButtonCar>    
       {cartComics.length > 0 &&
          <div className="cartitems">
              <p className="cartnumber">{cartComics.length} </p>
              {cartComics.length > 1 ? "Quadrinhos" : "Quadrinho"}

              <p>e</p>

              {cart.length > 0 &&
            <>
              <p className="cartnumber">{cart.length}</p>
              <p>{cart.length > 1 ? "Personagens" : "Personagem"} </p>
              
            </>
            }
            
         </div>
    }
          
          <BsFillCartCheckFill />
          </ButtonCar>
          </Link>
  )
}