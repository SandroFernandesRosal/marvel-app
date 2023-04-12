import { Container} from "./styles";
import { CardItem } from "../Characters/styles";
import { CardItens } from "../Comics/styles";
import { ContainerCharacters, ContainerComics, Buy, ButtonPrice } from "./styles";
import { BsCartXFill } from 'react-icons/bs'
import { useState, useEffect } from "react";
import { CartButton } from "../../Components/CartButton/CartButton";


export const Cart = ({cartComics, handleRemoveComicsFromCart, setCartComics}) => {
 const [buy, setBuy ] = useState(false);

 const totalPrice = cartComics.reduce((acc, current) => acc + current.prices[0].price, 0);
 
 const handleBuy = () => {
  
  if(cartComics.length === 0) {
    alert('Adicione um ítem ao carrinho');
    setBuy(false);
  } 

  if (cartComics.length > 0) {
    setCartComics([]);
    setBuy(true);
  }
  
  if (totalPrice === 0 ) {
    setBuy(false);
    alert('ítem indisponível');
    setCartComics([]);
  }

 }

 useEffect(() => {
  const interval = setInterval(() => {
    setBuy(false);
  }, 3000);
  
  return () => clearInterval(interval);
}, []);

  return(
    <Container style={{height: cartComics.length === 0 ? "100vh" : null}} >

      
 
        {cartComics.length > 0 && 
          <h3>
              <span>{cartComics.length} </span>
              <span>{cartComics.length > 1 ? "Quadrinhos" : "Quadrinho"} </span>
              <span>{cartComics.length > 1 ? "adicionados" : "adicionado"} ao carrinho</span>
          </h3>
        }

 <ContainerComics>

  {cartComics < 1 ? 
      <p>Nenhum Quadrinho adicionado ao carrinho</p> :
   <>
      {cartComics.map((comic, index) => {
        return(
           <CardItens key={index}>
               <img  
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={`Foto do ${comic.title}`} 
                />

                <div className="container-title">

                    <span>{comic.title}</span>
                    <span>R$ {comic.prices[0].price}</span>

                    <div className="buttons">
                        <button onClick={() => handleRemoveComicsFromCart(index)}>
                          <BsCartXFill />
                        </button> 
                    </div>

                </div>
            </CardItens>
           )
        })}
  </>
    }
     
 </ContainerComics> 
  
    
    {buy && <Buy ><h2>Compra finalizada com sucesso </h2> </Buy> }
    
     <ButtonPrice> 
     <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
     <button onClick={() => handleBuy()}>Comprar</button>
     </ButtonPrice>
     
     
</Container>
  )
}