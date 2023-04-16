import { Container } from "./styles";
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";

export const Footer = () => {

  return(
    <Container>
      <h4>Desenvolvido por: Sandro Fernandes - 2023</h4>
      <div className="sociais">
        <a href="https://api.whatsapp.com/send?phone=5521969501614" target="blank">
            <FaWhatsapp />
          </a>
 
        <a href="https://www.linkedin.com/in/sandro-fernandes-rosal-33365b240/" target="blank">
          <FaLinkedin />
        </a> 

        <a href="https://github.com/SandroFernandesRosal" target="blank">
        <FaGithub />
        </a>


      </div>
    </Container>
  )
}