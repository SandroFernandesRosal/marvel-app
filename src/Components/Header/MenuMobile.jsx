import { Menu } from "./styles";
import { Link } from "react-router-dom";

export const MenuMobile = ({ menu, handleMenu }) => {

  return(
    <Menu>
      
      <ul >
        <Link to="/"> <li onClick={handleMenu}>Charactes</li> </Link>
        <Link to="/comics"> <li onClick={handleMenu}>Comics</li> </Link>
        <Link to="/carrinho"> <li onClick={handleMenu}>Meu Carrinho</li> </Link>
        <Link to="/carrinho"> <li onClick={handleMenu}>Minhas Compras</li> </Link>
      
      </ul>
    </Menu>
  )
}