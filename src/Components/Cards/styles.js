import styled from "styled-components";

export const Container = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style: none;

img {
  width: 100%;
}

`
export const CardItens = styled.li` 
border:1px solid red;
height: 250px;
width: 150px;
text-align: center;
border-radius: 5%;
`
export const ContainerDescription = styled.div`
z-index: 999;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
backdrop-filter: blur(8px);
background-color: rgba(100, 100, 100, 0.1);
`

export const CardDescriptions = styled.div`
width: 50vw;

height: 70vh;

border: 1px solid red;
border-radius: 5%;
display: flex;
text-align: center;

img {
 max-width: 50%;

}

.descriptions {
  width:100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

}


`