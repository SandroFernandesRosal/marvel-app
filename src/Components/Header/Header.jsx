import { Container } from "./styles";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import {GiHamburgerMenu} from "react-icons/gi";
import Logo from '../../IMG/Marvel-Comics-logo.png';
import {AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = ({handleChangeTheme, theme}) => {
  const [ menu, setMenu ] = useState(false);
  const [ icon, setIcon ] = useState(false);
  

const handleMenu = () => {
  menu === false ? setMenu(true) : setMenu(false);
}

const changeIcon = () => {
  icon === false? setIcon(true) : setIcon(false);
}

  return(
    <>
    <Container>
       
       <Link to="/">
         <img src={Logo} alt="Logo" className="logo"/>
       </Link>
       
       <button 
         type="button"
         className="button-theme" 
         onClick={() => {handleChangeTheme(); changeIcon()} }> 
         {icon === false ? <BsFillSunFill className="sun" /> : <BsFillMoonFill className="moon"/> }
       </button>
       
       <button 
         tapy="button" 
         onClick={handleMenu} 
         className="menu">
         {menu ===false ?<GiHamburgerMenu /> : <AiOutlineClose />}
       </button>

    </Container>
    {menu && <MenuMobile handleMenu={handleMenu} /> }
    </> 
    
  )
}