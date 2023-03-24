import { CardDescriptions } from "./styles";

export const CardDescription = ({name, img, description, close}) => {

  return(
    <CardDescriptions>
      <img src={img} />
      <div className="descriptions">
        <button type="button" onClick={close}>X</button>
        <h2>{name}</h2>
        <h3>{description}</h3>
      </div>
    </CardDescriptions>
  )
}