import { CardDescriptions } from "./styles";
import { ContainerDescription } from "./styles";

export const CardDescription = ({character, handleDescription}) => {

  return(
    <ContainerDescription >
              
              <CardDescriptions key={character.id} >
                  <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                  <div className="descriptions">
                    <button type="button" onClick={handleDescription}>X</button>
                    <h2>{character.name}</h2>
                    <p>{character.description}</p>
                  </div>
              </CardDescriptions>
              
            </ContainerDescription>
  )
}