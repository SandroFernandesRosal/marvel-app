import { Container } from "./styles"

export const Header = ({handleChangeTheme}) => {

  return(
    <Container>
       
       <div>LOGO</div>
       
       <button onClick={handleChangeTheme} >Mudar tema</button>

    </Container>
      
    
  )
}