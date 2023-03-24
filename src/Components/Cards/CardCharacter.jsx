import { Container } from "./styles"
import { CardItem } from "./CardItem"
import { useState } from "react";
import { ContainerDescription } from "./styles";
import { CardDescription } from "./CardDescription";

export const CardCharacter = () => {

  const [ cardDescription, setCardDescription ] = useState(false);

  const handleDescription = () => {
    cardDescription === false ? setCardDescription(true) : setCardDescription(false);
  }

  return(
    <Container>
      <CardItem img="https://avatars.githubusercontent.com/u/68675374?v=4" name="Sandro" onclick={handleDescription} />
         { cardDescription &&
            <ContainerDescription>
              <CardDescription 
                close={() => setCardDescription(false)}
                name="Sandro Fernandes" img="https://avatars.githubusercontent.com/u/68675374?v=4" description="Desenvolvedor Front-end, com conhecimento em HTML, Javascript, CSS, ReactJS, NodeJS, Git e Github "/>
            </ContainerDescription> }
          
    </Container>
  )
}