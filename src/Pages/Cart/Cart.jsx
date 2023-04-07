import { Container} from "./styles";
import { CardItem } from "../Characters/styles";
import { CardItens } from "../Comics/styles";
import { ContainerCharacters, ContainerComics } from "./styles";
import { BsCartXFill } from 'react-icons/bs'


export const Cart = ({cart, handleRemoveItemFromCart, cartComics, handleRemoveComicsFromCart}) => {
 

  return(
    <Container>
     <h3>Personagens adicionados ao carrinho</h3>

     <ContainerCharacters>
     
      {cart < 1 ? <p>Nenhum personagem adicionado ao carrinho</p> :
      <>
      {cart.map( (item, index) => {
        return(
          <CardItem key={index}>
                <img 
                      
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={`Foto do ${item.name}`} />

          <div className="container-name">
                <span>{item.name}</span>
                <button onClick={() => handleRemoveItemFromCart(index)}><BsCartXFill /></button>
          </div>
          </CardItem>
        )
      })}
      </>
      }
</ContainerCharacters>

<h3>Quadrinhos adicionados ao carrinho</h3>

<ContainerComics>

      {cartComics < 1 ? <p>Nenhum Quadrinho adicionado ao carrinho</p> :
      <>
      {cartComics.map((comic, index) => {
        return(
        <CardItens key={index}>
          <img 
                      
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt={`Foto do ${comic.title}`} />
                    <span>{comic.title}</span>
                    <button onClick={() => handleRemoveComicsFromCart(index)}><BsCartXFill /></button>
        </CardItens>
        )
      })}
      
      </>
      
      }
     
     </ContainerComics> 
     
    </Container>
  )
}